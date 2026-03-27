import React from 'react';

const Instructions = () => {
  return (
    <div className="docs-wrapper">
      <nav id="navbar">
        <header><b>Keen Turkey Guide</b></header>
        <div className="nav-links">
          <a className="nav-link" href="#Introduction">Introduction</a>
          <a className="nav-link" href="#Preparation">Preparation</a>
          <a className="nav-link" href="#Cooking_Methods">Cooking Methods</a>
          <a className="nav-link" href="#Temperature_Guide">Temperature Guide</a>
          <a className="nav-link" href="#Serving_Tips">Serving Tips</a>
        </div>
      </nav>

      <main id="main-doc">
        <section className="main-section" id="Introduction">
          <header>Introduction</header>
          <p>Cooking the perfect Thanksgiving Turkey is an art that combines your culinary skills with timing, technique, and preparation.</p>
          <p>A well-prepared Turkey is the centerpiece of a successful Thanksgiving dinner.</p>
          <code>Perfect Turkey = Proper Prep + Right Temperature + Love</code>
        </section>

        <section className="main-section" id="Preparation">
          <header>Preparation</header>
          <p>Proper preparation is key to a delicious turkey.</p>
          <p>Start by thawing your turkey in the refrigerator, allowing 24 hours for every 4-5 lbs.</p>
          <code>Thaw Time = (Turkey Weight in lbs) * 24 hours</code>
          <ul>
            <li>Remove giblets and neck</li>
            <li>Pat turkey dry inside and out</li>
            <li>Season generously with herbs and spices</li>
          </ul>
        </section>

        <section className="main-section" id="Cooking_Methods">
          <header>Cooking Methods</header>
          <p>There are several methods to cook a turkey, each with their own advantages.</p>
          <ul>
            <li>Roasting in the oven: <b>325°F for fifteen minutes per pound</b>.</li>
            <li><b>Deep frying</b>: A faster alternative but requires more care.</li>
            <li><b>Slow cooking</b>: Ideal for hands-off cooking.</li>
          </ul>
        </section>

        <section className="main-section" id="Temperature_Guide">
          <header>Temperature Guide</header>
          <p>Temperature is key to a perfectly cooked turkey.</p>
          <code>Internal Temperature = 165°F (74°C)</code>
          <p>Use a meat thermometer to ensure accuracy:</p>
          <ul>
            <li><b>Breast</b>: 165°F (74°C) minimum</li>
            <li><b>Thigh</b>: 170-175°F (80°C) for best texture</li>
            <li><b>Wing</b>: 165°F (74°C)</li>
            <li><b>Stuffing</b>: 165°F (74°C)</li>
          </ul>
        </section>

        <section className="main-section" id="Serving_Tips">
          <header>Serving Tips</header>
          <p>Let the turkey rest for 20-30 minutes before carving to allow juices to redistribute.</p>
          <p>Carve the turkey against the grain for tender meat.</p>
          <code>Resting Time = 20-30 minutes</code>
        </section>
      </main>
    </div>
  );
};

export default Instructions;