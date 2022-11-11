import Tab, { TabProps } from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { CSSProperties } from '@mui/styled-engine'
import { ReactNode } from 'react'

type BreadcrumbProps = TabProps & { dividerWidth?: string }

interface BreadcrumbInnerProps {
  label: ReactNode
}

const BreadcrumbInner = ({ label }: BreadcrumbInnerProps) => {
  return (
    <div style={{ display: 'inline-flex' }}>
      <Box
        sx={{
          backgroundColor: 'primary.light',
          height: '1rem',
          width: '1rem',
          marginRight: '0.5rem',
          borderRadius: '50%',
        }}
      />
      {/* Here we use some CSS Tricks to avoid layout size changing when making the text bold */}
      {/* ref: https://css-tricks.com/bold-on-hover-without-the-layout-shift/ */}
      <Box
        data-text={label}
        sx={{
          textTransform: 'none',
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          textDecoration: 'none',

          '&::after': {
            content: 'attr(data-text) / ""',
            height: 0,
            visibility: 'hidden',
            overflow: 'hidden',
            userSelect: 'none',
            pointerEvents: 'none',
            fontWeight: 'bold',
          },
        }}
      >
        {label}
      </Box>
    </div>
  )
}

/** @see {@link Breadcrumbs} */
const Breadcrumb = ({ dividerWidth, label, ...props }: BreadcrumbProps) => {
  const marker: CSSProperties = {
    content: '" "',
    width: dividerWidth ?? '8rem',
    height: '2px',
    background: '#aaa',
    alignSelf: 'center',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
  }

  const inner = <BreadcrumbInner label={label} />

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        '&:not(:last-child)::after': marker,
      }}
    >
      <Tab {...props} label={inner} sx={{ padding: '0.2rem' }} />
    </Box>
  )
}

export default Breadcrumb
