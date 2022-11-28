import Head from 'next/head'
import Image from 'next/image'
import { Full, FullContainer } from '../components/layers'
import { Home3D } from '../components/r3f/home3d'
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
          <Home3D />
          <Nav />
          <Full display='flex' flexDir='row' alignContent='center' alignItems='center' justifyContent='center' justifyItems='center'>
            <Flex
              pos='relative'
              flexDir='column'
              width={['5em', '5em', '15em']}
              height={['5em', '5em', '15em']}
            >
              <Image src='/mcc-logo.svg' alt='mcc-logo' fill />
            </Flex>
            <Flex pos='relative' flexDir='column'>
              <Heading as='h1' color='#fff' fontSize={['2xl', '2xl', '15rem']}>
                  MCC
              </Heading>
            </Flex>
          </Full>
        </Full>
        <Flex pos='absolute'>
          <h2>東京農工大学</h2>
        </Flex>
        <Full>
          <Nav />
        </Full>
      </FullContainer>
    </>
  )
}

export default Home
