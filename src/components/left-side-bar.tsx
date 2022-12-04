import { Flex, ChakraProps } from '@chakra-ui/react'
import CustomLink from './custom-link'

/**
 * 簡易的な左サイドバーの中身。
 * @returns LeftSideBar
 */
const LeftSideBar = (props: ChakraProps) => {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/news', label: 'News' },
    { href: '/activities', label: 'Activities' },
    { href: '/works', label: 'Works' },
  ]

  const linkItems = links.map((link) => {
    return (
      <CustomLink
        key={link.href}
        href={link.href}
        pos="relative"
        display="flex"
        w="100%"
        color="teal.500"
        fontSize="xl"
        py="1rem"
        px="1rem"
        bgColor="white"
        _hover={{
          bgColor: 'gray.100',
        }}
      >
        {link.label}
      </CustomLink>
    )
  })

  return (
    <Flex flexDir="column" overflow="auto" {...props}>
      {linkItems}
    </Flex>
  )
}

export default LeftSideBar
