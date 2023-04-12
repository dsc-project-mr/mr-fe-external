import Head from 'next/head'
import { ReactNode } from 'react'
import theme from 'styles/theme'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import NavBar from 'components/NavBar'
import Footer from 'components/Footer'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Head>
        <title>Mercy Relief Portal</title>
        <meta charSet="utf-8" />
        <meta name="decription" content="Mercy Relief Portal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <NavBar />

        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </ThemeProvider>
    </Box>
  )
}

export default Layout
