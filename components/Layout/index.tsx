import Head from 'next/head'
import { ReactNode } from 'react'
import theme from 'styles/theme'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import NavBar from 'components/NavBar'
import Footer from 'components/Footer'
import BasicCard from 'components/BasicCard'

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

        <BasicCard cardTitle="FUNDRAISE FOR US" cardContent={word} cardImage="/test.jpeg" buttonName="Sponsor Now"/>
        <Footer />
      </ThemeProvider>
    </Box>
  )
}

export default Layout

const word = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores omnis sapiente libero ipsum voluptates tempore quibusdam consequuntur mollitia dolorum maxime eius reiciendis odit assumenda voluptatibus commodi, suscipit sed dolorem autem.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores omnis sapiente libero ipsum voluptates tempore quibusdam consequuntur mollitia dolorum maxime eius reiciendis odit assumenda voluptatibus commodi, suscipit sed dolorem autem"

