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
  const height = props.h ? props.h : props.height ? props.height : '3rem'
  const imgHeight = `${+height.toString().replace('rem', '') * 0.8}rem`

  return (
    <>
      <Flex
        {...props}
        bgColor="#fffffff0"
        w="100%"
        h={height}
        alignItems="center"
      >
        <NavbarBrandLink href="/">
          <Image
            src="/mcc-logo.svg"
            alt="MCC Logo"
            width={100}
            height={100}
            style={{
              height: `${imgHeight}`,
              width: `${imgHeight}`,
            }}
          />
          <Heading color="#0080f0" display={{base: 'none', md:'block'}}>MicroComputerClub</Heading>
          <Heading color="#0080f0" display={{base: 'block', md:'none'}}>MCC</Heading>
        </NavbarBrandLink>
        <Spacer />
        <IconButton
          display={['block', 'block', 'none']}
          ref={btnRef}
          colorScheme="teal"
          variant="outline"
          onClick={onOpen}
          aria-label={''}
        >
          <HamburgerIcon />
        </IconButton>
        <ChakraLink
          display={['none', 'none', 'block']}
          href="https://twitter.com/TUATMCC"
          isExternal
        >
          <Image
            alt="twitter"
            src="/twitter.svg"
            width={100}
            height={100}
            style={{
              height: `${height}`,
              width: `${height}`,
              objectFit: 'contain',
            }}
          />
        </ChakraLink>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
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
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Navbar
