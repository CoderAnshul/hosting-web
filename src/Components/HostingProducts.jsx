import React from "react";
import rightArrow from "../assets/images/icons/right-arrow-w.png";
import checked from "../assets/images/icons/checked.png";
import plans from "../Data/Plan.js"; // Importing the plans array

const FeatureItem = ({ icon, text, tooltip }) => (
  <div className="item">
    <img src={icon} className="img-fluid mr--sm-2" alt="Icon" />
    {text}
    {tooltip && <span className="float-box" data-text={tooltip}></span>}
  </div>
);

const FeatureSection = ({ title, features }) => (
  <div className="fea-sec">
    <h5 className="fea-title">{title}</h5>
    {features.map((feature, index) => (
      <FeatureItem
        key={index}
        icon={checked}
        text={feature.text}
        tooltip={feature.tooltip}
      />
    ))}
  </div>
);

const Plan = ({ title, subTitle, price, priceSub, features, link }) => (
  <div className="plan">
    <h4 className="plan-title">{title}</h4>
    <p className="plan-sub">{subTitle}</p>
    <div className="plan-price">{price}</div>
    <div className="plan-price-sub">{priceSub}</div>
    <hr className="my-2" />
    <a href={link} className="theme-btn --fill-primary w-100">Buy Now</a>
    {features.map((featureSection, index) => (
      <FeatureSection
        key={index}
        title={featureSection.title}
        features={featureSection.items}
      />
    ))}
  </div>
);

const HostingProducts = () => {
  return (
    <div className="se-ii py-90 bg-2">
      <div className="container-fluid">
        <div className="se-title">
          <h3 className="sub-title">Hosting Products</h3>
          <h2 className="title">
            Get More Power With Our Web<br />Hosting Products
          </h2>
        </div>
        <div className="filter-nav-i mb-2" id="filter-nav-i">
          <div className="row justify-content-center small-gutters">
            {["Dedicated Hosting", "VPS Hosting", "Shared Hosting", "Cloud Hosting"].map((tab, index) => (
              <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-xl-0 mb-1" key={index}>
                <div className={`tab ${index === 0 ? "active" : ""}`} data-filter={tab.toLowerCase().replace(" ", "-")}>
                  {tab}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="plans mt-3">
          <div className="row">
            <div className="col-xl-3 col-md-6 mb-xl-0 mb-2">
              <div className="side-plan">
                <h5 className="title-1">Save More</h5>
                <h4 className="title-2">With HostGate Plans.</h4>
                <p className="para-1 mb-1">
                  An economical, 25 GB plan with free matching domain, free email and 1 free SSL (with terms of 12/mo. or longer).
                </p>
                <a href="dedicated.php" className="theme-btn --fill-primary --circle-btn --has-icon">
                  <img src={rightArrow} className="dir-reflect img-fluid" alt="Arrow" />
                </a>
              </div>
            </div>
            {plans.map((plan, index) => (
              <div className="col-xl-3 col-md-6 mb-xl-0 mb-2" key={index}>
                <Plan {...plan} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostingProducts;
