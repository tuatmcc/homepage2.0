import { FC } from 'react'

import styles from './style.module.scss'

export type TagProps = {
  children: string
}

const Tag: FC<TagProps> = ({ children }) => {
  return <div className={styles.tag}>{children}</div>
}

export default Tag
