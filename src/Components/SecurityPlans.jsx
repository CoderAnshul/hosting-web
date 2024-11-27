import React from 'react';
import tick from "../assets/images/icons/check_pr.png";

const plansData = [
  {
    name: "Basic Shield (DV) SSL Certificate",
    price: "19,95 USD",
    description: "The best plan if you're just starting out.",
    features: [
      "Protects one website.",
      "1x website cleanup and repair, annually.",
      "Firewall to help prevent future attacks.",
      "SSL certificate included in firewall.",
      "Daily malware scanning.",
      "Continuous site monitoring with daily alerts and updates.",
    ],
  },
  {
    name: "Advanced Guard (DV) SSL Certificate",
    price: "29,95 USD",
    description: "Ideal for advanced protection.",
    features: [
      "Protects one website.",
      "5x website cleanup and repair, annually.",
      "25 GB of secure daily backup.",
      "DDoS protection, and Content Delivery Network (CDN) speed boost.",
      "Firewall to help prevent future attacks.",
      "SSL certificate included in firewall.",
      "Daily malware scanning.",
      "Continuous site monitoring with daily alerts and updates.",
    ],
  },
  {
    name: "Premium Fortress (DV) SSL Certificate",
    price: "32,95 USD",
    description: "The best plan for premium protection.",
    features: [
      "Protects one website.",
      "Priority Support. We clean your website in less than 8 hours.",
      "Unlimited website cleanup and repair.",
      "Unlimited storage space, secure daily backup.",
      "DDoS protection, and Content Delivery Network (CDN) speed boost.",
      "Firewall to help prevent future attacks.",
      "SSL certificate included in firewall.",
      "Daily malware scanning.",
      "Continuous site monitoring with daily alerts and updates.",
    ],
  },
  {
    name: "Ultimate Sentinel (DV) SSL Certificate",
    price: "39,95 USD",
    description: "Ultimate protection for your site.",
    features: [
      "Protects one website.",
      "Priority Support. We clean your website in less than 8 hours.",
      "Unlimited website cleanup and repair.",
      "Unlimited storage space, secure daily backup.",
      "DDoS protection, and Content Delivery Network (CDN) speed boost.",
      "Firewall to help prevent future attacks.",
      "SSL certificate included in firewall.",
      "Daily malware scanning.",
      "Continuous site monitoring with daily alerts and updates.",
      "Continuous site monitoring with real-time alerts and updates.",
      "Advanced DDoS protection and CDN for performance boost.",
      "Comprehensive cleanup and repair services for unlimited websites.",
    ],
  },
];

const SecurityPlans = () => {
  return (
    <div className="pricing-plans-sec-i pb-120">
      <div className="container-fluid">
        <div className="se-title">
          <h3 className="sub-title">What about our plans</h3>
          <h2 className="title">Protect your users’ data online with website security</h2>
        </div>
        <div className="plans">
          <div className="row">
            {plansData.map((plan, index) => (
              <div className="col-xl-3 col-md-6 mb-xl-0 mb-2" key={index}>
                <div className="plan">
                  <div className="plan-head text-md-left text-center">
                    <h4 className="plan-name">{plan.name}</h4>
                    <p className="plan-para">{plan.description}</p>
                  </div>
                  <div className="plan-price text-md-left text-center">
                    <h3 className="price d-inline-flex align-items-end">
                      {plan.price}
                      <span>/yr</span>
                    </h3>
                    <p className="price-para">
                      You pay {plan.price} today.<br />
                      Renews at {plan.price}.
                    </p>
                    <a href="#" className="link theme-btn --fill-primary w-100 mt-2">
                      Add To Cart
                    </a>
                  </div>
                  <div className="features">
                    <h4 className="se-title">What's Included</h4>
                    <ul className="list list-unstyled">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} data-gap-x="10px" style={{ columnGap: '10px' }}>
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

export default SecurityPlans;
