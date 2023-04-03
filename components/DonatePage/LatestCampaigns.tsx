import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Image from 'next/image'
import Chip from '@mui/material/Chip'

const LastestCampaigns = () => {
  return (
    <Box display="flex" flexDirection="column" textAlign="center">
      <Typography variant="h3" component="h3" sx={{ fontWeight: 'bold' }}>
        Latest Campaigns
      </Typography>
      <br />
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        gap={2}
      >
        <CampaignCard
          location="John Doe"
          date="4 Feb 2022"
          cardTitle="Lorem ipsum dolor sit amet"
          cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          cardImage="/images/donatepage/card_placeholder.png"
        />
        <CampaignCard
          location="John Doe"
          date="4 Feb 2022"
          cardTitle="Lorem ipsum dolor sit amet"
          cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          cardImage="/images/donatepage/card_placeholder.png"
        />
        <CampaignCard
          location="John Doe"
          date="4 Feb 2022"
          cardTitle="Lorem ipsum dolor sit amet"
          cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          cardImage="/images/donatepage/card_placeholder.png"
          tags={['Tag 1', 'Tag 2', 'Tag 3']}
        />
      </Box>
      <Box>
        <Button variant="contained" sx={{ mt: 4 }}>
          See More
        </Button>
      </Box>
    </Box>
  )
}

export default LastestCampaigns

type Props = {
  location: string
  date: string
  cardTitle: string
  cardContent: string
  cardImage: string
  tags?: string[]
}

const CampaignCard = ({
  location,
  date,
  cardTitle,
  cardContent,
  cardImage,
  tags,
}: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia title={cardTitle}>
        <Image src={cardImage} alt="" width="100%" height="100%" />
      </CardMedia>
      <CardContent sx={{ textAlign: 'left' }}>
        <Typography color="#1976D2">
          {location} • {date}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {cardTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cardContent}
        </Typography>
        <Box display="flex" alignItems="left" gap={1} mt={1}>
          {tags?.map((tag, i) => (
            <Chip label={tag} color="secondary" variant="outlined" key={i} />
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Grid container display="flex" flexDirection="column" spacing={1}>
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
      </CardActions>
    </Card>
  )
}
