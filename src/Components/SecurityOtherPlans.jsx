import React from 'react'
import tick from "../assets/images/icons/check_pr.png";

const SecurityOtherPlans = () => {
  return (
    <div class="options-sec bg-2 py-90">
      <div class="container-fluid">
      <div class="se-title">
        <h3 class="sub-title">Other Options</h3>
        <h2 class="title">More Website Security options</h2>
      </div>
      <div class="row" data-gap-y="30px">
        <div class="col-xl-3 col-md-6">
          <div class="option popular">
            <div class="top">
              <h3 class="option-sub-title">Website Security</h3>
              <h3 class="option-title">Get peace of mind by taking action to secure your site.</h3>
              <div class="option-text">Comprehensive security suite: SSL certification, malware detection and elimination, firewall protection, and data recovery services.</div>
            </div>
            <div class="middle">
              <ul class="option-features list-unstyled d-flex flex-column" data-gap-y="5px">
                <li data-gap-x="10px"><img src={tick} class="img-fluid" alt="icon"/>HTTPS encryption with an SSL.</li>
                <li data-gap-x="10px"><img src={tick} class="img-fluid" alt="icon"/>Help prevent malware with firewall.</li>
                <li data-gap-x="10px"><img src={tick} class="img-fluid" alt="icon"/>Detect and fix malware with scanning and remediation.</li>
                <li data-gap-x="10px"><img src={tick} class="img-fluid" alt="icon"/>Recover your site with one click backup.</li>
              </ul>
            </div>
            <div class="bottom">
              <div class="highlight">With a 2 year term (20% Savings)</div>
              <div class="price">
                <sup>$</sup>6.99
              </div>
              <p class="price-comment">20.00 USD/mo when you renew<sup>4</sup></p>
              <div class="actions d-flex align-items-center">
                <a href="#" class="theme-btn --fill-primary w-100">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="option">
            <div class="top">
              <h3 class="option-sub-title">Managed SSL Services</h3>
              <h3 class="option-title">SSL certificate management —  it’s easy and automatic.</h3>
              <div class="option-text">Streamlined SSL deployment and sustained SSL upkeep for the duration of your service agreement.</div>
            </div>
            <div class="middle">
              <ul class="option-features list-unstyled d-flex flex-column" data-gap-y="5px">
                <li data-gap-x="10px"><img src={tick} class="img-fluid" alt="icon"/>Get stress-free, managed-for-you SSL Certificate for your site(s).</li>
                <li data-gap-x="10px"><img src={tick} class="img-fluid" alt="icon"/>We install, maintain, fix errors, and renew for the life of your plan.</li>
                <li data-gap-x="10px"><img src={tick} class="img-fluid" alt="icon"/>We’re always here for expert support.</li>
              </ul>
            </div>
            <div class="bottom">
              <div class="highlight">With a 2 year term (20% Savings)</div>
              <div class="price">
                <sup>$</sup>106.99
              </div>
              <p class="price-comment">150.00 USD/mo when you renew<sup>4</sup></p>
              <div class="actions d-flex align-items-center">
                <a href="#" class="theme-btn --fill-primary w-100">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="option">
            <div class="top">
              <h3 class="option-sub-title">Domain Validation (DV) SSL Certificate</h3>
              <h3 class="option-title">Validate your domain. Help secure customer data.</h3>
              <div class="option-text">Domain Validation SSL Certificate ensuring the security of a single private website.</div>
            </div>
            <div class="middle">
              <ul class="option-features list-unstyled d-flex flex-column" data-gap-y="5px">
                <li data-gap-x="10px"><img src={tick} class="img-fluid" alt="icon"/>Ideal for personal websites.</li>
                <li data-gap-x="10px"><img src={tick} class="img-fluid" alt="icon"/>Shows your site is encrypted.</li>
                <li data-gap-x="10px"><img src={tick} class="img-fluid" alt="icon"/>Get expert support.</li>
                <li data-gap-x="10px"><img src={tick} class="img-fluid" alt="icon"/>We’re always here for expert support.</li>
              </ul>
            </div>
            <div class="bottom">
              <div class="highlight">With a 2 year term (20% Savings)</div>
              <div class="price">
                <sup>$</sup>59.99
              </div>
              <p class="price-comment">70.00 USD/mo when you renew<sup>4</sup></p>
              <div class="actions d-flex align-items-center">
                <a href="#" class="theme-btn --fill-primary w-100">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="option">
            <div class="top">
              <h3 class="option-sub-title">Multi-Domain SAN SSL Certificate</h3>
              <h3 class="option-title">One SAN SSL certificate encrypts multiple domains.</h3>
              <div class="option-text">A single certificate secures multiple domains. Economize by administering numerous SSL certificates (ranging from 5 to 100 sites).</div>
            </div>
            <div class="middle">
              <ul class="option-features list-unstyled d-flex flex-column" data-gap-y="5px">
                <li data-gap-x="10px"><img src={tick} class="img-fluid" alt="icon"/>SSL encryption for up to 100 websites.</li>
                <li data-gap-x="10px"><img src={tick} class="img-fluid" alt="icon"/>Save money over buying multiple SSLs.</li>
                <li data-gap-x="10px"><img src={tick} class="img-fluid" alt="icon"/>Get expert support when you need it.</li>
              </ul>
            </div>
            <div class="bottom">
              <div class="highlight">With a 2 year term (20% Savings)</div>
              <div class="price">
                <sup>$</sup>207.99
              </div>
              <p class="price-comment">280.00 USD/mo when you renew<sup>4</sup></p>
              <div class="actions d-flex align-items-center">
                <a href="#" class="theme-btn --fill-primary w-100">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SecurityOtherPlans