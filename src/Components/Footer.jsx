import React, { useEffect } from 'react'
import bigPaper from "../assets/images/icons/big-paper-bag.png"
import user from "../assets/images/icons/user.png"
import bubble from "../assets/images/icons/speech-bubble.png"
import whiteLogo from "../assets/images/logo/logo-white.svg"

import twitter from "../assets/images/icons/social/twitter.png"
import reddit from "../assets/images/icons/social/reddit.png"
import facebook from "../assets/images/icons/social/facebook-d.png"
import linkedIn from "../assets/images/icons/social/linkedin.png"

const Footer = () => {

  useEffect(() => {
    const handleClick = (event) => {
      const target = event.currentTarget;
      target.parentElement.classList.toggle('open-list');
    };

    const titles = document.querySelectorAll('.theme-footer .list-title');
    titles.forEach(title => {
      title.addEventListener('click', handleClick);
    });

    return () => {
      titles.forEach(title => {
        title.removeEventListener('click', handleClick);
      });
    };
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <footer class="theme-footer">

      <div class="support">
        <div class="container-fluid">

          <h3 class="title-1">Need Some Help?</h3>

          <p class="para-1">Whether you're stuck or just want some tips on where to start,<br/>hit up our experts anytime. We're here to help!</p>

          <div class="row">

            <div class="col-xl-4 col-lg-6 mb-xl-0 mb-2">

              <div class="box d-flex align-items-center position-relative">

                <a href="#" class="box-link"></a>
              
                <div class="icon d-flex align-items-center justify-content-center mr-2">
                  <img src={bigPaper} class="img-fluid" alt="Paper Bag"/>
                </div>
          
                <div class="box-text">
             
                  <h4 class="box-title">HostGate Sales Help</h4>
              
                  <p class="box-para">24/7/365 Through the Chat Widget</p>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-6 mb-lg-0 mb-2">

              <div class="box d-flex align-items-center position-relative">
         
                <a href="#" class="box-link"></a>

                <div class="icon d-flex align-items-center justify-content-center mr-2">
                  <img src={user} class="img-fluid" alt="User "/>
                </div>
       
                <div class="box-text">
        
                  <h4 class="box-title">Customer Support Chat</h4>
             
                  <p class="box-para">24/7/365 Through the Panel</p>
                </div>
              </div>
            </div>
        
            <div class="col-xl-4 col-lg-6 ">
       
              <div class="box d-flex align-items-center position-relative">
           
                <a href="#" class="box-link"></a>
          
                <div class="icon d-flex align-items-center justify-content-center mr-2">
                  <img src={bubble} class="img-fluid" alt="Speech Bubble"/>
                </div>

                <div class="box-text">
            
                  <h4 class="box-title">Customer Support Email</h4>
             
                  <p class="box-para">24/7/365 Through the Panel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid">
        <div class="list-group">

          <ul class="footer-list list-unstyled">
            <li class="list-title">About HostGate</li>
            <li class="list-link"><a href="#">About Us</a></li>
            <li class="list-link"><a href="#">Newsroom</a></li>
            <li class="list-link"><a href="#">Investor Relations</a></li>
            <li class="list-link"><a href="#">Careers</a></li>
            <li class="list-link"><a href="#">Corporate Responsibility</a></li>
            <li class="list-link"><a href="#">Trust Center</a></li>
            <li class="list-link"><a href="terms.php">Legal</a></li>
          </ul>

          <ul class="footer-list list-unstyled">
            <li class="list-title">Help Center</li>
            <li class="list-link"><a href="#">Community</a></li>
            <li class="list-link"><a href="#">HostGate Blog</a></li>
            <li class="list-link"><a href="contact.php">Contact Us</a></li>
            <li class="list-link"><a href="abuse.php">Report Abuse</a></li>
            <li class="list-link"><a href="#">Resources</a></li>
          </ul>

          <ul class="footer-list list-unstyled">
            <li class="list-title">Resources</li>
            <li class="list-link"><a href="#">Webmail</a></li>
            <li class="list-link"><a href="#">WHOIS</a></li>
            <li class="list-link"><a href="#">HostGate Mobile App</a></li>
            <li class="list-link"><a href="#">ICANN Confirmation</a></li>
            <li class="list-link"><a href="#">Designers &amp; Developers</a></li>
            <li class="list-link"><a href="#">Corporate Domains</a></li>
            <li class="list-link"><a href="#">Redeem Code</a></li>
          </ul>

          <ul class="footer-list list-unstyled">
            <li class="list-title">Partner Programs</li>
            <li class="list-link"><a href="#">Affiliates</a></li>
            <li class="list-link"><a href="#">Reseller Programs</a></li>
            <li class="list-link"><a href="#">HostGate Pro</a></li>
          </ul>

          <ul class="footer-list list-unstyled">
            <li class="list-title">Account</li>
            <li class="list-link"><a href="#">My Products</a></li>
            <li class="list-link"><a href="#">Renewals &amp; Billing</a></li>
            <li class="list-link"><a href="register.php">Create Account</a></li>
          </ul>

          <ul class="footer-list list-unstyled">
            <li class="list-title">Shopping</li>
            <li class="list-link"><a href="domains.php">Domain Search</a></li>
            <li class="list-link"><a href="#">Websites</a></li>
            <li class="list-link"><a href="#">WordPress</a></li>
            <li class="list-link"><a href="shared.php">Hosting</a></li>
            <li class="list-link"><a href="website-security.php">Web Security</a></li>
            <li class="list-link"><a href="contact.php">Email &amp; Office</a></li>
            <li class="list-link"><a href="contact.php">Phone Numbers</a></li>
            <li class="list-link"><a href="#">Promos</a></li>
          </ul>
        </div>
      </div>

      <div class="container-fluid">
        <div class="footer-bottom">

          <div class="content d-flex align-items-start mb-2">
       
            <div class="logo mb-lg-0 mb-1 mr-2">
              <a href="#">
                <img src={whiteLogo} class="img-fluid" alt="HostGate"/>
              </a>
            </div>

            <div class="copyright mr-lg-5">

              <ul class="links list-unstyled d-flex align-items-center flex-wrap">
                <li><a href="/terms">Terms of Use</a></li>
                <li><a href="/terms">Privacy Policy</a></li>
                <li><a href="/terms">Trademarks</a></li>
                <li><a href="/terms">License Agreements</a></li>
              </ul>

              <p class="para-3">Copyright © <span id="year"></span>, HostGate Operating Company, LLC. All Rights Reserved. The HostGate word mark is a registered trademark of HostGate Operating Company,</p>
            </div>
      
            <ul class="social-list list-unstyled d-flex align-items-center justify-content-lg-end justify-content-center ml-lg-auto mt-lg-0 mt-2">
              <li><a href="#"><img src={twitter} alt="Icon"/></a></li>
              <li><a href="#"><img src={reddit} alt="Icon"/></a></li>
              <li><a href="#"><img src={facebook} alt="Icon"/></a></li>
              <li><a href="#"><img src={linkedIn} alt="Icon"/></a></li>
            </ul>
          </div>

          < div class="content d-lg-flex align-items-end flex-wrap">
 
        
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer