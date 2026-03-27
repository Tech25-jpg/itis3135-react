import React from 'react';

const Product = () => {
  return (
    <main className="product-page">
      {/* Hero Section */}
      <section id="hero">
        <h2>Thanksgiving Feasts Delivered Fresh</h2>
        <form id="form" action="https://www.freecodecamp.org/email-submit">
          <input 
            name="email" 
            id="email" 
            type="email" 
            placeholder="Enter your email address" 
            required 
          />
          <input id="submit" type="submit" value="Get Started" className="btn" />
        </form>
      </section>

      {/* Features Section */}
      <section id="features">
        <div className="grid">
          <div className="icon">🍗</div>
          <div className="desc">
            <h3>Farm-Fresh Turkey</h3>
            <p>Locally sourced, hormone-free turkeys prepared by expert chefs for your perfect Thanksgiving Dinner.</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-section">
        <h2>Watch Our Preparation Process</h2>
        <div className="video-container">
          <iframe 
            id="video" 
            height="325" 
            width="560" 
            src="https://www.youtube.com/embed/17xV-2wbTm8" 
            title="Thanksgiving Prep"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <h2>Feast Options:</h2>
        <div className="pricing-grid">
          <div className="product" id="standard">
            <div className="level"><b>Family Feast</b></div>
            <h2>$199</h2>
            <p>Serves 8-10 people</p>
            <p>Includes a 12-14 lb herb-roasted turkey, stuffing, cranberry sauce, and a dessert.</p>
            <button className="btn">Select</button>
          </div>

          <div className="product" id="premium">
            <div className="level"><b>Grand Feast</b></div>
            <h2>$249</h2>
            <p>Serves 12-15 people</p>
            <p>Complete thanksgiving spread with all the fixings.</p>
            <button className="btn">Select</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product;