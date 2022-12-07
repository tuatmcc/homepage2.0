import { FC, ReactNode } from 'react'

import styles from './style.module.scss'

export type TagListProps = {
  children: ReactNode | ReactNode[]
}

const TagList: FC<TagListProps> = ({ children = [] }) => (
  <div className={styles.tagList}>{children}</div>
)

export default TagList
