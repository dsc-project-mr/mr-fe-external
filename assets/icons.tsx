export const MRIcon = (props: {
  icon: any
  width: 50
  height: 50
  color: 'black'
}) => {
  return (
    <props.icon
      style={{ width: props.width, height: props.height, color: props.color }}
    />
  )
}
