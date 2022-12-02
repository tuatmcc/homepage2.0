import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeReact, { Options as RehypeReactOptions } from 'rehype-react'
import React from 'react'

import { CustomLink, LinkProps } from '../components/custom-link'

const HtmlToReact = (html: string) => {
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

export default HtmlToReact
