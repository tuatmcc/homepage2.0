import type { AppProps } from 'next/app'

import 'highlight.js/styles/base16/atelier-lakeside-light.css'

import '~/styles/global.scss'
import '~/styles/variables.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
