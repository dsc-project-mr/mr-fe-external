import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const OtherWaysToHelp = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      textAlign="center"
      py="5vh"
      sx={{ backgroundColor: '#023F84', color: '#FFF' }}
    >
      <Typography variant="h3" component="h3" sx={{ fontWeight: 'bold' }}>
        OTHER WAYS TO HELP
      </Typography>
      <br />
      <Box
        px="5vw"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        gap={8}
      >
        <Box textAlign="center" my="3vh">
          <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
            ADOPT A PROJECT
          </Typography>
          <br />
          <Typography variant="body1" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <br />
          <Button
            variant="contained"
            sx={{
              pt: 2,
              pr: 5,
              pb: 2,
              pl: 5,
              color: '#009DD7',
              backgroundColor: '#FFFFFF',
              fontWeight: 'bold',
            }}
          >
            ADOPT NOW
          </Button>
        </Box>

        <Box textAlign="center">
          <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
            FUNDRAISE FOR US
          </Typography>
          <br />
          <Typography variant="body1" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <br />
          <Button
            variant="contained"
            sx={{
              pt: 2,
              pr: 5,
              pb: 2,
              pl: 5,
              color: '#009DD7',
              backgroundColor: '#FFFFFF',
              fontWeight: 'bold',
            }}
          >
            SPONSOR NOW
          </Button>
        </Box>

        <Box textAlign="center">
          <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold' }}>
            OTHER WAYS TO GIVE
          </Typography>
          <br />
          <Typography variant="body1" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <br />
          <Button
            variant="contained"
            sx={{
              pt: 2,
              pr: 5,
              pb: 2,
              pl: 5,
              color: '#009DD7',
              backgroundColor: '#FFFFFF',
              fontWeight: 'bold',
            }}
          >
            FIND OUT MORE
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default OtherWaysToHelp
