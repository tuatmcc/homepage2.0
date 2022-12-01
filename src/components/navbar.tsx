import { Button, chakra, ChakraProps, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

// Override the default Next.js Link component to use Chakra UI's Props
const NavbarBrandLink = chakra(Link, {
  baseStyle: {
    display: 'flex',
    w: '100vw',
    alignItems: 'center',
  },
})

const Navbar = (props: ChakraProps) => {
  return (
    <Flex {...props} bgColor='#f0f0f0e0' h={props.h ? props.h : '3rem'}>
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
    </Flex>
  )
}

export default Navbar
