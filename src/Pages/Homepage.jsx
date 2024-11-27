import React from 'react'
import HomeBanner from '../Components/HomeBanner'
import TypeOfDomain from '../Components/TypeOfDomain'
import HostingProducts from '../Components/HostingProducts'
import UpgradeShowcase from '../Components/UpgradeShowcase'
import SharedHostingShowCase from '../Components/SharedHostingShowCase'
import MarketPlaceHomeBanner from '../Components/MarketPlaceHomeBanner'
import HostGate from '../Components/HostGate'
import Faq from '../Components/Faq'

const Homepage = () => {
  return (
    <div>
        <HomeBanner/>
        <TypeOfDomain/>
        <HostingProducts/>
        <UpgradeShowcase/>
        <SharedHostingShowCase/>
        {/* <MarketPlaceHomeBanner/> */}
        <HostGate/>
        <Faq/>
    </div>
  )
}

export default Homepage