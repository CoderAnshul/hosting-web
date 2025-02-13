import React, { useState } from 'react';
import "../assets/css/Pages/terms.css";

const Terms = () => {
  // State to track which menu item is open
  const [openMenu, setOpenMenu] = useState(null);

  // Click handler for toggling the menu
  const handleMenuClick = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  // Menu items data
  const menuItems = [
    {
      title: "Terms of Service",
      subItems: [
        "1. Additional Policies and Agreements",
        "2. Account Eligibility",
        "3. Transfers",
        "4. Evrinocean Content",
        "5. User Content",
        "6. Compliance with Applicable Law",
        "7. Third Party Products and Services",
        "8. Prohibited Persons (Countries, Entities, And Individuals)",
        "9. Account Security and Evrinocean Systems",
        "10. HIPAA Disclaimer. We are not 'HIPAA compliant.'",
        "11. Compatibility with the Services",
        "12. Billing and Payment Information",
        "13. Money-Back Guarantee",
        "14. Cancellations and Refunds",
        "15. Resource Usage",
        "16. Uptime Guarantee",
        "17. Reseller Terms and Client Responsibility",
        "18. Shared (non-reseller accounts)",
        "19. Dedicated Servers",
        "20. Appointment Booking",
        "21. Email Marketing",
        "22. Store"
      ]
    },
    {
      title: "Acceptable Use Policy",
      subItems: [
        "Prohibited Uses",
        "Enforcement",
        "Reporting Violations"
      ]
    },
    {
      title: "Domain Registration Agreement",
      subItems: [
        "Definitions",
        "Obligations of the registrant",
        "Representations and warranties",
        "Dispute process",
        "Term of agreement / Renewals",
        "Fees / Renewal",
        "Registrant - Registrant Transfer",
        "Change of Registrant",
        "Designated agent"
      ]
    },
    {
      title: "Professional Services Agreement",
      subItems: [
        "Term and termination",
        "Scope of services",
        "Customer responsibilities",
        "License grant",
        "Website design",
        "Marketing services",
        "WP Live"
      ]
    },
    {
      title: "VPS Terms of Service",
      subItems: [
        "About Evrinocean Copilot telemetry",
        "Evrinocean Copilot telemetry terms",
        "Research recitation"
      ]
    },
    {
      title: "Microsoft Customer Agreement",
      subItems: [
        "About Evrinocean Copilot telemetry",
        "Evrinocean Copilot telemetry terms",
        "Research recitation"
      ]
    },
    {
      title: "Dedicated Mail Policy",
      subItems: [
        "About Evrinocean Copilot telemetry",
        "Evrinocean Copilot telemetry terms",
        "Research recitation"
      ]
    },
    {
      title: "Email Policy",
      subItems: [
        "About Evrinocean Copilot telemetry",
        "Evrinocean Copilot telemetry terms",
        "Research recitation"
      ]
    },
    {
      title: "Copyright Policy",
      subItems: [
        "About Evrinocean Copilot telemetry",
        "Evrinocean Copilot telemetry terms",
        "Research recitation"
      ]
    },
    {
      title: "Affiliate Agreement",
      subItems: [
        "About Evrinocean Copilot telemetry",
        "Evrinocean Copilot telemetry terms",
        "Research recitation"
      ]
    },
    {
      title: "Data Request Policy",
      subItems: [
        "About Evrinocean Copilot telemetry",
        "Evrinocean Copilot telemetry terms",
        "Research recitation"
      ]
    }
  ];

  return (
    <main>
      <div className="container-fluid">
        <div className="links-area d-lg-none">
          <a href="#" className="active">Terms of Service</a>
          <a href="#">Acceptable Use Policy</a>
          <a href="#">Domain Registration Agreement</a>
          <a href="#">Professional Services Agreement</a>
          <a href="#">VPS Terms of Service</a>
          <a href="#">Microsoft Customer Agreement</a>
          <a href="#">Dedicated Mail Policy</a>
          <a href="#">Email Policy</a>
          <a href="#">Copyright Policy</a>
          <a href="#">Affiliate Agreement</a>
          <a href="#">Data Request Policy</a>
        </div>

        <div className="sidebar">
          <div className="content">
            {menuItems.map((item, index) => (
              <div className={`item has-menu ${openMenu === index ? 'open-menu' : ''}`} key={index}>
                <a href="#" className="item-link" onClick={(e) => { e.preventDefault(); handleMenuClick(index); }}>
                  {item.title}
                </a>
                {openMenu === index && (
                  <ul className="menu list-unstyled">
                    {item.subItems.map((subItem, subIndex) => (
                      <li className="menu-item" key={subIndex}>
                        <a href="#" className="menu-link">{subItem}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div class="content">
   
        <h1 class="title-1">Terms of Use</h1>
    
        <h2 class="title-3">September 2021</h2>
     
        <p class="para-1">We’ve updated Section 14 (Cancellations and Refunds), effective August 5, 2021, to clarify that purchases of certain add-on products such as SiteLock are non-refundable. On 6/17/2021, we revised Section 15 (Resource Usage) to clarify our policy on resource usage and Section 24 (WordPress Plugins) to include new terms applicable to users of WordPress Plugins. Please read the terms below.</p>
      
        <p class="para-1">These Terms of Service (the "Agreement") are an agreement between Evrinocean.com, LLC ("Evrinocean", "us", "our", or the “Company”) and you ("User" or "you" or "your"). This Agreement sets forth the general terms and conditions of your use of the products and services made available by Evrinocean and of the Evrinocean.com website (collectively, the "Services"). By using the Services, you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to use or access the Services.</p>

       
        <section>
          
          <h2 class="title-2" id="additional-policies-and-agreements-section">1. Additional Policies and Agreements</h2>
          
          <ul class="list-level-i">
           
            <li class="list-item">
              Use of the Services is also governed by the following policies, which are incorporated by reference. By using the Services, you also agree to the terms of the following policies.
             
              <ul class="list-level-ii">
                <li><a href="#" class="list-link">Privacy Notice</a></li>
                <li><a href="#" class="list-link">Acceptable Use Policy</a></li>
                <li><a href="#" class="list-link">Copyright Infringement Policy</a></li>
              </ul>
            </li>
            
            <li class="list-item">Additional terms may also apply to certain Services, and are incorporated by reference herein as applicable. For example, if you register a domain name with us, then the Domain Registration Agreement will also apply to you and would be incorporated herein.</li>
          </ul>
        </section>

       
        <section>
          
          <h2 class="title-2" id="account-eligibility-section">2. Account Eligibility</h2>
          
          <ul class="list-level-i">
            
            <li class="list-item">
              By registering for or using the Services, you represent and warrant that:
              
              <ul class="list-level-ii">
                <li>You are eighteen (18) years of age or older. The Services are intended solely for Users who are eighteen (18) years of age or older. Any registration, use of or access to the Services, by anyone under eighteen (18) is unauthorized and is a violation of this Agreement.</li>
                <li>If you use the Services on behalf of another party you agree that you are authorized to bind such other party to this Agreement and to act on such other party's behalf with respect to any actions you take in connection with the Services.</li>
              </ul>
            </li>
            
            <li class="list-item">It is your responsibility to provide accurate, current, and complete information on the registration forms, including an email address that is different from the domain you are signing up under. If there is ever an abuse issue or we need to contact you, we will use the primary email address we have on file. It is your responsibility to ensure that the contact information for your account, including any domain accounts is accurate, correct and complete at all times. Evrinocean is not responsible for any lapse in the Services, including without limitation, any lapsed domain registrations due to outdated contact information being associated with the domain. If you need to verify or change your contact information, you may utilize the <a href="#" class="list-link">Evrinocean Billing and Support Portal</a> to update your contact information. Providing false contact information of any kind may result in the termination of your account. In dedicated server purchases or certain other cases, you may be required to provide government issued identification and possibly a scan of the credit card used for verification purposes. Failure to provide the information requested may result in your order being denied.</li>
        
            <li class="list-item">You agree to be fully responsible for all use of your account and for any actions that take place through your account. It is your responsibility to maintain the confidentiality of your password and other information related to the security of your account.</li>
            
            <li class="list-item">Any dedicated IP order in addition to those provided with a hosting package may be subject to IP justification. IP justification practices are subject to change to remain in compliance with the policies of the American Registry for Internet Numbers (ARIN). We reserve the right to deny any dedicated IP request based on insufficient justification or current IP utilization.</li>
            
            <li class="list-item">The Service and any data you provide to Evrinocean is hosted in the United States (U.S.) unless otherwise provided. If you access the Service from outside of the U.S., you are voluntarily transferring information (potentially including personally-identifiable information) and content to the U.S. and you agreeing that our collection, use, storage and sharing of your information and content is subject to the laws of the U.S., and not necessarily of the jurisdiction in which you are located.</li>
          </ul>
        </section>

        
        <section>
          
          <h2 class="title-2" id="transfers-section">3. Transfers</h2>
          
          <p class="para-1">Our Transfers Team will make every effort to help you move your website to us. Transfers are provided as a courtesy service. We do not make any guarantees regarding the availability, possibility, or time required to complete an account transfer. Each hosting company is configured differently, and some hosting platforms save data in an incompatible or proprietary format, which may make it extremely difficult, if not impossible, to migrate some or all account data. In some cases we may not be able to assist you in a transfer of data from an old host. The free transfer service is available for thirty (30) days from your sign up date. Transfers outside of the thirty (30) day period will incur a charge; please contact a member of our Transfers department to receive a price quote. In no event shall Evrinocean be held liable for any lost or missing data or files resulting from a transfer to or from Evrinocean. You are solely responsible for backing up your data in all circumstances.</p>
        </section>

        
        <section>
          
          <h2 class="title-2" id="Hostgate-content-section">4. Evrinocean Content</h2>
          
          <ul class="list-level-i">
           
            <li class="list-item">Except for User Content (as defined below), all content made available through the Services, including images made available through website builder tools provided by Evrinocean (the “Licensed Images”), designs, templates, text, graphics, images, video, information, software, audio and other files, and their selection and arrangement, and all software used to provide the Services (collectively with the Licensed Images, "Evrinocean Content"), are the property of Evrinocean or its licensors. No Evrinocean Content may not be modified, copied, distributed, framed, reproduced, republished, downloaded, scraped, displayed, posted, transmitted, sold or exploited for any purpose in any form or by any means, in whole or in part, other than as expressly permitted in this Agreement. You may not, directly or indirectly, reverse engineer, decompile, disassemble, or otherwise attempt to derive source code or other trade secrets from any Evrinocean Content.</li>
            
            <li class="list-item">To the extent applicable, you are granted a limited, revocable, non-sublicensable, license to use the Licensed Images solely in connection with the Services. You are prohibited from using any Licensed Images: (i) with pornographic, defamatory, or unlawful content or in such a manner that infringes upon any third party's trademark or intellectual property rights; (ii) as a trademark, service mark, or logo; and (iii) portraying any person depicted therein (a "Model") in a way that a reasonable person would find offensive, including but not limited to depicting a Model: (a) in connection with pornography, "adult videos", adult entertainment venues, escort services, dating services, or the like; (b) in connection with the advertisement or promotion of tobacco products; (c) as endorsing a political party, candidate, elected official, or opinion; (d) as suffering from, or medicating for, a physical or mental ailment; or (e) engaging in immoral or criminal activities.</li>
            
            <li class="list-item">Any use of Evrinocean Content, other than as specifically authorized herein, is prohibited and will automatically terminate your rights to use the Services and any Evrinocean Content. All rights to use Evrinocean Content that are not expressly granted in this Agreement are reserved by Evrinocean and Evrinocean's licensors.</li>
          </ul>
        </section>

        
        <section>
          
          <h2 class="title-2" id="user-content-section">5. User Content</h2>
          
          <ul class="list-level-i">
        
            <li class="list-item">You may be able to upload, store, publish, display and distribute information, text, photos, videos, emails, and other content on or through the Services (collectively, "User Content"). User Content includes any content posted by you or by users of any of your websites hosted through the Services ("User Websites"). You are solely responsible for any and all User Content and any transactions or other activities conducted on or through User Websites. By posting or distributing User Content on or through the Services, you represent and warrant to Evrinocean that (i) you have all the necessary rights to post or distribute such User Content, and (ii) your posting or distribution of such User Content does not infringe or violate the rights of any third party.<br/><br/>Solely for purposes of providing the Services, you hereby grant to Evrinocean a non-exclusive, royalty-free, worldwide right and license to: (i) use, reproduce, publicly perform, publicly display, modify, translate, excerpt (in whole or in part), publish and distribute User Content; and (ii) make archival or back-up copies of User Content and User Websites. Except for the rights expressly granted herein, Evrinocean does not acquire any right, title or interest in or to the User Content, all of which shall remain solely with you.</li>
            
            <li class="list-item">Evrinocean exercises no control over, and accepts no responsibility for, User Content or the content of any information passing through Evrinocean's computers, network hubs and points of presence or the Internet. Evrinocean does not monitor User Content. However, you acknowledge and agree that Evrinocean may, but is not obligated to, immediately take any corrective action in Evrinocean's sole discretion, including without limitation removal of all or a portion of the User Content or User Websites, and suspend or terminate any and all Services without refund if you violate the terms of this Agreement. You hereby agree that Evrinocean shall have no liability due to any corrective action that Evrinocean may take.</li>
          </ul>
        </section>

        
        <section>
          
          <h2 class="title-2" id="compliance-with-applicable-law-section">6. Compliance with Applicable Law</h2>
          
          <ul class="list-level-i">
            
            <li class="list-item">You agree to comply with all applicable laws, rules, and regulations, including without limitation all local rules where you reside or your organization is location regarding User Content, User Websites, online activities, email and your use of the Services. More specifically, but without limitation, you agree to comply with all applicable laws regarding the transmission of technical data exported to or from the United States or the country in which you reside. The Services are controlled and operated by us from our offices within the United States (although we may share data with third parties around the world to assist us in providing the Services as further described in our Privacy Notice) and we make no representation that the Services are appropriate or available for use in other locations. Those who access the Services from other locations do so at their own initiative and risk, and are fully responsible for compliance with all applicable laws in those locations. We do not offer the Services where prohibited by law.<br/><br/>For the purposes of European Directive 95/46/EC, the General Data Protection Regulation 2016/679) (“GDPR”) and any applicable national implementing laws in your jurisdiction, and with respect to your subscribers’ or customers’ personal data, you acknowledge and agree that you are the Controller (as that term is defined in the GDPR), and we are a Processor (as that term is defined in the GDPR) insofar as you may store personal data through your use of our Services only as permitted and subject to the terms of this Agreement. You also acknowledge and agree that you are responsible for complying with all obligations of a data controller under applicable law (including the GDPR).<br/><br/>To the extent the GDPR applies to you, you represent and warrant that in using our Services, you will clearly describe in writing how you plan to use any personal data collected and you will ensure you have a legitimate legal basis to transfer such personal data to us and that you have the necessary permission to allow us to receive and process (e.g., store) such personal data on your behalf. The additional data processing terms set forth here shall apply where you are a Controller subject to the GDPR.</li>
          </ul>
        </section>

      </div>
      </div>
    </main>
  );
}

export default Terms;