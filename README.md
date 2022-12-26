# 農工大マイクロコンピュータークラブのホームページ

- 2022 年 11 月、MCC の HP リニューアルが決定しました。
- `Next.js`で作成、`GitHub Pages`で公開します。
- [Figma](https://www.figma.com/file/XTfW4NDafbsoMBCu5lNGkr/MCC-HOME-PAGE?node-id=0%3A1&t=F2uR5Q5TRy6jUzh3-1)でデザインを考えてたりします。
- 勝手に[mcc-website-test.vercel.app](https://mcc-website-test.vercel.app)でデモを動かしてみたりしてます。コロコロ変わります。

## 記事の書き方

- `develop`ブランチから`feature/tekitou`みたいなブランチを切って、そこで記事を書く。
- `develop`ブランチにPRを出す。

or

- `main`ブランチから切ったほうがいよかったりするかな？

## 概要

- Next.js で SSG を使って、静的サイトを作成しています。
- マークダウンで記事を書きます。
- `css-modules`と`postcss`でスタイルを書きます。
- 凝った見た目は、`React Three Fiber(R3F)`で実装します。
- `main`ブランチに push すると、GitHub Actions でビルドが走り、デプロイされます。

### キーワード

`SSG`, `SPA`, `Jamstack`, `React`, ...

気になったら調べてね～

## 環境（2022.11 現在）

- Node.js: v18.12.1
- Next.js: v13
- TypeScript: v4.9.3

## メンテの仕方

- `VSCode`の使用を想定しています。
- [ここ](https://github.com/tuatmcc/mcc-website/wiki/%E9%96%8B%E7%99%BA%E3%83%BB%E3%83%A1%E3%83%B3%E3%83%86%E3%83%8A%E3%83%B3%E3%82%B9)を参照
- 何かあれば Issue や Discord に。

## リニューアルにあたって

### 引継ぎではなしたこと

- レンタルサーバーは解約したので、ドメインだけ取り続けている状態
- ~~誰がドメイン管理しているんだろう...？~~ 解決
- リニューアルに際し、GitHub リポジトリは新しくつくる。
- フレームワークは Nuxt ではなく Next を使う。
- 記事の更新は、当面はプロジェクトをクローンしてマークダウンで追加。
- いずれ Micro CMS のようなヘッドレス CMS を導入したいけど、アカウント管理・引継ぎが面倒かな。
- GitHub Actions で CD/CI を実装する。
- develop ブランチで開発・編集、master(main)にマージして自動デプロイ
- `yarn`じゃなくて`npm`だけでパッケージ管理する。
- `ESLint`や`Prettier`でフォーマットを統一する

## 開発記録

ここに書くとかさむので、移動しました。

[このリポジトリの wiki](https://github.com/tuatmcc/mcc-website/wiki)
