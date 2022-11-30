import { Flex, chakra, ChakraProps } from '@chakra-ui/react'
import Link from 'next/link'

/**
 * A link that overrides the default behavior of Next.js' Link component.
 */
const LeftSideBarLink = chakra(Link, {
  baseStyle: {
    display: 'flex',
    flexDir: 'row',
    color: 'teal.500',
    fontSize: 'xl',
    p: '5',
    bgColor: 'white',
    _hover: {
      bgColor: 'gray.100',
    },
  },
  shouldForwardProp: (prop) => ['href', 'children'].includes(prop),
})

/**
 * A Simple LeftSideBar component.
 * @returns LeftSideBar
 */
const LeftSideBar = (props: ChakraProps) => {
  return (
    <Flex flexDir='column' w='inherit' overflow='auto' pos='fixed' {...props}>
      <LeftSideBarLink href='/'>Home</LeftSideBarLink>
      <LeftSideBarLink href='/about'>About</LeftSideBarLink>
      <LeftSideBarLink href='/news'>News</LeftSideBarLink>
      <LeftSideBarLink href='/activities'>Activities</LeftSideBarLink>
      <LeftSideBarLink href='/works'>Works</LeftSideBarLink>
    </Flex>
  )
}

export default LeftSideBar
