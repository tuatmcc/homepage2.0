import { remark } from 'remark'
import html from 'remark-html'

/**
 * Markdown を解析して HTML にして返す
 * @param markdown Markdown ファイル名
 * @returns HTML
 */
const mdToHtml = async (markdown: string) => {
  const result = await remark().use(html).process(markdown)
  console.log(result.toString())
  return result.toString()
}

console.log(mdToHtml('# Hello'))

export default mdToHtml
