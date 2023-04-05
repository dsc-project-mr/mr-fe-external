import { Grid, Button } from '@mui/material'
import CommonCard from 'components/CommonCard'

const CardPage = () => {
  return (
    <CommonCard
      title="Lorem ipsum dolor sit amet"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      imgSrc="/images/landing/landing_main_img.png"
      location="John Doe"
      date="4 Feb 2022"
      tags={['Tag 1', 'Tag 2', 'Tag 3']}
      actions={
        <Grid
          container
          display="flex"
          flexDirection="column"
          spacing={1}
          alignItems="center"
        >
          <Grid item>
            <Button
              variant="contained"
              size="small"
              sx={{ pt: 1, pr: 4, pb: 1, pl: 4 }}
            >
              Donate Now
            </Button>
          </Grid>
          <Grid item>
            <Button size="small">Learn More</Button>
          </Grid>
        </Grid>
      }
    />
  )
}

export default CardPage
