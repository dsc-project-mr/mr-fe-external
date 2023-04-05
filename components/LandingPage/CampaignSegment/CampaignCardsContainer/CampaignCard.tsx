import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from '@mui/material'

const CampaignCard = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <Card sx={styledCard}>
      <CardMedia>
        <Box component="img" src={imgSrc} width="100%" />
      </CardMedia>
      <CardContent sx={styledCardContent}>
        <Typography fontWeight={500} fontSize={14} color="#1976D2">
          John Doe • 4 Feb 2022
        </Typography>
        <Typography fontWeight={500} fontSize={20}>
          Lorem ipsum dolor sit amet
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Typography>
        <Box display="flex" gap="8px">
          <Chip
            label="Tag 1"
            sx={{
              backgroundColor: '#E8EAF6',
              color: '#3F51B5',
            }}
          />
          <Chip
            label="Tag 2"
            sx={{
              backgroundColor: '#EDE7F6',
              color: '#673AB7',
            }}
          />
        </Box>
      </CardContent>
    </Card>
  )
}

export default CampaignCard

const styledCard = {
  width: '400px',
  height: '500px',
  background: '#FFFFFF',
  boxShadow: '0px 0px 0px 1px #E0E0E0',
  borderRadius: '25px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  margin: 10,
}

const styledCardContent = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
}
