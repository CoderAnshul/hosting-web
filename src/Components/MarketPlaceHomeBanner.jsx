import React from 'react'
import rightArrow from "../assets/images/icons/right-arrow-w.png";

const MarketPlaceHomeBanner = () => {
  return (
    <div class="se-v">
    <div class="container-fluid">

      <div class="row">

        <div class="col-xl-6">
        </div>

        <div class="col-xl-6 pl-xl-0">

          <div class="text text-xl-left text-center">

            <h4 class="sub-title mb-1">ONLINE STORE + MARKETPLACE</h4>

            <h2 class="title-1 mb-2">Take your store<br/>online in minutes.</h2>
 
            <p class="para-1">Step one, build your online store. Step two, easily manage inventory and get real-time statistics. With the 75% faster Online Store + Marketplace, you can access the tools you need to sell anything.</p>

            <a href="#" class="theme-btn --fill-primary --has-icon mt-3">Learn More <img src={rightArrow} class="th-btn-icon ml--sm-1 dir-reflect img-fluid" alt="Right Arrow"/></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MarketPlaceHomeBanner