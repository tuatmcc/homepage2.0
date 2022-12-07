import { FC, ReactNode } from 'react'

import styles from './style.module.scss'

export type ParagraphProps = {
  children: ReactNode | ReactNode[],
}

const Paragraph: FC<ParagraphProps> = ({ children = '' }) => (
  <p className={styles.paragraph}>{children}</p>
)

export default Paragraph
