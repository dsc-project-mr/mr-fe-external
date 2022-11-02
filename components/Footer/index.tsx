import Link, { LinkProps } from 'next/link'
import { ReactElement } from 'react'
import styles from './index.module.scss'

interface DetailsBoxProps {
  children: ReactElement[]
  header: string
}

const DetailsBox = ({ children, header }: DetailsBoxProps) => {
  return (
    <div className={styles.detailsBox}>
      <span className={styles.detailsHeader}>{header}</span>
      {children}
    </div>
  )
}

type DetailProps = LinkProps & { children: string | ReactElement }

const Detail = ({ children, ...props }: DetailProps) => {
  return (
    <Link {...props}>
      <a className={styles.detail}>{children}</a>
    </Link>
  )
}

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}></div>
      <DetailsBox header="Discover">
        <Detail href="/about-us">About Us</Detail>
        <Detail href="/our-commitment">Our Commitment</Detail>
        <Detail href="/contact">Contact</Detail>
      </DetailsBox>
      <DetailsBox header="Reach Out">
        <Detail href="/contact">Address</Detail>
        <Detail href="/contact">Telephone</Detail>
        <Detail href="/contact">Email</Detail>
      </DetailsBox>
    </footer>
  )
}

export default Footer
