import React from 'react';
import uk from "../assets/images/flags/united-kingdom.svg";
import aus from "../assets/images/flags/australia.svg";
import america from "../assets/images/flags/united-states-of-america.svg";
import argentina from "../assets/images/flags/argentina.svg";
import slovakia from "../assets/images/flags/slovakia.svg";
import india from "../assets/images/flags/india.svg";
import uae from "../assets/images/flags/united-arab-emirates.svg";
import brazil from "../assets/images/flags/brazil.svg";
import france from "../assets/images/flags/france.svg";
import spain from "../assets/images/flags/spain.svg";
import thailand from "../assets/images/flags/thailand.svg";
import andorra from "../assets/images/flags/andorra.svg";
import checkIcon from "../assets/images/icons/checked-2.png"; // Assuming this is the check icon

const serverPlans = [
  {
    title: "INTEL SILVER 7402P",
    subtitle: "Middleweight",
    price: 21.99,
    renewalPrice: 20.00,
    locations: [america, aus, uk],
    features: [
      "Intel Xeon Silver 7402P",
      "24 Cores / 48 Threads",
      "2.80 GHz base frequency, 3.90 GHz turbo frequency",
      "30.25 MB Intel Smart Cache",
      "32 GB DDR4 RAM",
      "2 x 500 GB NVMe SSD Storage (RAID-1)",
      "2 global data centers for enhanced redundancy and low latency",
      "Multiple 10 Gbps network connections for fast and reliable data transfer",
      "Integrated remote management capabilities for easy server administration",
      "Ability to scale up resources as needed to accommodate growing demands",
      "Hardware virtualization support for efficient utilization of server resources",
      "Advanced security features, including hardware-based encryption and secure boot."
    ]
  },
  {
    title: "INTEL BRONZE 9306P",
    subtitle: "Middleweight",
    price: 41.99,
    renewalPrice: 40.00,
    locations: [argentina, slovakia, india, uae],
    features: [
      "Intel Xeon Bronze 9306P",
      "16 Cores / 32 Threads",
      "2.40 GHz base frequency, 3.20 GHz turbo frequency",
      "35.75 MB Intel Smart Cache",
      "16 GB DDR4 RAM",
      "2 x 1 TB HDD Storage (RAID-1)",
      "2 global data centers for enhanced redundancy and low latency",
      "Multiple 1 Gbps network connections for reliable data transfer",
      "Integrated remote management capabilities for easy server administration",
      "Ability to scale up resources as needed to accommodate growing demands",
      "Hardware virtualization support for efficient utilization of server resources",
      "Advanced security features, including hardware-based encryption and secure boot."
    ]
  },
  {
    title: "INTEL SILVER 7402P",
    subtitle: "Middleweight",
    price: 51.99,
    renewalPrice: 50.00,
    locations: [america, aus, uk],
    features: [
      "Intel Xeon Silver 7402P",
      "24 Cores / 48 Threads",
      "2.80 GHz base frequency, 3.90 GHz turbo frequency",
      "30.25 MB Intel Smart Cache",
      "32 GB DDR4 RAM",
      "2 x 500 GB NVMe SSD Storage (RAID-1)",
      "2 global data centers for enhanced redundancy and low latency",
      "Multiple 10 Gbps network connections for fast and reliable data transfer",
      "Integrated remote management capabilities for easy server administration",
      "Ability to scale up resources as needed to accommodate growing demands",
      "Hardware virtualization support for efficient utilization of server resources",
      "Advanced security features, including hardware-based encryption and secure boot."
    ]
  },
  {
    title: "INTEL BRONZE 9306P",
    subtitle: "Middleweight",
    price: 61.99,
    renewalPrice: 60.00,
    locations: [argentina, slovakia, india, uae],
    features: [
      "Intel Xeon Bronze 9306P",
      "16 Cores / 32 Threads",
      "2.40 GHz base frequency, 3.20 GHz turbo frequency",
      "35.75 MB Intel Smart Cache",
      "16 GB DDR4 RAM",
      "2 x 1 TB HDD Storage (RAID-1 )",
      "2 global data centers for enhanced redundancy and low latency",
      "Multiple 1 Gbps network connections for reliable data transfer",
      "Integrated remote management capabilities for easy server administration",
      "Ability to scale up resources as needed to accommodate growing demands",
      "Hardware virtualization support for efficient utilization of server resources",
      "Advanced security features, including hardware-based encryption and secure boot."
    ]
  }
];

const DedicatedProd = () => {
  return (
    <div className="se-ii py-90 bg-2">
      <div className="container-fluid">
        <div className="se-title">
          <h3 className="sub-title">Dedicated PRODUCTS</h3>
          <h2 className="title">Dedicated Server Hosting plans and pricing</h2>
        </div>

        <div className="row" data-gap-y="30px">
          {serverPlans.map((plan, index) => (
            <div className="col-xl-3 col-md-6" key={index}>
              <div className="plan-card">
                <div className="row">
                  <div className="col-12">
                    <div className="card-details">
                      <h3 className="card-title">{plan.title}</h3>
                      <div className="sub-title">{plan.subtitle}</div>
                      <div className="locations">
                        {plan.locations.map((location, locIndex) => (
                          <img src={location} className="img-fluid" alt="Flag" key={locIndex} />
                        ))}
                      </div>
                      <div className="price">
                        <sup>$</sup>{plan.price.toFixed(2)}
                      </div>
                      <p className="price-comment mb-1">{plan.renewalPrice.toFixed(2)} USD/mo when you renew<sup>4</sup></p>
                      <div className="actions d-flex align-items-center">
                        <a href="#" className="theme-btn --fill-primary --shadow-off w-100">Configure Your Server</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <ul className="card-features list-unstyled">
                      {plan.features.map((feature, featureIndex) => (
                        <li className="item" data-gap-x="10px" key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="se-footer d-flex align-items-center justify-content-center flex-wrap mt-3">
          <div className="line d-flex align-items-center justify-content-start">
            <img src={checkIcon} className="icon mr--sm-2 img-fluid" alt="Check" />
            <span className="text">Backups monthly</span>
          </div>
          <div className="line d-flex align-items-center justify-content-start">
            <img src={checkIcon} className="icon mr--sm-2 img-fluid" alt="Check" />
            <span className="text">Free white-glove migrations</span>
          </div>
          <div className="line d-flex align-items-center justify-content-start">
            <img src={checkIcon} className="icon mr--sm-2 img-fluid" alt="Check" />
            <span className="text">Staging environments, and more.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DedicatedProd;