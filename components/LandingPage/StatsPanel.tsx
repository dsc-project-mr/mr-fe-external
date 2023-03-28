import { Box, Typography } from '@mui/material'

const StatsPanel = () => {
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
          src="/images/landing/statistics/person.png"
          height="30px"
        />
      </Box>

      <Box
        sx={{
          height: '100px',
          width: '170px',
        }}
      >
        <Typography fontSize={18}>Statistics 1</Typography>
        <Typography fontSize={14}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>
      </Box>
    </Box>
  )
}

export default StatsPanel
