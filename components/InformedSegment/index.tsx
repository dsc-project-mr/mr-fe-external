import { Box, Button, TextField, Typography } from '@mui/material'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'

const InformedSegment = () => {
  const imgUrl = '/images/landing/informed_segment_bg.png'

  return (
    <Box
      width="100%"
      height="700px"
      sx={{
        backgroundImage: `url(${imgUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: '100% 100%',
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        height="70%"
        width="80%"
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Typography fontSize={28} fontWeight={700}>
          Subscribe to Stay Informed
        </Typography>
        <Typography fontSize={24} fontWeight={300} textAlign="center">
          Sign up to our monthly newsletter to get inspired and keep up to date
          on Mercy Relief around the world.
        </Typography>
        <Box display="flex" justifyContent="space-between" width="100%" gap={5}>
          <TextField
            id="outlined-search"
            label="First Name"
            type="search"
            sx={{
              '& fieldset': {
                borderRadius: '25px',
              },
            }}
          />
          <TextField
            id="outlined-search"
            label="Last Name"
            type="search"
            sx={{
              '& fieldset': {
                borderRadius: '25px',
              },
            }}
          />
          <TextField
            id="outlined-search"
            label="Age"
            type="search"
            sx={{
              '& fieldset': {
                borderRadius: '25px',
              },
            }}
          />
          <TextField
            id="outlined-search"
            label="Gender"
            type="search"
            sx={{
              '& fieldset': {
                borderRadius: '25px',
              },
            }}
          />
        </Box>
        <Box display="flex" width="100%">
          <TextField
            id="outlined-search"
            label="Email Address"
            type="search"
            fullWidth
            sx={{
              '& fieldset': {
                borderRadius: '25px',
              },
              '& .MuiInputBase-root': {
                paddingRight: 0,
              },
            }}
            InputProps={{
              endAdornment: (
                <Button
                  variant="contained"
                  sx={{ borderRadius: '25px', height: '100%' }}
                >
                  Subscribe
                </Button>
              ),
            }}
          />
        </Box>

        <Box display="flex" gap={5}>
          <YouTubeIcon fontSize="large" />
          <TwitterIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
          <FacebookIcon fontSize="large" />
        </Box>
      </Box>
    </Box>
  )
}

export default InformedSegment
