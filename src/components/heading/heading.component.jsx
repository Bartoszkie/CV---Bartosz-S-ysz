import React from "react";

import ParticlesContainer from "../particles/particles.component";
import Fade from "react-reveal/Fade";

import Button from "../button/button.component";

const Heading = () => {
  return (
    <section className="heading">
      <ParticlesContainer />
      
      <div className="heading-content">
        <Fade cascade>
          <h1 className="heading-h1">Bartoszek</h1>
        </Fade>

        <Fade up>
          <Button link={"#aboutMe"} text={"Learn more..."} />
        </Fade>
      </div>
    </section>
  );
};

export default Heading;
