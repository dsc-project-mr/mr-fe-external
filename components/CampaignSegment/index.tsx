import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import CampaignPanel from './CampaignPanel'

const CampaignSegment = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url(/campaign_background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '500px',
        }}
      >
        <Carousel
          animation="slide"
          navButtonsAlwaysVisible
          duration={900}
          interval={4000}
        >
          <CampaignPanel />
          <CampaignPanel />
          <CampaignPanel />
        </Carousel>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
        paddingTop="70px"
        paddingBottom="70px"
      >
        <div>Line</div>
        <Box display="flex" justifyContent="space-evenly">
          <Card sx={styledCard}>
            <CardMedia>
              <Box
                component="img"
                src={'/campaign_card_img_1.png'}
                width="100%"
              />
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
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

          <Card sx={styledCard}>
            <CardMedia>
              <Box
                component="img"
                src={'/campaign_card_img_1.png'}
                width="100%"
              />
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
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

          <Card sx={styledCard}>
            <CardMedia>
              <Box
                component="img"
                src={'/campaign_card_img_1.png'}
                width="100%"
              />
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
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
        </Box>
        <Button variant="contained" size="large">
          See More
        </Button>
      </Box>
    </>
  )
}

export default CampaignSegment

const styledCard = {
  width: '350px',
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
