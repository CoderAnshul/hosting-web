import React from 'react';

const Working = ({ items, subtitle, title }) => {
  return (
    <div className="inline-features py-90">
      <div className="container-fluid">
        <div className="content">
          <div className="row align-items-center">
            <div className="col-lg-3 mb-xl-0 mb-3 text-lg-left text-center">
              <h5 className="sub-title">{subtitle}</h5>
              <h2 className="box-title">{title}</h2>
            </div>
            <div className="col-lg-9">
              <div className="row">
                {items.map((item, index) => (
                  <div key={index} className="col-lg-3 col-md-6 mb-lg-0 mb-2">
                    <div className="item">
                      <div className="icon">
                        <img src={item.icon} className="img-fluid" alt="icon" />
                      </div>
                      <h5 className="item-title">{item.title}</h5>
                      <p className="item-text">{item.description}</p>
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

export default Working;
