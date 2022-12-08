import { FC } from 'react'
import { BASE_ROUTES_LIST } from '~/constants/routes'
import styles from './style.module.scss'

export type SidebarProps = {
  isOpened?: boolean
}

/**
 * サイドバーのプロトタイプ。`position: fixed, width: 20%`
 * @returns Sidebar
 */
const Sidebar: FC<SidebarProps> = ({ isOpened = true }) => {
  if (isOpened) {
    return (
      <div className={styles.sidebarLeft}>
        {BASE_ROUTES_LIST.map((path) => {
          return (
            <a key={path.LABEL} href={path.PATH} className={styles.link}>
              {path.LABEL}
            </a>
          )
        })}
      </div>
    )
  } else {
    return <></>
  }
}

export default Sidebar
