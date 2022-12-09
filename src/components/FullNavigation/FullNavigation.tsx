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
  if (isOpened) {
    return (
      <div className={`${styles.FullNavigation} ${className}`}>
        <nav>
          <ul>
            {BASE_ROUTES_LIST.map((path) => {
              return (
                <li key={path.LABEL}>
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
  } else {
    return <></>
  }
}

export default FullNavigation
