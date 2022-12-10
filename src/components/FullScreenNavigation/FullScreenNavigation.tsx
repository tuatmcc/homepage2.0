import { FC } from 'react'

import { BASE_ROUTES_LIST } from '~/constants/routes'

import styles from './style.module.scss'

export type FullScreenNavigationProps = {
  isOpened?: boolean
  className?: string
}

const FullScreenNavigation: FC<FullScreenNavigationProps> = ({
  isOpened = true,
  className = '',
}) => {
  return (
    <div
      className={`${styles.nav} ${
        isOpened ? styles.nav_open : styles.nav_close
      }`}
    >
      <nav className={styles.navIn}>
        <ul className={styles.linkList}>
          {BASE_ROUTES_LIST.map((path) => {
            return (
              <li key={path.LABEL} className={styles.list}>
                <a href={path.PATH} className={styles.link}>
                  {path.LABEL}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default FullScreenNavigation
