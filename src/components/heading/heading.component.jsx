import React from "react";

import ParticlesContainer from "../particles/particles.component";
import Fade from "react-reveal/Fade";

import Button from "../button/button.component";

const Heading = () => {
  return (
    <section className="heading">
      <ParticlesContainer />
      <div className="heading-content">
        <Fade left>
          <h1 className="heading-h1">Bartoszek</h1>
        </Fade>
        <Button text={"Learn more..."} />
      </div>
    </section>
  );
};

export default Heading;
