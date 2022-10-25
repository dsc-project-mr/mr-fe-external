import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link, { LinkProps } from 'next/link';
import styles from './index.module.scss'
import { useRouter } from 'next/router';
import React, { useState, useEffect, ReactElement, Children } from 'react';
import FilledInput from '@mui/material/FilledInput';
import { Button } from '@mui/material';

// ActiveLink adapted from https://github.com/vercel/next.js/blob/canary/examples/active-class-name/components/ActiveLink.tsx
type ActiveLinkProps = LinkProps & {
  children: ReactElement
  activeClassName: string
};

const ActiveLink = ({
  children,
  activeClassName,
  ...props
}: ActiveLinkProps) => {
  const { asPath, isReady } = useRouter()

  const child = Children.only(children)
  const childClassName = child.props.className || ''
  const [className, setClassName] = useState(childClassName)

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
          ? `${childClassName} ${activeClassName}`.trim()
          : childClassName

      if (newClassName !== className) {
        setClassName(newClassName)
      }
    }
  }, [
    asPath,
    isReady,
    props.as,
    props.href,
    childClassName,
    activeClassName,
    setClassName,
    className,
  ])

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
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
      placeholder="Search"/>
  )
}

const navLinks = [
  { href: "/about-us", text: "About Us" },
  { href: "/impact", text: "Impact" },
  { href: "/events", text: "Events & News" },
  { href: "/join", text: "Join" },
];

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
        <SearchBar/>
        <div className={styles.navLinks}>
          {navLinks.map(link => (
            <ActiveLink key={link.href} href={link.href} activeClassName={styles.navLinkActive!}>
              <a className={styles.navLink}>
                <Typography variant="subtitle2" display="inline">
                  {link.text}
                </Typography>
              </a>
            </ActiveLink>
          ))}
          <Button href='/donate' variant='outlined' className={styles.donateLink}>DONATE</Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
