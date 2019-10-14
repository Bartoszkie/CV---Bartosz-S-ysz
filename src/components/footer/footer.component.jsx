import React from "react";

const Footer = () => {
  return (
    <section className="footer">
    <h2 className='heading-h2'>So, The Contact...</h2>
      <div className="footer__contact">
        <span className="footer__contact--item">Name: Bartosz Słysz</span>
        <span className="footer__contact--item">
          Phone Number: +48 662 920 264
        </span>
        <span className="footer__contact--item">
          Email: bartek.slysz@gmail.com
        </span>
      </div>
      <div className='footer__regards'>
        <p className='quote--final'>
          So Evojam, what do You think about me? I would be unbelievable glad if I could join You. But if my skills are not enough please give me a feedback regardless of decision You have made.  
        </p>
      </div>
      <div className="footer__copyright">
        <p className="quote">
          All copyright are reserved to Bartosz Słysz. This simple website is
          designed and coded by only himself;
        </p>
      </div>
    </section>
  );
};

export default Footer;
