import React from 'react'
import av1 from "../assets/images/avatars/01.png"
import av2 from "../assets/images/avatars/01.png"
import av3 from "../assets/images/avatars/01.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from 'jquery';
import 'slick-carousel';
import nextBtn from "../assets/images/icons/next-button.png"
import prevBtn from "../assets/images/icons/prev-button.png"
import logo from "../assets/images/icons/tb-logo.svg"




const HostGate = () => {


    $(document).ready(function() {
        function getSlidesToShow() {
          const containerWidth = $('.reviews-slider').width();
          
          // Adjust this logic to suit your design
          if (containerWidth > 1200) {
            return 3;  // Show 4 slides for larger screens
          } else if (containerWidth > 768) {
            return 2;  // Show 3 slides for medium screens
          } else if (containerWidth > 480) {
            return 2;  // Show 2 slides for smaller screens
          } else {
            return 1;  // Show 1 slide for mobile
          }
        }
      
        // Initialize slick slider
        $('.reviews-slider').slick({
          slidesToShow: getSlidesToShow(),  // Set slidesToShow dynamically
          slidesToScroll: 1,
          arrows: true,
          prevArrow: $('.slider-arrow#reviews-slider-prevArrow'),
          nextArrow: $('.slider-arrow#reviews-slider-nextArrow'),
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                swipe: true,
                swipeToSlide: true,
              }
            }
          ]
        });
      
        // Recalculate slidesToShow when window is resized
        $(window).resize(function() {
          const newSlidesToShow = getSlidesToShow();
          $('.reviews-slider').slick('slickSetOption', 'slidesToShow', newSlidesToShow, true);
        });
      });

      
  return (
    <div class="reviews-se py-90 bg-2">
    <div class="container-fluid">

      <div class="se-title">
        <h3 class="sub-title">HostGate Reviews</h3>
        <h2 class="title">Trusted by 21+ million customers<br/>around the world.</h2>
      </div>

      <div class="reviews-slider " id="reviews-slider" dir="ltr">
   
        <div class="t-box">

          <div class="icon mb-2 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#DCDCE6"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
          </div>
 
          <p class="text hdkasdh mb-3">HostGate is truly an efficient service. I moved my two domains over to HostGate to enhance security of my websites, and HostGate has kept its promise to protect my domains. When I call, the representatives are friendly and knowledgable. I am a happy client.</p>

          <div class="c-info d-flex align-items-center mt-auto">
 
            <div class="avatar mr-1">
              <img src={av1} class="img-fluid" alt="Customer"/>
            </div>

            <div class="c-text">
              <h5 class="c-name">Edison Bozeman</h5>
              <h6 class="c-job">Adobe Product Manager</h6>
            </div>
          </div>
        </div>

        <div class="t-box">

          <div class="icon mb-2 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#DCDCE6"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
          </div>

          <p class="text hdkasdh mb-3">I have been a HostGate customer for years! Whenever I have needed customer service, I have had the best experience and always learn something new. HostGate is a one-stop shop for all my domain, email, website, tech service needs. 24/7 great support! Thank you HostGate!</p>

          <div class="c-info d-flex align-items-center mt-auto">

            <div class="avatar mr-1">
              <img src={av2} class="img-fluid" alt="Customer"/>
            </div>
    
            <div class="c-text">
              <h5 class="c-name">John Buckland</h5>
              <h6 class="c-job">Full Stack Web Developer</h6>
            </div>
          </div>
        </div>

        <div class="t-box">

          <div class="icon mb-2 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
          </div>

          <p class="text hdkasdh mb-3">HostGate has all the resources in one place to make running as a small business easy. I have my domain and website set up though them, my business phone, and my business email. All of these things build credibility with my clients. The process to set these things was very easy and seamless.</p>

          <div class="c-info d-flex align-items-center mt-auto">
  
            <div class="avatar mr-1">
              <img src={av3} class="img-fluid" alt="Customer"/>
            </div>
  
            <div class="c-text">
              <h5 class="c-name">Sean Williams</h5>
              <h6 class="c-job">Graphic Designer</h6>
            </div>
          </div>
        </div>
 
        <div class="t-box">

          <div class="icon mb-2 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#DCDCE6"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
          </div>

          <p class="text hdkasdh mb-3">HostGate is truly an efficient service. I moved my two domains over to HostGate to enhance security of my websites, and HostGate has kept its promise to protect my domains. When I call, the representatives are friendly and knowledgable. I am a happy client.</p>

          <div class="c-info d-flex align-items-center mt-auto">
   
            <div class="avatar mr-1">
              <img src={av1} class="img-fluid" alt="Customer"/>
            </div>
           
            <div class="c-text">
              <h5 class="c-name">Edison Bozeman</h5>
              <h6 class="c-job">Adobe Product Manager</h6>
            </div>
          </div>
        </div>

        <div class="t-box">

          <div class="icon mb-2 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#DCDCE6"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
          </div>

          <p class="text hdkasdh mb-3">I have been a HostGate customer for years! Whenever I have needed customer service, I have had the best experience and always learn something new. HostGate is a one-stop shop for all my domain, email, website, tech service needs. 24/7 great support! Thank you HostGate!</p>

          <div class="c-info d-flex align-items-center mt-auto">
 
            <div class="avatar mr-1">
              <img src={av2} class="img-fluid" alt="Customer"/>
            </div>
  
            <div class="c-text">
              <h5 class="c-name">John Buckland</h5>
              <h6 class="c-job">Full Stack Web Developer</h6>
            </div>
          </div>
        </div>

        <div class="t-box">

          <div class="icon mb-2 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
          </div>

          <p class="text hdkasdh mb-3">HostGate has all the resources in one place to make running as a small business easy. I have my domain and website set up though them, my business phone, and my business email. All of these things build credibility with my clients. The process to set these things was very easy and seamless.</p>

          <div class="c-info d-flex align-items-center mt-auto">
  
            <div class="avatar mr-1">
              <img src={av3} class="img-fluid" alt="Customer"/>
            </div>
  
            <div class="c-text">
              <h5 class="c-name">Sean Williams</h5>
              <h6 class="c-job">Graphic Designer</h6>
            </div>
          </div>
        </div>
      </div>

      <div class="row align-items-center mt-3">

        <div class="col-lg-8 order-lg-1 order-2">
 
          <div class="rating-box d-md-flex align-items-center justify-content-lg-start justify-content-center text-md-left text-center">
        
            <h5 class="text mr-md-1 mb-md-0 mb-1">Excellent</h5>
       
            <div class="icon mr-md-1 mb-md-0 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#00B67B"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 18 18" fill="none"><path d="M18.0002 0H9.00537V18.0001H18.0002V0Z" fill="#DCDCE6"></path><path d="M9.00524 0H0V18.0001H9.00524V0Z" fill="#00B67B"></path><path d="M9.00575 12.1358L11.7397 11.4366L12.8771 14.9636L9.00575 12.1358ZM15.2666 7.57576H10.4771L9.00575 3.03662L7.56575 7.56533H2.70312L6.60575 10.3723L5.12401 14.8697L9.01619 12.0627L11.4162 10.3306L15.298 7.56533L15.2666 7.57576Z" fill="#fff"></path></svg>
            </div>
            <p class="text-2 mr-md-1 mb-md-0 mb-1"><b>638</b> Reviews on</p>

            <img src={logo} class="logo img-fluid" alt="Trustpilot"/>
          </div>
        </div>

        <div class="col-lg-4 order-lg-2 order-1 text-lg-right text-center mb-lg-0 mb-2">
  
          <div class="reviews-slider-arrows">
            <button type="button" class="slider-arrow" id="reviews-slider-prevArrow"><img src={prevBtn} class="img-fluid" alt="Prev"/></button>
            <button type="button" class="slider-arrow" id="reviews-slider-nextArrow"><img src={nextBtn} class="img-fluid" alt="Next"/></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HostGate