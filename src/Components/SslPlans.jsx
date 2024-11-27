import React from 'react';
import tick from "../assets/images/icons/check_pr.png";

const plans = [
  {
    name: "Domain Validation (DV) SSL Certificate",
    price: "19,95 USD",
    renewalPrice: "19,95 USD",
    description: "The best plan if you're just starting out.",
    features: [
      "Fast, easy-to-use DNS",
      "Free automated SSL certificates",
      "Web Analytics",
      "Global CDN (200+ locations)",
      "DDoS attack mitigation",
      "Up to 100K worker requests and 30 scripts",
      "3 Page Rules"
    ]
  },
  {
    name: "Organizational Validation (OV) SSL Certificate",
    price: "29,95 USD",
    renewalPrice: "29,95 USD",
    description: "The best plan if you're just starting out.",
    features: [
      "Fast, easy-to-use DNS",
      "Free automated SSL certificates",
      "Web Analytics",
      "Global CDN (200+ locations)",
      "DDoS attack mitigation",
      "Up to 100K worker requests and 30 scripts",
      "Automatic Platform Optimization for WordPress (APO)",
      "20 Page Rules",
      "Enhanced security with Web Application Firewall (WAF) and 20 custom WAF rules",
      "DDoS Alerts",
      "Lossless image optimization",
      "Accelerated mobile page load speed",
      "Ticket support"
    ]
  },
  {
    name: "Organizational Validation (OV) SSL Certificate",
    price: "32,95 USD",
    renewalPrice: "32,95 USD",
    description: "The best plan if you're just starting out.",
    features: [
      "Fast, easy-to-use DNS",
      "Free automated SSL certificates",
      "Web Analytics",
      "Global CDN (200+ locations)",
      "DDoS attack mitigation",
      "Up to 100K worker requests and 30 scripts",
      "Automatic Platform Optimization for WordPress (APO)",
      "20 Page Rules",
      "Enhanced security with Web Application Firewall (WAF) and 20 custom WAF rules",
      "DDoS Alerts",
      "Lossless image optimization",
      "Accelerated mobile page load speed",
      "Prioritized ticket support, chat support",
      "Sophisticated bot management and in-depth analytics",
      "100% uptime service level agreement (SLA)",
      "Uptime Service Credits (1)",
      "Protect sites against traffic surges with Waiting Room (1) and analyze traffic data with Waiting Room Analytics",
      "Cache Bypass On Cookie for increased HTML caching",
      "Increased cache refresh frequency (30m minimum cache TTL expiry)"
    ]
  },
  {
    name: "Extended Validation (EV) SSL Certificate",
    price: "39,95 USD",
    renewalPrice: "39,95 USD",
    description: "The best plan if you're just starting out.",
    features: [
      "Fast, easy-to-use DNS",
      "Free automated SSL certificates",
      "Web Analytics",
      "Global CDN (200+ locations)",
      "DDoS attack mitigation",
      "Up to 100K worker requests and 30 scripts",
      "Automatic Platform Optimization for WordPress (APO)",
      "20 Page Rules",
      "Enhanced security with Web Application Firewall (WAF) and 20 custom WAF rules",
      "DDoS Alerts",
      "Lossless image optimization",
      "Accelerated mobile page load speed",
      "Ticket support"
    ]
  }
];

const SslPlans = () => {
  return (
    <div className="pricing-plans-sec-i pb-120">
      <div className="container-fluid">
        <div className="se-title">
          <h3 className="sub-title">What about our plans</h3>
          <h2 className="title">Protect your users’ data online with SSL security</h2>
        </div>

        <div className="plans">
          <div className="row">
            {plans.map((plan, index) => (
              <div className="col-xl-3 col-md-6 mb-xl-0 mb-2" key={index}>
                <div className="plan">
                  <div className="plan-head text-md-left text-center">
                    <h4 className="plan-name">{plan.name}</h4>
                    <p className="plan-para">{plan.description}</p>
                  </div>

                  <div className="plan-price text-md-left text-center">
                    <h3 className="price d-inline-flex align-items-end">{plan.price}<span>/yr</span></h3>
                    <p className="price-para">You pay {plan.price} today.<br /> Renews at {plan.renewalPrice}.</p>
                    <a href="#" className="link theme-btn --fill-primary w-100 mt-2">Add To Cart</a>
                  </div>

                  <div className="features">
                    <h4 className="se-title">What's Included</h4>
                    <ul className="list list-unstyled">
                      {plan.features.map((feature, index) => (
                        <li key={index} data-gap-x="10px" style={{ columnGap: '10px' }}>
                          <img src={tick} className="img-fluid" alt="icon" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SslPlans;
