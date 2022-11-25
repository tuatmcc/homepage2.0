import '../styles/globals.css'
import type { AppProps } from 'next/app'

/**
 * SPAのおおもと。
 * @param param0 
 * @returns 
 */
const App = ({ Component, pageProps }: AppProps) => {
  return (
      <Component {...pageProps} />
  )
}

export default App
