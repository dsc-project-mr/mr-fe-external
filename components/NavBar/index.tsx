import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link, { LinkProps } from 'next/link'
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import React, { useState, useEffect, ReactElement } from 'react'
import FilledInput from '@mui/material/FilledInput'
import Button from '@mui/material/Button'
import Box from '@mui/system/Box'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'

// NavLink adapted from https://github.com/vercel/next.js/blob/canary/examples/active-class-name/components/ActiveLink.tsx
type NavLinkProps = LinkProps & { children: string | ReactElement }

const NavLink = ({ children, ...props }: NavLinkProps) => {
  const { asPath, isReady } = useRouter()

  const activeClassName = styles.navLinkActive!
  const normalClassName = styles.navLink!
  const [className, setClassName] = useState<string>(normalClassName)

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

      const newClassName =
        linkPathname === activePathname
          ? `${normalClassName} ${activeClassName}`
          : normalClassName

      if (newClassName !== className) {
        setClassName(newClassName)
      }
    }
  }, [
    asPath,
    isReady,
    props.as,
    props.href,
    normalClassName,
    activeClassName,
    setClassName,
    className,
  ])

  return (
    <Link {...props}>
      <a className={className}>
        <Typography sx={{ paddingBottom: { xs: 1, md: 0 } }} variant="subtitle2" display="inline" className={styles.navLinkText}>
          {children}
        </Typography>
      </a>
    </Link>
  )
}

const SearchBar = () => {
  return (
    <Box className={styles.searchbar} sx={{ margin: { xs: '0.6rem 0 0.6rem 2rem', md: '0.6rem 2rem' } }}>
      <FilledInput
        hiddenLabel
        disableUnderline
        size="small"
        className={styles.searchbarInput}
        placeholder="Search"
      />
    </Box>
  )
}

interface NavLinksProps {
  children: ReactElement[];
  show: boolean;
}

const NavLinks = ({children, show}: NavLinksProps) => {
  return (
    <Box sx={{
        display: { xs: show ? 'flex' : 'none', md: 'flex' },
        flexDirection: { xs: 'column', md: 'row' },
        flex: { xs: 1, md: 'unset' },
        marginBottom: { xs: 1, md: 'unset' }
      }} className={styles.navLinks}>
      {children}
    </Box>
  );
}

const NavBar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  return (
    <AppBar position="relative" className={styles.appbar}>
      <Toolbar className={styles.navFlex}>
        <IconButton sx={{ display: { xs: 'flex', md: 'none'}}} onClick={ () => setShowNavLinks(!showNavLinks) }>
          <MenuIcon sx={{ margin: 'auto' }}/>
        </IconButton>

        <Link href="/">
          <a className={styles.mainLink}>
            <Typography variant="h6" color="inherit" noWrap>
              Mercy Relief
            </Typography>
          </a>
        </Link>

        <SearchBar />

        <Box sx={{flexBasis: { xs: '100%', md: 'unset'}}}></Box>

        <NavLinks show={showNavLinks}>
          <NavLink href="/about-us">About Us</NavLink>
          <NavLink href="/impact">Impact</NavLink>
          <NavLink href="/events">Events & News</NavLink>
          <NavLink href="/join">Join</NavLink>
          <Button
            href="/donate"
            variant="outlined"
            className={styles.donateLink}>
            DONATE
          </Button>
        </NavLinks>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
