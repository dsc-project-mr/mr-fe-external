import { Box, Typography } from '@mui/material'

interface Props {
  title: string
  desc: string
  cardIcon: CardIcon
}

export enum CardIcon {
  PERSON = 'person',
  LOCATION = 'location',
  HEART = 'heart',
}

const StatsPanel = ({ title, desc, cardIcon }: Props) => {
  return (
    <Box
      sx={{
        width: '250px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box width={70}>
        <Box
          component="img"
          src={`/images/landing/statistics/${cardIcon}.png`}
          height="30px"
        />
      </Box>

      <Box
        sx={{
          height: '100px',
          width: '170px',
        }}
      >
        <Typography fontSize={18}>{title}</Typography>
        <Typography fontSize={14}>{desc}</Typography>
      </Box>
    </Box>
  )
}

export default StatsPanel
