import { Box, Grid, Typography } from '@mui/material'
import StatsPanel from './StatsPanel'

const LandingPage = () => {
  return (
    <Box>
      <Grid>
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
          <div
            style={{
              zIndex: 2,
              position: 'absolute',
              left: '50%',
              bottom: '0%',
              height: '100px',
              width: '3px',
              backgroundColor: '#1976D2',
              transform: 'translate(-50%, 50%)',
            }}
          />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          alignItems="center"
          height={550}
        >
          <Typography
            width="60%"
            fontSize="22px"
            fontWeight={700}
            align="center"
          >
            We are Singapore’s leading independent disaster relief agency with
            dedicated leadership, capacity building expertise and an affiliate
            network operating across the entire disaster management cycle.
          </Typography>
          <Typography
            width="70%"
            fontSize="18px"
            fontWeight={300}
            align="center"
          >
            When disaster strikes, it is easy to see those affected as victims:
            desolate, destitute, and defeated. Here at Mercy Relief, we see
            things differently. We see people coming together to help one
            another, fight back, and protect their way of life. We witness their
            indomitable spirit, and are committed to supporting it.
          </Typography>
          <Box width="70%" display="flex" justifyContent="space-between">
            <StatsPanel />
            <StatsPanel />
            <StatsPanel />
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}
export default LandingPage
