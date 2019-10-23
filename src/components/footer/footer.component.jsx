import React from "react";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import LightSpeed from "react-reveal/LightSpeed";

const Footer = () => {
  return (
    <section className="footer">
      <Fade cascade bottom>
        <h2 className="heading-h2">So, The Contact...</h2>
      </Fade>

      <div className="footer__contact">
        <Slide left>
          <span className="footer__contact--item">Full Name: Bartosz Słysz</span>
          <span className="footer__contact--item">
            Phone Number: +48 662 920 264
          </span>
          <span className="footer__contact--item">
            Email: bartek.slysz@gmail.com
          </span>
        </Slide>
      </div>

      <Slide cascade bottom>
        <div className="footer__regards">
          <p className="quote--final">
            So MobiTouch, what do You think about me? I would be unbelievable glad
            if I could join You. But if my skills are not enough please give me
            a feedback regardless of decision You have made.
          </p>
        </div>
      </Slide>

      <LightSpeed right>
        <div className="footer__copyright">
          <p className="quote">
            All copyright are reserved to Bartosz Słysz. This simple website is
            designed and coded by only himself;
          </p>
        </div>
      </LightSpeed>
    </section>
  );
};

export default Footer;
