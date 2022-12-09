import Head from 'next/head'
import Image from 'next/image'
import { FC, ReactNode, useContext, useState } from 'react'

import classNames from 'classnames'

import { ROUTES, BASE_ROUTES_LIST } from '~/constants/routes'
import useMediaQuery from '~/hooks/useMediaQuery'
import FullNavigation from '../FullNavigation/FullNavigation'
import Navbar from '../Navbar/Navbar'
import SidebarRight from '../SidebarRight/SidebarRight'
import Tag from '../Tag/Tag'
import styles from './style.module.scss'
import TagList from '../TagList/TagList'
import Logo from '../Logo/Logo'
import SidebarProvider, { SidebarContext } from '~/providers/SidebarProvider'

export type PageMeta = {
  title: string
  description?: string
  date?: string
  tags?: string[]
  img?: string
  author?: string
}

export type PageProps = {
  meta: PageMeta
  children: ReactNode | ReactNode[]
  isMdx?: boolean
}

/**
 * 共通ページレイアウトのプロトタイプ。特に、記事のレイアウトに使用する。レスポンシブ対応。
 * @param param0
 * @returns
 */
export const Page: FC<PageProps> = ({
  meta,
  children,
  isMdx = false,
}: PageProps) => {
  const { title, description, img, tags } = meta
  const mq = useMediaQuery()

  const [isOpened, setIsOpened] = useState<boolean>(false)

  const tagElements = tags?.map((tag) => <Tag key={tag}>{`#${tag}`}</Tag>)

  return (
    <>
      <Head>
        <title>{`${title} - TUATMCC`}</title>
        {description && <meta name="description" content={description} />}
        {img && <meta property="og:image" content={img} />}
      </Head>

      <aside className={`${styles.sidebar}`}>
        <nav className={styles.sidebarIn}>
          <ul className={styles.linkList}>
            {BASE_ROUTES_LIST.map((route) => (
              <li key={route.LABEL} className={styles.list}>
                <a href={route.PATH} className={styles.link}>
                  {route.LABEL}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <header className={styles.header}>
        <Image alt="" src="/mcc-logo.svg" width={32} height={32} />
        <h1 className={styles.brand}>MCC</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.mainIn}>
          <div className={styles.date}>{meta.date && meta.date}</div>
          <div className={styles.mainVisual}>
            <Image
              src={img ? img : '/mcc-design.jpg'}
              alt="Image"
              width={200}
              height={200}
              className={styles.img}
              onError={(e) => {
                e.currentTarget.hidden = true
              }}
            />
            <h1 className={styles.title}>{title}</h1>
          </div>
          <TagList className={styles.tagList}>
            {tagElements && tagElements}
          </TagList>
          <div className={`${isMdx ? 'mdx-prose' : ''} ${styles.article}`}>
            {children}
          </div>
        </div>
      </main>

      <button
        className={styles.navToggle}
        onClick={() => setIsOpened(!isOpened)}
        onFocusCapture={() => setIsOpened(false)}
      >
        {'<'}
      </button>
      <FullNavigation isOpened={isOpened} />
    </>
  )
}
