import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
} from '@chakra-ui/react'

import CustomLink from './custom-link'
import LeftSideBar from './left-side-bar'

/**
 * 簡易的なナビゲーションバー。レスポンシブ対応。
 * @param props ChakraProps
 * @returns 
 */
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
        <CustomLink href="/" display='flex' alignItems='center'>
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
        </CustomLink>
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
        <CustomLink
          display={['none', 'none', 'block']}
          href="https://twitter.com/TUATMCC"
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
        </CustomLink>
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
