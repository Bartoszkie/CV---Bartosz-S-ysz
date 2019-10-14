import React from "react";

import ParticlesContainer from '../particles/particles.component';

import Button from '../button/button.component'; 

const Heading = () => {
  return (
    <section className="heading">
      <ParticlesContainer/>
      <div className="heading-content">
        <h1 className="heading-h1">Bartoszek</h1>
        <Button link={'#aboutMe'} text={'Learn more...'}/>
      </div>
    </section>
  );
};

export default Heading;
