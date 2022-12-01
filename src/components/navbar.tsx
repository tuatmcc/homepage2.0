import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Button,
  chakra,
  ChakraProps,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useDisclosure,
  Link as ChakraLink,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LeftSideBar from './left-side-bar'

// Override the default Next.js Link component to use Chakra UI's Props
const NavbarBrandLink = chakra(Link, {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
  },
})

const Navbar = (props: ChakraProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef(null)

  return (
    <>
      <Flex
        {...props}
        bgColor='#f0f0f0e0'
        w='100%'
        h={props.h ? props.h : '3rem'}
        alignItems='center'
      >
        <NavbarBrandLink href='/'>
          <Image
            src='/mcc-logo.svg'
            alt='MCC Logo'
            width={100}
            height={100}
            style={{
              height: `${props.h ? props.h : '3rem'}`,
              width: `${props.h ? props.h : '3rem'}`,
            }}
          />
          <Heading color='#0080f0'>MicroComputerClub</Heading>
        </NavbarBrandLink>
        <Spacer />
        <IconButton
          display={['block', 'block', 'none']}
          ref={btnRef}
          colorScheme='teal'
          variant='outline'
          onClick={onOpen}
          aria-label={''}
        >
          <HamburgerIcon />
        </IconButton>
        <ChakraLink
          display={['none', 'none', 'block']}
          href='https://twitter.com/TUATMCC'
          isExternal
        >
          <Image
            alt='twitter'
            src='/twitter.svg'
            width={100}
            height={100}
            style={{
              height: `${props.h ? props.h : '3rem'}`,
              width: `${props.h ? props.h : '3rem'}`,
              objectFit: 'contain',
            }}
          />
        </ChakraLink>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <LeftSideBar />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Navbar
