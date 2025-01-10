import React from 'react'
import SharedHeader from '../Components/SharedHeader'
import SharedPlans from '../Components/SharedPlans'
import "../assets/css/Pages/shared.css"
import Working from '../Components/Working';
import crown from "../assets/images/icons/shared/crown.png"
import wordLogo from "../assets/images/icons/shared/wordpress-logo.png"
import browser from "../assets/images/icons/shared/browser.png"
import money from "../assets/images/icons/shared/money-back.png"
import SharedPlanType from '../Components/SharedPlanType';
import PricingSmilified from '../Components/PricingSmilified';
import VpaFeat from '../Components/VpaFeat';
import Faq from '../Components/Faq';
import HostGate from '../Components/HostGate';

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

const Shared = () => {
  return (
    <div>
        <SharedHeader/>
        <SharedPlans/>
        <Working items={items} title={title} subtitle={subtitle}/>
        <SharedPlanType/>
        <PricingSmilified/>
        <VpaFeat name='Shared Features' nameTwo='Shared'/>
        <HostGate/>
        <Faq/>
    </div>
  )
}

export default Shared