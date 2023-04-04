import { Box, Button } from '@mui/material'
import CampaignCard from './CampaignCard'

const CampaignCardsContainer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-evenly"
      paddingTop="70px"
      paddingBottom="70px"
    >
      <div>Line</div>
      <Box display="flex" justifyContent="space-evenly" width="100%">
        <CampaignCard imgSrc="/campaign_card_img_1.png" />
        <CampaignCard imgSrc="/campaign_card_img_2.png" />
        <CampaignCard imgSrc="/campaign_card_img_3.png" />
      </Box>
      <Button variant="contained" size="large">
        See More
      </Button>
    </Box>
  )
}

export default CampaignCardsContainer
