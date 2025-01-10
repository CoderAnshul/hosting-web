import React from 'react';
import check from "../assets/images/icons/checked.png"; 
import logoHostGate from "../assets/images/logo/logo.svg";
import logoDigitalOcean from "../assets/images/logos/DigitalOcean.svg";
import logoGCP from "../assets/images/logos/gcp.svg";
import logoBluehost from "../assets/images/logos/bluehost.svg";
import checked2 from "../assets/images/icons/checked-2.png"

const providers = [
  {
    name: 'Evrinocean',
    logo: logoHostGate, // Use imported path
    description: 'Emphasizes security, compliance, and global scalability.',
  },
  {
    name: 'DigitalOcean',
    logo: logoDigitalOcean, // Use imported path
    description: 'Cloud infrastructure provider for developers and startups.',
  },
  {
    name: 'Google Cloud Platform',
    logo: logoGCP, // Use imported path
    description: 'Cloud computing platform provided by Google.',
  },
  {
    name: 'Bluehost',
    logo: logoBluehost, // Use imported path
    description: 'Web hosting company offering shared hosting.',
  },
];

const features = [
  { label: 'Pricing', values: ['', '', '', ''] },
  { label: 'Plan cost', values: ['6.00$', '6.00$', '6.00$', '6.00$'] },
  { label: 'Platform fee', values: ['0%', '3%', '5%', '9%'] },
  { label: 'Payment processing', values: ['1 Day', '2 Days', '2 Days', '2 Days'] },
  { label: 'Specs', values: ['', '', '', ''] },
  { label: 'RAM', values: ['2 GB', '1 GB', '1 GB', '1 GB'] },
  { label: 'CPU', values: ['1:6', '1', '2', '1'] },
  { label: 'Storage', values: ['25 GB', '25 GB', '25 GB', '25 GB'] },
  { label: 'Dedicated ID', values: ['1 up to 3', '1 up to 3', '1 up to 3', '1 up to 3'] },
  { label: 'Features', values: ['', '', '', ''] },
  { label: 'Websites', values: ['Up to 3', 'Single', 'Single', 'Single'] },
  { label: 'Bandwidth', values: ['Unmetered', 'Unmetered', 'Unmetered', 'Unmetered'] },
  { label: 'SSD Web Storage', values: ['40GB', '20GB', '20GB', '10GB'] },
  { label: 'Email Addresses', values: ['Unlimited', 'Unlimited', 'Unlimited', 'Unlimited'] },
  { label: 'Support', values: ['Phone & Chat', 'Chat Only', 'Chat Only', 'Phone & Chat'] },
  { label: '1 year domain registration', values: ['✔', '✔', '✔', '✔'] },
  { label: 'FREE domain transfers', values: ['✔', '✔', '✔', '✔'] },
  { label: 'One-click WordPress Installs', values: ['✔', '✔', '✔', '✔'] },
  { label: '30-day money back guarantee', values: ['✔', '✔', '✔', '✔'] },
  { label: 'Auto-renewed SSL certification', values: ['✔', '✔', '✔', '✔'] },
  { label: '$500 Google Ads spend match credit', values: ['✔', '✔', '-', '✔'] },
  { label: '$100 Microsoft Advertising credit', values: ['✔', '-', '✔', '✔'] },
  { label: 'MySQL transfer & script transfer', values: ['✔', '-', '-', '-'] },
  { label: 'Cloudflare CDN', values: ['✔', '-', '-', '✔'] },
  { label: 'Dedicated IP', values: ['✔', '-', '-', '-'] },
  { label: 'SEO Tools', values: ['✔', '-', '-', '-'] },
  { label: 'Positive SSL upgrade', values: ['✔', '-', '-', '-'] },
  { label: 'Professional website migration services', values: ['✔', '-', '-', '-'] },
];

const PricingSimplified = () => {
  return (
    <div className="se-iv py-90 bg-2">
      <div className="container-fluid">
        <div className="se-title">
          <h3 className="sub-title">Pricing Simplified</h3>
          <h2 className="title">See what you can save</h2>
        </div>

        <div className="content">
          <div className="th-table">
            <table className="compare-table" id="compare-table-i">
              <thead>
                <tr>
                  <th className="top-left-corner">
                    <span className="table-title-head">Check all<br />competitors<br />features</span>
                    <span>→</span>
                  </th>
                  {providers.map((provider, index) => (
                    <th className="top-right-corner" key={index}>
                      <img src={provider.logo} className="site-logo img-fluid" alt={provider.name} />
                      <span className="table-title-3">{provider.name}</span>
                      <p className="logo-des">{provider.description}</p>
                      <a href="#" className="theme-btn --fill-primary w-100 mb-1">Visit Site</a>
                      <a href="#" className="th-link --small --th-link-gray">Learn more</a>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {features.map((feature, index) => (
                  <tr key={index}>
                    <td className="left-corner">{feature.label}</td>
                    {feature.values.map((value, valueIndex) => (
                      <td className="right-corner" key={valueIndex}>
                        {typeof value === 'string' ? value : <img src={value} alt="'✔'" className="'✔'-icon" />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="se-footer d-flex align-items-center justify-content-center flex-wrap mt-3">
          <div className="line d-flex align-items-center justify-content-start">
            <img src={checked2} className="icon mr--sm-2 img-fluid" alt="'✔'" />
            <span className="text">Backups monthly</span>
          </div>
          <div className="line d-flex align-items-center justify-content-start">
            <img src={checked2} className="icon mr--sm-2 img-fluid" alt="'✔'" />
            <span className="text">Free white-glove migrations</span>
          </div>
          <div className="line d-flex align-items-center justify-content-start">
            <img src={checked2} className="icon mr--sm-2 img-fluid" alt="'✔'" />
            <span className="text">Staging environments, and more.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSimplified;
