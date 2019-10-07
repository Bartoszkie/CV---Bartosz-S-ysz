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
              Right, little bit about me. So just like in header - I am 21 and
              my name is Bartosz Slysz. I've graduated with honors technical
              Academic High School developed by WSIiZ in Rzeszow. Right now I am
              3rd year student of IT at University of Rzeszow. Also I am active
              participant of two science clubs on our University - Science Club
              of Informatics and Mechatron (Science Club of Mechatronics. Role -
              programmer). In programming mostly I am self learner. I like
              'complexity' and figuring out a way how to solve this complexity.
              When it comes to say about the way which I have choosen for
              programming, right now at the moment I am trying to become
              proffesional FrontEnd Dev. I have fall in love in modern
              JavaScript and ways of creating astonishing user interfaces and
              apps. Plans for future when it comes about carrier? Become full
              stack dev and be able to create breathtaking web apps and static
              mobile apps.
            </p>
          </div>

          <div className="aboutMe-content__paragraphs--exp">
            <ul className="aboutMe-content__paragraphs--exp--list">
              <li className="exp-item">
                <p className="paragraph">
                  2015 - MobiTouch: Graphics and WebDev
                </p>
              </li>
              <li className="exp-item">
                <p className="paragraph">
                  2018 - PGS Software WorkShops: Graduated with honours JAVA
                  WorkShops.
                </p>
              </li>
              <li className="exp-item">
                <p className="paragraph">
                  2019 - IDEO: Internship as FrontEnd Developer - Mainly: Coding
                  layouts and creating simple web apps in React with usage of
                  Redux
                </p>
              </li>
              <li className="exp-item">
                <p className="paragraph">
                  2018 - untill now: Creating simple freelancing tasks.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="aboutMe-content__after">
          <div className="aboutMe-content__after-circle--1">EDU</div>
          <div className="aboutMe-content__after-circle--2">EXP</div>
        </div>

        <div className="aboutMe-content__pictures">
            <div className='aboutMe-content__pictures--img'>
              
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
