import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/images/icons/menu.svg";
import www from "../assets/images/icons/www.svg";
import shoppingCart from "../assets/images/icons/shopping-cart.png";
import questionMark from "../assets/images/icons/question-mark.png";
import account from "../assets/images/icons/account.png";
import close from "../assets/images/icons/close.png";
import shoppingBag from "../assets/images/icons/shopping-bag.png";
import phone from "../assets/images/icons/phone-receiver-silhouette.png";
import logoblack from "../assets/images/logo/logo-black.svg";
import circle from "../assets/images/icons/circle.png"



const data = [
  {
    title: "Compute",
    items: [
      {
        name: "Shared CPU",
        description: "Keep data clean &amp; usable",
        icon: circle
      },
      {
        name: "Dedicated CPU",
        description: "Keep data clean &amp; usable",
        icon: circle
      },
      {
        name: "High Memory",
        description: "Keep data clean &amp; usable",
        icon: circle
      }
    ]
  },
  {
    title: "Storage",
    items: [
      {
        name: "Block Storage",
        description: "Keep data clean &amp; usable",
        icon: circle
      },
      {
        name: "Object Storage",
        description: "Keep data clean &amp; usable",
        icon: circle
      },
      {
        name: "Cloud Backups",
        description: "Keep data clean &amp; usable",
        icon: circle
      }
    ]
  },
  {
    title: "Networking",
    items: [
      {
        name: "Cloud Firewall",
        description: "Keep data clean &amp; usable",
        icon: circle
      },
      {
        name: "Load Balancers",
        description: "Keep data clean &amp; usable",
        icon: circle
      },
      {
        name: "VPC",
        description: "Keep data clean &amp; usable",
        icon: circle
      }
    ]
  },
  {
    title: "Databases",
    items: [
      {
        name: "MySQL",
        description: "Keep data clean &amp; usable",
        icon: circle
      },
      {
        name: "MongoDB",
        description: "Keep data clean &amp; usable",
        icon: circle
      },
      {
        name: "PostgreSQL",
        description: "Keep data clean &amp; usable",
        icon: circle
      }
    ]
  },
 
 
];

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [megaMenuOpen, setMegaMenuOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // New state for menu open
  const dropdownRef = useRef(null);
  const megaMenuRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(null);
      }
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target)
      ) {
        setMegaMenuOpen(null);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  const toggleDropdown = () => {
    // If mega menu is open, close it
    if (megaMenuOpen) {
      setMegaMenuOpen(null);
    }
    setDropdownOpen((prevState) => (prevState === "dropdown" ? null : "dropdown"));
  };
  
  const toggleMegaMenu = () => {
    // If dropdown is open, close it
    if (dropdownOpen) {
      setDropdownOpen(null);
    }
    setMegaMenuOpen((prevState) => (prevState === "megaMenu" ? null : "megaMenu"));
  };
  
  const handleWebsitesHostingClick = () => {
    toggleDropdown();
    const dropdownMenu = dropdownRef.current;
    if (dropdownMenu) {
      dropdownMenu.classList.toggle('open-dropdown-menu');
    }
  };
  
  const handleProductsClick = () => {
    toggleMegaMenu();
    const megaMenu = megaMenuRef.current;
    if (megaMenu) {
      megaMenu.classList.toggle('open-mega-menu');
    }
  };

  const handleMenuIconClick = () => {
    setMenuOpen(prevState => !prevState); // Toggle menu open state
  };

  return (
    <nav class="theme-navbar" id="theme-navbar" data-responsive="true">
      <div class="container-fluid">
        <div class="nav-top d-flex align-items-center">
          <div class="menu-icon" id="open-links-btn" onClick={handleMenuIconClick}>
            <img src={menu} class="menu-icon img-fluid" alt="Menu" />
          </div>
          <a href="/" style={{color:'black' , fontSize:'24px' , fontWeight:'600'}} class="brand d-flex align-items-center">
            {/* <img src={logoblack} class="img-fluid" alt="HostGate" /> */}
            Evrinocean
          </a>
          <div class="options d-md-flex d-none align-items-center justify-content-end" style={{ width: '100%', justifyContent: "flex-end" }}>
            <a href="domains.php" class="c-link">
              <img src={www} class="icon mr--sm-2" alt="icon" />
              <span class="text">Register a New Domain</span>
            </a>
            <div class="buttons d-inline-flex align-items-center">
              <a href="/register" class="theme-btn --fill-primary --btn-size-md text-uppercase mr--sm-2">Free Trial</a>
              <a href="/login" class="theme-btn --outline-primary --btn-size-md text-uppercase mr--sm-2">Login </a>
              <a href="#" class="theme-btn --fill-primary --circle-btn --has-icon --has-counter" data-count="2">
                <img src={shoppingCart} class="img-fluid" alt="Cart" />
              </a>
            </div>
          </div>
          <div class="second-options d-md-none d-flex align-content-center justify-content-end" style={{ width: '100%', justifyContent: "flex-end" }}>
            <a href="#" class="o-link d-flex align-items-center justify-content-center">
              <img src={questionMark} class="icon img-fluid" alt="Knowledge Base" />
            </a>
            <div class="o-link user-link d-flex align-items-center justify-content-center ml-1" id="user-menu-btn">
              <img src={account} class="icon img-fluid" alt="Account" />
              <ul class="user-dropdown-menu list-unstyled" id="user-dropdown-menu">
                <li class="uddm-link-parent">
                  <div class="title-2">Registered Users</div>
                  <p class="para-2">Have an account? Sign in now.</p>
                  <a href="login.php" class="uddm-link">Sign in</a>
                </li>
                <li class="uddm-link-parent">
                  <div class="title-2">New Customer</div>
                  <p class="para-2">New to Evrinocean? Create an account to get started today.</p>
                  <a href="register.php" class="uddm-link">Create an account</a>
                </li>
              </ul>
            </div>
            <a href="#" class="o-link o-link-cart has-items d-flex align-items-center justify-content-center ">
              <img src={shoppingBag} class="icon img-fluid" alt="Cart" />
            </a>
          </div>
        </div>

        <div class="nav-bottom d-flex align-items-center justify-content-between" style={{ justifyContent: "space-between" }}>
          <div class="info d-flex align-items-center">
            <a href="tel:0000" class="item">
              <img src={phone} class="img-fluid mr--sm-2" alt="Phone" />
              <span class="text">(20) 123 456 7890</span>
            </a>
          </div>
          <div class={`links d-xl-flex align-items-center mobileMenu ${menuOpen ? 'open-links' : ''}`} id="theme-navbar-links">
            <div class="close-links-btn" id="close-links-btn" onClick={() => setMenuOpen(false)}>
              <img src={close} class="img-fluid" alt="x" />
            </div>
            <div class="link grad1">
              <a href="./">Home</a>
            </div>
            <div class="link has-dropdown-menu" ref={dropdownRef} onClick={handleWebsitesHostingClick}>
              <a href="#">Websites &amp; Hosting</a>
              <ul class="dropdown-menu list-unstyled">
                <li class="group-title">Websites</li>
                <li><a href="/ssl" class="dm-link st-new" data-st="NEW">SSL Certificate</a></li>
                <li><a href="/website-security" class="dm-link st-new" data-st="NEW">Website Security</a></li>
                <li class="group-title">Servers</li>
                <li><a href="/vps" class="dm-link">VPS Hosting Servers</a></li>
                <li><a href="/shared" class="dm-link">Shared Hosting Servers</a></li>
                <li><a href="/dedicated" class="dm-link">Dedicated Hosting Servers</a></li>
                <li><a href="/domain" class="dm-link">Domains</a></li>
              </ul>
            </div>
            <div class="link has-mega-menu" ref={megaMenuRef} onClick={handleProductsClick}>
              <a href="#">Products</a>
              <div class="mega-menu list-unstyled">
                <div className="container-fluid">
                  <div className="content">
                    {data.map((category, index) => (
                      <div className="mm-col" key={index}>
                        <h5 className="mm-title">{category.title}</h5>
                        <ul className="mm-list list-unstyled">
                          {category.items.map((item, itemIndex) => (
                            <li className="mm-list-item" key={itemIndex}>
                              <a href="#" className="mm-item-link"></a>
                              <div className="icon">
                                <img src={item.icon} className ="img-fluid" alt="icon" />
                              </div>
                              <div className="info">
                                <div className="name">{item.name}</div>
                                <p className="text" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div class="link">
              <a href="#">Windows VPS Hosting</a>
            </div>
            <div class="link">
              <a href="#">Features</a>
            </div>
            <div class="link">
              <a href="#">Support</a>
            </div>
            <div class="link">
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;