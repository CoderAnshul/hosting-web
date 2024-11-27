import React, { useState } from 'react';
import checked from "../assets/images/icons/checked.png"
import checked2 from "../assets/images/icons/checked-2.png"

const SharedHostingShowCase = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('top-features'); // Default is "Top Features"
  
  // Event handler for tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="plans-table-sec py-90 bg-2">
      <div className="container-fluid">

        <div className="se-title">
          <h3 className="sub-title">Shared Hosting</h3>
          <h2 className="title">So what's in Shared Hosting?<br />A whole lot.</h2>
        </div>

        <div className="filter-nav-ii mb-2" id="filter-nav-ii">
          <div className="row justify-content-center small-gutters">
            <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-xl-0 mb-1">
              <div
                className={`tab ${activeTab === 'top-features' ? 'active' : ''}`}
                onClick={() => handleTabClick('top-features')}
              >
                Top Features
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-xl-0 mb-1">
              <div
                className={`tab ${activeTab === 'cpanel' ? 'active' : ''}`}
                onClick={() => handleTabClick('cpanel')}
              >
                cPanel
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-xl-0 mb-1">
              <div
                className={`tab ${activeTab === 'email' ? 'active' : ''}`}
                onClick={() => handleTabClick('email')}
              >
                Email
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4 col-6 mb-md-0 mb-1">
              <div
                className={`tab ${activeTab === 'domain' ? 'active' : ''}`}
                onClick={() => handleTabClick('domain')}
              >
                Domain/FTP
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div
                className={`tab ${activeTab === 'support' ? 'active' : ''}`}
                onClick={() => handleTabClick('support')}
              >
                Support
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4 col-6">
              <div
                className={`tab ${activeTab === 'application' ? 'active' : ''}`}
                onClick={() => handleTabClick('application')}
              >
                Application
              </div>
            </div>
          </div>
        </div>

        <div className="th-table">
          <table className="compare-table" id="compare-table-i">

            <thead>
              <tr>
                <th className="top-left-corner">
                  <span className="table-title-head">Swipe to<br />check plans</span>
                  <span>&rightarrow;</span>
                </th>
                <th className="top-right-corner">
                  <span className="table-title-3">Basic</span>
                  <div className="price">
                    <span className="table-title-4">As low as</span>
                    <span className="table-title-1"><span className="coin">$</span>2.95<span className="sm-text">/mo</span></span>
                  </div>
                  <a href="shared.php" className="theme-btn --fill-primary">Configure Your Server</a>
                </th>
                <th className="top-right-corner">
                  <span className="table-title-3">Online Store</span>
                  <div className="price">
                    <span className="table-title-4">As low as</span>
                    <span className="table-title-1"><span className="coin">$</span>9.95<span className="sm-text">/mo</span></span>
                  </div>
                  <a href="shared.php" className="theme-btn --fill-primary">Configure Your Server</a>
                </th>
                <th className="top-right-corner">
                  <span className="table-title-3">PRO</span>
                  <div className="price">
                    <span className="table-title-4">As low as</span>
                    <span className="table-title-1"><span className="coin">$</span>13.95<span className="sm-text">/mo</span></span>
                  </div>
                  <a href="shared.php" className="theme-btn --fill-primary">Configure Your Server</a>
                </th>
              </tr>
            </thead>

            <tbody>
              {activeTab === 'top-features' && (
                <>
                  <tr>
                    <td className="left-corner">Websites</td>
                    <td className="right-corner">Single</td>
                    <td className="right-corner">Up to 2</td>
                    <td className="right-corner">Up to 3</td>
                  </tr>
                  <tr>
                    <td className="left-corner">Bandwidth</td>
                    <td className="right-corner">Unmetered</td>
                    <td className="right-corner">Unmetered</td>
                    <td className="right-corner">Unmetered</td>
                  </tr>
                  <tr>
                    <td className="left-corner">SSD Web Storage</td>
                    <td className="right-corner">10GB</td>
                    <td className="right-corner">20GB</td>
                    <td className="right-corner">40GB</td>
                  </tr>
                  <tr>
                    <td className="left-corner">Email Addresses</td>
                    <td className="right-corner">Unlimited</td>
                    <td className="right-corner">Unlimited</td>
                    <td className="right-corner">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="left-corner">Support</td>
                    <td className="right-corner">Chat Only</td>
                    <td className="right-corner">Phone & Chat</td>
                    <td className="right-corner">Phone & Chat</td>
                  </tr>
                  <tr>
                    <td className="left-corner">1 year domain registration</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">FREE domain transfers</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">One-click WordPress Installs</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">30-day money back guarantee</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">Auto-renewed SSL certification</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">$500 Google Ads spend match credit</td>
                    <td className="right-corner">-</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">$100 Microsoft Advertising credit</td>
                    <td className="right-corner">-</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">MySQL transfer & script transfer</td>
                    <td className="right-corner">-</td>
                    <td className="right-corner">-</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">Cloudflare CDN</td>
                    <td className="right-corner">-</td>
                    <td className="right-corner">-</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">Dedicated IP</td>
                    <td className="right-corner">-</td>
                    <td className="right-corner">-</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">SEO Tools</td>
                    <td className="right-corner">-</td>
                    <td className="right-corner">-</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">Positive SSL upgrade</td>
                    <td className="right-corner">-</td>
                    <td className="right-corner">-</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">Professional website migration services</td>
                    <td className="right-corner">-</td>
                    <td className="right-corner">-</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                </>
              )}

              {/* Content for "cPanel" tab */}
              {activeTab === 'cpanel' && (
                <>
                  <tr>
                    <td className="left-corner">Latest cPanel web hosting control panel</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src ={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">Website statistic tools</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">Application installs</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">Password protected directories</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">Custom error pages</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">Expert management tools</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                </>
              )}

              {/* Content for "Email" tab */}
              {activeTab === 'email' && (
                <>
                  <tr>
                    <td className="left-corner">POP3 email accounts with SMTP</td>
                    <td className="right-corner">Unlimited</td>
                    <td className="right-corner">Unlimited</td>
                    <td className="right-corner">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="left-corner">Webmail access</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">Get email on phone via IMAP support</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">Prevent spam with SpamAssassin</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">Advanced email tools</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                </>
              )}

              {/* Content for "Domain/FTP" tab */}
              {activeTab === 'domain' && (
                <>
                  <tr>
                    <td className="left-corner">Subdomains</td>
                    <td className="right-corner">Unlimited</td>
                    <td className="right-corner">Unlimited</td>
                    <td className="right-corner">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="left-corner">FTP accounts</td>
                    <td className="right-corner">Unlimited</td>
                    <td className="right-corner">Unlimited</td>
                    <td className="right-corner">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="left-corner">Addon/Parked domains</td>
                    <td className="right-corner">-</td>
                    <td className="right-corner">Unlimited</td>
                    <td className="right-corner">Unlimited</td>
                  </tr>
                </>
              )}

              {/* Content for "Support" tab */}
              {activeTab === 'support' && (
                <>
                  <tr>
                    <td className="left-corner">Customer support</td>
                    <td className="right-corner">Chat Only</td>
                    <td className="right-corner">Phone & Chat</td>
                    <td className="right-corner">Phone & Chat</td>
                  </tr>
                  <tr>
                    <td className="left-corner">Courtesy website backups</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">24/7/365 hosting server monitoring</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                </>
              )}

              {/* Content for "Application" tab */}
              {activeTab === 'application' && (
                <>
                  <tr>
                    <td className="left-corner">One-click installs</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">WordPress Hosting</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">Joomla & Drupal Hosting</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">Magento Hosting</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                  <tr>
                    <td className="left-corner">Wiki Hosting</td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                    <td className="right-corner"><img src={checked} className="check-icon img-fluid" alt="Check" /></td>
                  </tr>
                </>
              )}
            </tbody>

          </table>
        </div>
        <div class="se-footer d-flex align-items-center justify-content-center flex-wrap mt-3">

        <div class="line d-flex align-items-center justify-content-start">
          <img src={checked2} class="icon mr--sm-2 img-fluid" alt="Check"/>
          <span class="text">Backups monthly</span>
        </div>

        <div class="line d-flex align-items-center justify-content-start">
          <img src={checked2} class="icon mr--sm-2 img-fluid" alt="Check"/>
          <span class="text">Free white-glove migrations</span>
        </div>

        <div class="line d-flex align-items-center justify-content-start">
          <img src={checked2} class="icon mr--sm-2 img-fluid" alt="Check"/>
          <span class="text">Staging environments, and more.</span>
        </div>
      </div>
      </div>
    </div>
  );
}

export default SharedHostingShowCase;
