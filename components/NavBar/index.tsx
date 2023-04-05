import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect, ReactNode } from 'react'
import Box from '@mui/system/Box'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import SearchBar from 'components/SearchBar'
import { SxProps } from '@mui/material/styles'

// NavLink adapted from https://github.com/vercel/next.js/blob/canary/examples/active-class-name/components/ActiveLink.tsx
type NavLinkProps = LinkProps & { children: ReactNode }

const navLinkUnderline: SxProps = {
  textDecoration: 'underline',
  textUnderlineOffset: '0.4rem',
  textDecorationThickness: '0.15rem',
}

const navLinkStyle: SxProps = {
  color: '#00000099',
  margin: '0 1rem 0 0',
  textTransform: 'uppercase',
  textDecoration: 'none',
  display: 'inline-flex',
  '&:hover': navLinkUnderline,
}

const navLinkActiveStyle: SxProps = {
  ...navLinkStyle,
  ...navLinkUnderline,
  color: 'primary.main',
}

const NavLink = ({ children, ...props }: NavLinkProps) => {
  const { asPath, isReady } = useRouter()

  const [style, setStyle] = useState<SxProps>(navLinkStyle)

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Static route will be matched via props.href
      const linkPathname = new URL(props.href as string, location.href).pathname

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname

      const newStyle =
        linkPathname === activePathname ? navLinkActiveStyle : navLinkStyle

      setStyle(newStyle)
    }
  }, [asPath, isReady, props.href])

  return (
    <Link {...props} passHref>
      <Box sx={style} component="a">
        <Typography
          sx={{ margin: 'auto 0', paddingBottom: { xs: 1, md: 0 } }}
          variant="subtitle2"
          display="inline"
          fontWeight="bold"
        >
          {children}
        </Typography>
      </Box>
    </Link>
  )
}

const SearchBarWrapper = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        margin: { xs: '0.6rem 0 0.6rem 2rem', md: '0.6rem 2rem' },
      }}
    >
      <SearchBar />
    </Box>
  )
}

interface NavLinksProps {
  children: ReactNode
  show: boolean
}

const NavLinks = ({ children, show }: NavLinksProps) => {
  return (
    <Box
      sx={{
        display: { xs: show ? 'flex' : 'none', md: 'flex' },
        flexDirection: { xs: 'column', md: 'row' },
        flex: { xs: 1, md: 'unset' },
        marginBottom: { xs: 1, md: 'unset' },
      }}
    >
      {children}
    </Box>
  )
}

const NavBar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false)

  return (
    <AppBar position="relative" sx={{ backgroundColor: '#fff', color: '#222' }}>
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <IconButton
          sx={{ display: { xs: 'flex', md: 'none' } }}
          onClick={() => setShowNavLinks(!showNavLinks)}
        >
          <MenuIcon sx={{ margin: 'auto' }} />
        </IconButton>

        <Link href="/">
          <a style={{ textDecoration: 'none' }}>
            <Typography variant="h6" color="black" noWrap>
              Mercy Relief
            </Typography>
          </a>
        </Link>

        <SearchBarWrapper />

        {/* Push NavLinks to next row at the md breakpoint */}
        <Box sx={{ flexBasis: { xs: '100%', md: 'unset' } }} />

        <NavLinks show={showNavLinks}>
          <NavLink href="/about-us">About Us</NavLink>
          <NavLink href="/impact">Impact</NavLink>
          <NavLink href="/events-news">Events & News</NavLink>
          <NavLink href="/join">Join</NavLink>
          <NavLink href="/donate">Donate</NavLink>
        </NavLinks>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
