import React from 'react'
import waving from "../assets/images/icons/waving-hand-emoji.png"
import google from "../assets/images/icons/social/google.png"
import facebook from "../assets/images/icons/social/facebook.png"
import github from "../assets/images/icons/social/github.png"

const HomeBanner = () => {
  return (
    <div>
 <header className='homeBanner'>
    <div class="container-fluid">
      <div class="row align-items-center">

        <div class="col-xl-5 col-lg-7 mb-lg-0 mb-3">

          <div class="content text-lg-left text-center">

            <h1 class="title-1 mb-1">Enterprise <br />solutions, small <br />business prices</h1>

            <p class="para-1 mx-lg-0 mx-auto mb-2">
              Our revolutionary Cloud solution is powerful, simple, and surprisingly affordable. Harnessing the web has never been easier.
            </p>

            <a href="#" class="theme-btn --fill-light text-uppercase">Start Now</a>
          </div>
        </div>

        <div class="col-xl-7 col-lg-5">

          <form action="#" class="header-form">

            <div class="row">

              <div class="col-xxl-8 pr-xxl-0">
 
                <div class="content">
                
                  <img src={waving} class="icon img-fluid mb--sm-1" alt="Hi"/>
    
                  <h2 class="form-title mb-1">Create an account.</h2>
     
                  <div class="row">

                    <div class="col-xl-6 col-lg-12 col-md-6 mb-xl-0 mb-lg-2 mb-md-0 mb-2">

                      <div class="i-g">
      
                        <label for="name" class="th-label mb-1">
                          <input type="text" name="name" id="name" class="th-input" placeholder="Full name" autocomplete="off" required/>
                        </label>
            
                        <label for="email" class="th-label mb-1">
                          <input type="email" name="email" id="email" class="th-input" placeholder="Email" autocomplete="off" required/>
                        </label>
    
                        <div class="btns">
                          <button type="submit" class="theme-btn --fill-primary text-uppercase w-100">Register</button>
                        </div>
                      </div>
                    </div>
 
                    <div class="col-xl-6 col-lg-12 col-md-6 social-col">
    
                      <a href="#" class="theme-btn --outline --social-btn w-100 justify-content-center text-nowrap mb-1">
                        <img src={google} class="img-fluid mr--sm-2" alt="Google"/>
                        Continue with Google
                      </a>

                      <a href="#" class="theme-btn --outline --social-btn w-100 justify-content-center text-nowrap mb-1">
                        <img src={facebook} class="img-fluid mr--sm-2" alt="Google"/>
                        Continue with Facebook
                      </a>
       
                      <a href="#" class="theme-btn --outline --social-btn w-100 justify-content-center text-nowrap">
                        <img src={github} class="img-fluid mr--sm-2" alt="Google"/>
                        Continue with Github
                      </a>
                    </div>
                  </div>
                </div>

                <p class="form-comment text-center mt-1">By signing up you agree to the <a href="#">Terms of Services</a></p>
              </div>

              <div class="col-xxl-4 d-xxl-block d-none has-bg"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </header>
    </div>
  )
}

export default HomeBanner