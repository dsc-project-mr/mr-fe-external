import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect, ReactElement, CSSProperties } from 'react'
import FilledInput from '@mui/material/FilledInput'
import Button from '@mui/material/Button'
import Box from '@mui/system/Box'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'

// NavLink adapted from https://github.com/vercel/next.js/blob/canary/examples/active-class-name/components/ActiveLink.tsx
type NavLinkProps = LinkProps & { children: string | ReactElement }

const navLinkActiveStyle: CSSProperties = {
  textDecoration: 'underline',
  textUnderlineOffset: '0.4rem',
  textDecorationThickness: '0.15rem',
}
const navLinkStyle: CSSProperties = {
  margin: '0 1rem 0 0',
  textTransform: 'uppercase',
  textDecoration: 'none',
  display: 'inline-flex',
}

const NavLink = ({ children, ...props }: NavLinkProps) => {
  const { asPath, isReady } = useRouter()

  const [style, setStyle] = useState<CSSProperties>(navLinkStyle)

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      const linkPathname = new URL(
        (props.as || props.href) as string,
        location.href
      ).pathname

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname

      const newStyle =
        linkPathname === activePathname
          ? { ...navLinkStyle, ...navLinkActiveStyle }
          : navLinkStyle

      if (newStyle !== style) {
        setStyle(newStyle)
      }
    }
  }, [asPath, isReady, props.as, props.href, setStyle, style])

  return (
    <Link {...props}>
      <a style={style}>
        <Typography
          sx={{ margin: 'auto 0', paddingBottom: { xs: 1, md: 0 } }}
          variant="subtitle2"
          display="inline"
          fontWeight="bold"
        >
          {children}
        </Typography>
      </a>
    </Link>
  )
}

const SearchBar = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        margin: { xs: '0.6rem 0 0.6rem 2rem', md: '0.6rem 2rem' },
      }}
    >
      <FilledInput
        hiddenLabel
        disableUnderline
        size="small"
        sx={{
          borderRadius: '0.4rem',
          color: 'inherit',
          minWidth: '40%',
          margin: '0 0 0 auto',
        }}
        placeholder="Search"
      />
    </Box>
  )
}

interface NavLinksProps {
  children: ReactElement[]
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
  const buttonBorderWidth = '0.2rem'

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
            <Typography variant="h6" color="inherit" noWrap>
              Mercy Relief
            </Typography>
          </a>
        </Link>

        <SearchBar />

        <Box sx={{ flexBasis: { xs: '100%', md: 'unset' } }}></Box>

        <NavLinks show={showNavLinks}>
          <NavLink href="/about-us">About Us</NavLink>
          <NavLink href="/impact">Impact</NavLink>
          <NavLink href="/events">Events & News</NavLink>
          <NavLink href="/join">Join</NavLink>
          <Button
            href="/donate"
            variant="outlined"
            sx={{
              borderWidth: buttonBorderWidth,
              fontWeight: 'bold',
              '&:hover': {
                borderWidth: buttonBorderWidth,
              },
            }}
          >
            DONATE
          </Button>
        </NavLinks>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
