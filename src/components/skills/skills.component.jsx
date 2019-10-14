import React from "react";

import SkillCart from '../skill-cart/skill-cart.component';
import Button from '../button/button.component';

import java from '../../asstets/icons/java.svg';
import javascrpt from '../../asstets/icons/javascript.svg';
import css from '../../asstets/icons/css.svg';
import html from '../../asstets/icons/html5.svg';
import sass from '../../asstets/icons/sass.svg';
import react from '../../asstets/icons/react.svg';


function Skills() {
  const textJS = "So, when it comes to JS I feel very comofrtable with it. All fundamentals about JS are familiar to me. Both ES5 and ES6+ features are not scary to me - BTW I love ES6!";
  const textCSS = "I love positioning. I think I know tons of new features of CSS and I feel very familiar with every new paradigms of positioning like FlexBox and CSS Grid - and also those old ones like Floats aren't unfamiliar to me!."
  const textHTML = "Yeah I even know how to program in HTML... of course it is a joke! There are tons of blocks that are known to me. I know how and when to use them, what are advantages and disatvantages of one above the other, and I'm always trying to write web skeleton as simple as it is possible."
  const textReact = "When it comes to my first superpower, it is React! I love the way of simplicity in React.js. All paradigms of React and how it behaves when it comes to render components are known to me. All extra features/packages like Redux, ContextAPI, styled-components, HOC patterns, routing, Redux-Saga, React Hooks...I just love it and freedom of choosing tools when it comes to build/solve interfaces/problems."
  const textSASS = "As my second superpower I would say something about Scss. The way that Scss simplify things in CSS is just asthonishing. All it's features like mixins, variables, imports, nesting classes are just tools that I can't even imagine living without right now."
  const textJava = "And there she is. As big and old as my lovely grandma. But for me - It isn't scary. I would even risk to say that I love it! OOP paradigm is just beautifull for me (I know all of its phillars - encapsulation, abstraction, extending, polymorphism). JavaFX is something that I use in my University but personally my usage of Java is in Spring - to create backend side of web apps. "

  return (
    <section className="skills">
      <h1 className="heading-h2">Skills</h1>
      <div className="skills-container">
        <SkillCart image={javascrpt} skill={'JS'} heading={'JAVASCRIPT'} text={textJS}/>
        <SkillCart image={css} skill={'CSS 3'} heading={'CSS'} text={textCSS}/>
        <SkillCart image={html} skill={'HTML 5'} heading={'HTML 5'} text={textHTML}/>
        <SkillCart image={react} skill={'React.js'} heading={'React.js'} text={textReact}/>
        <SkillCart image={sass} skill={'SCSS'} heading={'SCSS'} text={textSASS}/>
        <SkillCart image={java} skill={'JAVA'} heading={'JAVA'} text={textJava}/>
        </div>
      <Button link={"#portfolio"} text={'See bruh'}/>
    </section>
  );
}
export default Skills;
