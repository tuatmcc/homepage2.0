import { extendTheme, defineStyle, defineStyleConfig } from '@chakra-ui/react'

// Define custom variants
export const iconButtonTheme = defineStyleConfig({
  variants: {
    solid: defineStyle({
      backgroundColor: 'white.100',
      color: 'black',
      borderRadius: '50%',
      boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.1)',
      _hover: {
        background: 'gray.100',
      },
    }),
  },
})

const theme = extendTheme({
  components: { IconButton: iconButtonTheme },
})

export default theme
