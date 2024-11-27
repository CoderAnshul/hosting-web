import React from 'react';

const Faq = () => {
  // Define an array of FAQ objects
  const faqs = [
    {
      question: 'What are the different types of web hosting options HostGate offers?',
      answer: 'HostGate offers multiple website hosting options to fit the various needs and budgets of our customers. Shared Hosting, Cloud Hosting, VPS Hosting, and Dedicated Hosting are our standard options, however we also offer specialized hosting for specific website building applications like WordPress and WooCommerce. Each platform is built on reliable, high-performance servers and is supported by our 24/7 expert support teams.'
    },
    {
      question: 'What is WordPress Hosting?',
      answer: 'WordPress hosting is a type of web hosting that’s specifically designed so that WordPress websites can achieve maximum speed, performance and security. It pays special attention to the technical and security requirements of WordPress and usually offers a simple, 1-click installation or migration.'
    },
    {
      question: 'What is AutoSSL and how does it work?',
      answer: 'HostGate offers multiple website hosting options to fit the various needs and budgets of our customers. Shared Hosting, Cloud Hosting, VPS Hosting, and Dedicated Hosting are our standard options, however we also offer specialized hosting for specific website building applications like WordPress and WooCommerce. Each platform is built on reliable, high-performance servers and is supported by our 24/7 expert support teams.'
    },
    {
      question: 'Is shared hosting the right type of web hosting for my site?',
      answer: 'WordPress hosting is a popular hosting option where a provider hosts multiple websites on one physical web server. And because you\'re sharing resources — like neighbors in an apartment building — you spend less but have fewer options and less control. Shared hosting is typically for websites which require low resources (e.g., blogs, informational sites or smaller online stores). If your site is more resource intensive,'
    },
    {
      question: 'Can I transfer my existing website to HostGate’s shared web hosting?',
      answer: 'Web hosting is a service provided by companies (e.g., the web host) that sell or lease space on a server where you store files that enable your website accessibility on the internet. These companies typically require you to own a domain, or can help you purchase a domain. Once you purchase a web hosting plan, we store your site on our servers and assign it a unique DNS.'
    },
    {
      question: 'What is cPanel Hosting and what are its benefits?',
      answer: 'HostGate offers multiple website hosting options to fit the various needs and budgets of our customers. Shared Hosting, Cloud Hosting, VPS Hosting, and Dedicated Hosting are our standard options, however we also offer specialized hosting for specific website building applications like WordPress and WooCommerce. Each platform is built on reliable, high-performance servers and is supported by our 24/7 expert support teams.'
    }
  ];

  return (
    <div className="faqs py-90-30" data-check-background="check">
      <div className="container-fluid">
        <div className="se-title">
          <h3 className="sub-title">FAQs</h3>
          <h2 className="title">Got questions?<br />Well, we've got answers.</h2>
        </div>

        <div className="row">
          {/* Loop through the array and render questions and answers */}
          <div className="col-lg-6">
            {faqs.slice(0, 3).map((faq, index) => (
              <div className="article" key={index}>
                <h3 className="q">{faq.question}</h3>
                <p className="a">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="col-lg-6">
            {faqs.slice(3).map((faq, index) => (
              <div className="article" key={index}>
                <h3 className="q">{faq.question}</h3>
                <p className="a">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
