import {
  Box,
  Center,
  chakra,
  Flex,
  GridItem,
  Heading,
  HStack,
  Spacer,
  Stack,
  Tag,
  VStack,
} from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { ReactNode } from 'react'
import { Full } from './layers'
import { Nav } from './nav'
import { HomeCanvas } from './r3f/home-canvas'

interface MDXMeta {
  title: string
  description?: string
  date?: string
  tags?: string[]
  img?: string
  author?: string
}

interface MDXProps {
  meta: MDXMeta
  children: ReactNode[]
}

export const MDXWrapper: ({ meta, children }: MDXProps) => JSX.Element = ({
  meta,
  children,
}: MDXProps) => {
  const { title, description, img, tags } = meta
  const [lWidth, mWidth, rWidth] = [
    [0, 0, '30%', '30%'],
    ['100%', '100%', '60%', '50%'],
    [0, 0, 0, '20%'],
  ]
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name='description' content={description} />}
        {img && <meta property='og:image' content={img} />}
      </Head>

      <Flex pos='relative' h={['auto', 'auto', 0]} w='100%'>
        Here Comes the Navigation Bar
        <Link href='/'>Home</Link>
      </Flex>

      <Flex w='100%' pos='relative'>
        {/* Left Sidebar */}
        <Flex w={lWidth}>
          Here Comes the Left Sidebar (Navigation)
          <Link href='/'>Home</Link>
        </Flex>

        {/* Main */}
        <Flex flexDir='column' w={mWidth} mx='2em' >
          <Flex my='3'>
            {tags?.map((tag) => (
              <Tag key={tag} colorScheme='green' m='1'>
                #{tag}
              </Tag>
            ))}
            <Spacer />
            {meta.date && (
              <Tag m='1' mx='5'>
                {meta.date}
              </Tag>
            )}
          </Flex>
          <Heading as='h1' size='2xl' mt='2em' mb='4em'>
            {title}
          </Heading>
          <Box className='mdx-prose'>{children}</Box>
        </Flex>

        {/* Right Sidebar */}
        <Flex w={rWidth} flexDir='column'>
          <Box pos='fixed' mt='10%' w='20%' height='50%' overflowY='scroll'>
            <a
              className='twitter-timeline'
              href='https://twitter.com/TUATMCC?ref_src=twsrc%5Etfw'
            >
              Tweets by TUATMCC
            </a>{' '}
            <script
              async
              src='https://platform.twitter.com/widgets.js'
            ></script>
          </Box>
        </Flex>
      </Flex>
    </>
  )
}
