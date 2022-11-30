import Head from 'next/head'
import Image from 'next/image'
import { Full, FullContainer } from '../components/layers'
import { HomeCanvas } from '../components/r3f/home-canvas'
import { Nav } from '../components/nav'
import { Box, Container, Flex, Heading, Spacer, Text } from '@chakra-ui/react'

/**
 * サイトのトップページ。パスは'/'でマッチします
 * @returns Home
 */
const Home = () => {
  return (
    <>
      <Head>
        <title>HOME - MCC</title>
        <meta
          lang='ja'
          name='description'
          content='東京農工大学公認サークルMCC(マイクロコンピュータクラブ)のホームページです'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <FullContainer>
        <Full alignContent='center' display='flex' flexDir='row'>
          <HomeCanvas />
          <Flex
            pos='absolute'
            flexDir='row'
            px={5}
            width='100%'
            alignItems='center'
          >
            <Box
              pos='relative'
              w={['2em', '5em', '10em']}
              h={['2em', '5em', '10em']}
            >
              <Image fill src='/mcc-logo.svg' alt='mcc-logo' />
            </Box>
            <Box pos='relative' display='flex'>
              <Heading fontSize={['2em', '3em', '6em']} color='white'>
                Micro
              </Heading>
              <Heading fontSize={['2em', '3em', '6em']} color='white'>
                Computer
              </Heading>
              <Heading fontSize={['2em', '3em', '6em']} color='white'>
                Club
              </Heading>
            </Box>
          </Flex>
          <Nav />
        </Full>
      </FullContainer>
    </>
  )
}

export default Home
