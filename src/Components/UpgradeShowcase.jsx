import React from "react";
import wordpress from "../assets/images/elements/wordpress.png";
import shoppingCart from "../assets/images/elements/shopping_cart.png";
import database from "../assets/images/elements/database_administrator.png";
import rightArrow from "../assets/images/icons/right-arrow-w.png";

// Data array for features
const featureBoxes = [
  {
    title: "WordPress",
    description: "Unlock the limitless design freedom of WordPress with expert support.",
    imgSrc: wordpress,
    link: "#",
  },
  {
    title: "Online Store",
    description: "Everything you need to start selling online with plans built for e-commerce.",
    imgSrc: shoppingCart,
    link: "#",
  },
  {
    title: "VPS",
    description: "Gain more control and flexibility with a Virtual Private Server.",
    imgSrc: database,
    link: "#",
  },
];

const UpgradeShowcase = () => {
  return (
    <div className="se-iii py-90">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4 mb-xl-0 mb-4">
            <div className="se-title side-title">
              <h3 className="sub-title">Why Choose Our Services</h3>
              <h2 className="title">
                Upgrade your plan <br className="d-xl=block d-none" />
                for advanced features
                <br />
                with optional add-ons.
              </h2>
              <p className="para">
                Leave your system management to the experts
                <br />
                so that you can focus your energy on what you do best.
              </p>
              <a href="shared.php" className="theme-btn --fill-primary --has-icon mt-3">
                Learn More{" "}
                <img
                  src={rightArrow}
                  className="th-btn-icon ml--sm-1 dir-reflect img-fluid"
                  alt="Right Arrow"
                />
              </a>
            </div>
          </div>

          <div className="col-xl-8">
            <div className="row justify-content-lg-start justify-content-center">
              {featureBoxes.map((feature, index) => (
                <div className="col-lg-4 col-md-12 mb-lg-0 mb-2" key={index}>
                  <div className="box" >
                    <div className="text">
                      <h3 className="box-title">{feature.title}</h3>
                      <p className="box-para">{feature.description}</p>
                      <a href={feature.link} className="theme-btn --fill-primary --circle-btn --has-icon mt-lg-4 mt-3">
                        <img src={rightArrow} className="dir-reflect img-fluid" alt="Arrow" />
                      </a>
                    </div>
                    <img src={feature.imgSrc} className="box-icon img-fluid" alt="Icon" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradeShowcase;
