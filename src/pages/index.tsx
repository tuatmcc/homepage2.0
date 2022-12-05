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
const IndexPage = () => {
  return (
    <>
      <Head>
        <title>HOME - MCC</title>
        <meta
          lang="ja"
          name="description"
          content="東京農工大学公認サークルMCC(マイクロコンピュータクラブ)のホームページです"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FullContainer>
        <Full alignContent="center" display="flex" flexDir="row">
          <HomeCanvas />
          <Flex
            pos="absolute"
            flexDir="row"
            px={5}
            width="100%"
            alignItems="center"
          >
            <Box
              pos="relative"
              w={['2rem', '5rem', '10rem']}
              h={['2rem', '5rem', '10rem']}
            >
              <Image fill src="/mcc-logo.svg" alt="mcc-logo" />
            </Box>
            <Box pos="relative" display="flex">
              <Heading fontSize={['2rem', '3rem', '6rem']} color="white">
                Micro
              </Heading>
              <Heading fontSize={['2rem', '3rem', '6rem']} color="white">
                Computer
              </Heading>
              <Heading fontSize={['2rem', '3rem', '6rem']} color="white">
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

export default IndexPage
