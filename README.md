<img align="center" src="./public/images/wordmark-logo.svg" width="100%" >

<p align="center">
  <img src="https://img.shields.io/github/actions/workflow/status/tuatmcc/homepage2.0/ci.yml?branch=develop&label=ci&style=flat-square" >
  <img src="https://img.shields.io/github/actions/workflow/status/tuatmcc/homepage2.0/nextjs.yml?branch=main&style=flat-square)](https://github.com/tuatmcc/homepage2.0/actions/workflows/nextjs.yml">
  <img src="https://img.shields.io/github/languages/code-size/tuatmcc/homepage2.0?style=flat-square)](https://github.com/tuatmcc/homepage2.0">
  <img src="https://img.shields.io/github/commit-activity/m/tuatmcc/homepage2.0?style=flat-square)](https://github.com/tuatmcc/homepage2.0/commits">
</p>

<h1 align="center">HOMEPAGE2.0</h1>

`Next.js`を React フレームワーク・静的サイトジェネレーターとして用いて, GitHub Pages でホストします。

## 関連リンク

- [www.tuatmcc.com](https://www.tuatmcc.com)
- [hp-md-content (記事リポジトリ)](https://github.com/tuatmcc/hp-md-content)
- [記事の書き方](https://www.tuatmcc.com/blog/2023-01-adding-articles)
- [Figma Project](https://www.figma.com/files/project/75955222/Homepage2.0)
- [Wiki](https://github.com/tuatmcc/homepage2.0/wiki)

## メンテの仕方

- [Wiki のこのページ](https://github.com/tuatmcc/homepage2.0/wiki/%E9%96%8B%E7%99%BA%E6%89%8B%E9%A0%86)を参照
- 興味があればいつでも声を掛けてください！いきなり PR 送ったり, Issue 立てたりするのも大歓迎です。
- バグ報告や改善案は Discord のホームページチャンネルに投げてくれて構いません。
- 作業人員募集中！

## 環境（2023.3 現在）

- `Node.js`: v18.15.0
- `pnpm`: v8.1.1
- `Next.js`: v13.3.1
- `TypeScript`: v5.0.2
- `Volta`: v1.1.1 or `nodenv`

## 主なスタック

- `TypeScript`
- `Next.js`: React フレームワーク・静的サイトジェネレーター
- `React`: JavaScript フレームワーク・ライブラリ
- `CSS-Modules`, `PostCSS`: CSS ライブラリ
- `storybook`: コンポーネント開発用ライブラリ
- `React Three Fiber`, `three.js`: WebGL ライブラリ
- `Contentlayer`: Markdown -> HTML
- `next-mdx-remote`, `remark`, `rehype`: Markdown -> HTML -> React
- `ESLint`, `Prettier`, `Stylelint`: Linter, Formatter
- `GitHub Actions`: CI/CD

## ディレクトリ構成

```
.
├── content (md files, clone from hp-md-content)
├── contentlayer.config.js
├── next.config.mjs
├── next.config.mjs.dev
├── next-env.d.ts
├── next-sitemap.config.js
├── out (output dir to host)
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── public
│   └── sitemap, images, etc...
├── README.md
├── scripts (build scripts)
│   ├── dev.sh
│   ├── organizeImage.ts
│   ├── prod.sh
│   └── setup.sh
├── src (main source)
│   ├── app (routing, global state)
│   ├── components (shared components)
│   ├── constants
│   ├── lib
│   ├── styles (global css)
│   └── types (global types)
├── tsconfig.json
```

## コンポーネント開発

`some-component`ディレクトリを作成し, その中に`index.tsx`と`styles.module.css`を作成します。(ページの場合は`page.tsx`)

必要に応じて`index.stories.tsx`を作成することで, Storybook でコンポーネントを確認できます。
