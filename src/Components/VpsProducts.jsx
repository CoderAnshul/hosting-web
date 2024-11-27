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
import cpu from "../assets/images/icons/vps/cpu.png";
import ram from "../assets/images/icons/vps/ram.png";
import storage from "../assets/images/icons/vps/storage.png";
import plugin from "../assets/images/icons/vps/plugin.png";
import speedometer from "../assets/images/icons/vps/speedometer.png";
import upload from "../assets/images/icons/vps/upload.png";
import checked2 from "../assets/images/icons/checked-2.png"

const vpsProductsData = [
  {
    title: 'INTEL GOLD 7402P',
    category: 'Middleweight',
    flags: [
      { title: 'United Kingdom', img: uk },
      { title: 'Australia', img: aus },
      { title: 'United States Of America', img: america },
    ],
    features: [
      { icon: cpu, main: '26 Cores @ 2.1 GHz', sub: 'Benchmark 15,390' },
      { icon: ram, main: '64GB', sub: 'up to 384GB' },
      { icon: storage, main: '2x 250GB SSD', sub: 'up to 8 disks' },
      { icon: plugin, main: '3Gbps', sub: '100TB/mo free traffic' },
      { icon: speedometer, main: '1', sub: 'up to 3' },
      { icon: upload, main: '7 Days', sub: 'Of snapshot backups' },
    ],
    price: 21.99,
    renewalPrice: 20.00,
  },
  {
    title: 'INTEL BRONZE 9306P',
    category: 'Middleweight',
    flags: [
      { title: 'Argentina', img: argentina },
      { title: 'Slovakia', img: slovakia },
      { title: 'India', img: india },
      { title: 'United Arab Emirates', img: uae },
    ],
    features: [
      { icon: cpu, main: '28 Cores @ 3.2 GHz', sub: 'Benchmark 19,210' },
      { icon: ram, main: '72GB', sub: 'up to 384GB' },
      { icon: storage, main: '4x 512GB SSD', sub: 'up to 12 disks' },
      { icon: speedometer, main: '3Gbps', sub: '100TB/mo free traffic' },
      { icon: plugin, main: '3', sub: 'up to 10' },
      { icon: upload, main: '12 Days', sub: 'Of snapshot backups' },
    ],
    price: 41.99,
    renewalPrice: 40.00,
  },
  {
    title: 'INTEL GOLD 8204P',
    category: 'Middleweight',
    flags: [
      { title: 'Brazil', img: brazil },
      { title: 'France', img: france },
      { title: 'Spain', img: spain },
      { title: 'Thailand', img: thailand },
      { title: 'Andorra', img: andorra },
    ],
    features: [
      { icon: cpu, main: '32 Cores @ 3.1 GHz', sub: 'Benchmark 22,390' },
      { icon: ram, main: '76GB', sub: 'up to 384GB' },
      { icon: storage, main: '6x 250GB SSD', sub: 'up to 10 disks' },
      { icon: speedometer, main: '3Gbps', sub: '100TB/mo free traffic' },
      { icon: plugin, main: '5', sub: 'up to 12' },
      { icon: upload, main: '15 Days', sub: 'Of snapshot backups' },
    ],
    price: 61.99,
    renewalPrice: 20.00,
  },
  {
    title: 'INTEL GOLD 7402P',
    category: 'Middleweight',
    flags: [
      { title: 'United Kingdom', img: uk },
      { title: 'Australia', img: aus },
      { title: 'United States Of America', img: america },
    ],
    features: [
      { icon: cpu, main: '36 Cores @ 2.9 GHz', sub: 'Benchmark 26,390' },
      { icon: ram, main: '128GB', sub: 'up to 384GB' },
      { icon: storage, main: '8x 250GB SSD', sub: 'up to 16 disks' },
      { icon: speedometer, main: '3Gbps', sub: '100TB/mo free traffic' },
      { icon: plugin, main: '16', sub: 'up to 20' },
      { icon: upload, main: '18 Days', sub: 'Of snapshot backups' },
    ],
    price: 71.99,
    renewalPrice: 20.00,
  },
  {
    title: 'INTEL BRONZE 9306P',
    category: 'Middleweight',
    flags: [
      { title: 'Argentina', img: argentina },
      { title: 'Slovakia', img: slovakia },
      { title: 'India', img: india },
      { title: 'United Arab Emirates', img: uae },
    ],
    features: [
      { icon: cpu, main: '42 Cores @ 3.2 GHz', sub: 'Benchmark 33,210' },
      { icon: ram, main: '100GB', sub: 'up to 500GB' },
      { icon: storage, main: '8x 512GB SSD', sub: 'up to 20 disks' },
      { icon: speedometer, main: '3Gbps', sub: '100TB/mo free traffic' },
      { icon: plugin, main: '10', sub: 'up to 20' },
      { icon: upload, main: '30 Days', sub: 'Of snapshot backups' },
    ],
    price: 81.99,
    renewalPrice: 40.00,
  },
];

const VpsProducts = () => (
  <div className="se-i py-90 bg-2">
    <div className="container-fluid">
      <div className="se-title">
        <h3 className="sub-title">VPS Products</h3>
        <h2 className="title">Great Savings of VPS Hosting<br />with Our Month Savings</h2>
      </div>
      <div className="row" data-gap-y="30px">
        {vpsProductsData.map((product, index) => (
          <div className="col-xl col-lg-4 col-md-6" key={index}>
            <div className="card">
              <div className="head">
                <h4 className="c-title">{product.title}</h4>
                <p className="c-para">{product.category}</p>
                <div className="flags d-flex align-items-center">
                  {product.flags.map((flag, flagIndex) => (
                    <div className="flag" title={flag.title} key={flagIndex}>
                      <img src={flag.img} className="img-fluid" alt={flag.title} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="features vps__features d-flex flex-column has__gap" data-gap-y="10px">
                {product.features.map((feature, featureIndex) => (
                  <div className="fea d-flex align-items-center" key={featureIndex}>
                    <div className="icon d-inline-flex align-items-center">
                      <img src={feature.icon} className="img-fluid" alt="Icon" />
                    </div>
                    <div className="text">
                      <div className="main">{feature.main}</div>
                      <div className="sub">{feature.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="c-footer p-2">
                <div className="price">
                  <sup>$</sup>{product.price}
                </div>
                <p className="price-comment mb-1">{product.renewalPrice} USD/mo when you renew<sup>4</sup></p>
                <div className="actions d-flex align-items-center">
                  <a href="#" className="theme-btn --fill-primary --btn-size-sm --shadow-off w-100">BUY NOW</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div class="se-footer d-flex align-items-center justify-content-center flex-wrap mt-3">
    
        <div class="line d-flex align-items-center justify-content-start">
          <img src={checked2} class="icon mr--sm-2 img-fluid" alt="Check"/>
          <span class="text">Backups monthly</span>
        </div>
     
        <div class="line d-flex align-items-center justify-content-start">
          <img src={checked2} class="icon mr--sm-2 img-fluid" alt="Check"/>
          <span class="text">Free white-glove migrations</span>
        </div>
       
        <div class="line d-flex align-items-center justify-content-start">
          <img src={checked2} class="icon mr--sm-2 img-fluid" alt="Check"/>
          <span class="text">Staging environments, and more.</span>
        </div>
      </div>
    </div>
  </div>
);

export default VpsProducts;
