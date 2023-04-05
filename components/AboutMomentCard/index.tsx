import { Grid, Typography } from '@mui/material'
import { StaticImageData } from 'next/image'
import Image from 'next/image'

interface Props {
  title: string
  desc: string
  img: StaticImageData
}

const MomentCard = ({ title, desc, img }: Props) => {
  return (
    <Grid xs={1}>
      <Image width={230} height={200} alt="thumbnail" src={img.src} />
      <Typography
        textAlign={'center'}
        fontFamily="roboto"
        fontWeight={700}
        color="#00000"
        fontSize={20}
      >
        {title}
      </Typography>
      <Typography
        textAlign={'center'}
        fontFamily="roboto"
        fontWeight={400}
        fontSize={20}
      >
        {desc}
      </Typography>
    </Grid>
  )
}

export default MomentCard
