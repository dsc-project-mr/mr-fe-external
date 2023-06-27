import { Box, Button, TextField, Typography } from '@mui/material'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import { ChangeEvent, useState } from 'react'
import { Line } from '../Line'

interface FormValues {
  first_name: string
  last_name: string
  age: number
  gender: string
  email: string
}

const InformedSegment = () => {
  const imgUrl = '/images/landing/informed_segment_bg.png'
  const [formValues, setFormValues] = useState<FormValues | object>({})

  const handleTextFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    console.log(formValues)
  }

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
        <Line />
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
            name="first_name"
            label="First Name"
            type="search"
            onChange={handleTextFieldChange}
            sx={{
              '& fieldset': {
                borderRadius: '25px',
              },
            }}
            fullWidth
          />
          <TextField
            id="outlined-search"
            name="last_name"
            label="Last Name"
            type="search"
            onChange={handleTextFieldChange}
            sx={{
              '& fieldset': {
                borderRadius: '25px',
              },
            }}
            fullWidth
          />
          <TextField
            id="outlined-search"
            name="age"
            label="Age"
            type="search"
            onChange={handleTextFieldChange}
            sx={{
              '& fieldset': {
                borderRadius: '25px',
              },
            }}
            fullWidth
          />
          <TextField
            id="outlined-search"
            name="gender"
            label="Gender"
            type="search"
            onChange={handleTextFieldChange}
            sx={{
              '& fieldset': {
                borderRadius: '25px',
              },
            }}
            fullWidth
          />
        </Box>
        <Box display="flex" width="100%">
          <TextField
            id="outlined-search"
            name="email"
            label="Email Address"
            type="search"
            fullWidth
            onChange={handleTextFieldChange}
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
                  sx={{
                    borderRadius: '25px',
                    height: '100%',
                    backgroundColor: '#1976D2',
                    width: '150px',
                  }}
                  onClick={handleSubmit}
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
