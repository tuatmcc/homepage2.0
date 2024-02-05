<img align="center" src="./public/images/wordmark-logo.svg" width="100%" >

<p align="center">
  <img src="https://img.shields.io/github/actions/workflow/status/tuatmcc/homepage2.0/ci.yml?branch=develop&label=ci&style=flat-square" >
  <img src="https://img.shields.io/github/actions/workflow/status/tuatmcc/homepage2.0/nextjs.yml?branch=main&style=flat-square)](https://github.com/tuatmcc/homepage2.0/actions/workflows/nextjs.yml">
  <img src="https://img.shields.io/github/languages/code-size/tuatmcc/homepage2.0?style=flat-square)](https://github.com/tuatmcc/homepage2.0">
  <img src="https://img.shields.io/github/commit-activity/m/tuatmcc/homepage2.0?style=flat-square)](https://github.com/tuatmcc/homepage2.0/commits">
</p>

<h1 align="center">HOMEPAGE2.0</h1>

`Next.js`を React フレームワーク・静的サイトジェネレーターとして用いて, GitHub Pages でホストします。

- `TypeScript`
- `Bun`: JavaScript 実行環境 & パッケージマネージャー
- `Next.js`: React フレームワーク・静的サイトジェネレーター
- `React`: JavaScript フレームワーク・ライブラリ
- `CSS-Modules`, `PostCSS`: CSS ライブラリ
- `storybook`: コンポーネント開発用ライブラリ
- `Biome`, `Stylelint`: Linter, Formatter
- `React Three Fiber`, `three.js`: WebGL ライブラリ
- `next-mdx-remote`, `remark`, `rehype`: Markdown -> HTML -> React

## 関連リンク

- [www.tuatmcc.com](https://www.tuatmcc.com)
- [hp-md-content](https://github.com/tuatmcc/hp-md-content)
- [Figma Project](https://www.figma.com/files/project/75955222/Homepage2.0)
- [記事の書き方](https://www.tuatmcc.com/blog/2023-01-adding-articles)

## 環境構築

1. Install and [Bun](https://bun.sh/)

2. Install dependencies and setup for development. `bun install && bun setup`

3. Start development server. `bun dev`

## 開発

- マークダウン記事を取得&パース. `bun setup`
- 開発用サーバーを立てる. `bun dev` コマンド後、ブラウザで `http://localhost:3000` を開く.
- storybook を起動. `bun storybook` コマンド後、ブラウザで `http://localhost:6006` を開く.
- コードフォーマット. `bun fmt`

`app/`以下がそのままウェブサイトのパスになります。詳しくはNext.jsのドキュメントを参照してください。

コンポーネントを作成する際は、コンポーネント名のディレクトリを作成し、その中に`index.tsx`を作成してください.

必要に応じて`index.stories.tsx`を作成することで, Storybook でコンポーネントを確認できます。
