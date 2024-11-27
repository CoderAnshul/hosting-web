import React from 'react'
import av1 from "../assets/images/avatars/01.png"
import av2 from "../assets/images/avatars/02.png"
import av3 from "../assets/images/avatars/03.png"
import laptop from "../assets/images/elements/website-security/laptop.png"

const websiteSecurityBanner = () => {
  return (
    <header className='secBanner'>
    <div class="container-fluid">
   
      <div class="row">

        <div class="col-xl-5 col-lg-6 text-lg-left text-center">
 
          <div class="content position-relative">

            <h3 class="sub-title">Website Security.</h3>
    
            <h1 class="title">Get peace of mind<br/>and secure your site.</h1>
  
            <p class="para">Enhance website protection by encrypting maximum web traffic, thwarting data theft and tampering. HostGate plans include free SSL, high-speed DNS, and a global CDN, ensuring robust website security.</p>
    
            <div class="box d-inline-flex align-items-center mb-4">
        
              <div class="users d-flex align-items-center mr-1">
       
                <div class="user">
                  <img src={av1} class="img-fluid" alt="User"/>
                </div>
    
                <div class="user">
                  <img src={av2} class="img-fluid" alt="User"/>
                </div>
          
                <div class="user">
                  <img src={av3} class="img-fluid" alt="User"/>
                </div>
           
                <div class="user">
                  <img src={av2} class="img-fluid" alt="User"/>
                </div>
              </div>
          
              <div class="text-box text-left">
      
                <h4 class="count">+100k</h4>
     
                <p class="text">Hosting Server Worldwide</p>
              </div>
            </div>
            
            <div class="links d-flex align-items-center justify-content-lg-start justify-content-center">
              <a href="#" class="theme-btn --fill-primary mr-1">Choose a Plan</a>
            </div>
          </div>
        </div>
     
        <div class="col-xl-4 col-lg-6 d-lg-flex d-none px-xl-3 pl-xl-0 pl-3">
      
          <div class="center-box d-flex align-items-center justify-content-center">
            <img src={laptop} class="img-fluid" alt="Image"/>
          </div>
        </div>
       
        <div class="col-xl-3 mt-xl-0 mt-3 d-xl-flex d-none align-items-center">
      
          <ul class="features">
            <li>Enhance your website's security with robust measures, shielding against cyber threats.</li>
            <li>Protect your online presence effectively, fortifying against unauthorized access.</li>
            <li>Ensure utmost website security, safeguarding sensitive data from potential breaches.</li>
            <li>Elevate your cybersecurity defenses, fortifying your website against malicious attacks.</li>
            <li>Bolster your online protection with advanced security protocols, ensuring a secure browsing experience.</li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  )
}

export default websiteSecurityBanner