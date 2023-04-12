import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'

const styledCard = {
  width: '400px',
  background: '#FFFFFF',
  boxShadow: '0px 0px 0px 1px #E0E0E0',
  borderRadius: '25px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

interface Props {
  location?: string
  date: string
  title: string
  content: string
  imgSrc: string
  tags?: string[]
  actions?: JSX.Element
  daysLeft?: number
}

const CommonCard = ({
  location,
  date,
  title,
  content,
  imgSrc,
  tags,
  actions,
  daysLeft,
}: Props) => {
  return (
    <Card sx={styledCard}>
      <CardMedia title={title}>
        <Box component="img" src={imgSrc} width="100%" alt="" />
      </CardMedia>
      <CardContent>
        <Typography fontWeight={500} fontSize={14} color="#1976D2">
          {location ? `${location} • ${date}` : date}
        </Typography>
        <Typography fontWeight={500} fontSize={20} color="#000000DE">
          {title}
        </Typography>
        <Typography variant="body2">{content}</Typography>
        {tags && tags.length && (
          <Box display="flex" gap="8px" paddingTop={4}>
            {tags.map((tag) => (
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
        )}
        {daysLeft !== undefined && (
          <Typography
            fontWeight={700}
            fontSize={14}
            align="right"
            color="#C7043D"
          >
            {daysLeft} Days Left
          </Typography>
        )}
      </CardContent>
      {actions && (
        <CardActions sx={{ width: '100%', padding: 0, height: '60px' }}>
          {actions}
        </CardActions>
      )}
    </Card>
  )
}

export default CommonCard
