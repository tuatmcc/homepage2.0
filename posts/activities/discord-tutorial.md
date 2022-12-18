---
title: "Discord Bot チュートリアル"
date: "2022-03-16"
tags: ["dev"]
img: "/random-programing-image-1.jpg"
---

# Discord Bot チュートリアル

こんにちは。B3 の Arc です。2022 年 2 月 18 日に部内で Discord Bot の開発チュートリアルを行いました。当時の資料を元に加筆・修正を加えた物を公開してみます。

# 近頃の Discord Bot 界隈

最初に、近頃の Discord Bot 開発者界隈を取り巻く状況について軽く触れておきます。

## むかし

昔は Bot 開発用の 2 大ライブラリとして、Python 用の[discord.py](https://discordpy.readthedocs.io/en/latest/)と Node.js 用の[discord.js](https://discord.js.org/)がありました。

## 2021 年 8 月 28 日

この日に discord.py の開発終了が[アナウンスされました](https://gist.github.com/Rapptz/4a2f62751b9600a31a0d3c78100287f1)。Discord 公式とのトラブルがあったようです(詳しくはググってね)。後述しますが、_現在は開発が再開されたようです。_

これにより、Discord 公式の REST API の仕様変更などに対応できなくなった discord.py 製 bot は死ぬ運命となりました(結果的にそうならなかったけど)。また、discord.py の後継を名乗るプロジェクトが林立する事態となりました。

Python 界隈がこの有様(だった)ので、このチュートリアルでは discord.js を使っていきます。

## 2022 年 3 月 6 日

……と思っていたら 3 月 6 日に discord.py の開発**再開**が[アナウンスされました](https://gist.github.com/Rapptz/c4324f17a80c94776832430007ad40e6)。 ~~何が何だか分からん~~ 再び 2 大ライブラリ時代に戻るんじゃないかなと思っています。たぶん……

# 環境構築・初期設定

この章では、Discord Bot を作るための環境構築・初期設定を行います。

## 用語集

初めに、基本的な用語について説明しておきます。

- Node.js
- サーバーサイド JavaScript 環境(ブラウザではなくサーバー上で JS を動かすための環境)の一種です。Discord Bot は Node.js 上で動きます。
- パッケージマネージャとして`npm`という物を使います。
- 最新の discord.js(v13)を使うためには、Node v16.6.0 以降が必要です。
- [公式サイト](https://nodejs.org/ja/)
- TypeScript
- JavaScript を静的型付けライクに拡張した言語です。静的型付け最高！
- TypeScript は直接実行することができないため、基本的には`tsc`というコンパイラで JavaScript に変換してから実行します。
- 文法は C や Java などに近い感じです。
- [公式サイト](https://www.typescriptlang.org/)

## Node.js のインストール

[ダウンロードページ](https://nodejs.org/ja/download/)から、Node.js の LTS 版をダウンロード・インストールしてください。

ターミナルで`node --version`を実行した際、`v16.14.0`のように表示されていればインストール成功です。

## プロジェクトディレクトリの作成

適当な名前のディレクトリを作ってください。

次に、ターミナルでディレクトリに移動し、`npm init`を実行してください。色々聞かれますが、とりあえず全て Enter を押せばいいです。

`package.json`が作成されていることを確認してください。

## パッケージのインストール

開発に必要なパッケージをインストールします。次のコマンドを実行してください。

```bash
npm install --save discord.js dotenv typescript @types/node@16 ts-node tsconfig-paths
```

## TypeScript の設定

`npx tsc --init`を実行してください。`tsconfig.json`が生成されれば成功です。

`tsconfig.json`には、TypeScript のコンパイラ(TSC)の設定情報が含まれています。

`tsconfig.json`には設定項目が大量にありますが、中身については省略します。`baseUrl`の項目だけ次のように変えてください。

```json
{
  // ...
  "baseUrl": "./src"
  // ...
}
```

## スクリプトの設定

`package.json`の`"scripts"`の箇所を次のように編集してください。

```json
{
  // ...
  "scripts": {
    "start": "ts-node --files -r tsconfig-paths/register src/index.ts"
  }
  // ...
}
```

これにより、`npm start`で`npx ts-node --files -r tsconfig-paths/register src/index.ts`を実行できるようになりました。

`ts-node`は、`.ts`ファイルを事前コンパイル無しで直接実行するためのパッケージです(正確には JIT コンパイルしているようです)。TypeScript のコードを走らせるには「tsc でコンパイル」→「Node で js を実行」 の 2 ステップを要していましたが、`ts-node`を使うことで 1 ステップに抑えることができます。

いろいろ引数がついていますが、ここでは説明を省略します。気になる方は`tsconfig-paths`などで検索してください。

## Hello World

`src`ディレクトリを作成し、その中に`index.ts`を作成してください。

そして、次のコードをコピペしてください。

```typescript
console.log("Hello World!");
```

最後に、プロジェクトルートに居る状態で`npm start`を実行してください。`Hello World!`と表示されれば成功です！

# Bot の登録・ログイン

この章では、Discord Bot をサーバーに追加した後、Bot をサーバーにログインさせます。

概ね[Discord.js Guide](https://guide.discordjs-japan.org/) v12 版に沿っていますが、現行の v13 に合わせて記述を変更している箇所もあります。

## Bot をサーバーに追加する

Bot をサーバーに追加していきます。最初にテスト用のサーバーを立てておいてください。

### Bot の登録

まずは Bot を Discord に登録します。

1. Discord にログインした状態で、Discord Developer Portal の[Application](https://discord.com/developers/applications/)ページに移動してください。
2. 右上の`New Application`をクリックして、いい感じの名前をつけて`Create`してください。

!['image](/activities/discord-bot-tutorial/create_app.png)

3. 左のメニューから`Bot`をクリックして、`Add Bot -> Yes, do it!`をクリックしてください。`A wild bot has appeared!`みたいなメッセージが表示されれば OK です。

![image](/activities/discord-bot-tutorial/add_bot.png)

### Bot をサーバーに招待

次に、Bot をサーバーに招待します。

1. 左メニューから`OAuth2 -> URL Generator`を開いてください。
2. `SCOPES`の中の`bot`, `applications.commands`にチェックを入れてください。
3. `BOT PERMISSIONS`の中の`Send Messages`にチェックを入れてください。これにより、Bot にメッセージ送信権限が付与されます。他の権限が必要な場合は適宜チェックを増やしてください。

![iamge](/activities/discord-bot-tutorial/permission.png)

4. 下の方にある`Generated URL`をコピーして、Web ブラウザに貼り付けてください。事前に作成したサーバーを選択して、「はい」などのボタンを押してください。
5. Discord クライアント上で、サーバーに Bot が追加されたことを確認してください。

## Bot をサーバーにログインさせる

### 環境変数と dotenv

これから Bot をサーバーにログインさせますが、その前に環境変数について説明しておきます。

Bot をログインさせる際には「トークン」という値が必要になります。この値が外部に流出した場合、他の人が Bot をサーバーにログインさせて、スパムメッセージを送信するなどの悪事を働くことができてしまいます。このため、トークンはソースコードに**埋め込まずに**管理する必要があります(トークンを埋め込んだソースコードを Git に Push したら外部流出したことになります)。

このような機密情報は、実行環境の**環境変数**に設定して、ソースコードから環境変数を読み込む必要があります。しかし、環境変数を設定するのは割とだるいです。

Node では、実行時に`.env`というファイルから環境変数を読み込んで設定する`dotenv`というモジュールがあります。実はこのモジュールは前章でインストールしていました。`.env`ファイルを`.gitignore`に設定することで、機密情報を安全に、便利に扱うことができます。

トークンを`.env`ファイルに保存しておきましょう。`.env`をルートディレクトリに作成して、次の内容を書き込んでください。

```
TOKEN=<Botのトークン>
```

`<Botのトークン>`の箇所を実際の値で置き換えてください。Bot のトークンは次のようにして得ることができます。

1. Developer Portal から前節で作成したアプリケーションを選択し、左メニューの`Bot`を選択します。
2. `TOKEN`という所に`Copy`ボタンがあるのでクリックしてください。トークンがクリップボードにコピーされます。

### ログイン処理の実装

Bot をサーバーにログインさせる処理を書いていきます。

```typescript
// 1: インポート
import * as dotenv from "dotenv";
import { Client, ClientOptions } from "discord.js";

// 2: .envを読み込み、環境変数に登録
dotenv.config();

// 3: クライアントを初期化
const clientOptions: ClientOptions = {
  intents: ["GUILD_MESSAGES", "GUILDS"],
};
const client = new Client(clientOptions);

// 4: ログイン完了時に実行するコールバック関数を登録
client.once("ready", () => {
  console.log("I'm  ready!");
});

// 5: ログイン
client.login(process.env.TOKEN);
```

コードの中身を説明していきます。

#### インポート

使用するクラスなどをインポートします。

#### .env を読み込み、環境変数に登録

`.env`を読み込んで、環境変数に登録します。環境変数へは`process.env.<変数名>`でアクセスすることができます。

#### クライアントを初期化

- `v12`以前と異なり、現行の`v13`では`ClientOptions`が必須になっています。
- `ClientOptions`の`intents`で、どのイベントを Bot が受信するかを制御します。ここでは上記 2 つを指定しておけば良いでしょう。
- 最後にクライアントのインスタンスを作成します。

#### ログイン完了時に実行するコールバック関数を登録

- ログイン完了時に`ready`イベントが発火されます。その時に実行する関数(コールバック関数)を登録しておきます。
- `()=>{...}`という表記は、JS・TS 特有の「アロー関数」という物です。(詳しくはググってね)

#### ログイン

- 環境変数`TOKEN`の値を引数にしてログインします。

### 実行してみる

ここまで書けたら実際に実行してみましょう。

`npm start`を実行して数秒待ってください。次のことが確認できれば成功です！

- コンソールに`I'm ready!`と表示される。
- Discord アプリ上で、登録した Bot がオンラインになっている。

確認できたら、Ctrl+C などで Bot を止めておいてください。

# スラッシュコマンド

この章では、スラッシュコマンドの実装を行います。

この記事を参考にしています: [discord.js でスラッシュコマンド（Slash commands）を使う - Qiita](https://qiita.com/gaato/items/55b32bc4777905ac162a)

## 2 種類のスラッシュコマンド

スラッシュコマンドには「ギルドコマンド」と「グローバルコマンド」の 2 種類があります。

- ギルドコマンド: 特定のサーバーを指定して登録するコマンド。
- グローバルコマンド: Bot が参加している全てのサーバーに登録されるコマンド。

グローバルコマンドは、登録後実際に使えるようになるまで 1 時間ほどかかるようです。このため、本チュートリアルではギルドコマンドを使用します。

## 環境変数の設定

ギルドコマンドを登録するためには、対象サーバーの ID が必要です。`.env`に保存しておきます。

サーバー ID は次の方法で取得することができます。

1. Discord アプリの設定画面を開き、「詳細設定」の「開発者モード」をオンにしておきます。

![](/activities/discord-bot-tutorial/devmode.png)

1. サーバーアイコン上で右クリックして、「ID をコピー」を選択します。サーバー ID がクリップボードにコピーされます。

![](/activities/discord-bot-tutorial/copy_server_id.png')

`.env`に次の項目を追記してください。`<サーバーID>`は実際の値に置き換えてください。

```
SERVER_ID=<サーバーID>
```

## シンプルなコマンド

まず、`pong`というメッセージを送信するだけのシンプルなコマンド`/ping`を作成してみます。

### 環境変数の型定義を記述する

環境変数の型定義ファイルを作っておかないと後々面倒なので、ここで作ってしまいます。

`src`に`@types`ディレクトリを作成して、中に`global.d.ts`を作り、以下の内容を入力してください。

```typescript
declare namespace NodeJS {
  interface ProcessEnv {
    readonly TOKEN: string;
    readonly SERVER_ID: string;
  }
}
```

### コマンドを実装する

実際にコマンドを作っていきます。次のコードを参考にして、`ready`イベントのコールバックを編集し、`interactionCreate`イベントのコールバックを追加してください。`async`キーワードが新しく加わっていることに注意してください。

```typescript
import { ApplicationCommandData, Client, ClientOptions } from "discord.js"; // インポート部分が変わっています

// ...

// ログイン完了時に実行するコールバック関数を登録
client.once("ready", async () => {
  const commands: ApplicationCommandData[] = [
    {
      name: "ping",
      description: "pongと返します。",
    },
  ];
  await client.application?.commands.set(commands, process.env.SERVER_ID);

  console.log("I'm  ready!");
});

// コマンド受信時のコールバック関数を登録
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  if (interaction.commandName === "ping") {
    // pingコマンドが来たら:
    await interaction.reply("pong"); // pongとreplyする
  }
});
```

書けたら`npm start`して、アプリ上でコマンドを使えるかどうか確認してみましょう。

## 引数付きコマンド

引数を受け取るコマンドを作っていきます。ここでは、引数をそのまま出力する`echo`コマンドを作っていきます。

### コマンドの登録

次のコードを参考にして、`commands`に要素を追加してください。引数は`options`プロパティで設定します。

```typescript
const commands: ApplicationCommandData[] = [
  {
    name: "ping",
    description: "pongと返します。",
  },
  {
    name: "echo",
    description: "入力された文字をそのまま返します。",
    options: [
      {
        type: "STRING",
        name: "value",
        description: "文字列",
        required: true,
      },
    ],
  },
];
```

### コマンドの中身を実装

次のコードを参考にして、コマンドの中身を実装してください。引数は`interaction.options.getString()`などで受け取ることができます。

```typescript
if (interaction.commandName === "ping") {
  await interaction.reply("pong");
}
if (interaction.commandName === "echo") {
  const value = interaction.options.getString("value", true); // 引数valueを受け取る
  await interaction.reply(value);
}
```

書けたら`npm start`して、アプリ上でコマンドを使えるかどうか確認してみましょう。

## 遅延応答

「コマンドを受信したら、データベースにアクセスして処理をした後に返信したい」といったケースなど、時間のかかる処理を実装したくなることがあると思います。このような処理をそのまま書いたらどうなるでしょうか？

`ping`コマンドを次のように編集してみます。ここでは 4000 ミリ秒後に"pong"と返信するコードを書いています。

```typescript
if (interaction.commandName === "ping") {
  setTimeout(async () => {
    await interaction.reply("pong");
  }, 4000); // 4000ミリ秒後に"pong"と返信
}
```

`ping`コマンドを実際に実行してみましょう。すると、`アプリケーションが応答しませんでした`などのメッセージが表示されると思います。

実は、スラッシュコマンドは**3 秒以内に返信しないとエラー**になります。

これを回避するため、`deferReply()`, `followUp()`という関数を使います。

```typescript
if (interaction.commandName === "ping") {
  await interaction.deferReply(); // 追加
  setTimeout(async () => {
    await interaction.followUp("pong"); // 変更
  }, 4000); // 4000ミリ秒後に"pong"と返信
}
```

このコードにした上で`ping`コマンドを実行すると、`<bot名>が考え中…`というメッセージが表示された 4 秒後に`pong`と表示されるはずです。意図通りの挙動になりました。

ということで、時間のかかる処理を行う時には、返信を遅延させるために`deferReply()`や`followUp()`を使う必要があります。

詳しくはこのページが参考になります: [reply と deferReply の違い - Discord.js Japan User Group](https://scrapbox.io/discordjs-japan/reply%E3%81%A8deferReply%E3%81%AE%E9%81%95%E3%81%84)

# 分からないことがあったら

分からないことがある時は次のサイトが頼りになります。

- [Discord.js Guide](https://discordjs.guide/#before-you-begin)
- [discord.js Documentation](https://discord.js.org/#/docs/discord.js/stable/general/welcome)
- [Discord.js Japan User Group (Scrapbox)](https://scrapbox.io/discordjs-japan/)
- 日本語 Wiki。やりたいことをここで検索すれば大体出てくる説があります。

# おわり

スラッシュコマンドに対応した Discord Bot を作りました。後はいろいろ工夫して頑張ってください(雑)。
