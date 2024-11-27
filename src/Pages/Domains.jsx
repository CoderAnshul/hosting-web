import React from 'react'
import DomainBanner from '../Components/DomainBanner'
import "../assets/css/Pages/domain.css"
import DomainType from '../Components/DomainType'
import DomainsGift from '../Components/DomainsGift'
import HostGate from '../Components/HostGate'
import Faq from '../Components/Faq'

const Domains = () => {
  return (
    <div>
        <DomainBanner/>
        <DomainType/>
        <DomainsGift/>
        <HostGate/>
        <Faq/>
    </div>
  )
}

export default Domains