---
title: ホームページをリニューアルしました
description: ホームページをリニューアルしました
img: /website-renewal/website-renewal.png
date: 2023-2-3
tags: [dev, web, nextjs]
---

# ホームページをリニューアルしました

## なぜリニューアルしたの？

- 旧サイトはNuxt.jsで作成されていたのに加え、デザインが割と死んでいるため

## どういうシステム？

- Next.jsで作成
- デザインは紆余曲折ののちCSS-Modulesで作成
- 記事データはMarkdownで管理
- unifiedのプラグインを詰めまくってmarkdown -> html -> reactに変換
- eslint, prettier, stylelintでガッチガチにコードを管理
- GitHub ActionsでCI/CD

## 今後の展望

- デザインをもっと良くする。React Three Fiber で超かっこよくするんじゃ～
- ブログの記事をもっと増やす

## その他

- このサイトはGitHubで公開しています。[こちら](https://github.com/tuatmcc/mcc-website)
- wikiも書いてます。
