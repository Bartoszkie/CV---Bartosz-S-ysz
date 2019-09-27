import React from "react";

import natoure from "../../asstets/img/Natoure.png";
import natoureMobile from "../../asstets/img/Natoure-mobile.png";

import trello from "../../asstets/img/Trollo.png";
import trelloMobile from "../../asstets/img/Trillo-mobile.png";

import nexter from "../../asstets/img/Nexter.png";
import nexterMobile from "../../asstets/img/Nexter-mobile.png";

import shop from "../../asstets/img/Shop.png";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="heading-h2">Portfolio</h2>
      <p className='quote'>
        Those are some of my simple freelance projects. All of them are fictional and their main purpose is to gain some knowelge.
        My goal is to have here some categories with pagination included due to so big number of projects.
        </p>
      <div className="portfolio__gallery">
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
          <img src={shop} className="portfolio__img" alt="portfolio item"></img>
        </figure>
      </div>
    </section>
  );
};

export default Portfolio;
