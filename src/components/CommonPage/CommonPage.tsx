import Head from 'next/head'
import Image from 'next/image'
import { FC, ReactNode, useState } from 'react'

import classNames from 'classnames'

import { ROUTES, BASE_ROUTES_LIST } from '~/constants/routes'
import useMediaQuery from '~/hooks/useMediaQuery'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import SidebarRight from '../SidebarRight/SidebarRight'
import Tag from '../Tag/Tag'
import styles from './style.module.scss'
import TagList from '../TagList/TagList'
import Logo from '../Logo/Logo'

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
export const CommonPage: FC<CommonPageProps> = ({
  meta,
  children,
  isMdx = false,
}: CommonPageProps) => {
  const { title, description, img, tags } = meta
  const mq = useMediaQuery()

  const [opened, setOpened] = useState<boolean>(true)

  const tagElements = tags?.map((tag) => <Tag key={tag}>{`#${tag}`}</Tag>)

  return (
    <>
      <Head>
        <title>{`${title} - TUATMCC`}</title>
        {description && <meta name="description" content={description} />}
        {img && <meta property="og:image" content={img} />}
      </Head>

      <aside className={`${styles.sidebar} ${opened ? styles.isSidebarActive : ''}`}>
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
            <h1 className={styles.title}>{title}</h1>
            <Image
              src={img ? img : '/mcc-logo.svg'}
              alt="Image"
              width={200}
              height={200}
              className={styles.img}
            />
          </div>
          <TagList>{tagElements && tagElements}</TagList>
          <div className={`${isMdx ? 'mdx-prose' : ''} ${styles.article}`}>
            {children}
          </div>
        </div>
      </main>

      {!mq.lg && (
        <button
          className={styles.navToggle}
          onClick={() => setOpened(!opened)}
        >{'<'}</button>
      )}
    </>
  )
}
