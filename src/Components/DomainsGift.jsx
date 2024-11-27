import React from 'react';
import web from "../assets/images/icons/domains/secure-web.png"
import wind from "../assets/images/icons/domains/wind-turbine.png"
import mobile from "../assets/images/icons/domains/mobile-mail.png"
import security from "../assets/images/icons/domains/security-shield.png"
import filtering from "../assets/images/icons/domains/filtering.png"
import presentation from "../assets/images/icons/domains/presentation.png"
import error from "../assets/images/icons/domains/error.png"
import cube from "../assets/images/icons/domains/3d-cube.png"

const DomainsGift = () => {
 
  const features = [
    {
      icon: web,
      title: "Domain Lock",
      description: "Prevent unauthorized transfers of your domain names, & retain control to unlock domains if you so please."
    },
    {
      icon: wind,
      title: "Auto-renewal",
      description: "If you forget to renew your domain, you could lose it (gasp!). That's why we set up auto renew, so you don't gotta worry."
    },
    {
      icon: mobile,
      title: "Email forwarding",
      description: "If you'd like, automatically forward any of your domain's email addresses to any other valid email address."
    },
    {
      icon: security,
      title: "Privacy protection",
      description: "For a small fee, you can protect your personal information from being publicly available on the WHOIS database."
    },
    {
      icon: filtering,
      title: "DNS management",
      description: "Route your DNS to us, another host, dedicated IPs, the moon — wherever you'd like (minus the moon part)."
    },
    {
      icon: presentation,
      title: "Easy management",
      description: "Our control panel is designed for ease of use. Manage your online awesomeness from one single dashboard."
    },
    {
      icon: error,
      title: "Status alerts",
      description: "Prevent unauthorized transfers of your domain names, & retain control to unlock domains if you so please."
    },
    {
      icon: cube,
      title: "Simple & Intuitive",
      description: "We integrate seamlessly with WordPress, WebsiteBuilder, and SiteLock, to name a few."
    }
  ];

  return (
    <div className="se-ii features-section py-90-60">
      <div className="container-fluid">
        <div className="se-title">
          <h3 className="sub-title">Your domain comes bearing gifts</h3>
          <h2 className="title">Enjoy free products and services with every registration</h2>
        </div>

        <div className="row" data-gap-y="30px" style={{rowGap:'30px'}}>
          {features.map((feature, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6">
              <div className="box">
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
}

export default DomainsGift;