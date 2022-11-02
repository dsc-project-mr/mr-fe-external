import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link, { LinkProps } from 'next/link'
import styles from './index.module.scss'
import { useRouter } from 'next/router'
import React, { useState, useEffect, ReactElement } from 'react'
import FilledInput from '@mui/material/FilledInput'
import Button from '@mui/material/Button'

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
        <Typography variant="subtitle2" display="inline">
          {children}
        </Typography>
      </a>
    </Link>
  )
}

const SearchBar = () => {
  return (
    <FilledInput
      hiddenLabel
      disableUnderline
      className={styles.searchbar}
      size="small"
      placeholder="Search"
    />
  )
}

const NavBar = () => {
  return (
    <AppBar position="relative" className={styles.appbar}>
      <Toolbar>
        <Link href="/">
          <a className={styles.mainLink}>
            <Typography variant="h6" color="inherit" noWrap>
              Mercy Relief
            </Typography>
          </a>
        </Link>
        <SearchBar />
        <div className={styles.navLinks}>
          <NavLink href="/about-us">About Us</NavLink>
          <NavLink href="/impact">Impact</NavLink>
          <NavLink href="/events">Events & News</NavLink>
          <NavLink href="/join">Join</NavLink>
          <Button
            href="/donate"
            variant="outlined"
            className={styles.donateLink}
          >
            DONATE
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
