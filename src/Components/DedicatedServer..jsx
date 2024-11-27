import React from 'react'
import check from "../assets/images/icons/checked.png"

const DedicatedServer = () => {
  return (
    <div class="plans-table-sec py-90">
    <div class="container-fluid">
      
      <div class="se-title">
        <h3 class="sub-title">Dedicated Server Management</h3>
        <h2 class="title">Simply select your preferred type of management during the purchase phase.</h2>
      </div>
     
      <div class="th-table">
        
        <table class="compare-table" id="compare-table-i">
         
          <thead>
            <tr>
             
              <th class="top-left-corner">
                
                <span class="table-title-head">Swipe to<br/>check plans</span>
                <span>→</span>
              </th>
             
              <th class="top-right-corner">
                
                <span class="table-title-3">User-Responsible</span>
             
                <div class="price">
                
                  <span class="table-title-1"><span class="coin"></span>FREE<span class="sm-text"></span></span>
                </div>
              </th>
       
              <th class="top-right-corner">
             
                <span class="table-title-3">Basic</span>
           
                <div class="price">
                  
                  <span class="table-title-1"><span class="coin">$</span>10.00<span class="sm-text">/mo</span></span>
                </div>
              </th>
              
              <th class="top-right-corner">
                
                <span class="table-title-3">Complete</span>
                
                <div class="price">
                  
                  <span class="table-title-1"><span class="coin">$</span>25.00<span class="sm-text">/mo</span></span>
                </div>
              </th>
            </tr>
          </thead>
      
          <tbody>
            <tr class="hovered">
              <td class="left-corner"></td>
              <td class="right-corner">...</td>
              <td class="right-corner">...</td>
              <td class="right-corner">...</td>
            </tr>
            
            <tr>
              <td class="left-corner">Security enhancements<span class="float-box text-left" data-text="Security enhancements include ModSecurity Web Application Firewall installation, Server Monitoring, and CXS anti-malware protection with Complete Management (CXS license installation is available with Quasar Plan)."></span></td>
              <td class="right-corner">--</td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /></td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /><span class="d-text">CXS license installed</span></td>
            </tr>
       
            <tr>
              <td class="left-corner">Restore server failure<span class="float-box text-left" data-text="If the server fails, our Tech Support will bring the server back online."></span></td>
              <td class="right-corner">$10.00<span class="d-text">flat rate per each restore</span></td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /></td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /></td>
            </tr>
          
            <tr>
              <td class="left-corner">Core software changes<span class="float-box text-left" data-text="Refers to OS reinstallation, software version changes, etc."></span></td>
              <td class="right-corner">1 hr - $15.00<span class="d-text">flat rate</span></td>
              <td class="right-corner">1 hr - $10.00<span class="d-text">flat rate</span></td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /></td>
            </tr>
          
            <tr>
              <td class="left-corner">Fix server failure cause<span class="float-box text-left" data-text="To avoid future failure, our Tech Support will investigate the root cause of the server failing."></span></td>
              <td class="right-corner">1 hr - $15.00<span class="d-text">flat rate</span></td>
              <td class="right-corner">1 hr - $10.00<span class="d-text">flat rate</span></td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /></td>
            </tr>
         
            <tr>
              <td class="left-corner">Customer support advice<span class="float-box text-left" data-text="Ask our team how to change or reset passwords, create backups, etc."></span></td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /></td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /></td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /></td>
            </tr>
          
            <tr>
              <td class="left-corner">Initial Dedicated setup</td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /></td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /></td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /></td>
            </tr>
            
            <tr>
              <td class="left-corner">Operating system<span class="float-box text-left" data-text="Basic and Complete Management types are available with Almalinux only. These types of Management also require cPanel. Please note cPanel can only be installed on AlmaLinux and CentOS."></span></td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /></td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /><span class="d-text">AlmaLinux</span></td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /><span class="d-text">AlmaLinux</span></td>
            </tr>
           
            <tr>
              <td class="left-corner">Root access</td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /></td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /></td>
              <td class="right-corner">--<span class="d-text">Best for security</span></td>
            </tr>
            
            <tr>
              <td class="left-corner">Reboot access</td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /></td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /></td>
              <td class="right-corner">--<span class="d-text">Best for security</span></td>
            </tr>
            
            <tr>
              <td class="left-corner">SolusVM access</td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /></td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /></td>
              <td class="right-corner">--<span class="d-text">Best for security</span></td>
            </tr>
           
            <tr>
              <td class="left-corner">Any hardware issues</td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /></td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /></td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /></td>
            </tr>
          
            <tr>
              <td class="left-corner">Monitoring</td>
              <td class="right-corner">--</td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /><span class="d-text">Proactive response when issues are detected</span></td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /><span class="d-text">Proactive response when issues are detected</span></td>
            </tr>
           
            <tr>
              <td class="left-corner">Vendor updates</td>
              <td class="right-corner">--</td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /></td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /></td>
            </tr>
            
            <tr>
              <td class="left-corner">Offsite backup</td>
              <td class="right-corner">--</td>
              <td class="right-corner">--</td>
              <td class="right-corner"><img src={check} class="check-icon img-fluid" alt="Check" /><span class="d-text">Up to 200 GB weekly backup</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    
      <div class="se-footer mt-3">
        
        <div class="row align-items-lg-end">
          
          <div class="col-lg-9 d-flex flex-column mb-lg-0 mb-3" data-gap-y="10px">
          
            <p class="para-1">Complete management includes CXS license installation. Free scans are available upon request for the Basic plan. A CXS license or scan can be ordered at an additional fee for User-Responsible plans. <a href="#" class="th-link">Learn more about CXS license.</a></p>
            <p class="para-1">Currently, Basic and Complete server management add-ons are available only with the Quasar and Magnetar Dedicated Hosting plans.</p>
            <p class="para-1">Offsite backup storage with Complete server management depends on the Dedicated plan and includes 100 GB for Quasar and 200 GB for Magnetar plans.</p>
          </div>
      
          <div class="col-lg-3 text-lg-right text-center">
            <a href="#" class="theme-btn --fill-primary --shadow-off">Get Dedicated Hosting</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DedicatedServer