import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Image from 'next/image'

const CorporatePartners = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
      py="6vh"
      sx={{ backgroundColor: '#C2EFFF' }}
    >
      <Box width="80%" mx="auto">
        <Typography variant="h3" component="h3" sx={{ fontWeight: 'bold' }}>
          CORPORATE PARTNERS
        </Typography>

        <br />

        <Typography variant="body1" component="p">
          Our partners play an important part in adding to Mercy Relief&#39;s
          resource capacity and network. They contribute funding, technology,
          products, expertise and other services that support our humanitarian
          activities.
        </Typography>

        <br />

        <Typography variant="body1" component="p">
          As the number of natural disasters in the region increases, their
          support has become even more important. With their help, we can
          deliver timely and effective assistance, and implement programmes that
          help communities not just recover, but thrive.
        </Typography>

        <br />

        <Grid container direction="row" spacing={8}>
          <Grid item xs={3}>
            <Image
              src="/images/donatepage/merci_marcel.png"
              alt=""
              width={295}
              height={110}
            />
          </Grid>
          <Grid item xs={3}>
            <Image
              src="/images/donatepage/singpost.png"
              alt=""
              width={295}
              height={110}
            />
          </Grid>
          <Grid item xs={3}>
            <Image
              src="/images/donatepage/deutsche_bank.png"
              alt=""
              width={295}
              height={110}
            />
          </Grid>
          <Grid item xs={3}>
            <Image
              src="/images/donatepage/singtel_dash.png"
              alt=""
              width={329}
              height={110}
            />
          </Grid>
        </Grid>
        <br />
        <Typography variant="body1" component="p">
          We believe strongly in collaboration and partnering with organisations
          and businesses to bring effective change and impact to vulnerable
          communities in Asia Pacific. If you are interested in collaborating
          with us, you can write to us at intouch@mercyrelief.org
        </Typography>
      </Box>
    </Box>
  )
}

export default CorporatePartners
