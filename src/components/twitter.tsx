import { Box, chakra, ChakraProps } from '@chakra-ui/react'
import React, { useEffect } from 'react'

const CustomAnchor = chakra('a', {
  baseStyle: {
    width: '100%',
    height: '10rem',
    display: 'block',
  },
})

const Twitter = (props: ChakraProps) => {
  const ref = React.useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (ref.current) {
      const script = document.createElement('script')
      script.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      document.body.appendChild(script)
    }
  })
  return (
    <Box {...props} ref={ref}>
      <CustomAnchor
        className='twitter-timeline'
        href='https://twitter.com/TUATMCC?ref_src=twsrc%5Etfw'
      >
        Tweets by TUATMCC
      </CustomAnchor>
    </Box>
  )
}

export default Twitter
