---
title: "MCCのWebサイトをリニューアルしました"
date: "2022"
tags: ["web", "dev"]
---

# マークダウンテスト h1 タグです

## h2 です。実は各見出しタグにはリンクがついています

### h3 です。ちなみに HTML は一切認識されません。無視されます

マークダウンを HTML に変換した後、React に変換してからレンダリングされます。

- リスト 1
- リスト 2
- リスト 3

1. リスト 1
2. リスト 2
3. リスト 3

_強調(イタリック)_ **強調(太字)** ~~打消し(del ではなく css の装飾)~~

[外部リンク](https://www.google.com)

[内部リンク](/)

画像

![画像](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)

| title                                   | date | tags     |
| --------------------------------------- | ---- | -------- |
| MCC の Web サイトをリニューアルしました | 2022 | web, dev |
| これは表です                            | 2022 | web, dev |

> 引用です

`これはインラインコードです`

```python
# pythonです。highlight.jsを使用しています
print('1+1は2です' if 1 + 1 == 2 else '1+1は2ではありません')
```

```diff
diffです
- これは削除です
+ これは追加です
```

```diff_cpp
diff_cppです。diff_○○には対応してません
- for (int i = 0; i < 10; i++) {
-   cout << i << endl;
- }
+ for (int i = 0; i < 10; i++) cout << i << endl;
```

```tsx
// tsxにも対応してるっぽい！
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

数式。対応させたはずなのに...

$$\\frac{1}{2} = \\frac{1}{2}$$

:::note
これは note です
今のところ対応予定はありません
:::
