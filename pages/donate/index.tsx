import type { NextPage } from 'next'
import {
  CorporatePartners,
  Donate,
  DonateOffline,
  FAQ,
  LastestCampaigns,
  OtherWaysToHelp,
} from 'components/DonatePage'

const DonatePage: NextPage = () => {
  return (
    <>
      <Donate />
      <DonateOffline />
      <OtherWaysToHelp />
      <LastestCampaigns />
      <CorporatePartners />
      <FAQ />
    </>
  )
}

export default DonatePage
