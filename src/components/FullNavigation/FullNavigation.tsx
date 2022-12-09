import { FC } from 'react'
import { BASE_ROUTES_LIST } from '~/constants/routes'
import styles from './style.module.scss'

export type FullNavigationProps = {
  isOpened?: boolean
  className?: string
}

const FullNavigation: FC<FullNavigationProps> = ({
  isOpened = true,
  className = '',
}) => {
  return (
    <div
      className={`${className} ${
        isOpened ? styles.openNav : styles.closeNav
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

export default FullNavigation
