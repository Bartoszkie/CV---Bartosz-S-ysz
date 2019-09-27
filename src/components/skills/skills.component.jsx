import React from "react";

import SkillCart from '../skill-cart/skill-cart.component';
import Button from '../button/button.component';

function Skills() {
  return (
    <section className="skills">
      <h1 className="heading-h2">Skills</h1>
      <div className="skills-container">
        <SkillCart skill={'JS'} heading={'JAVASCRIPT'} text={'So when it comes to JS I know it a lot.'}/>
        <SkillCart skill={'CSS 3'} heading={'CSS'} text={'I feel that there is no such layout that I cant code it.'}/>
        <SkillCart skill={'HTML 5'} heading={'HTML 5'} text={'HTML? I can even OOP in it... sike XD '}/>
        <SkillCart skill={'SASS'} heading={'SASS'} text={'Better way on how to look on styles is my one of favourites things that i learned'}/>
        <SkillCart skill={'React.js'} heading={'React.js'} text={'I know it as my second name bruh'}/>
        <SkillCart skill={'JAVA'} heading={'JAVA'} text={'I know well this piece of old shit'}/>
        </div>
      <Button text={'See bruh'}/>
    </section>
  );
}
export default Skills;
