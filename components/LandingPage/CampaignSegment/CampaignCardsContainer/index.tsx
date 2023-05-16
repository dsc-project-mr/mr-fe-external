import { Box, Button } from '@mui/material'
import CommonCard from 'components/CommonCard'

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
      <Box
        display="flex"
        justifyContent="space-evenly"
        width="95%"
        columnGap={3}
        marginBottom="50px"
      >
        <CommonCard
          title="Lorem ipsum dolor sit amet"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          imgSrc="/images/landing/campaign_card_img_1.png"
          location="John Doe"
          date="4 Feb 2022"
          tags={['Tag 1', 'Tag 2', 'Tag 3']}
        />
        <CommonCard
          title="Lorem ipsum dolor sit amet"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          imgSrc="/images/landing/campaign_card_img_2.png"
          location="John Doe"
          date="4 Feb 2022"
          tags={['Tag 1', 'Tag 2', 'Tag 3']}
        />
        <CommonCard
          title="Lorem ipsum dolor sit amet"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          imgSrc="/images/landing/campaign_card_img_3.png"
          location="John Doe"
          date="4 Feb 2022"
          tags={['Tag 1', 'Tag 2', 'Tag 3']}
        />
      </Box>
      <Button variant="contained" size="large">
        See More
      </Button>
    </Box>
  )
}

export default CampaignCardsContainer
