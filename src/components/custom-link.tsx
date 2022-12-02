import { ChakraProps, chakra, Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ReactNode } from 'react'
export interface LinkProps {
  href: string
  children?: string | ReactNode | ReactNode[]
}

/**
 * Override the Next Link component to use the Chakra Link component
 * @param
 */
const ChakraNextLink = chakra(NextLink, {
  shouldForwardProp: (prop) => ['href', 'children'].includes(prop),
})

/**
 * A custom link that uses Next.js Link and Chakra Link components. This can automatically be an external link if the href starts with http.
 * @param href The href, children, and any other chakra props to pass to the Chakra Link component
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
