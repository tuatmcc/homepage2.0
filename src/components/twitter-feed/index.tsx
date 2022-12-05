import { Box, chakra, ChakraProps } from '@chakra-ui/react'
import React, { useEffect } from 'react'

/**
 * ツイッターの埋め込みを表示するコンポーネント。
 * @param props ChakraProps
 * @returns
 */
const TwitterFeed = (props: ChakraProps) => {
  const ref = React.useRef<HTMLDivElement>(null)
  // 埋め込みコードのもとはググると公式のが出てくる
  // public/index.htmlにあらかじめ直接<script>タグを書いておく方が良いかもしれない
  useEffect(() => {
    if (ref.current) {
      const script = document.createElement('script')
      script.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      document.body.appendChild(script)
    }
  })
  return (
    <Box {...props} ref={ref}>
      <a
        className="twitter-timeline"
        href="https://twitter.com/TUATMCC?ref_src=twsrc%5Etfw"
      >
        Tweets by TUATMCC
      </a>
    </Box>
  )
}

export default TwitterFeed
