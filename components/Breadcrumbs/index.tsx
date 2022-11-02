import Tabs, { TabsProps } from '@mui/material/Tabs'

type BreadcrumbsProps = TabsProps

/**
 * `Breadcrumbs`/`Breadcrumb` element, similar to `Tabs`/`Tab` element. Usage is based on the
 * [MUI Tabs](https://mui.com/material-ui/react-tabs/#basic-tabs) example.
 *
 * @example
 * ```ts
 * const Example = () => {
 *   const [value, setValue] = useState(0)
 *   return (
 *     <div>
 *       <Box>
 *         <Breadcrumbs value={value} onChange={(_, v) => setValue(v)}>
 *           <Breadcrumb label="Select Campaign" />
 *           <Breadcrumb label="Select Payment" />
 *           <Breadcrumb label="Donation Amount" />
 *           <Breadcrumb label="My Details" />
 *           <Breadcrumb label="Submit" />
 *         </Breadcrumbs>
 *       </Box>
 *       <div hidden={value != 0}>Item One</div>
 *       <div hidden={value != 1}>Item Two</div>
 *       <div hidden={value != 2}>Item Three</div>
 *       <div hidden={value != 3}>Item Four</div>
 *       <div hidden={value != 4}>Item Five</div>
 *     </div>
 *   )
 * }
 * ```
 */
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
