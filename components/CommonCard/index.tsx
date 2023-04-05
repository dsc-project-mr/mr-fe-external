import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'

const styledCard = {
  width: '400px',
  height: '500px',
  background: '#FFFFFF',
  boxShadow: '0px 0px 0px 1px #E0E0E0',
  borderRadius: '25px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: 1,
}

const styledCardContent = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
}

interface Props {
  location: string
  date: string
  title: string
  content: string
  imgSrc: string
  tags?: string[]
  actions?: JSX.Element
}

const CommonCard = ({
  location,
  date,
  title,
  content,
  imgSrc,
  tags,
  actions,
}: Props) => {
  return (
    <Card sx={styledCard}>
      <CardMedia title={title}>
        <Box component="img" src={imgSrc} width="100%" alt="" />
      </CardMedia>
      <CardContent sx={styledCardContent}>
        <Typography fontWeight={500} fontSize={14} color="#1976D2">
          {location} • {date}
        </Typography>
        <Typography fontWeight={500} fontSize={20}>
          {title}
        </Typography>
        <Typography variant="body2">{content}</Typography>
        <Box display="flex" gap="8px">
          {tags?.map((tag) => (
            <Chip
              label={tag}
              sx={{
                backgroundColor: '#E8EAF6',
                color: '#3F51B5',
              }}
              key={tag}
            />
          ))}
        </Box>
      </CardContent>
      <CardActions>{actions}</CardActions>
    </Card>
  )
}

export default CommonCard
