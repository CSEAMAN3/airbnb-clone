import React from "react";
import "./Home.css";

import Card from "../../components/Card/Card";
import { data } from "../../data";

import HeroImg from "../../images/airbnb-hero.png";

import { Helmet } from "react-helmet-async";

export default function Home() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <>
      <Helmet>
        <title>Air bnb homepage</title>
        <meta name="description" content="This is the main homepage for the air bnb clone react site." />
        <link rel="canonical" href="/" />
      </Helmet>
      <main className="home-main">
        <div className="home-main-container container">
          <section className="hero-section">
            <img className="main-hero-img" src={HeroImg} alt="Collection of airbnb experiences" />
            <h1 className="hero-title">Online Experiences</h1>
            <p className="hero-text">
              Join unique interactive activities led by one-of-a kind hosts, all without leaving your home.
            </p>
          </section>
          <section className="cards-section">{cards}</section>
        </div>
      </main>
    </>
  );
}
