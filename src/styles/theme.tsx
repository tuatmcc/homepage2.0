import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Container: {
      variants: {
        fill: {
          pos: 'absolute',
          w: '100%', // width
          maxW: '100%',
          minW: '100%',
          h: '100%', // height
          maxH: '100%',
          minH: '100%',
          p: 0, // padding
          m: 0, // margin
        },
      },
    },
    Box: {
      variants: {
        fill: {
          pos: 'absolute',
          w: '100%',
          maxW: '100%',
          minW: '100%',
          h: '100%',
          maxH: '100%',
          minH: '100%',
          p: 0,
          m: 0,
        },
      },
    },
  },
})

export default theme
