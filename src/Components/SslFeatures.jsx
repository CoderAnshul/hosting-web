import React from 'react';
import check from "../assets/images/icons/vps/check-mark.png";

const features = [
  { title: "Works with over 99% of all browsers" },
  { title: "Padlock symbol & 'https' domain" },
  { title: "ACME and REST API integration supported" },
  { title: "Access certificate life cycle management tools" },
  { title: "2048/4096 SHA2 RSA (ECDSA supported)" },
  { title: "Full mobile support" },
  { title: "Satisfies HIPAA & PCI compliance" },
  { title: "Free lifetime certificate reissues" },
  { title: "24/7 chat, email, phone support" },
  { title: "30 day no questions asked refund" },
  { title: "Easy to use Account Manager" },
  { title: "Free Hoxt.com Site Seal" }
];

const SslFeatures = () => {
  return (
    <div className="se-iii wplan-section title-size-md bg-2 py-90">
      <div className="container-fluid">
        <div className="se-title">
          <h3 className="sub-title">All plans include</h3>
          <h2 className="title">Standard features on all HostGate certificates</h2>
        </div>

        <div className="row" data-gap-y="40px">
          {features.map((feature, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="article d-flex align-items-start" data-gap-x="10px">
                <img src={check} className="check-icon img-fluid" alt="Check" />
                <div className="text ml--sm-2">
                  <h3 className="title">{feature.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SslFeatures;
