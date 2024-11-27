import React from 'react'
import WebsiteSecurityBanner from "../Components/WebsiteSecurityBanner"
import "../assets/css/Pages/website-security.css"
import WhatWebSec from '../Components/WhatWebSec'
import Faq from '../Components/Faq'
import SecurityPlans from '../Components/SecurityPlans'
import SecurityOtherPlans from '../Components/SecurityOtherPlans'
import pulse from "../assets/images/icons/pulse.png";
import brick from "../assets/images/icons/block-brick.png";
import file from "../assets/images/icons/backup-file.png";
import cybersecurity from "../assets/images/icons/cybersecurity.png";
import Working from '../Components/Working'

const items = [
  {
    icon: pulse,
    title: "Monitoring",
    description: "Make sure you’re always the first to know when your site is unavailable or slow.",
  },
  {
    icon: brick,
    title: "Firewall",
    description: "Shield web apps from the Internet, mitigating common attacks effectively and efficiently.",
  },
  {
    icon: file,
    title: "Backups",
    description: "Website Backup allows you to back up your site and related database via FTP, SFTP, FTPS.",
  },
  {
    icon: cybersecurity,
    title: "SSL Certificate",
    description: "SSL encrypts web server-browser communication, securing all transmitted data.",
  },
];

const subtitle = "What’s Website Security";
const title = "Protection of websites from unauthorized access and cyber threats.";

const Websitesecurity = () => {
  return (
    <div>
        <WebsiteSecurityBanner/>
        {/* <WhatWebSec/> */}
        <Working items={items} subtitle={subtitle} title={title}/>
        <SecurityPlans/>
        <SecurityOtherPlans/>
        <Faq/>
    </div>
  )
}

export default Websitesecurity