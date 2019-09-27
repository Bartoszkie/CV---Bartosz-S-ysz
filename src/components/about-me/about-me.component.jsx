import React from "react";

import ParticlesSnow from "../particles/particles-snow.component";

const AboutMe = () => {
  return (
    <section className="aboutMe">
      <ParticlesSnow />
      <div className="aboutMe-content">
        <h2 className="heading-h2">About me</h2>
        <div className="aboutMe-content__paragraphs">
          <div className="aboutMe-content__paragraphs--edu">
            <p className="paragraph">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>

          <div className="aboutMe-content__paragraphs--exp">
            <p className="paragraph">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </div>

        <div className="aboutMe-content__after">
          <div className="aboutMe-content__after-circle--1">EDU</div>
          <div className="aboutMe-content__after-circle--2">EXP</div>
        </div>

        <div className="aboutMe-content__pictures"></div>
      </div>
    </section>
  );
};

export default AboutMe;
