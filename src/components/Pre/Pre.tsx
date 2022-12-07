import { FC, ReactNode } from 'react'
import styles from './style.module.scss'

export type PreProps = {
  children: ReactNode | ReactNode[]
}

const Pre: FC<PreProps> = ({ children = '' }) => (
  <pre className={styles.pre}>{children}</pre>
)

export default Pre
