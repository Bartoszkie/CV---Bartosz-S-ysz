import React from "react";

import Heading from "./components/heading/heading.component";
import AboutMe from "./components/about-me/about-me.component";
import Skills from "./components/skills/skills.component";
import Portfolio from "./components/portfolio/portfolio.component";
import Footer from "./components/footer/footer.component";

import "./sass/main.scss";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Heading />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
