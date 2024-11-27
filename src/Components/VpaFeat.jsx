import React from 'react';
import calender from "../assets/images/icons/vps/calendar.png"
import currency from "../assets/images/icons/vps/currency.png"
import data from "../assets/images/icons/vps/data-server.png"
import delivery from "../assets/images/icons/vps/delivery-time.png"
import money from "../assets/images/icons/vps/save-money.png"
import ddos from "../assets/images/icons/vps/ddos.png"
import tool from "../assets/images/icons/vps/edit-tool.png"
import energy from "../assets/images/icons/vps/energy.png"

const features = [
  {
    icon: calender,
    title: "24/7 Free Tech Support",
    description: "Our experts offer 24/7 online assistance to help you with installation, configuration, backup, migration, deployment, or any other issues. All you need to do is to reach us via the ticket system or live chat."
  },
  {
    icon: currency,
    title: "Money Back Guarantee",
    description: "Ensures that you can try our product with confidence. If you're not satisfied within the first 30 days, we'll refund your purchase, no questions asked. Your satisfaction is our top priority, and we stand behind our product 100%."
  },
  {
    icon: data,
    title: "US Data Centers",
    description: "Multiple data centers are set up to let you experience the ultimate speed experience. We have 3 locations in the US, and we are still expanding. Deploy your applications closer to you and your visitors."
  },
  {
    icon: delivery,
    title: "99.9% Uptime Guarantee",
    description: "Trust that your website will be up and running smoothly. We strive to provide reliable hosting services, minimizing any downtime and ensuring a seamless online presence for your business. Your website's availability is our commitment."
  },
  {
    icon: money,
    title: "Best Price-Performance Ratio",
    description: "We always strive to pass on the best prices and discounts to our customers. Also, we offer high-quality servers by optimizing server loads and managing our data centers efficiently."
  },
  {
    icon: ddos,
    title: "DDOS Protection",
    description: "Protect your website from hackers with our DDoS defense. Stay online and secure. Shield against attacks, prevent downtime. Trust our advanced system to keep your site safe from threats."
  },
  {
    icon: tool,
    title: "Completely Customizable",
    description: "Tailor it your way. Customize completely. Make it yours. Flexibility at its best. Personalize every detail. Your unique touch. Endless possibilities. Be in control."
  },
  {
    icon: energy,
    title: "Incredibly Fast",
    description: "Lightning speed. Supercharged performance. Swift and snappy. Turbocharged VPS. Rapid response. Unleash the speed. Accelerate your website. Instantaneous performance."
  }
];

const VpaFeat = ({name,nameTwo}) => {
  return (
    <div className="se-iii features-section py-90 bg-2">
      <div className="container-fluid">
        <div className="se-title">
          <h3 className="sub-title">{name}</h3>
          <h2 className="title">8 Reasons to Buy {nameTwo} Servers from HostGate</h2>
        </div>
        <div className="row" data-gap-y="30px">
          {features.map((feature, index) => (
            <div className="col-xl-3 col-lg-4 col-md-6 vps" style={{marginBottom:'20px'}} key={index}>
              <div className="box" style={{backgroundColor:'#fff'}}>
                <div className="icon mb-1">
                  <img src={feature.icon} className="img-fluid" alt="icon" />
                </div>
                <h4 className="box-title">{feature.title}</h4>
                <p className="box-para">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VpaFeat;