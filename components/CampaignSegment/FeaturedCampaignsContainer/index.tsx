import { Box } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import CampaignPanel from './CampaignPanel'

const FeaturedCampaignsContainer = () => {
  return (
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
  )
}

export default FeaturedCampaignsContainer
