import React from 'react'
import av1 from "../assets/images/avatars/01.png"
import av2 from "../assets/images/avatars/02.png"
import av3 from "../assets/images/avatars/03.png"
import tower from "../assets/images/elements/falling_tower_game.png"

const DedicatedHeader = () => {
  return (
    <header>
    <div class="container-fluid">
     
      <div class="row">
         
        <div class="col-xl-5 col-lg-6 text-lg-left text-center">
          
          <div class="content position-relative">
       
            <h3 class="sub-title">Self Managed Dedicated Server Hosting</h3>
            
            <h1 class="title">Get high-powered<br/>Dedicated Server Hosting.</h1>
            
            <p class="para">With HostGate Dedicated Hosting, whether you use the Website Builder or traditional WordPress, you get all the features, tools, and guidance you need to build and launch truly impressive WordPress websites.</p>
         
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
         
        <div class="col-xl-4 col-lg-6 d-lg-flex d-none px-xl-3 pl-xl-0 pl-3">
           
          <div class="center-box d-flex align-items-center justify-content-center">
            <img src={tower} class="img-fluid" alt="Image"/>
          </div>
        </div>
         
        <div class="col-xl-3 mt-xl-0 mt-3 d-xl-flex d-none align-items-center">
           
          <ul class="features">
            <li>Reliable servers with a 99.9% uptime guarantee, or your money back.</li>
            <li>Easy-to-use control panel for effortless server management.</li>
            <li>Unleash the power of bare metal servers with root access and NVMe SSD drives.</li>
            <li>Experience lightning-fast performance with NVMe SSD drives and rock-solid uptime.</li>
            <li>Take control of your server with root access and high-speed NVMe SSD storage.</li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  )
}

export default DedicatedHeader