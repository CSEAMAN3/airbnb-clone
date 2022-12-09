import React from "react";
import "./About.css";

import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="The about page learn wonderful things about us." />
        <link rel="canonical" href="/about" />
      </Helmet>
      <main className="about-main">
        <div className="about-main-container container">
          <h2>This is the About page</h2>
        </div>
      </main>
    </>
  );
}
