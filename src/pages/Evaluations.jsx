import React from 'react';
import { Link } from 'react-router-dom';

const Evaluations = () => {
  return (
    <main className="evaluations-container">
      <header>
        <h1>Website Evaluations</h1>
        <p>A comparison of design principles across two distinct web experiences.</p>
      </header>

      <nav className="breadcrumb">
        <Link title="Back to Home" to="/">Back to Home Page</Link>
      </nav>

      <div className="eval-grid">
        {/* Good Website Evaluation */}
        <section className="eval-card good-site">
          <h2>Evaluation 1: Good Website</h2>
          <h3>
            <a href="https://www.srb2.org/" target="_blank" rel="noopener noreferrer">
              <i>Sonic Robo Blast 2 Official Website [Homepage]</i>
            </a>
          </h3>
          
          <ul className="crap-list">
            <li><strong>Contrast:</strong> Light text on a dark background provides excellent readability without eye strain.</li>
            <li><strong>Repetition:</strong> Consistent layout and color schemes across all pages make navigation intuitive.</li>
            <li><strong>Alignment:</strong> Centered elements create a balanced, professional, and organized appearance.</li>
            <li><strong>Proximity:</strong> Navigation sidebars (Download, Addons) group related links effectively for quick access.</li>
          </ul>
        </section>

        {/* Bad Website Evaluation */}
        <section className="eval-card bad-site">
          <h2>Evaluation 2: Bad Website</h2>
          <h3>
            <a href="https://museum.lingscars.com/feature/website.php#models" target="_blank" rel="noopener noreferrer">
              <i>LingsCars</i>
            </a>
          </h3>
          
          <ul className="crap-list">
            <li><strong>Contrast:</strong> Poor color choices lead to clashing elements that strain the eyes and hide content.</li>
            <li><strong>Repetition:</strong> The chaotic mix of fonts and layouts feels disorganized rather than cohesive.</li>
            <li><strong>Alignment:</strong> Misaligned text and images create a "visual noise" that makes the site hard to follow.</li>
            <li><strong>Proximity:</strong> Information is scattered randomly, making it difficult to find the relationship between sections.</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Evaluations;