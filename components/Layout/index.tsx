import Head from 'next/head'
import styles from './index.module.scss'
import { ReactNode } from 'react'
import theme from 'styles/theme'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mercy Relief Portal</title>
        <meta charSet="utf-8" />
        <meta name="decription" content="Mercy Relief Portal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <main className={styles.main}>
            {children}
        </main>

      </ThemeProvider>
    </div>
  )
}

export default Layout
