import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import styles from './style.module.scss'

export type NavbarProps = {}

/**
 * 簡易的なナビゲーションバー。レスポンシブ対応。
 * @returns
 */
const Navbar: FC<NavbarProps> = () => {
  const [opened, setOpened] = React.useState(false)
  const btnRef = React.useRef(null)

  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.brand}>
        <Image
          src="/mcc-logo.svg"
          alt="MCC Logo"
          height={32}
          width={32}
          className={styles.logo}
        />
        MCC
      </Link>
      <button>btn</button>
    </div>
  )
}

export default Navbar
