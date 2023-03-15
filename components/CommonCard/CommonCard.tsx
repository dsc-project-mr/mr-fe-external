import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

interface Props {
  cardTitle: string
  cardContent: string
  cardImage: string
  buttonName: string
}

const CommonCard = ({
  cardTitle,
  cardContent,
  cardImage,
  buttonName,
}: Props) => {
  return (
    <Card sx={styledCard}>
      <CardContent sx={styledCardContent}>
        <CardMedia title={cardTitle}>
          <Image src={cardImage} height="114" width="114" alt="" />
        </CardMedia>
        <Typography variant="h5" gutterBottom>
          {cardTitle}
        </Typography>
        <Typography variant="body2">{cardContent}</Typography>
      </CardContent>
      <CardActions>
        <Button
          color="info"
          variant="contained"
          onClick={() => {
            alert('clicked')
          }}
          sx={{ marginBottom: '10px' }}
        >
          {buttonName}
        </Button>
      </CardActions>
    </Card>
  )
}

export default CommonCard

const styledCard = {
  maxWidth: 500,
  maxHeight: 500,
  background: '#FFFFFF',
  boxShadow: '0px 0px 0px 1px #E0E0E0',
  borderRadius: '25px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 10,
}

const styledCardContent = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}
