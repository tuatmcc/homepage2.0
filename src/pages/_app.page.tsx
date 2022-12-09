import type { AppProps } from 'next/app'

import 'highlight.js/styles/a11y-dark.css'

import '~/styles/global.scss'
import '~/styles/variables.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
