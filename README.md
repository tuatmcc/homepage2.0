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

1. Install and setup [**Volta**](https://volta.sh/) (Node.js version manager)

2. Install **Node.js** (JavaScript runtime) `volta install node`

3. Install **corepack** (package manager manager) `volta install corepack`

4. Install **pnpm** (package manager) `corepack up` (Automatically read corepack settings from `package.json`)

5. Install dependencies `pnpm install`

## 開発

- Fetch markdown content `pnpm setup`
- Start development server `pnpm dev`
- Start storybook `pnpm storybook`
- Format code `pnpm fmt`

`some-component`ディレクトリを作成し, その中に`index.tsx`と`styles.module.css`を作成します。(ページの場合は`page.tsx`)

必要に応じて`index.stories.tsx`を作成することで, Storybook でコンポーネントを確認できます。
