import React from 'react';
import check from "../assets/images/icons/vps/check-mark.png";

const vpsBenefits = [
  {
    title: "RDP Browsing",
    description: "Easily set up a VPN on your system using Windows VPS or Hyper-V hosting."
  },
  {
    title: "VPN",
    description: "You can set up a VPN on your system by using a Windows VPS or Hyper-V hosting."
  },
  {
    title: "Multiplayer Gaming",
    description: "You can set up a VPN on your system by using a Windows VPS or Hyper-V hosting."
  },
  {
    title: "High-Traffic Websites",
    description: "VPS hosting serves as an excellent hosting solution for owners of high-traffic websites. It ensures quick page loading without the need to invest in a dedicated hosting plan."
  },
  {
    title: "SEO Tools",
    description: "With the use of Windows VPS or Hyper-V hosting, SEO tools like ScrapeBox can be conveniently utilized to address your SEO challenges."
  },
  {
    title: "File Sharing",
    description: "Transferring or synchronizing files between your devices, including mobile, and your VPS server can be accomplished with ease."
  },
  {
    title: "Downloading Large Files",
    description: "VPS hosting facilitates the download of large files, such as backup files, onto your device."
  },
  {
    title: "Mail Servers",
    description: "Windows VPS hosting employs unique encryption software, ensuring a significantly safer and more secure email environment."
  },
  {
    title: "Backups",
    description: "VPS hosting is capable of maintaining duplicate copies of your backups across a range of diverse physical locations globally."
  },
  {
    title: "Database Hosting",
    description: "VPS hosting exhibits remarkable versatility, with the capability to host a multitude of database platforms, including MSSQL, MySQL, and many others."
  },
  {
    title: "E-Commerce (Online Stores)",
    description: "The robustness of SSD VPS hosting boosts the accessibility of online stores by delivering 99.9% uptime. This results in an increased number of visitors and, consequently, elevated sales volumes!"
  },
  {
    title: "Test Environments",
    description: "Effortlessly establish test servers across any continent and evaluate the response times of your application or website."
  },
];

const BenefitItem = ({ title, description }) => (
  <div className="col-lg-4 col-md-6">
    <div className="article d-flex align-items-start" data-gap-x="10px">
      <img src={check} className="check-icon img-fluid" alt="Check" />
      <div className="text">
        <h3 className="title">{title}</h3>
        <p className="para">{description}</p>
      </div>
    </div>
  </div>
);

const WhyVps = () => {
  return (
    <div className="wplan-section py-90">
      <div className="container-fluid">
        <div className="se-title">
          <h3 className="sub-title">Why VPS</h3>
          <h2 className="title">What's the purpose of a VPS hosting server?</h2>
        </div>
        <div className="row" data-gap-y="40px" style={{rowGap:'40px'}}>
          {vpsBenefits.map((benefit, index) => (
            <BenefitItem key={index} title={benefit.title} description={benefit.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyVps;