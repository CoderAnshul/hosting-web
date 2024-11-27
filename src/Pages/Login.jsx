import React from 'react'
import "../assets/css/Pages/login.css"
import emoji from "../assets/images/icons/waving-hand-emoji.png"
import logo from "../assets/images/logo/logo-black.svg"
import google from "../assets/images/icons/social/google.png"
import fb from "../assets/images/icons/social/facebook.png"
import storage from "../assets/images/elements/cloud-storage.png"

const Login = () => {
  return (
    <div class="content">

    <div class="row">

      <div class="col-lg-6 left-col d-flex align-items-center justify-content-center">
   
        <div class="form-container">
 
          <div class="form-logo">
            <img src={logo} class="img-fluid" alt="HostGate"/>
          </div>
   
          <div class="form-head">
  
            <h2 class="form-title">
              <img src={emoji} class="img-fluid" alt="Icon"/>
              We're waiting<br/>for you back
            </h2>
          </div>
   
          <form action="#" class="login-form">
    
            <label class="f-label" for="email">
       
              <input class="f-input" type="email" name="email" id="email" placeholder="Email Address" required/>
        
              <span class="state"></span>
            </label>
   
            <label class="f-label" for="password">
      
              <input class="f-input" type="password" name="password" id="password" placeholder="Password" required/>
      
              <span class="state"></span>
            </label>
       
            <div class="text-right">
           
              <a href="reset-pass.php" class="pass-link">Forget Password?</a>
            </div>

            <div class="btns mt-1">
              <button type="submit" class="theme-btn --fill-primary text-uppercase w-100">Login</button>
            </div>
          </form>
 
          <div class="or">or</div>
          
          <div class="options">
       
            <div class="row small-gutters">
             
              <div class="col-6">
             
                <a href="#" class="theme-btn --outline --social-btn w-100 justify-content-center text-nowrap mb-1">
                  <img src={google} class="img-fluid mr--sm-2" alt="Google"/>
                  Google
                </a>
              </div>

              <div class="col-6">
         
                <a href="#" class="theme-btn --outline --social-btn w-100 justify-content-center text-nowrap mb-1">
                  <img src={fb} class="img-fluid mr--sm-2" alt="Google"/>
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <p class="comment text-center mt-3">Don't have a account? <a href="register.php">Create an account</a></p>
        </div>
      </div>

      <div class="col-lg-6 right-col d-flex align-items-center justify-content-center">

        <img src={storage} class="rc-img img-fluid d-lg-block d-none" alt="Image"/>

        <div class="text">
        
          <div class="links d-flex align-items-center justify-content-lg-start justify-content-center" data-gap-x="15px">
            <a href="index.php" class="d-inline-flex">Home</a>
            <a href="kb-2.php" class="d-inline-flex">Help Center</a>
            <a href="terms.php" class="d-inline-flex">Privacy Policy</a>
          </div>

          <p class="para-3 text-lg-left text-center">Use of this Site is subject to express terms of use.<br/>By using this site, you signify that you agree to be bound by these <a href="terms.php">Universal Terms of Service</a>.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login;