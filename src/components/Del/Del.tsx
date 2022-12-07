import { FC, ReactNode } from 'react'
import styles from './style.module.scss'

export type DelProps = {
  children: ReactNode
}

/**
 * Convert `<del>` to `<span>` with `text-decoration: line-through`.
 * @param param0
 * @returns
 */
const Del: FC<DelProps> = ({ children = '' }) => (
  <span className={styles.del}>{children}</span>
)

export default Del
