import Head from 'next/head'
import { ReactNode } from 'react'
import theme from 'styles/theme'
import { ThemeProvider } from '@mui/material/styles'

import Footer from 'components/Footer'
import { Box, CssBaseline } from '@mui/material'
import NavBar from 'components/NavBar'
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
