import { Box, Center, Flex, Heading, Spacer, Tag, Link } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { ReactNode } from 'react'
import LeftSideBar from './left-side-bar'
import Navbar from './navbar'

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
    [0, 0, '30vw', '20vw'],
    ['100vw', '100vw', '70vw', '75vw', '60vw'],
    [0, 0, 0, 0, '20vw'],
  ]
  const [lDisplay, mDisplay, rDisplay] = [
    ['none', 'none', 'flex', 'flex'],
    'flex',
    ['none', 'none', 'none', 'none', 'flex'],
  ]
  return (
    <>
      <Head>
        <title>{`${title} - TUATMCC`}</title>
        {description && <meta name='description' content={description} />}
        {img && <meta property='og:image' content={img} />}
      </Head>

      <Flex h='3rem'>
        <Navbar pos='fixed' />
      </Flex>

      <Flex>
        {/* Left Sidebar */}
        <Flex w={lWidth} display={lDisplay} overflow='auto'>
          <LeftSideBar w='inherit' pos='fixed' />
        </Flex>

        {/* Main */}
        <Flex flexDir='column' w={mWidth} display={mDisplay}>
          <Flex flexDir='column' w='inherit' px='1rem'>
            <Flex py='0.5rem'>{meta.date && <Tag>{meta.date}</Tag>}</Flex>
            <Heading as='h1' size='2xl' py='4rem'>
              {title}
            </Heading>
            <Center>
              <Box h='50vh'>
                <Image
                  src={img ? img : '/mcc-logo.svg'}
                  alt='Image'
                  width={200}
                  height={200}
                  style={{
                    width: '100%',
                    height: '50vh',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Center>
            <Flex py='0.5rem'>
              {tags?.map((tag) => (
                <Tag key={tag} colorScheme='green'>
                  #{tag}
                </Tag>
              ))}
            </Flex>
            <Flex flexDir='column' className={isMdx ? 'mdx-prose' : ''}>
              {children}
            </Flex>
          </Flex>
        </Flex>

        {/* Right Sidebar */}
        <Flex w={rWidth} flexDir='column' py='5rem' display={rDisplay}>
          <Box
            pos='fixed'
            w='inherit'
            height='50%'
            overflowY='scroll'
            px='0.5rem'
          >
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
