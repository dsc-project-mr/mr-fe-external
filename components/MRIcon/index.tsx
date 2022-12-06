// Required props
interface IconRequiredProps {
  Icon: any
}
// Optional props
interface IconOptionalProps {
  width?: number
  height?: number
  color?: string
}
// Combine required and optional props to build the full prop interface
type IconProps = IconRequiredProps & IconOptionalProps

// Use the optional prop interface to define the default props
const defaultProps: IconOptionalProps = {
  width: 50,
  height: 50,
  color: 'black',
}
// Use the full props within the actual component
const MRIcon = (props: IconProps) => {
  const { Icon, width, height, color } = props
  return <Icon style={{ width: width, height: height, color: color }} />
}

export default MRIcon

// Be sure to set the default props
MRIcon.defaultProps = defaultProps
