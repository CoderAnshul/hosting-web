import React from "react";
import pulse from "../assets/images/icons/pulse.png";
import brick from "../assets/images/icons/block-brick.png";
import file from "../assets/images/icons/backup-file.png";
import cybersecurity from "../assets/images/icons/cybersecurity.png";

const items = [
  {
    icon: pulse,
    title: "Monitoring",
    text: "Make sure you’re always the first to know when your site is unavailable or slow.",
  },
  {
    icon: brick,
    title: "Firewall",
    text: "Shield web apps from the Internet, mitigating common attacks effectively and efficiently.",
  },
  {
    icon: file,
    title: "Backups",
    text: "Website Backup allows you to back up your site and related database via FTP, SFTP, FTPS.",
  },
  {
    icon: cybersecurity,
    title: "SSL Certificate",
    text: "SSL encrypts web server-browser communication, securing all transmitted data.",
  },
];

const WhatWebSec = () => {
  return (
    <div className="inline-features py-90">
      <div className="container-fluid">
        <div className="content">
          <div className="row align-items-center">
            <div className="col-lg-3 mb-xl-0 mb-3 text-lg-left text-center">
              <h5 className="sub-title">What’s Website Security</h5>
              <h2 className="box-title">
                Protection of websites from unauthorized access and cyber threats.
              </h2>
            </div>
            <div className="col-lg-9">
              <div className="row">
                {features.map((feature, index) => (
                  <div key={index} className="col-lg-3 col-md-6 mb-lg-0 mb-2">
                    <div className="item">
                      <div className="icon">
                        <img src={feature.icon} className="img-fluid" alt={`${feature.title} icon`} />
                      </div>
                      <h5 className="item-title">{feature.title}</h5>
                      <p className="item-text">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWebSec;
