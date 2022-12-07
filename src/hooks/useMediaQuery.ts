import { useState, useEffect } from 'react'

type MediaQuery = {
  lg: boolean
  xl: boolean
  xxl: boolean
}

/**
 * React用のブレイクポイントの設定。scss側の変数と同じ値を設定している。
 * @returns returns true if the screen is smaller than that of `key`
 */
const useMediaQuery = () => {
  const initialMq = {
    lg: false,
    xl: false,
    xxl: false,
  }

  const [mq, setMq] = useState<MediaQuery>(initialMq)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleResize = () => {
      setMq({
        lg: matchMedia('screen and (max-width: 62em)').matches, // スマホのとき
        xl: matchMedia('screen and (max-width: 75em)').matches,
        xxl: matchMedia('screen and (max-width: 90em)').matches,
      })
    }

    addEventListener('load', handleResize)
    addEventListener('resize', handleResize)
  }, [])

  return mq
}

export default useMediaQuery
