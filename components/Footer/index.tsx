import Link, { LinkProps } from 'next/link'
import { ReactElement } from 'react'

interface DetailsBoxProps {
  children: ReactElement[]
  header: string
}

const DetailsBox = ({ children, header }: DetailsBoxProps) => {
  return (
    <div style={{ display: 'block', marginRight: '4rem' }}>
      <span
        style={{
          display: 'block',
          fontWeight: 'bold',
          borderBottom: '1px solid #ddd',
        }}
      >
        {header}
      </span>
      {children}
    </div>
  )
}

type DetailProps = LinkProps & { children: string | ReactElement }

const Detail = ({ children, ...props }: DetailProps) => {
  return (
    <Link {...props}>
      <a style={{ display: 'block', marginTop: '1rem', color: '#888' }}>
        {children}
      </a>
    </Link>
  )
}

const Footer = () => {
  return (
    <footer
      style={{
        display: 'flex',
        padding: '2rem 0',
        background: '#eee',
        color: '#333',
      }}
    >
      {/* Info element/MR logo */}
      <div style={{ flex: 1 }}></div>

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
