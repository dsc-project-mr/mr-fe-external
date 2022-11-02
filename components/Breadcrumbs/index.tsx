import Tabs, { TabsProps } from '@mui/material/Tabs'

type BreadcrumbsProps = TabsProps

const Breadcrumbs = (props: BreadcrumbsProps) => {
  return (
    <Tabs
      {...props}
      sx={{
        '& .MuiTabs-indicator': { display: 'none' },
        '& .Mui-selected': { fontWeight: 'bold' },
      }}
    />
  )
}

export default Breadcrumbs
