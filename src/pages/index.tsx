import Head from 'next/head'
import Image from 'next/image'
import { Full, FullContainer } from '../components/layers'
import { Home3D } from '../components/r3f/home3d'
import { Nav } from '../components/nav'
import { Box, Container, Heading } from '@chakra-ui/react'

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
      <Full>
          <Home3D />
        </Full>
        <Full>
          <Nav />
        </Full>
        <Full>
          <Heading>
            <Image alt='logo' width={130} height={130} src='/mcc-logo.svg' />M
            <span style={{ fontSize: '1rem' }}>icro</span>C
            <span style={{ fontSize: '1rem' }}>omputer</span>C
            <span style={{ fontSize: '1rem' }}>lub</span>
          </Heading>
            <h2>東京農工大学公認サークル</h2>
        </Full>
        <Full>
          <Nav />
        </Full>
      </FullContainer>
    </>
  )
}

export default Home
