import React from "react";
import check from "../assets/images/icons/vps/check-mark.png";

const plans = [
  {
    title: "Tools To Grow",
    description:
      "Whether you start small or migrate an existing website, HostGate provides all the tools you need to build an audience, sell online, or grow your business.",
  },
  {
    title: "Domain Manager",
    description:
      "At HostGate plans our domain manager makes it easy to update, transfer, purchase and manage your domains in one place.",
  },
  {
    title: "SSL Certificates",
    description:
      "Keep personal information, e-commerce transactions and other sensitive data safeguarded with encrypted connections.",
  },
  {
    title: "Reliable Performance",
    description:
      "All HostGate plans are designed for WordPress excellence. Each plan includes the right mix of technology.",
  },
  {
    title: "Google My Business",
    description:
      "List your local business online, including its location and hours of operation, to quickly connect with customers in your area.",
  },
  {
    title: "24/7 security monitoring & DDoS",
    description:
      "At HostGate plans we aim to stay on high alert day and night with security monitoring and distributed denial of service protection.",
  },
];

const SharedPlanType = () => {
  return (
    <div className="wplan-section py-90 pt-0">
      <div className="container-fluid">
        <div className="se-title">
          <h3 className="sub-title">All plans include</h3>
          <h2 className="title">Things every business plan should include</h2>
        </div>

        <div className="row" data-gap-y="40px" style={{rowGap:'40px'}}>
          {plans.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="article d-flex align-items-start" data-gap-x="10px">
                <img src={check} className="check-icon img-fluid" alt="Check" />
                <div className="text">
                  <h3 className="title">{plan.title}</h3>
                  <p className="para">{plan.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SharedPlanType;
