import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Box,
  IconButton,
  Collapse,
  Heading,
  Flex,
  Container,
  chakra,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import React, { ReactNode } from 'react'
import Link from 'next/link'

// Override the default Next Link
const CustomLink = chakra(Link, {
  baseStyle: {
    display: 'flex',
    direction: 'column',
    flex: ['0 1 100%', '0 1 100%', '1 1 100%'],
    px: '5',
    py: '3',
    mx: '5',
    my: '3',
    bgColor: 'white',
    fontFamily: 'Noto Sans JP',
    color: 'black',
    fontSize: 'xl',
    borderRadius: '5em',
    textAlign: 'start',
    _hover: { bgColor: 'gray.100', shadow: '0 0 2em 0.5em #00000050' },
  },
  shouldForwardProp: prop => ['href', 'children'].includes(prop),
})

export const Nav = () => {
  const { isOpen, onToggle } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null)

  return (
    <Box pos='absolute' w='100%' textAlign='end' verticalAlign='end'>
      <IconButton
        aria-label='Open Sidebar'
        ref={btnRef}
        onClick={onToggle}
        bgColor='white'
        borderRadius='50%'
        size='lg'
        width='4em'
        height='4em'
        m='5'
        justifySelf='end'
        _hover={{ shadow: '0 0 2em 0.5em #00000050' }}
        icon={<HamburgerIcon />}
      ></IconButton>
      <Collapse in={isOpen} animateOpacity dragListener>
        <Flex
          p='5'
          color='white'
          mx='4'
          ml={['4', '4', '60%']}
          bg='transparent'
          rounded='md'
          opacity='1'
          dir='row'
          flexWrap='wrap'
          overflowY='auto'
        >
          {[
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Activities', href: '/activities' },
            { name: 'Works', href: '/works' },
            { name: 'Contact', href: '/contact' },
          ].map((item, index) => (
            <CustomLink key={index} href={item.href}>{item.name}</CustomLink>
          ))}
        </Flex>
      </Collapse>
    </Box>
  )
}
