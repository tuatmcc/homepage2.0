import { FC } from 'react'

import styles from './style.module.scss'

export type TagProps = {
  children: string
}

const Tag: FC<TagProps> = (props) => {
  return <div className={styles.tag}>{props.children}</div>
}

export default Tag
