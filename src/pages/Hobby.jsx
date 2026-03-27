import React, { useState } from 'react';

const Hobby = () => {
  // Use state to track which "MacGuffin" is visible
  const [activeSection, setActiveSection] = useState('what');

  const showSection = (id) => {
    setActiveSection(id);
  };

  return (
    <div className="hobby-wrapper">
      <style>{`
        .hobby-wrapper {
          --bg-color: #383d3b;
          --panel-bg: #1e2a38;
          --text-main: #e0e0e0;
          --accent-neon: #00ffcc;
          --accent-soft: #8a2be2;
          background-color: var(--bg-color);
          color: var(--text-main);
          min-height: 100vh;
          font-family: 'Segoe UI', Arial, sans-serif;
        }
        .hobby-header {
          background: linear-gradient(135deg, #1e2a28, #000);
          padding: 2.5rem 1rem;
          text-align: center;
          border-bottom: 3px solid var(--accent-neon);
        }
        .hobby-header h1 { color: var(--accent-neon); text-shadow: 2px 2px 10px var(--accent-neon); margin: 0; }
        .hobby-nav { margin-top: 1.5rem; display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; }
        .hobby-nav button {
          background: none; border: none; color: var(--text-main);
          cursor: pointer; font-weight: bold; text-transform: uppercase; transition: 0.3s;
        }
        .hobby-nav button:hover, .hobby-nav button.active-btn { color: var(--accent-neon); text-shadow: 0 0 5px var(--accent-neon); }
        .hobby-main {
          max-width: 900px; background-color: var(--panel-bg);
          margin: 2rem auto; padding: 1.5rem; border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }
        .hobby-section { display: none; animation: slideIn 0.4s ease-out; }
        .hobby-section.active { display: block; }
        @keyframes slideIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .ai-prompt { font-style: italic; font-size: 0.85rem; color: #aaa; margin: 10px 0; display: block; }
        .hobby-table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: #162116; border: 1px solid var(--accent-soft); }
        .hobby-table th, .hobby-table td { border: 1px solid var(--accent-soft); padding: 12px; }
        .hobby-table th { background-color: var(--accent-soft); color: #fff; }
      `}</style>

      <header className="hobby-header">
        <h1>Gaming Quest</h1>
        <nav className="hobby-nav">
          {['what', 'who', 'when', 'where', 'why', 'how', 'ai-prompts'].map((section) => (
            <button 
              key={section} 
              onClick={() => showSection(section)}
              className={activeSection === section ? 'active-btn' : ''}
            >
              {section.toUpperCase()}
            </button>
          ))}
        </nav>
      </header>

      <main className="hobby-main">
        {/* WHAT SECTION */}
        <section className={`hobby-section ${activeSection === 'what' ? 'active' : ''}`}>
          <h2>First Macguffin: What is Gaming?</h2>
          <p>Gaming is the activity of playing online (or offline) games... From 8-bit pixels to modern ray tracing.</p>
          <figure>
            <img src="/images/modernpc.jpg" alt="Modern PC Gaming Setup" />
            <figcaption>Modern PC Gaming Setup</figcaption>
          </figure>
          <span className="ai-prompt">Prompt: Describe the evolution of gaming from its early days to modern immersive experiences.</span>
        </section>

        {/* WHO SECTION */}
        <section className={`hobby-section ${activeSection === 'who' ? 'active' : ''}`}>
          <h2>Second Macguffin: Who Plays Games?</h2>
          <p>Gaming is a universal activity that attracts people from distant corners of the world; me included.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <fieldset>
              <legend>Player Registration</legend>
              <label htmlFor="gamertag">Gamertag: </label>
              <input type="text" id="gamertag" /><br /><br />
              <input type="submit" value="Submit" className="btn" />
            </fieldset>
          </form>
        </section>

        {/* WHEN SECTION */}
        <section className={`hobby-section ${activeSection === 'when' ? 'active' : ''}`}>
          <h2>Third Macguffin: When Do People Play?</h2>
          <table className="hobby-table">
            <thead>
              <tr>
                <th>Seasonal Events</th>
                <th>Special Occasions</th>
                <th>Average Play-Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Festivities (Winter Solstice)</td>
                <td>Steam Seasonal Sales</td>
                <td>1-2 hours daily</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* HOW SECTION */}
        <section className={`hobby-section ${activeSection === 'how' ? 'active' : ''}`}>
          <h2>Sixth Macguffin: How Do People Play?</h2>
          <ol>
            <li><strong>PC Gaming:</strong> Flexibility and customization.</li>
            <li><strong>Console Gaming:</strong> Streamlined and user-friendly.</li>
          </ol>
        </section>

        {/* AI PROMPTS SECTION */}
        <section className={`hobby-section ${activeSection === 'ai-prompts' ? 'active' : ''}`}>
          <h2>AI Prompts</h2>
          <ul>
            <li>Describe the evolution of gaming from early days to modern experiences.</li>
            <li>Describe the diversity of the gaming community.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Hobby;