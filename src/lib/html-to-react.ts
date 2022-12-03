import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeReact, { Options as RehypeReactOptions } from 'rehype-react'
import React from 'react'

import CustomLink, { LinkProps } from '../components/custom-link'

/**
 * useEffect内で使用される。
 * @param html HTML string that is parsed from a markdown post
 * @returns
 */
const htmlToReact = (html: string) => {
  const processor = unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeReact, {
      createElement: React.createElement,
      components: {
        a: ({ href, children }: LinkProps) => CustomLink({ href, children }),
      },
    } as RehypeReactOptions)
    .processSync(html)

  return processor.result
}

export default htmlToReact
