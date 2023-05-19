import { Divider } from '@mui/material'

export const Line = () => {
  return (
    <Divider
      variant="middle"
      sx={{
        width: '100px',
        height: '5px',
        backgroundColor: 'black',
        borderRadius: '5px',
      }}
    />
  )
}
