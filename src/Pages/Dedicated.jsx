import React from 'react'
import DedicatedHeader from '../Components/DedicatedHeader'
import Working from '../Components/Working'
import crown from "../assets/images/icons/shared/crown.png"
import wordLogo from "../assets/images/icons/shared/wordpress-logo.png"
import browser from "../assets/images/icons/shared/browser.png"
import money from "../assets/images/icons/shared/money-back.png"
import DedicatedProd from '../Components/DedicatedProd'
import "../assets/css/Pages/dedicated.css"
import DedicatedServer from '../Components/DedicatedServer.'
import VpaFeat from '../Components/VpaFeat'
import WhyDedicated from '../Components/WhyDedicated'
import HostGate from '../Components/HostGate'
import Faq from '../Components/Faq'

const items = [
    {
      icon: crown,
      title: "Look like a Pro - Fast, Secure, & Always Up",
      description: "Transform into a pro with our rapid, secure hosting services.",
    },
    {
      icon: wordLogo,
      title: "One Click Instant WordPress Install",
      description: "Enjoy one-click WordPress installation at no cost.",
    },
    {
      icon: browser,
      title: "1.5 Million Websites Choose Evrinocean",
    description: "Join 1.5 million websites that trust Evrinocean for their hosting needs.",
    },
    {
        icon: money,
        title: "Zero-Risk, 97-Day Money-Back Guarantee",
        description: "Zero-risk hosting with our 97-day money-back guarantee.",
    },
  ];

const subtitle = "Professional Features";
const title = "Everything you need to launch a website.";

export const Dedicated = () => {
  return (
    <div>
        <DedicatedHeader/>
        <Working items={items} subtitle={subtitle} title={title}/>
        <DedicatedProd/>
        <DedicatedServer/>
        <VpaFeat name='Dedicated features' nameTwo='Dedicated'/>
        <WhyDedicated/>
        <HostGate/>
        <Faq/>
        
    </div>
  )
}
