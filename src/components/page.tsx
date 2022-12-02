import { Box, Center, Flex, Heading, Tag } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { ReactNode } from 'react'
import LeftSideBar from './left-side-bar'
import Navbar from './navbar'
import Twitter from './twitter'

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
  const [leftWidth, mainWidth, rightWidth] = [
    { base: 0, lg: '25%', '2xl': '20%' },
    { base: '100%', lg: '75%', '2xl': '60%' },
    { base: 0, '2xl': '20%' },
  ]
  const [leftDisplay, mainDisplay, rightDisplay] = [
    { base: 'none', lg: 'flex' },
    'flex',
    { base: 'none', '2xl': 'flex' },
  ]
  return (
    <>
      <Head>
        <title>{`${title} - TUATMCC`}</title>
        {description && <meta name="description" content={description} />}
        {img && <meta property="og:image" content={img} />}
      </Head>

      <Flex h="3rem" pos="relative" zIndex={100}>
        {/* 高さを確保するために、relativeな要素の中に入れる */}
        <Navbar pos="fixed" shadow="0 0 0.2rem 0.1rem #aaa" />
      </Flex>

      {/* Left Sidebar */}
      <Flex pos="relative">
        <Flex w={leftWidth} display={leftDisplay}>
          <LeftSideBar w="inherit" pos="fixed" />
        </Flex>

        {/* Main */}
        <Flex flexDir="column" w={mainWidth} display={mainDisplay}>
          <Flex flexDir="column" w="100%" px="1rem">
            <Flex py="0.5rem">{meta.date && <Tag>{meta.date}</Tag>}</Flex>
            <Heading as="h1" size="2xl" py="4rem">
              {title}
            </Heading>
            <Center>
              <Box h="50vh">
                <Image
                  src={img ? img : '/mcc-logo.svg'}
                  alt="Image"
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
            <Flex py="0.5rem">
              {tags?.map((tag) => (
                <Tag key={tag} colorScheme="green">
                  #{tag}
                </Tag>
              ))}
            </Flex>
            <Flex flexDir="column" className={isMdx ? 'mdx-prose' : ''}>
              {children}
            </Flex>
          </Flex>
        </Flex>

        {/* Right Sidebar */}
        <Flex
          w={rightWidth}
          flexDir="column"
          pos="relative"
          display={rightDisplay}
        >
          <Twitter
            pos="fixed"
            w="inherit"
            height="90%"
            overflowY="scroll"
            px="0.5rem"
            pt="5rem"
          />
        </Flex>
      </Flex>
    </>
  )
}
