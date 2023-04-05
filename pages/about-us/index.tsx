import { Box, Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import MomentCard from 'components/AboutMomentCard'
import Image from 'next/image'
import aboutmoment1 from 'public/images/aboutmoment1.png'
import aboutmoment2 from 'public/images/aboutmoment2.png'
import aboutmoment3 from 'public/images/aboutmoment3.png'
import aboutmoment4 from 'public/images/aboutmoment4.png'
import aboutmoment5 from 'public/images/aboutmoment5.png'
import aboutmoment6 from 'public/images/aboutmoment6.png'
import blueEllipse from 'public/images/blueEllipse.png'
import redEllipse from 'public/images/redEllipse.png'
import React from 'react'
import { useState } from 'react'

const styledCardOverlayBanner = {
  display: 'flex',
  flexDirection: 'column',
  height: '50%',
  backgroundColor: '#FAB800',
  padding: '20px',
} as React.CSSProperties

const styledMoreInfoCard = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'grey',
  margin: '10px',
  justifyContent: 'flex-end',
  width: '100%',
  height: '500px',
} as React.CSSProperties

const styledSliderCard = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  padding: '30px',
  backgroundColor: '#023F84',
  width: '100%',
  height: '800px',
} as React.CSSProperties

const styledEllipseCard = {
  position: 'relative',
  width: '100vh',
  height: '600px',
} as React.CSSProperties

const styledDashEllipse = {
  position: 'absolute',
  top: '0',
  left: '0',
  margin: '50px auto',
} as React.CSSProperties

const styledLargeCircle = {
  position: 'absolute',
  backgroundColor: '#FAB800',
  height: '600px',
  width: '85%',
  borderRadius: '50%',
  padding: '10%',
  right: '0',
  left: '0',
  top: '0',
  bottom: '0',
  margin: '0px auto',
} as React.CSSProperties

const styledlowersection = {
  display: 'flex',
  padding: '0px 15%',
  flexDirection: 'column',
}

const styledsection = {
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  alignItems: 'center',
}

const styledmain = {
  display: 'flex',
  width: '100%',
  height: '100%',
}

const styledLine = {
  borderLeft: '5px solid #1976D2',
  height: '70px',
  marginTop: '50px',
}

