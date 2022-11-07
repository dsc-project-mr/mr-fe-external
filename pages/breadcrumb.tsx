import type { NextPage } from 'next'

import Breadcrumb from 'components/Breadcrumb'
import Breadcrumbs from 'components/Breadcrumbs'
import { Box } from '@mui/material'
import { useState } from 'react'

const BreadcrumbDemo: NextPage = () => {
  const [value, setValue] = useState(0)
  return (
    <div>
      <Box>
        <Breadcrumbs value={value} onChange={(_, v) => setValue(v)}>
          <Breadcrumb label="Select Campaign" />
          <Breadcrumb label="Select Payment" />
          <Breadcrumb label="Donation Amount" />
          <Breadcrumb label="My Details" />
          <Breadcrumb label="Submit" />
        </Breadcrumbs>
      </Box>
      <div hidden={value !== 0}>Item One</div>
      <div hidden={value !== 1}>Item Two</div>
      <div hidden={value !== 2}>Item Three</div>
      <div hidden={value !== 3}>Item Four</div>
      <div hidden={value !== 4}>Item Five</div>
    </div>
  )
}

export default BreadcrumbDemo
