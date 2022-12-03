import React, { ReactNode } from 'react'
import Image from 'next/image'

import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeReact, { Options as RehypeReactOptions } from 'rehype-react'
import { Heading, Text, Code, chakra, ChakraProps, useClipboard, List, ListItem, UnorderedList, OrderedList } from '@chakra-ui/react'

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
        a: ({ href, children }: LinkProps) => (
          <CustomLink href={href} color="blue.600">
            {children}
          </CustomLink>
        ),

        h1: ({ children }) => (
          <Heading as="h1" size="xl" my={4} borderBottom='1px' borderStyle='dotted'>
            {children}
          </Heading>
        ),
        h2: ({ children }) => (
          <Heading as="h2" size="lg" my={4}>
            {children}
          </Heading>
        ),
        h3: ({ children }) => (
          <Heading as="h3" size="md" my={4}>
            {children}
          </Heading>
        ),
        h4: ({ children }) => (
          <Heading as="h4" size="sm" my={4}>
            {children}
          </Heading>
        ),
        h5: ({ children }) => (
          <Heading as="h5" size="sm" my={4}>
            {children}
          </Heading>
        ),
        h6: ({ children }) => (
          <Heading as="h6" size="xs" my={4}>
            {children}
          </Heading>
        ),
        p: ({ children }) => <Text fontSize="md" lineHeight='1.5rem'>{children}</Text>,
        del: ({ children }) => (
          <Text as="span" textDecor="line-through">
            {children}
          </Text>
        ),
        code: ({ children }) => <Code colorScheme="gray" my='0.5'>{children}</Code>,
        pre: ({ children }) => {
          return (
            <chakra.pre p='0.5rem' overflow="auto" bgColor="gray.100" my={4}>
              {children}
            </chakra.pre>
          )
        },
        ul: ({ children }) => <UnorderedList spacing={3} my='1.5rem'>{children}</UnorderedList>,
        ol: ({ children }) => <OrderedList spacing={3} as="ol">{children}</OrderedList>,
        li: ({ children }) => <ListItem>{children}</ListItem>,
      },
    } as RehypeReactOptions)
    .processSync(html)

  return processor.result
}

export default htmlToReact