const styledImageBox = {
  borderRadius: '50%',
  backgroundColor: 'grey',
}
const AboutUsPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleMouseDown = (direction: string) => {
    let scrollInterval = setInterval(() => {
      if (direction === 'left') {
        setScrollPosition((prevPosition) => prevPosition - 10)
      } else {
        setScrollPosition((prevPosition) => prevPosition + 10)
      }
    }, 10)

    document.addEventListener('mouseup', () => {
      clearInterval(scrollInterval)
    })
  }

  return (
    <Stack direction={'column'} spacing={5} sx={styledmain}>
      <Box sx={styledsection}>
        <div
          style={{
            backgroundColor: 'grey',
            width: '100%',
            height: '500px',
            display: 'flex',
          }}
        >
          <div
            style={{
              position: 'absolute',
              borderRadius: '50% 50% 0 0/100% 100% 0 0',
              top: '48%',
              width: '100%',
              height: '100px',
              backgroundColor: 'white',
            }}
          ></div>
        </div>
      </Box>
      <Box gap={8} sx={styledsection}>
        <Typography
          fontWeight={700}
          fontSize={40}
          color="#009DD7"
          fontFamily="roboto"
        >
          WHAT MAKES US MERCY RELIEF?
        </Typography>
        <Typography
          textAlign={'center'}
          margin="0px 20%"
          fontFamily="roboto"
          fontWeight={400}
          fontSize={20}
        >
          Today, we are Singapore’s leading independent disaster relief agency
          with dedicated leadership, capacity building expertise and an
          affiliate network operating across the entire disaster management
          cycle.
        </Typography>
        <Grid
          alignItems={'center'}
          justifyContent={'center'}
          textAlign={'center'}
          container
          spacing={0}
          columns={2}
        >
          <Grid xs={1}>
            <Box>
              <Typography
                fontWeight={700}
                fontSize={40}
                color="#009DD7"
                fontFamily="roboto"
              >
                Our Mission
              </Typography>
              <Typography
                textAlign={'center'}
                margin="0px 20%"
                fontFamily="roboto"
                fontWeight={400}
                fontSize={20}
              >
                To provide timely and effective aid when disasters strike, and
                empower communities in Asia Pacific.
              </Typography>
            </Box>
          </Grid>
          <Grid xs={1}>
            <Image
              src=""
              width={500}
              height={300}
              alt=""
              style={styledImageBox}
            />
          </Grid>
          <Grid xs={2}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src="/images/aboutarrowleft.png"
                width="100%"
                height="100%"
              />
              <Typography
                fontWeight={300}
                fontSize={45}
                color="#009DD7"
                fontFamily="Pacifico"
              >
                Who we are
              </Typography>
              <Image
                src="/images/aboutarrowright.png"
                width="100%"
                height="100%"
              />
            </div>
          </Grid>
          <Grid xs={1}>
            <Image
              src=""
              width={500}
              height={300}
              alt=""
              style={styledImageBox}
            />
          </Grid>
          <Grid xs={1}>
            <Typography
              fontWeight={700}
              fontSize={40}
              color="#009DD7"
              fontFamily="roboto"
            >
              Our Vision
            </Typography>
            <Typography
              textAlign={'center'}
              margin="0px 20%"
              fontFamily="roboto"
              fontWeight={400}
              fontSize={20}
            >
              Championing compassion and care
            </Typography>
          </Grid>
          <div style={styledLine} />
        </Grid>
        <Grid
          alignItems={'center'}
          justifyContent={'center'}
          textAlign={'center'}
          paddingX={15}
          container
          spacing={0}
          columns={3}
        >
          <Grid xs={3} marginY={10}>
            <Typography
              textAlign={'center'}
              fontFamily="roboto"
              fontWeight={700}
              color="#009DD7"
              fontSize={40}
            >
              MOMENTS THAT MADE US
            </Typography>
            <Typography
              textAlign={'center'}
              fontFamily="roboto"
              fontWeight={400}
              fontSize={20}
            >
              Explore the moments that made Mercy Relief in this visual timeline
              showcasing the history of our organisation.
            </Typography>
          </Grid>
          <MomentCard
            img={aboutmoment1}
            title="26 COUNTRIES"
            desc="where Mercy Relief has been active in"
          />
          <MomentCard
            img={aboutmoment2}
            title="72 HOURS"
            desc="time within which emergency aid is delivered, from appeal to assistance"
          />
          <MomentCard
            img={aboutmoment3}
            title="$45.8 MILLION"
            desc="funds disbursed up to 2021"
          />
          <MomentCard
            img={aboutmoment4}
            title="87"
            desc="immediate relied operations executed"
          />
          <MomentCard
            img={aboutmoment5}
            title="75"
            desc="post-disaster projects implemented"
          />
          <MomentCard
            img={aboutmoment6}
            title="2.7 MILLION"
            desc="lives impacted"
          />
        </Grid>
        <Grid xs={3} marginY={10}>
          <div style={styledEllipseCard}>
            <div style={styledDashEllipse}>
              <Image
                width={1600}
                height={750}
                src={redEllipse}
                alt="redDashEllipse"
                style={{ position: 'absolute', top: '0', left: '0' }}
              />
            </div>
            <div style={styledDashEllipse}>
              <Image
                width={1600}
                height={650}
                src={blueEllipse}
                alt="blueDashEllipse"
                style={{ position: 'absolute', top: '0', left: '0' }}
              />
            </div>
            <div style={styledLargeCircle}>
              <Typography
                textAlign={'center'}
                fontFamily="roboto"
                fontSize={20}
              >
                Headquartered in Singapore, Mercy Relief was established in 2003
                to respond to human tragedies and disasters in Asia Pacific.
                Today, we are Singapore’s leading independent disaster relief
                agency with dedicated leadership, capacity building expertise
                and an affiliate network operating across the entire disaster
                management cycle. Mercy Relief provides emergency aid within 72
                hours of an appeal in the aftermath of a disaster. Our
                longer-term sustainable development programmes aim to uplift and
                empower communities in five key areas: water and sanitation,
                shelter, sustainable livelihoods, healthcare and education. For
                the past 19 years, Mercy Relief has responded to more than 86
                human tragedies with more than $45.3 million in relief across 26
                countries. We have implemented more than 72 post-disaster
                projects and impacted an aggregate of over 2.7 million lives.
              </Typography>
            </div>
          </div>
        </Grid>
      </Box>
      <Box sx={styledSliderCard}>
        <Typography
          color={'white'}
          textAlign={'center'}
          fontFamily="roboto"
          fontSize={40}
          fontWeight={700}
        >
          MOMENTS THAT MADE US
        </Typography>
        <Typography
          color={'white'}
          textAlign={'center'}
          fontFamily="roboto"
          fontSize={20}
          fontWeight={400}
        >
          Mercy Relief has provided humanitarian aid in Asia for over a decade.
          Through the years, we have invested in communities and worked
          alongside survivors to help them rebuild their lives. Here are some
          key events in the history of our organisation since its inception in
          2003.
        </Typography>
        <div
          className="content"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          <p>
            sadakmdajdnasdasjdsajdjsaasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasasass
          </p>
        </div>
        <div className="button-slider">
          <button onMouseDown={() => handleMouseDown('left')}>Left</button>
          <button onMouseDown={() => handleMouseDown('right')}>Right</button>
        </div>
      </Box>
      <Box sx={styledlowersection}>
        <div style={styledMoreInfoCard} className="our-foundation">
          <div style={styledCardOverlayBanner}>
            <Typography
              color={'black'}
              textAlign={'center'}
              fontFamily="roboto"
              fontSize={30}
              fontWeight={700}
            >
              Our Foundation - The Board and the management
            </Typography>
            <Typography
              color={'black'}
              textAlign={'center'}
              fontFamily="roboto"
              fontSize={20}
              fontWeight={400}
            >
              SINGAPORE, 17 October 2019 - Mercy Relief, Singapore’s leading
              independent disaster relief agency, will deploy a disaster
              response team today to Miyagi and Fukushima, Japan where Typhoon
              Hagibis, one of the worst typhoons to hit Japan in the six
              decades, has devastated...
            </Typography>
          </div>
        </div>
        <div style={styledMoreInfoCard} className="our-timeline">
          <div style={styledCardOverlayBanner}>
            <Typography
              color={'black'}
              textAlign={'center'}
              fontFamily="roboto"
              fontSize={30}
              fontWeight={700}
            >
              Our Timeline
            </Typography>
            <Typography
              color={'black'}
              textAlign={'center'}
              fontFamily="roboto"
              fontSize={20}
              fontWeight={400}
            >
              SINGAPORE, 17 October 2019 - Mercy Relief, Singapore’s leading
              independent disaster relief agency, will deploy a disaster
              response team today to Miyagi and Fukushima, Japan where Typhoon
              Hagibis, one of the worst typhoons to hit Japan in the six
              decades, has devastated...
            </Typography>
          </div>
        </div>
      </Box>
    </Stack>
  )
}

export default AboutUsPage
