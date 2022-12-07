import Head from 'next/head'
import Image from 'next/image'
import { ReactNode } from 'react'

import classNames from 'classnames'

import SidebarLeft from '../SidebarLeft/SidebarLeft'
import Navbar from '../Navbar/Navbar'
import useMediaQuery from '~/hooks/useMediaQuery'
import SidebarRight from '../SidebarRight/SidebarRight'
import Tag from '../Tag/Tag'
import styles from './style.module.scss'

export type PageMeta = {
  title: string
  description?: string
  date?: string
  tags?: string[]
  img?: string
  author?: string
}

export type CommonPageProps = {
  meta: PageMeta
  children: ReactNode | ReactNode[]
  isMdx?: boolean
}

/**
 * 簡易的な共通ページレイアウト。特に、記事のレイアウトに使用する。レスポンシブ対応。
 * @param param0
 * @returns
 */
export const CommonPage: ({
  meta,
  children,
  isMdx,
}: CommonPageProps) => JSX.Element = ({
  meta,
  children,
  isMdx = false,
}: CommonPageProps) => {
  const { title, description, img, tags } = meta
  const mq = useMediaQuery()

  const dateElement = meta.date && <Tag>{meta.date}</Tag>
  const tagElements = tags?.map((tag) => <Tag key={tag}>{`#${tag}`}</Tag>)

  return (
    <>
      <Head>
        <title>{`${title} - TUATMCC`}</title>
        {description && <meta name="description" content={description} />}
        {img && <meta property="og:image" content={img} />}
      </Head>

      <div className={styles.navbar}>
        <Navbar />
      </div>

      <div className={styles.commonPage}>
        {/* Left Sidebar */}
        {!mq.md && (
          <div className={styles.sidebarLeft}>
            <SidebarLeft />
          </div>
        )}

        {/* Main */}
        <main className={styles.main}>
          <div className={styles.date}>{dateElement && dateElement}</div>
          <h1 className={styles.title}>{title}</h1>
          <Image
            src={img ? img : '/mcc-logo.svg'}
            alt="Image"
            width={200}
            height={200}
            className={styles.img}
          />
          <div className={styles.tags}>{tagElements && tagElements}</div>
          <div className={classNames(isMdx ? 'mdx-prose' : '', styles.content)}>
            {children}
          </div>
        </main>

        {/* Right Sidebar */}
        {!mq.xl && (
          <div className={styles.sidebarRight}>
            <SidebarRight />
          </div>
        )}
      </div>
    </>
  )
}
