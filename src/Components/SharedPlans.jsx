import React from 'react';
import checked from "../assets/images/icons/checked.png";
import shopping from "../assets/images/icons/shopping-cart-add-w.png";

const plans = [
  {
    title: "Basic Plan",
    description: "When you need just one site.",
    price: "$2.45",
    priceSub: "Normally $9.99 - 12/mo term",
    features: [
      { text: "1 Website", tooltip: "An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)." },
      { text: "50 GB SSD Storage", tooltip: "An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)." },
      { text: "Custom Themes", tooltip: "An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)." },
      { text: "24/7 Customer Support", tooltip: "An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)." },
    ],
    websiteBuilder: [
      "WordPress Integration",
      "Drag and Drop Functionality",
      "AI-Driven Templates",
    ],
    includes: [
      { text: "Free Domain - 1 year", tooltip: "One free with purchase of a new 12-, 24- or 36-month plan. Plus ICANN fee of 2.84 USD per domain name per year." },
      { text: "Free CDN Included", tooltip: "Get faster page loads and better visitor experience with nearby, state-of-the-art data centers in North America, Europe or Asia-Pacific." },
      { text: "Free SSL Certificate", tooltip: "Linking your site to your domain name has never been easier with HostGate registered domain." },
    ],
  },
  {
    title: "Advanced Plan",
    description: "When you need just one site.",
    price: "$5.45",
    priceSub: "Normally $13.99 - 12/mo term",
    features: [
      { text: "Unlimited Websites", tooltip: "An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)." },
      { text: "Unlimited SSD Storage", tooltip: "An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)." },
      { text: "Custom Themes", tooltip: "An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)." },
      { text: "24/7 Customer Support", tooltip: "An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)." },
    ],
    websiteBuilder: [
      "WordPress Integration",
      "Drag and Drop Functionality",
      "AI-Driven Templates",
    ],
    includes: [
      { text: "Free Domain - 1 year", tooltip: "One free with purchase of a new 12-, 24- or 36-month plan. Plus ICANN fee of 2.84 USD per domain name per year." },
      { text: "Free CDN Included", tooltip: "Get faster page loads and better visitor experience with nearby, state-of-the-art data centers in North America, Europe or Asia-Pacific." },
      { text: "Free SSL Certificate", tooltip: "Linking your site to your domain name has never been easier with HostGate registered domain." },
    ],
  },
  {
    title: "Enterprise Plan",
    description: "When you need just one site.",
    price: "$9.45",
    priceSub: "Normally $9.99 - 12/mo term",
    features: [
      { text: "1 Website", tooltip: "An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)." },
      { text: "50 GB SSD Storage", tooltip: "An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)." },
      { text: "Custom Themes", tooltip: "An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)." },
      { text: "24/7 Customer Support", tooltip: "An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)." },
    ],
    websiteBuilder: [
      "WordPress Integration",
      "Drag and Drop Functionality",
      "AI-Driven Templates",
    ],
    includes: [
      { text: "Free Domain - 1 year", tooltip: " One free with purchase of a new 12-, 24- or 36-month plan. Plus ICANN fee of 2.84 USD per domain name per year." },
      { text: "Free CDN Included", tooltip: "Get faster page loads and better visitor experience with nearby, state-of-the-art data centers in North America, Europe or Asia-Pacific." },
      { text: "Free SSL Certificate", tooltip: "Linking your site to your domain name has never been easier with HostGate registered domain." },
    ],
  },
  {
    title: "Premium Plan",
    description: "When you need just one site.",
    price: "$13.45",
    priceSub: "Normally $17.99 - 12/mo term",
    features: [
      { text: "Unlimited Websites", tooltip: "An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)." },
      { text: "Unlimited SSD Storage", tooltip: "An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)." },
      { text: "Custom Themes", tooltip: "An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)." },
      { text: "24/7 Customer Support", tooltip: "An economical, 25 GB plan with matching domain and email (with terms of 12/mo. or longer)." },
    ],
    websiteBuilder: [
      "WordPress Integration",
      "Drag and Drop Functionality",
      "AI-Driven Templates",
    ],
    includes: [
      { text: "Free Domain - 1 year", tooltip: "One free with purchase of a new 12-, 24- or 36-month plan. Plus ICANN fee of 2.84 USD per domain name per year." },
      { text: "Free CDN Included", tooltip: "Get faster page loads and better visitor experience with nearby, state-of-the-art data centers in North America, Europe or Asia-Pacific." },
      { text: "Free SSL Certificate", tooltip: "Linking your site to your domain name has never been easier with HostGate registered domain." },
    ],
  },
];

const SharedPlans = () => {
  return (
    <div className="se-i">
      <div className="container-fluid">
        <div className="plans text-center">
          <div className="row">
            {plans.map((plan, index) => (
              <div className="col-xl-3 col-md-6 mb-xl-0 mb-2" key={index}>
                <div className={`plan ${plan.title === "Enterprise Plan" ? "popular-plan" : ""}`}>
                  <h4 className="plan-title">{plan.title}</h4>
                  <p className="plan-sub">{plan.description}</p>
                  <div className="plan-price">{plan.price}</div>
                  <div className="plan-price-sub">{plan.priceSub}</div>
                  <hr className="my-2" />
                  <a href="#" className="theme-btn --fill-primary --has-icon w-100">
                    <img src={shopping} className="icon mr--sm-2 img-fluid" alt="Buy Now" />
                  </a>
                  <div className="fea-sec">
                    <h5 className="fea-title">Top Features</h5>
                    {plan.features.map((feature, idx) => (
                      <div className="item" data-gap-x="10px" style={{ columnGap: '10px' }} key={idx}>
                        <img src={checked} className="img-fluid" alt="Icon" />{feature.text}
                        <span className="float-box" data-text={feature.tooltip}></span>
                      </div>
                    ))}
                  </div>
                  <div className="fea-sec">
                    <h5 className="fea-title">Website Builder Available</h5>
                    {plan.websiteBuilder.map((builder, idx) => (
                      <div className="item" data-gap-x="10px" style={{ columnGap: '10px' }} key={idx}>
                        <img src={checked} className="img-fluid" alt="Icon" />{builder}
                      </div>
                    ))}
                  </div>
                  <div className="fea-sec">
                    <h5 className="fea-title">Also Includes</h5>
                    {plan.includes.map((include, idx) => (
                      <div className="item" data-gap-x="10px" style={{ columnGap: '10px' }} key={idx}>
                        <img src={checked} className="img-fluid" alt="Icon" />{include.text}
                        < span className="float-box" data-text={include.tooltip}></span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SharedPlans;