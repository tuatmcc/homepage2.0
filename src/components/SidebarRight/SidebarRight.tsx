import classNames from 'classnames'
import { FC, useEffect } from 'react'

import styles from './style.module.scss'

export type SidebarRightProps = {}

const SidebarRight: FC<SidebarRightProps> = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div className={styles.sidebarRight}>
      <a
        className={classNames('twitter-timeline', styles.twitterTimeline)}
        href="https://twitter.com/TUATMCC?ref_src=twsrc%5Etfw"
      >
        Tweets by TUATMCC
      </a>
    </div>
  )
}

export default SidebarRight
