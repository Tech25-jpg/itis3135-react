import React from 'react';

const Gallery = () => {
  return (
    <main>
      <h2>🍂 Keen Turkey Menu Cards 🦃</h2>
      <div id="playing-cards">
        {/* Turkey Card */}
        <div className="card brown">
          <div className="left">T🦃</div>
          <div className="middle">🦃</div>
          <div className="right">T🦃</div>
        </div>

        {/* Pie Card */}
        <div className="card orange">
          <div className="left">P🥧</div>
          <div className="middle">🥧</div>
          <div className="right">P🥧</div>
        </div>
        
        {/* Cranberry Card */}
        <div className="card orange">
          <div className="left">C🍒</div>
          <div className="middle">🍒</div>
          <div className="right">C🍒</div>
        </div>

        {/* Corn Card */}
        <div className="card brown">
          <div className="left">C🌽</div>
          <div className="middle">🌽</div>
          <div className="right">C🌽</div>
        </div>

        {/* Leaves Card */}
        <div className="card orange">
          <div className="left">L🍂</div>
          <div className="middle">🍂</div>
          <div className="right">L🍂</div>
        </div>

        {/* Stuffing Card */}
        <div className="card brown">
          <div className="left">S🍞</div>
          <div className="middle">🍞</div>
          <div className="right">S🍞</div>
        </div>
      </div>
    </main>
  );
};

export default Gallery;