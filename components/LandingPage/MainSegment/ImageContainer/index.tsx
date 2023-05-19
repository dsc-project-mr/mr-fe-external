import { Box } from '@mui/material'
import Line from './Line'

const ImageContainer = () => {
  return (
    <Box
      width="100%"
      sx={{
        backgroundColor: '#C2EFFF',
        position: 'relative',
        overflow: 'hidden',
        '&:after': {
          content: '""',
          position: 'absolute',
          height: '200px',
          width: '100%',
          left: '50%',
          transform: 'translate(-50%, 50%)',
          borderRadius: '50%',
          bottom: '0%',
          background: '#fff',
          zIndex: 1,
        },
      }}
    >
      <Box
        width="100%"
        component="img"
        src="/images/landing/landing_main_img.png"
        sx={{
          opacity: 0.5,
        }}
      />
      <Line />
    </Box>
  )
}

export default ImageContainer
