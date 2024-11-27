import React from 'react'
import av1 from "../assets/images/avatars/01.png"
import av2 from "../assets/images/avatars/02.png"
import av3 from "../assets/images/avatars/03.png"
import sslimg from "../assets/images/elements/ssl/01.png"

const SslBanner = () => {
  return (
    <header className='sslbanner'>
    <div class="container-fluid">

      <div class="row">

        <div class="col-xl-5 col-lg-6 text-lg-left text-center">

          <div class="content position-relative">
    
            <h3 class="sub-title">Validate your domain for one or more sites.</h3>
          
            <h1 class="title">Free SSL Certificate<br/>included with any plan.</h1>
           
            <p class="para">Prevent data theft and other tampering by encrypting as much of your web traffic as possible. All HostGate plans come with free SSL, ultra-fast DNS, a global CDN.</p>
      
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
            <img src={sslimg} class="img-fluid" alt="Image"/>
          </div>
        </div>

        <div class="col-xl-3 mt-xl-0 mt-3 d-xl-flex d-none align-items-center">
        
          <ul class="features">
            <li>Secure your website with an SSL certificate, ensuring encrypted communication and data protection.</li>
            <li>Boost your website's credibility with a trusted SSL certificate, instilling confidence in your visitors.</li>
            <li>Protect sensitive customer information with an SSL certificate, guarding against data breaches.</li>
            <li>Enhance your search engine rankings with an SSL certificate, as search engines prioritize secure websites.</li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  )
}

export default SslBanner