import React from 'react';
import "../styles/Footer.css"
const Footer = ({ footer }) => {
  // Check if footer is undefined or null
  if (!footer) {
    return <div>No footer data available.</div>;
  }

  // Destructure the footer object
  const { support, shopAndLearn, retailStore, about, contactUs } = footer;

  return (
    <>
      <div className='websiteFooter'>
        <div className='footer'>
          {/* Check if 'support' exists and is an array before mapping */}
          {support && Array.isArray(support) && support.length > 0 && (
            <div>
              <p>SUPPORT</p>
              {support.map((item) => (
                <a key={item.url} href={item.url}>
                  {item.name}
                </a>
              ))}
            </div>
          )}

          {/* Check if 'shopAndLearn' exists and is an array before mapping */}
          {shopAndLearn && Array.isArray(shopAndLearn) && shopAndLearn.length > 0 && (
            <div>
              <p>SHOP AND LEARN</p>
              {shopAndLearn.map((item) => (
                <a key={item.url} href={item.url}>
                  {item.name}
                </a>
              ))}
            </div>
          )}

          {/* Check if 'retailStore' exists and is an array before mapping */}
          {retailStore && Array.isArray(retailStore) && retailStore.length > 0 && (
            <div>
              <p>RETAIL STORE</p>
              {retailStore.map((item) => (
                <a key={item.url} href={item.url}>
                  {item.name}
                </a>
              ))}
            </div>
          )}

          {/* Check if 'about' exists and is an array before mapping */}
          {about && Array.isArray(about) && about.length > 0 && (
            <div>
              <p>ABOUT</p>
              {about.map((item) => (
                <a key={item.url} href={item.url}>
                  {item.name}
                </a>
              ))}
            </div>
          )}

          {/* Check if 'contactUs' exists and is an array before mapping */}
          {contactUs && Array.isArray(contactUs) && contactUs.length > 0 && (
            <div>
              <p>CONTACT US</p>
              {contactUs.map((item) => (
                <a key={item.url} href={item.url}>
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
        <div className='PartTwo'>
          Copyright 0 2010 - 2021 Xiaomi. All Rights Reserved
          </div>
      </div>
    </>
  );
};

export default Footer;
