import { Box, Typography } from '@mui/material'
import StatsPanel, { CardIcon } from './StatsPanel'

const DescriptionContainer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems="center"
      height={550}
    >
      <Typography width="60%" fontSize="22px" fontWeight={700} align="center">
        We are Singapore’s leading independent disaster relief agency with
        dedicated leadership, capacity building expertise and an affiliate
        network operating across the entire disaster management cycle.
      </Typography>
      <Typography width="70%" fontSize="18px" fontWeight={300} align="center">
        When disaster strikes, it is easy to see those affected as victims:
        desolate, destitute, and defeated. Here at Mercy Relief, we see things
        differently. We see people coming together to help one another, fight
        back, and protect their way of life. We witness their indomitable
        spirit, and are committed to supporting it.
      </Typography>
      <Box width="70%" display="flex" justifyContent="space-between">
        <StatsPanel
          title="Statistic 1"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          cardIcon={CardIcon.PERSON}
        />
        <StatsPanel
          title="Statistic 2"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          cardIcon={CardIcon.LOCATION}
        />
        <StatsPanel
          title="Statistic 3"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          cardIcon={CardIcon.HEART}
        />
      </Box>
    </Box>
  )
}

export default DescriptionContainer
