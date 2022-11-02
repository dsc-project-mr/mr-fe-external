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
      <span style={{ textTransform: 'none' }}>{label}</span>
    </div>
  )
}

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
      <Tab {...props} label={inner} sx={{ padding: 0 }} />
    </Box>
  )
}

export default Breadcrumb
