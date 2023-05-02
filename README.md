[![GitHub Workflow CI Status](https://img.shields.io/github/actions/workflow/status/tuatmcc/homepage2.0/ci.yml?branch=develop&label=ci&style=flat-square)](https://github.com/tuatmcc/homepage2.0/actions/workflows/ci.yml)
[![GitHub Workflow Build Status](https://img.shields.io/github/actions/workflow/status/tuatmcc/homepage2.0/nextjs.yml?branch=main&style=flat-square)](https://github.com/tuatmcc/homepage2.0/actions/workflows/nextjs.yml)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/tuatmcc/homepage2.0?style=flat-square)](https://github.com/tuatmcc/homepage2.0)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/tuatmcc/homepage2.0?style=flat-square)](https://github.com/tuatmcc/homepage2.0/commits)

# HOMEPAGE2.0

`Next.js`を React フレームワーク・静的サイトジェネレーターとして用いて、GitHub Pages でホストします。

- <https://www.tuatmcc.com>
- [記事データベース](https://github.com/tuatmcc/hp-md-content)
- [記事の書き方](https://www.tuatmcc.com/blog/how-to-add-article)
- [デザイン案](https://www.figma.com/file/XTfW4NDafbsoMBCu5lNGkr/MCC-HOME-PAGE?node-id=0%3A1&t=F2uR5Q5TRy6jUzh3-1)
- [ドキュメント(お気持が多分に混ざってます)](https://github.com/tuatmcc/homepage2.0/wiki)

## メンテの仕方

- [Wiki のこのページ](https://github.com/tuatmcc/homepage2.0/wiki/%E9%96%8B%E7%99%BA%E6%89%8B%E9%A0%86)を参照
- 興味があればいつでも声を掛けてください！いきなり PR 送ったり、Issue 立てたりするのも大歓迎です。
- バグ報告や改善案は Discord のホームページチャンネルに投げてくれて構いません。
- 作業人員募集中！

## 環境（2023.3 現在）

- `Node.js`: v18.15.0
- `PNPM`: v8.1.1
- `Next.js`: v13.3.1
- `TypeScript`: v5.0.2
- `Volta`: v1.1.1 or `nodenv`

## 主なスタック

- `TypeScript`
- `Next.js`: React フレームワーク・静的サイトジェネレーター
- `React`: JavaScript フレームワーク・ライブラリ
- `CSS-Modules`, `PostCSS`: CSS ライブラリ
- `ladle`: コンポーネント開発用ライブラリ
- `React Three Fiber`, `three.js`: WebGL ライブラリ
- `Contentlayer`: Markdown -> HTML
- `unified`, `remark`, `rehype`: Markdown -> HTML -> React
- `ESLint`, `Prettier`, `Stylelint`: Linter, Formatter
- `GitHub Actions`: CI/CD

## その他

- 2022 年 11 月、MCC の HP リニューアルが決定しました。
