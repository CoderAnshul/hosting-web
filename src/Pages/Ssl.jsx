import React from 'react'
import SslBanner from '../Components/SslBanner'
import "../assets/css/Pages/ssl.css"
import SslPlans from '../Components/SslPlans'
import SslFeatures from '../Components/SslFeatures'
import Faq from '../Components/Faq'
import createAcc from "../assets/images/icons/create_account.png";
import touchscreen from "../assets/images/icons/touchscreen.png";
import SysUp from "../assets/images/icons/system-update.png";
import like from "../assets/images/icons/like.png";
import Working from '../Components/Working'

const items = [
  {
    icon: createAcc,
    title: "Create an account",
    description: "You only need an email and a password. That’s all!",
  },
  {
    icon: touchscreen,
    title: "Pick a plan",
    description: "You only need an email and a password. That’s all!",
  },
  {
    icon: SysUp,
    title: "Update nameservers",
    description: "You only need an email and a password. That’s all!",
  },
  {
    icon: like,
    title: "Get going",
    description: "You only need an email and a password. That’s all!",
  },
];

const subtitle = "How SSL Works";
const title = "We provide you with Step by step instructions";

const Ssl = () => {
  return (
    <div>
        <SslBanner/>
        <Working items={items} subtitle={subtitle} title={title} />
        {/* <SslWorking/> */}
        <SslPlans/>
        <SslFeatures/>
        <Faq/>
    </div>
  )
}

export default Ssl