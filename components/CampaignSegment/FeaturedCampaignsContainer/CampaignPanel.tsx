import { Box, Button, Typography } from '@mui/material'

const CampaignPanel = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <Box
        width="75%"
        height="80%"
        borderRadius="25px"
        paddingLeft="100px"
        paddingRight="100px"
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ backgroundColor: '#C2EFFF' }}
      >
        <Typography
          textTransform="uppercase"
          variant="h5"
          textAlign="center"
          fontWeight={700}
        >
          feature campaign name
        </Typography>
        <Typography fontWeight={300} textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Typography>
        <Button variant="contained" size="large">
          View More
        </Button>
      </Box>
    </div>
  )
}

export default CampaignPanel
