import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      {/* March 25th, 2026 */}
      <h1>Kevin Teah's Personal Websites</h1>

      {/* Primary Navigation */}
      <nav id="primary-nav">
        <Link to="/">Home</Link> | 
        <Link to="/survey">Survey</Link> | 
        <Link to="/cards">Gallery</Link> | 
        <Link to="/inventory">Inventory</Link> | 
        <Link to="/documentation">Instructions</Link> | 
        <Link to="/product">Highlight</Link> | 
        <Link to="/contract">Contract</Link>
      </nav>

      {/* Header Component / Secondary Navigation */}
      <nav id="secondary-nav">
        <Link to="/hTm_@🤣.htm">Radi-Tude Zone</Link> | 
        <Link to="/introduction">Introduction Page</Link> | 
        <Link to="/website_evaluations">Website Evaluations</Link> | 
        <Link to="/hobby">Hobby</Link>
      </nav>
    </header>
  );
};

export default Header;