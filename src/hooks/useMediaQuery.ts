import { useState, useEffect } from 'react'

type MediaQuery = {
  isMobile: boolean
}

/**
 * React用のブレイクポイントの設定。scss側の変数と同じ値を設定している。
 * @returns returns true if the screen is smaller than that of `key`
 */
const useMediaQuery = () => {
  const initialMq = {
    isMobile: false,
  }

  const [mq, setMq] = useState<MediaQuery>(initialMq)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleResize = () => {
      setMq({
        isMobile: matchMedia('screen and (max-width: 62em)').matches, // スマホのとき
      })
    }

    addEventListener('load', handleResize)
    addEventListener('resize', handleResize)
  }, [])

  return mq
}

export default useMediaQuery
