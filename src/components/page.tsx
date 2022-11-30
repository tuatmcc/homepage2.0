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
import Image from 'next/image'
import { ReactNode } from 'react'
import LeftSideBar from './left-side-bar'

export interface PageMeta {
  title: string
  description?: string
  date?: string
  tags?: string[]
  img?: string
  author?: string
}

interface PageProps {
  meta: PageMeta
  children: ReactNode | ReactNode[]
  isMdx?: boolean
}

/**
 * Common page layout
 * @param param0
 * @returns
 */
export const Page: ({ meta, children, isMdx }: PageProps) => JSX.Element = ({
  meta,
  children,
  isMdx = false,
}: PageProps) => {
  const { title, description, img, tags } = meta

  // Responsive grid [sm, md, lg, xl, 2xl]
  const [lWidth, mWidth, rWidth] = [
    [0, 0, '30%', '20%'],
    ['90vw', '90vw', '70%', '75%', '55%'],
    [0, 0, 0, 0, 0, '20%'],
  ]
  const [lDisplay, mDisplay, rDisplay] = [
    ['none', 'none', 'flex', 'flex'],
    'flex',
    ['none', 'none', 'none', 'none', 'none', 'flex'],
  ]
  return (
    <>
      <Head>
        <title>{`${title} - TUATMCC`}</title>
        {description && <meta name='description' content={description} />}
        {img && <meta property='og:image' content={img} />}
      </Head>

      <Flex h={['auto', 'auto', 0]}>
        Here Comes the Navigation Bar
        <Link href='/'>Home</Link>
      </Flex>

      <Flex>
        {/* Left Sidebar */}
        <Flex w={lWidth} display={lDisplay} overflow='auto'>
          <LeftSideBar />
        </Flex>

        {/* Main */}
        <Flex flexDir='column' w={mWidth} display={mDisplay} mx='5'>
          <Flex my='3'>{meta.date && <Tag m='1'>{meta.date}</Tag>}</Flex>
          <Heading as='h1' size='2xl'>
            {title}
          </Heading>
          <Center>
            <Image
              src={img ? img : '/mcc-logo.svg'}
              alt='Image'
              width={100}
              height={100}
              style={{
                display: 'flex',
                height: '50vh',
                maxHeight: '50vh',
                width: 'auto',
                maxWidth: '100%',
                margin: '1em',
              }}
            />
          </Center>
          <Flex>
            {tags?.map((tag) => (
              <Tag key={tag} colorScheme='green' m='1'>
                #{tag}
              </Tag>
            ))}
          </Flex>
          <Flex flexDir='column' className={isMdx ? 'mdx-prose' : ''}>
            {children}
          </Flex>
        </Flex>

        {/* Right Sidebar */}
        <Flex w={rWidth} flexDir='column' mx='5' display={rDisplay}>
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
