import React from 'react'
import search from "../assets/images/icons/search.png"

const DomainBanner = () => {
  return (
    <header class="text-lg-left text-center Domain-page-header">
    <div class="container-fluid">
    
      <h1 class="title-1 mb-3">Find Perfect Domain<br/>Name For Your Website.</h1>
  
      <input type="hidden" name="transfer"/>
 
      <form action="" method="post" class="search-form" id="frmDomainHomepage">
      
        <div class="form-label position-relative d-md-flex d-block align-items-center justify-content-lg-start justify-content-center mx-lg-0 mx-auto">
         
          <span class="input-icon">
            <img src={search} class="img-fluid" alt="Search"/>
          </span>
        
          <input type="text" class="form-input th-input" id="search-input" name="search-input" placeholder="Type the one you want here"/>
      
          <button type="submit" class="submit-btn theme-btn --fill-primary text-uppercase ml-md-1 ml-0 mt-md-0 mt-1">Search</button>
        </div>
      </form>
    
      <p class="para-1 mt-md-1 mt-2 text-lg-left text-center">Already have a domain?<a href="#">Transfer it to us</a></p>
   
      <div class="boxes d-flex align-items-center justify-content-lg-start justify-content-center flex-wrap mt-3">
        <div class="box box-1 d-flex align-items-center justify-content-center text-uppercase">com</div>
        <div class="box box-2 d-flex align-items-center justify-content-center text-uppercase">NET</div>
        <div class="box box-3 d-flex align-items-center justify-content-center text-uppercase">ONLINE</div>
        <div class="box box-4 d-flex align-items-center justify-content-center text-uppercase">STORE</div>
        <div class="box box-5 d-flex align-items-center justify-content-center text-uppercase">VIP</div>
      </div>
    </div>
  </header>
  )
}

export default DomainBanner