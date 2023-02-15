# MCC のホームページ

`Next.js`を React フレームワーク・静的サイトジェネレーターとして用いて、GitHub Pages でホストします。

<https://www.tuatmcc.com>

## 記事の書き方

このリポジトリの Wiki or <https://www.tuatmcc.com/blog/how-to-add-article/> 参照

## メンテの仕方

- `VSCode`の使用を想定しています。
- [ここ](https://github.com/tuatmcc/mcc-website/wiki/%E9%96%8B%E7%99%BA%E3%83%BB%E3%83%A1%E3%83%B3%E3%83%86%E3%83%8A%E3%83%B3%E3%82%B9)を参照
- 何かあれば Issue や Discord で。

## 環境（2023.2 現在）

- `Node.js`: v18.13.0
- `NPM`: v9.3.1
- `Next.js`: v13.1.5
- `TypeScript`: v4.9.4
- `volta`: v1.1.0

## 主なスタック

- `TypeScript`
- `Next.js`: React フレームワーク・静的サイトジェネレーター
- `React`: JavaScript フレームワーク・ライブラリ
- `CSS-Modules`, `Postcss`: CSSライブラリ
- `React Three Fiber`, `three.js`: WebGL ライブラリ
- `Framer Motion`: アニメーションライブラリ
- `unified`, `remark`, `rehype`: Markdown <-> Html
- `ESLint`, `Rome`, `Stylelint`: Linter, Formatter
- `GitHub Actions`: CI/CD

## 押しポイント

- デザイン
- マークダウン記事のカスタマイズ変換
- 開発が盛んな最新のフレームワーク・ライブラリの導入
  - `Next.js v13` 使用 (オールインワン)
  - `ROME` の導入 (Rust 製の爆速 linter・formatter)
  - WebGL ライブラリ `React-Three-Fiber` の利用
- `postcss`,`css-modules`の使用
  - 高い保守性・安定性

## その他

- 2022 年 11 月、MCC の HP リニューアルが決定しました。
- [このリポジトリの wiki](https://github.com/tuatmcc/mcc-website/wiki)にドキュメント的なものを書いています。
- `Figma`というソフトで[デザイン案](https://www.figma.com/file/XTfW4NDafbsoMBCu5lNGkr/MCC-HOME-PAGE?node-id=0%3A1&t=F2uR5Q5TRy6jUzh3-1)を作成したり。
- プライベートな垢で勝手に<https://mcc-website-test.vercel.app>でデモを動かしてみたりしてます。コロコロ変わります。
