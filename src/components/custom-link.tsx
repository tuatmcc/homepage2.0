import { ChakraProps, chakra, Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ReactNode } from 'react'
export interface LinkProps {
  href: string
  children?: ReactNode | ReactNode[]
}

/**
 * Override the Next Link component to use the Chakra Link component
 * @param
 */
const ChakraNextLink = chakra(NextLink, {
  shouldForwardProp: (prop) => ['href', 'children'].includes(prop),
})

/**
 * 外部リンクと内部リンクを判別して、適切なChakraコンポーネントを返すリンク。すべてのリンクはこのコンポーネントを使用する。
 * @param props href, children, ChakraProps
 * @returns
 */
const CustomLink = (props: LinkProps & ChakraProps) => {
  const { href, children, ...chakraProps } = props
  if (href.startsWith('http')) {
    // External link
    return (
      <ChakraLink href={href} rel="noreferrer" target="_blank" {...chakraProps}>
        {children}
      </ChakraLink>
    )
  } else if (href.match('#')) {
    // Auto-Linked Headding
    return (
      <ChakraLink
        href={href}
        {...chakraProps}
        color="inherit"
        textDecoration="inherit"
        _hover={{ textDecor: 'inherit', color: 'inherit' }}
      >
        {children}
      </ChakraLink>
    )
  } else {
    // Internal link
    return (
      <ChakraNextLink href={href} {...chakraProps}>
        {children}
      </ChakraNextLink>
    )
  }
}

export default CustomLink
