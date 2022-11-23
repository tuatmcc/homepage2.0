# MCC Website

- Next.jsで作り、GitHub Pagesで公開
- コンテンツがどうしても少ないので、アニメーションなど見た目や動きに力を入れたい
- 何も知らない部員が見ても、ある程度理解できるようにしたい

## 概要

- `/pages`以下にtsxファイルを追加。`フォルダ名/ファイル名`がそのままURLでそのページへのパスになる。
- `/components`以下に、各ページに共通する部分などを小分けに入れておき、使いまわす。
- tsxファイルとは、拡張子が`.tsx`で、TypeScriptの中にHTMLを書くようなイメージ。

### キーワード

`SSG`, `SPA`, `JAMStack`, `React`, ...

気になったら調べてね。

## 環境（2022.11現在）

- Node.js: v18.12.1
- Next.js: v13
- TypeScript: v4.9.3

## メンテ

- 後で書きます。
- 何かあればIssueに。

## リニューアルにあたって

### 引継ぎではなしたこと

- リニューアルに際し、GitHubリポジトリは新しくつくる。
- フレームワークはNuxtではなくNextを使う。
- 記事の更新は、当面はプロジェクトをクローンしてマークダウンで追加。
- いずれMicro CMSのようなヘッドレスCMSを導入したいが、アカウント管理・引継ぎが面倒。
- GitHub ActionsでCD/CIを実装する。
- developブランチで開発・編集、master(main)にマージして自動デプロイ
- `yarn`じゃなくて`npm`だけでパッケージ管理する。

### 今のところの方針（変わる可能性あり）

- 阿部寛のようにはしない
- cssのフレームワークは`Chakra UI`を使う
- ある程度形にしてからCD/CIを整える

## 開発記録（備忘録みたいな感じ）

### Next.js プロジェクトを作成した

wsl(Ubuntu)でやってます。IDEとかは使わずVSCodeを使用。

1. `nvm`(`node.js`のバージョン管理ツールの1つ)のアップデート。`apt`で管理できないので忘れがちかも
2. `node.js`のアップデート。`nvm install --lts`
3. 親ディレクトリにて、`npx create-next-app@latest`を実行（Next.js公式HPを参照のこと）
4. プロジェクト名を聞かれる。TypeScriptを使うかと、ESLintを使うかも聞かれるので、両方`Yes`
5. 完了（超らくちん）

`git init`なども自動でされるので、あとはリモートを追加してとりあえず`commit`&`push`!

### Chakra UI を導入した

1. 公式の通り`npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6`を実行。
2. `_app.tsx`を編集

```tsx
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App

```

実際に使うのはまた今度

### ESLint, Prettireの導入・設定

### Next.jsをエクスポートする備え

#### 押さえておくこと

- Next.jsはサーバーを立てるところまでセットになっているフレームワークである。
- GitHub Pagesでは静的なHTMLを表示させることしかできない。（サーバー側の処理はできない）
- Next.jsにはエクスポートといって、Nextのプロジェクトから静的なHTMLを生成できるような機能がある。
- GitHub Pagesでは、この生成した部分だけを公開している。
- エクスポートをすると、Next.jsの一部機能(主にサーバー側の処理がいる部分)が使えない。
