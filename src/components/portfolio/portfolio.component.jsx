import React from "react";

import natoure from "../../asstets/img/Natoure.png";
import natoureMobile from "../../asstets/img/Natoure-mobile.png";

import trello from "../../asstets/img/Trollo.png";
import trelloMobile from "../../asstets/img/Trillo-mobile.png";

import nexter from "../../asstets/img/Nexter.png";
import nexterMobile from "../../asstets/img/Nexter-mobile.png";

import shop from "../../asstets/img/Shop.png";

import Fade from "react-reveal/Fade";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <Fade cascade>
        <h2 className="heading-h2">Portfolio</h2>
      </Fade>
      <Fade bottom>
        <p className="quote">
          Those are some of my simple freelance projects. All of them are
          fictional and their main purpose is to gain some knowelge. My goal is
          to have here some categories with pagination included due to so big
          number of projects.
          <br />
          All of those screenshots are actually my fictional projects that I've
          created to learn few things. They are avalible on{" "}
          <a
            className="link"
            href="https://github.com/Bartoszkie?tab=repositories"
            alt="github link"
          >
            my github
          </a>{" "}
          page.
        </p>
      </Fade>
      <div className="portfolio__gallery">
        <Fade cascade>
          <figure className="portfolio__item portfolio__item--1">
            <img
              src={natoure}
              className="portfolio__img"
              alt="portfolio item"
            ></img>
          </figure>
          <figure className="portfolio__item portfolio__item--2">
            <img
              src={trello}
              className="portfolio__img"
              alt="portfolio item"
            ></img>
          </figure>
          <figure className="portfolio__item portfolio__item--3">
            <img
              src={nexter}
              className="portfolio__img"
              alt="portfolio item"
            ></img>
          </figure>
          <figure className="portfolio__item portfolio__item--4">
            <img
              src={natoureMobile}
              className="portfolio__img"
              alt="portfolio item"
            ></img>
          </figure>
          <figure className="portfolio__item portfolio__item--5">
            <img
              src={trelloMobile}
              className="portfolio__img"
              alt="portfolio item"
            ></img>
          </figure>
          <figure className="portfolio__item portfolio__item--6">
            <img
              src={nexterMobile}
              className="portfolio__img"
              alt="portfolio item"
            ></img>
          </figure>
          <figure className="portfolio__item portfolio__item--7">
            <img
              src={shop}
              className="portfolio__img"
              alt="portfolio item"
            ></img>
          </figure>
        </Fade>
      </div>
      <Fade right>
        <div className="portfolio__github">
          <a
            className="link link-bottom"
            href="https://github.com/Bartoszkie?tab=repositories"
            alt="github link"
          >
            GITHUB/Bartoszkie
          </a>
        </div>
      </Fade>
    </section>
  );
};

export default Portfolio;
