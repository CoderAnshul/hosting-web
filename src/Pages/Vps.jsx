import React from 'react'
import VpsBanner from '../Components/VpsBanner'
import "../assets/css/Pages/vps.css"
import VpsProducts from '../Components/VpsProducts'
import VpsServerManagement from '../Components/VpsServerManagement'
import VpaFeat from '../Components/VpaFeat'
import WhyVps from '../Components/WhyVps'
import Faq from '../Components/Faq'
import HostGate from '../Components/HostGate'

const Vps = () => {
  return (
    <div>
        <VpsBanner/>
        <VpsProducts/>
        <VpsServerManagement/>
        <VpaFeat name='Vps Features' nameTwo='VPS'/>
        <WhyVps/>
        <HostGate/>
        <Faq/>
    </div>
  )
}

export default Vps