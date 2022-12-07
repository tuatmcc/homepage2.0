import { BASE_ROUTES_LIST } from '~/constants/routes'
import styles from './style.module.scss'

export type SidebarProps = {}

/**
 * 左サイドバーのプロトタイプ。`position: fixed, width: 20%`
 * @returns Sidebar
 */
const Sidebar = (props: SidebarProps) => {
  const linkItems = BASE_ROUTES_LIST.map((path) => {
    return (
      <a key={path.LABEL} href={path.PATH} className={styles.link}>
        {path.LABEL}
      </a>
    )
  })

  return <div className={styles.sidebarLeft}>{linkItems}</div>
}

export default Sidebar
