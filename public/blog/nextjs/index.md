---
title: "記事の書き方"
date: "2022-01-05"
tags: ["web", "dev"]
---

# 記事の書き方

基本的なマークダウンの書き方は [Markdown 記法 チートシート - Qiita](https://qiita.com/Qiita/items/c686397e4a0f4f11683d) を参考にしてください。

マークダウンを HTML に変換した後、React に変換してからレンダリングされます。

ちなみに HTML は一切認識されません。無視されます

# 注意点

### コードブロック

以下のように書きます。

````
```python title="blog.py"
print('Hello World')
```
````

```python title="blog.py"
print('Hello World')
```

# 見本

見出しの右にはリンクがつきます。いずれ目次を作ったときとか、ページ内リンクに対応可。

# h1 見出し１

## h2 見出し２

### h3 見出し３

#### h4

##### h5

###### h6

- リスト 1
- リスト 2
- リスト 3
  - リスト 3-1
  - リスト 3-2
    - リスト 3-2-1
    - リスト 3-2-2

1. リスト 1
2. リスト 2
3. リスト 3

- [ ] チェックボックス 1
- [x] チェックボックス 2

_強調(イタリック、english only?)_ **強調(太字)** ~~打消し(del ではなく css の装飾)~~

[外部リンク](https://www.google.com)

[内部リンク](/gallery)

生のリンク`<https://google.com>`と書く

<https://google.com>

脚注[^1]

[^1]: 脚注です

画像

![画像](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)

表

| title                                   | date | tags     |
| --------------------------------------- | ---- | -------- |
| MCC の Web サイトをリニューアルしました | 2022 | web, dev |
| これは表です                            | 2022 | web, dev |
| スタイル忘れました                      | 2022 | web, dev |

> 引用です。スタイル当て忘れました。

`これはインラインコードです` `Font は JetBrains Monoを使用`

python

```python :main.py
# コードブロックです。右上のボタンでコピーできます。
# pythonです。highlight.jsを使用しています
print('1+1は2です' if 1 + 1 == 2 else '1+1は2ではありません')
```

diff

```diff
// diffも普通につかえるです。
- これは削除です
+ これは追加です
```

diff_cpp

```diff_cpp title="main.cpp"
// diff_○○には対応してません。
- for (int i = 0; i < 10; i++) {
-   cout << i << endl;
- }
+ for (int i = 0; i < 10; i++) cout << i << endl;
```

TypeScriptReact

```tsx title="App.tsx"
const App: FC<Props> = ({ children }) => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>これはtsxです</p>
      <p>{children}</p>
    </div>
  );
};
```

数式

```math
$$
L = \frac{1}{2} \rho v^2 S C_L
$$
```

$$
L = \frac{1}{2} \rho v^2 S C_L
$$

emoji

```
:smile: :+1: :tada: :rocket: :metal:
```

:smile: :+1: :tada: :rocket: :metal:
