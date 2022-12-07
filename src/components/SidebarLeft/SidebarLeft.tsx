import styles from './style.module.scss'

export type SidebarLeftProps = {}

/**
 * 左サイドバーのプロトタイプ。`position: fixed, width: 20%`
 * @returns LeftSideBar
 */
const SidebarLeft = (props: SidebarLeftProps) => {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/news', label: 'News' },
    { href: '/activities', label: 'Activities' },
    { href: '/works', label: 'Works' },
    { href: '/links', label: 'Links'},
  ]

  const linkItems = links.map((link) => {
    return (
      <a key={link.label} href={link.href} className={styles.link}>
        {link.label}
      </a>
    )
  })

  return <div className={styles.sidebarLeft}>{linkItems}<div></div></div>
}

export default SidebarLeft
