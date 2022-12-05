import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import 'highlight.js/styles/base16/atelier-lakeside-light.css'

/**
 * SPAのおおもと。
 * @param param0
 * @returns
 */
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
