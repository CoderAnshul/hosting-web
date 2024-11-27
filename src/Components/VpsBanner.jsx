import React from 'react'
import av1 from "../assets/images/avatars/01.png"
import av2 from "../assets/images/avatars/02.png"
import av3 from "../assets/images/avatars/03.png"
import man from "../assets/images/elements/vps/man-01.png"
import checked from "../assets/images/icons/checked.png"
import shield from "../assets/images/icons/vps/shield-check.png"
import settings from "../assets/images/icons/vps/settings.png"

const VpsBanner = () => {
  return (
    <header>
    <div class="container-fluid">
     
      <div class="row">
        
        <div class="col-lg-6 text-lg-left text-center">
      
          <div class="content position-relative">
    
            <h3 class="sub-title">Self Managed VPS Hosting.</h3>
          
            <h1 class="title">Effortlessly get<br/>the power <b class="pri-color">you need</b>.</h1>
          
            <p class="para">We offer high quality Virtual Private Servers with the best price-to-performance ratio (featuring AMD EPYC™ 7282 CPUs, NVMe SSDs, and a truckload of RAM and traffic) so you can build more for less.</p>
           
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
              <a href="#" class="theme-btn --outline-primary">Sign-up Free Trial</a>
            </div>
          </div>
        </div>
        
        <div class="col-6">
         
          <div class="img-box">
            <img src={man} class="img-fluid" alt="Man"/>
            
            <div class="float-circle-1 d-inline-flex align-items-center justify-content-center">
              <img src={checked} class="img-fluid" alt="icon"/>
            </div>
           
            <div class="float-circle-2 d-inline-flex align-items-center justify-content-center">
              <img src={shield} class="img-fluid mr--sm-2" alt="icon"/>
              <h4 class="circle-title">Secure</h4>
            </div>
       
            <div class="float-circle-3 d-inline-flex align-items-center justify-content-center">
              <img src={settings} class="img-fluid mr--sm-2" alt="icon"/>
              <h4 class="circle-title">Easy Setup</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default VpsBanner