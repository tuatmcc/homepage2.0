import { FC, ReactNode } from 'react'

import styles from './style.module.scss'

export type CodeProps = {
  children: ReactNode | ReactNode[]
}

const Code: FC<CodeProps> = ({ children = '' }) => (
  <code className={styles.code}>{children}</code>
)

export default Code
