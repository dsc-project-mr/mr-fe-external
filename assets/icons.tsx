// Required props
interface IconRequiredProps {
  Icon: any
}
// Optional props
interface IconOptionalProps {
  width: number
  height: number
  color: string
}
// Combine required and optional props to build the full prop interface
interface IconProps extends IconRequiredProps, IconOptionalProps {}
// Use the optional prop interface to define the default props
const defaultProps: IconOptionalProps = {
  width: 50,
  height: 50,
  color: 'red',
}
// Use the full props within the actual component
export const MRIcon = (props: IconProps) => {
  const { Icon, width, height, color } = props
  return <Icon style={{ width: width, height: height, color: color }} />
}
// Be sure to set the default props
MRIcon.defaultProps = defaultProps
