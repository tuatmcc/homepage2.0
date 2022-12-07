import React, { ReactNode } from 'react'
import Image from 'next/image'

import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeReact, { Options as RehypeReactOptions } from 'rehype-react'

import AutoLink, { AutoLinkProps } from '../components/AutoLink/AutoLink'
import Del from '~/components/Del/Del'
import Code from '~/components/Code/Code'
import Pre from '~/components/Pre/Pre'
import Paragraph from '~/components/Paragraph/Paragraph'

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
        a: ({ href, children }: AutoLinkProps) => (
          <AutoLink href={href}>{children}</AutoLink>
        ),
        del: ({ children }) => <Del>{children}</Del>,
        code: ({ children }) => <Code>{children}</Code>,
        pre: ({ children }) => <Pre>{children}</Pre>,
        img: ({ src = '', alt = 'image' }) => (
          <Image
            src={src}
            alt={alt}
            width={640}
            height={480}
            style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
          />
        ),
        p: ({ children }) => <Paragraph>{children}</Paragraph>,
      },
    } as RehypeReactOptions)
    .processSync(html)

  return processor.result
}

export default htmlToReact
