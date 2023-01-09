# 農工大マイクロコンピュータークラブのホームページ

- 2022 年 11 月、MCC の HP リニューアルが決定しました。
- `Next.js`で作成、`GitHub Pages`で公開します。
- [Figma](https://www.figma.com/file/XTfW4NDafbsoMBCu5lNGkr/MCC-HOME-PAGE?node-id=0%3A1&t=F2uR5Q5TRy6jUzh3-1)でデザインを考えてたりします。
- 勝手に[mcc-website-test.vercel.app](https://mcc-website-test.vercel.app)でデモを動かしてみたりしてます。コロコロ変わります。

## 記事の書き方

- `develop`ブランチから`feature/tekitou`みたいなブランチを切って、そこで記事を書く。
- `develop`ブランチに PR を出す。

or

- `main`ブランチから切ったほうがいよかったりするかな？

## 概要

- Next.js で SSG を使って、静的サイトを作成しています。
- マークダウンで記事を書きます。
- `css-modules`と`postcss`でスタイルを書きます。
- 凝った見た目は、`React Three Fiber(R3F)`で実装します。
- `main`ブランチに push すると、GitHub Actions でビルドが走り、デプロイされます。

## 環境（2023.1 現在）

- Node.js: v18.12.1
- NPM: v8.19.2
- Next.js: v13.1.1
- TypeScript: v4.9.4

## メンテの仕方

- `VSCode`の使用を想定しています。
- [ここ](https://github.com/tuatmcc/mcc-website/wiki/%E9%96%8B%E7%99%BA%E3%83%BB%E3%83%A1%E3%83%B3%E3%83%86%E3%83%8A%E3%83%B3%E3%82%B9)を参照
- 何かあれば Issue や Discord で。

## 押しポイント

- デザイン
- マークダウン記事のカスタマイズ変換
- 開発が盛んな最新のフレームワーク・ライブラリの導入
  - `Next.js v13` 使用 (オールインワン過ぎてこれ無しじゃ生きていけない・Rust製コンパイラ)
  - `ROME` の導入 (Rust 製の linter・formatter・爆速)
  - WebGLライブラリ `React-Three-Fiber` の利用
- `postcss`,`css-modules`の使用
  - `sass`はcssの皮をかぶった別物（過激）
  - cssフレームワークは甘え（過激）

## 開発記録

ここに書くとかさむので、移動しました。

[このリポジトリの wiki](https://github.com/tuatmcc/mcc-website/wiki)
