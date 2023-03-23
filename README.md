[![GitHub Workflow CI Status](https://img.shields.io/github/actions/workflow/status/tuatmcc/homepage2.0/ci.yml?label=ci&style=flat-square)](https://github.com/tuatmcc/homepage2.0/actions/workflows/ci.yml)
[![GitHub Workflow Build Status](https://img.shields.io/github/actions/workflow/status/tuatmcc/homepage2.0/nextjs.yml?&style=flat-square)](https://github.com/tuatmcc/homepage2.0/actions/workflows/nextjs.yml)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/tuatmcc/homepage2.0?style=flat-square)](https://github.com/tuatmcc/homepage2.0)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/tuatmcc/homepage2.0?style=flat-square)](https://github.com/tuatmcc/homepage2.0/commits)

# HOMEPAGE2.0

`Next.js`を React フレームワーク・静的サイトジェネレーターとして用いて、GitHub Pages でホストします。

- ホームページ: <https://www.tuatmcc.com>
- 記事データベース: <https://github.com/tuatmcc/hp-md-content>
- 記事の書き方: <https://www.tuatmcc.com/blog/how-to-add-article>

## メンテの仕方

- [ここ](https://github.com/tuatmcc/homepage2.0/wiki/%E9%96%8B%E7%99%BA%E3%83%BB%E3%83%A1%E3%83%B3%E3%83%86%E3%83%8A%E3%83%B3%E3%82%B9)を参照
- 何かあれば Issue や Discord にお願いします。
- 人員募集中！

## 環境（2023.3 現在）

- `Node.js`: v18.13.0
- `PNPM`: v7.30.0
- `Next.js`: v13.2.4
- `TypeScript`: v5.0.2
- `Volta`: v1.1.1 or `nodenv`

## 主なスタック

- `TypeScript`
- `Next.js`: React フレームワーク・静的サイトジェネレーター
- `React`: JavaScript フレームワーク・ライブラリ
- `CSS-Modules`, `PostCSS`: CSSライブラリ
- `ladle`: コンポーネント開発用ライブラリ 
- `React Three Fiber`, `three.js`: WebGL ライブラリ
- `Framer Motion`: アニメーションライブラリ
- `Contentlayer`: Markdown -> HTML
- `unified`, `remark`, `rehype`: Markdown -> HTML -> React
- `ESLint`, `Rome`, `Stylelint`: Linter, Formatter
- `GitHub Actions`: CI/CD

## 押しポイント

- デザイン
  - デザインソフト `Figma` 使用
- マークダウンによる記事の管理
  - 誰でも記事の更新がしやすい
  - `Markdown` → `HTML` → `React Component` の変換
  - 本体リポジトリへのコミット無し！
- イマドキなフレームワーク・ライブラリの使用
  - フレームワーク `Next.js` の `appDir` 使用
  - WebGL ライブラリ `React-Three-Fiber` の利用
  - `PostCSS` により未来のCSSを先取り
- リンター・フォーマッターの使用
  - コーディングルールにより、コードの質を高める
  - `Rome`: Rust製のlinter/formatterで、`Prettier`等に比べ高速

## その他

- 2022 年 11 月、MCC の HP リニューアルが決定しました。
- [このリポジトリの wiki](https://github.com/tuatmcc/homepage2.0/wiki)にドキュメント的なものを書いています。
- Figmaで[デザイン案](https://www.figma.com/file/XTfW4NDafbsoMBCu5lNGkr/MCC-HOME-PAGE?node-id=0%3A1&t=F2uR5Q5TRy6jUzh3-1)を作成したり。
- プライベートなVercel垢で勝手に<https://mcc-homepage-test.vercel.app>でデモを動かしてみたりしてます。コロコロ変わります。
