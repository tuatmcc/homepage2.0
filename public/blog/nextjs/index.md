---
title: "記事の書き方"
date: "2022-01-05"
tags: ["web", "dev"]
---

# 手順

`public/activities`に活動報告の記事を、`public/blog`にその他のマークダウン記事(なんでも)を置いてください。
記事のフォルダを作成し、その中にマークダウンを置いてください。ファイル名は`index.md`にしてください。

記事の先頭に以下のように記述します。

```markdown title="bocchi-the-rock/index.md"
---
title: "ぼっち・ざ・ろっくを鑑賞しました"
description: "ぼっち・ざ・ろっくをみた"
img: "./bocchi-the-rock.webp"
date: "2023-01-03"
tags: [dev, web, nextjs]
author: "Goto Hitori"
---
```

`title`は必須です。`date`も記事並べ替えのために書いてください。

なんらかのブランチからプルリクエストをお願いします。GitHub 上からでもかまいません。この辺はいずれ整えたいですね...

画像を埋め込む際は、`./記事からの相対パス`か`/publicからのパス`, `外部URL`でお願いします。

```
![logo](/mcc-logo.svg)
```

![logo](/mcc-logo.svg)

# マークダウンの書き方

## 見出し

見出しの右にはリンクがつきます。目次(未実装)とか、ページ内リンクに対応できます。

```markdown
# これは h1 の見出しです

## これは h2 の見出しです

### h3~は文字サイズが徐々に小さくなるだけです。h6 まで
```

# これは h1 の見出しです

## これは h2 の見出しです

### h3~は文字サイズが徐々に小さくなるだけです。h6 まで

## リスト

箇条書きには`-`, `+`, `-`, `*`などが使えます。箇条書きの方はネストできます。

```markdown
- リスト１
- リスト２
  - リスト 2-1
  - リスト 2-2

1. 番号付きリスト 1
2. 番号付きリスト 2
```

- リスト１
- リスト２
  - リスト 2-1
  - リスト 2-2

1. 番号付きリスト 1
2. 番号付きリスト 2

## チェックボックス

```markdown
- [ ] チェックボックス 1
- [x] チェックボックス 2
```

- [ ] チェックボックス 1
- [x] チェックボックス 2

## 斜体・強調・打消し

`*`,`**`は`_`,`__`と置き換えられます

```markdown
_Italic 斜体です_

**強調**

~~打消し線（css の装飾）~~
```

_Italic 斜体_

**強調**

~~打消し線（css の装飾）~~

## リンク

```markdown
[外部リンク](https://www.google.com)

[内部リンク](/gallery)

生のリンク: <https://google.com>
```

[外部リンク](https://www.google.com)

[内部リンク](/gallery)

生のリンク: <https://google.com>

## 画像

画像形式はなんでもいいですが、是非新しくて軽い`webp`に変換しましょう！

```markdown
外部 URL
![画像](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)

内部 URL その１
![logo](/mcc-logo.svg)

内部 URL その２
![bocchi](./bocchi.webp)
```

外部 URL
![画像](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)

内部 URL その１
![logo](/mcc-logo.svg)

内部 URL その２
![bocchi](./bocchi.webp)

## 脚注

```markdown
脚注[^1]

[^1]: 脚注です
```

脚注[^1]

[^1]: 脚注です

## 表

スタイル当て忘れました

```markdown
| title        | date | tags     |
| ------------ | ---- | -------- |
| こんにちは   | 2022 | web, dev |
| これは表です | 2022 | web, dev |
```

| title        | date | tags     |
| ------------ | ---- | -------- |
| こんにちは   | 2022 | web, dev |
| これは表です | 2022 | web, dev |

## 引用

```markdown
> 引用です。スタイル当て忘れました。
```

> 引用です。スタイル当て忘れました。

## インラインコード

`これはインラインコードです` `Font は JetBrains Monoを使用`

## コードブロック

タイトルはあってもなくてもいけます。

````markdown title="markdown"
```python title="blog.py"
print('Hello World')
```
````

```python title="blog.py"
print('Hello World')
```

````markdown title="markdown"
```diff
- これは削除です
+ これは追加です
```
````

```diff
- これは削除です
+ これは追加です
```

## 数式

KaTex を使用しています。

```math
$$
L = \frac{1}{2} \rho v^2 S C_L
$$
```

$$
L = \frac{1}{2} \rho v^2 S C_L
$$

## emoji

```markdown
:smile: :+1: :tada: :rocket: :metal:
```

:smile: :+1: :tada: :rocket: :metal:
