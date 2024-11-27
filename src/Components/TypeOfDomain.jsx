import React from 'react';
import rightArrow from '../assets/images/icons/right-arrow-w.png';

const TypeOfDomain = () => {
  const domainData = [
    { name: 'Com', price: '$4.99' },
    { name: 'Net', price: '$3.99' },
    { name: 'App', price: '$3.59' },
    { name: 'Shop', price: '$3.89' },
    { name: 'Vip', price: '$3.99' },
    { name: 'Online', price: '$2.69' },
  ];

  return (
    <div className="se-i">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-4 mb-xl-0 mb-4 text-xl-left text-center">
            <h2 className="section-title mb-1">
              Search
              <br />
              Your Domain
              <br />
              <span className="pri-font pri-color">Name Right Now.</span>
            </h2>
            <p className="section-para">Secure your brand with the right domain names today.</p>
          </div>
          <div className="col-xl-8">
            <div className="boxes">
              <div className="row small-lg-gutters" data-gap-y="30px">
                {domainData.map((domain, index) => (
                  <div key={index} className="col-lg-2 col-md-4 col-6">
                    <div className="box position-relative text-center">
                      <h3 className="box-title en-pri-font">
                        <span>.</span>
                        {domain.name}
                      </h3>
                      <div className="price mb-1">
                        <p className="text">Starting at</p>
                        <p className="text">{domain.price}</p>
                      </div>
                      <a href="#" className="theme-btn --fill-primary --circle-btn --has-icon">
                        <img src={rightArrow} className="dir-reflect img-fluid" alt="Arrow" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeOfDomain;
