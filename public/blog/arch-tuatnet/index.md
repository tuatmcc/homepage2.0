---
title: "Arch Linuxで学内LAN(tuatnet)に接続する"
date: "2023-01-07"
tags: ["btw"]
author: "vm_xeck"
---

## 概要
Arch Linuxで，wpa_supplicantとsystemdを用いてtuatnetに接続する方法を説明します


## 対象
Archｲﾝｽｺしたけどtuatnetに繋がらないよーって人

一応おうちWi-Fiに無線で接続するところからやります


## 準備

### [情報なんとかセンターのサイト](https://www.imc.tuat.ac.jp/info-system0/campusnet/wlan/index.html)でtuatnetについて学ぶ
802.1xとかPEAP/MSCHAPv2とか書いてあります

### 必要なパッケージを用意する
みんな大好きPacmanを駆使してかき集めます
* systemdは入ってるはずなのでそのまま
* wpa_supplicantをインストール
  * 任意でwpa_supplicant_gui(AUR)もインストール
* iwdが入ってる場合はアンインストール
* NetworkManager系が入ってる場合はアンインストール
  * 無効化だけでもいいです
  * systemdの替わりにNMを使うこともできますが，ここでは解説しません


## 知識？

私は初心者なので詳しいことは割愛させて頂きます．
詳しく知りたい方は[この](https://wiki.archlinux.jp/index.php/%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF%E8%A8%AD%E5%AE%9A)[へん](https://wiki.archlinux.jp/index.php/%E3%83%AF%E3%82%A4%E3%83%A4%E3%83%AC%E3%82%B9%E8%A8%AD%E5%AE%9A)を見ると良いんじゃないでしょうか

とにかく，tuatnetに接続するにはDHCPクライアントとDNSクライアントが必要です．
先程用意したパッケージのうち，systemdには[systemd-networkd](https://wiki.archlinux.jp/index.php/Systemd-networkd)と[systemd-resolved](https://wiki.archlinux.jp/index.php/Systemd-resolved)が含まれます．
systemd-networkdはネットワーク設定を管理し，内蔵DHCPクライアントを提供します．
systemd-resolvedはDNSクライアントの役割を果たします．
これらだけでも有線接続は可能ですが，無線で接続するために[wpa_supplicant](https://wiki.archlinux.jp/index.php/Wpa_supplicant)が必要です．

各ソフトウェアについて詳しく知りたい方は，リンク先のArch Wikiを読むのがおすすめです．
記事で無線ネットワークインターフェイスという語が登場しますが，
これは無線接続に使用されるネットワークカードのことです．
次のコマンドを使用することで名前を確認できます(たぶんwlから始まるやつです)．
```bash
$ ip link
```
私のはwlp2s0でした(隙自語)


## 設定

### まず，systemd-networkdを設定してDHCPを有効にします．
`/etc/systemd/network/25-wireless.network`を編集し，次のように書きます．
**以下，`wlp2s0`は自分の無線ネットワークインターフェイス名に置き換えてください．**
Arch Wikiでいうと[ここ](https://wiki.archlinux.jp/index.php/Systemd-networkd#.E7.84.A1.E7.B7.9A.E3.82.A2.E3.83.80.E3.83.97.E3.82.BF)です．
```systemd title="25-wireless.network"
[Match]
Name=wlp2s0

[Network]
DHCP=yes
```
systemd-networkdを起動と同時に有効化(電源を入れた時自動で起動するように設定)します．
次のコマンドを使用します．
```bash
$ sudo systemctl enable --now systemd-networkd
```

### 次にwpa_supplicantを設定します．
[当該記事](https://wiki.archlinux.jp/index.php/Wpa_supplicant#wpa_cli_.E3.81.A7.E6.8E.A5.E7.B6.9A.E3.81.99.E3.82.8B)を見ながらやっていきましょう．
接続にはwpa_cliを使用します(他のでもいいと思います)．
`/etc/wpa_supplicant/wpa_supplicant-wlp2s0.conf`を編集し，次のように書きます．
```systemd title="wpa_supplicant-wlp2s0.conf"
ctrl_interface=/run/wpa_supplicant
update_config=1
```
次のコマンドでwpa_supplicantを起動します．
```bash
$ sudo wpa_supplicant -B -i wlp2s0 -c /etc/wpa_supplicant/wpa_supplicant-wlp2s0.conf
```
いよいよ接続します！
まずはおうちのWi-Fiで試してみましょう．
```bash
$ sudo wpa_cli
```
プロンプトが現れるので操作していきます．スラッシュ以降はコメントなので打たないでください．
```
> scan  // ネットワークをスキャンします

> scan_results  // スキャン結果を表示します　接続したいネットワークを探しましょう

> add_network   // ネットワークを追加します
                // 以降，ここで「0」と表示されたとして話を進めますが，
                // 別の数字が表示された場合はその数字を使ってください

> set_network 0 ssid "YOURSSID"  // YOURSSIDをSSIDで置き換えます
> set_network 0 psk "passphrase"  // passphraseをパスワードで置き換えます

> enable_network 0

> save_config
```
これで`/etc/wpa_supplicant/wpa_supplicant-wlp2s0.conf`に設定が保存されているはずです．

`/etc/wpa_supplicant/wpa_supplicant-wlp2s0.conf`にtuatnet用の設定を追加しましょう．
次の内容を追記します．
Arch Wikiの[この部分](https://wiki.archlinux.jp/index.php/Wpa_supplicant#802.1x.2Fradius)です．
```systemd title="wpa_supplicant-wlp2s0.conf"
network={
    ssid="tuatnet"
    key_mgmt=WPA-EAP
    eap=PEAP
    identity="user_name"
    password="user_password"
    phase2="autheap=MSCHAPV2"
}
```
user_nameをあなたのTUAT-ID，user_passwordをあなたのTUAT-ID用パスワードに置き換えます．
networkブロックが複数になっていますが，これで大丈夫です．

大事なパスワードが書いてあるファイルなので，念のため閲覧権限を絞っておきましょう．
次のコマンドを使います．
```bash
$ sudo chmod 600 /etc/wpa_supplicant/wpausupplicant-wlp2s0.conf
```
それから忘れずにwpa_supplicantのデーモンを起動・有効化しましょう．
インターフェイス名は置き換えてください(定期)
```bash
$ sudo systemctl enable --now wpa_supplicant@wlp2s0
```

### 最後にsystemd-resolvedを起動します．
今回のような単純な目的では特に設定は必要なく，次のコマンドを使用するだけです．
```bash
$ sudo systemctl enable --now systemd-resolved
```
終わりです．お疲れさまでした！


## 終わりに
本記事を書くにあたって，学外の[しゅどぼ](https://twitter.com/_QiToY)に協力してもらいました．
感謝申し上げます

なお，本記事は初心者が書いているので，間違いなどを見つけたらボコボコにしてください．
訂正，質問，その他何でも[筆者Twitter](https://twitter.com/vm_xeck)までお寄せください(ダイマ)
