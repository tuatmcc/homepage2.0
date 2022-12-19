---
title: ホームページをリニューアルしました
description: ホームページをリニューアルしました
img: /website-renewal/website-renewal.png
date: 2023-2-3
tags: [dev, web, nextjs]
---

# ホームページをリニューアルしました

## なぜリニューアルしたの？

- 旧サイトは Nuxt.js で作成されていたのに加え、デザインが割と死んでいるため

## どういうシステム？

- Next.js で作成
- デザインは紆余曲折ののち CSS-Modules で作成
- 記事データは Markdown で管理
- unified のプラグインを詰めまくって markdown -> html -> react に変換
- eslint, prettier, stylelint でガッチガチにコードを管理
- GitHub Actions で CI/CD

## 今後の展望

- デザインをもっと良くする。React Three Fiber で超かっこよくするんじゃ～
- ブログの記事をもっと増やす

## その他

- このサイトは GitHub で公開しています。[こちら](https://github.com/tuatmcc/mcc-website)
- wiki も書いてます。
