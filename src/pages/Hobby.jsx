import React, { useState } from 'react';

const Hobby = () => {
    const [activeSection, setActiveSection] = useState('what');

    const sections = {
        what: (
            <section className="active">
                <h2>First Macguffin: What is Gaming?</h2>
                <p>Gaming is the activity of playing online (or offline) games, which can be done for entertainment, competition, or educational purposes. From the 8-bit pixels to the immersive virtual worlds of modern ray tracing, gaming has evolved into a global phenomenon that transcends age, culture, and geography.</p>
                <figure>
                    <img src="/modernpc.jpg" alt="Modern PC Gaming Setup" />
                    <figcaption>Modern PC Gaming Setup</figcaption>
                </figure>
                <p className="ai-prompt">Prompt: Describe the evolution of gaming from its early days to modern immersive experiences.</p>
                <p>Whether it's the nostalgia of classic arcade games or the cutting-edge graphics of today's titles, gaming offers a diverse range of experiences that cater to all kinds of players.</p>
            </section>
        ),
        who: (
            <section className="active">
                <h2>Second Macguffin: Who Plays Games?</h2>
                <p>Gaming is a universal activity that attracts people from distant corners of the world; me included. My interests range from turn-based RPGs to side-scrolling platformers.</p>
                <figure>
                    <img src="/gamingcommunity.jpg" alt="Gaming Community" />
                    <figcaption>Gamers from around the world connecting through their shared passion.</figcaption>
                </figure>
                <p className="ai-prompt">Prompt: Describe the diversity of the gaming community.</p>
                <form onSubmit={(e) => e.preventDefault()}>
                    <fieldset>
                        <legend>Player Registration</legend>
                        <label htmlFor="gamertag">Gamertag:</label>
                        <input type="text" id="gamertag" name="gamertag" /><br /><br />
                        <label htmlFor="platform">Preferred platform:</label>
                        <select id="platform" name="platform">
                            <option value="pc">PC</option>
                            <option value="console">Console</option>
                            <option value="handheld">Handheld</option>
                        </select><br /><br />
                        <button type="submit">Submit</button>
                    </fieldset>
                </form>
            </section>
        ),
        when: (
            <section className="active">
                <h2>Third Macguffin: When Do People Play Games?</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Seasonal Events</th>
                            <th>Special Occasions</th>
                            <th>Community Gatherings</th>
                            <th>Average Play-Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Festivities</td>
                            <td>Steam Sales</td>
                            <td>Esports Tournaments</td>
                            <td>1-2 hours daily</td>
                        </tr>
                        <tr>
                            <td>Summer</td>
                            <td>Conventions</td>
                            <td>Meetups</td>
                            <td>Increased</td>
                        </tr>
                    </tbody>
                </table>
                <figure>
                    <img src="/gamingcalendar.jpg" alt="Gaming Calendar" />
                </figure>
            </section>
        ),
        where: (
            <section className="active">
                <h2>Fourth Macguffin: Where Do People Play Games?</h2>
                <p>From the comfort of one's home to public gaming centers and on-the-go with mobile devices.</p>
                <figure>
                    <img src="/gaminglocations.jpg" alt="Gaming Locations" />
                </figure>
                <p className="ai-prompt">Prompt: Describe various locations where people play games.</p>
            </section>
        ),
        why: (
            <section className="active">
                <h2>Fifth Macguffin: Why Do People Play Games?</h2>
                <p>For entertainment, social connection, stress relief, and personal growth.</p>
                <figure>
                    <img src="/gamingreasons.jpg" alt="Pokemon Wind and Waves landscape" />
                </figure>
                <p className="ai-prompt">Prompt: Describe the various reasons why people play games.</p>
            </section>
        ),
        how: (
            <section className="active">
                <h2>Sixth Macguffin: How Do People Play Games?</h2>
                <ol>
                    <li><strong>PC Gaming:</strong> Flexibility and customization.</li>
                    <li><strong>Console Gaming:</strong> Streamlined and exclusive titles.</li>
                    <li><strong>Handheld Devices:</strong> Portability.</li>
                    <li><strong>Mobile Gaming:</strong> Accessibility.</li>
                </ol>
                <figure>
                    <img src="/gamingplatforms.png" alt="Gaming Platforms" />
                </figure>
            </section>
        ),
        'ai-prompts': (
            <section className="active">
                <h2>AI Prompts</h2>
                <ul>
                    <li>Describe the evolution of gaming.</li>
                    <li>Describe the diversity of the community.</li>
                    <li>Describe the various locations where people play.</li>
                    <li>Describe the various reasons why people play.</li>
                    <li>Describe different platforms and devices.</li>
                </ul>
            </section>
        )
    };

    return (
        <div className="hobby-container">
            {/* INJECTED STYLES TO REPLACE EXTERNAL CSS */}
            <style dangerouslySetInnerHTML={{ __html: `
                .hobby-container {
                    --bg-color: #383d3b;
                    --panel-bg: #1e2a38;
                    --text-main: #e0e0e0;
                    --accent-neon: #00ffcc;
                    --accent-soft: #8a2be2;
                    background-color: var(--bg-color);
                    color: var(--text-main);
                    font-family: 'Segoe UI', Arial, sans-serif;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }
                .hobby-header {
                    background: linear-gradient(135deg, #1e2a28, #000);
                    color: var(--accent-neon);
                    padding: 2.5rem 1rem;
                    text-align: center;
                    border-bottom: 3px solid var(--accent-neon);
                }
                .hobby-header h1 { margin: 0; font-size: 3rem; letter-spacing: 4px; text-shadow: 2px 2px 10px var(--accent-neon); }
                .hobby-nav { margin-top: 1.5rem; display: flex; justify-content: center; flex-wrap: wrap; gap: 10px; list-style: none; padding: 0; }
                .nav-btn {
                    background: none; border: none; color: var(--text-main); font-weight: bold;
                    text-transform: uppercase; font-size: 0.9rem; cursor: pointer; transition: 0.3s;
                }
                .nav-btn:hover, .active-link { color: var(--accent-neon); text-shadow: 0 0 5px var(--accent-neon); }
                .divider { color: var(--accent-soft); }
                .hobby-main {
                    flex: 1; max-width: 900px; background-color: var(--panel-bg);
                    margin: 2rem auto; padding: 1.5rem; border-radius: 12px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                }
                section { animation: slideIn 0.4s ease-out; }
                @keyframes slideIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                h2 { color: var(--accent-soft); border-left: 5px solid var(--accent-soft); padding-left: 15px; }
                figure { margin: 2rem 0; background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 8px; text-align: center; }
                img { max-width: 100%; height: auto; border-radius: 4px; filter: brightness(0.9); }
                figcaption { font-weight: bold; margin-top: 10px; color: var(--accent-neon); }
                .ai-prompt { font-style: italic; font-size: 0.85rem; color: #aaa; margin-top: 8px; display: block; }
                table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; background: #162116; }
                th, td { border: 1px solid var(--accent-soft); padding: 12px; text-align: left; }
                th { background-color: var(--accent-soft); color: #fff; }
                .hobby-footer { text-align: center; padding: 2rem; background-color: #0a0a0a; color: #888; border-top: 1px solid var(--accent-neon); }
                .hobby-footer a { color: var(--accent-soft); text-decoration: none; }
                .validation-links img { height: 31px; margin: 5px; opacity: 0.7; }
            `}} />

            <header className="hobby-header">
                <h1>Gaming Quest</h1>
                <nav>
                    <ul className="hobby-nav">
                        {Object.keys(sections).map((key, index, arr) => (
                            <li key={key}>
                                <button 
                                    className={`nav-btn ${activeSection === key ? 'active-link' : ''}`}
                                    onClick={() => setActiveSection(key)}
                                >
                                    {key === 'ai-prompts' ? 'AI Prompts' : key.charAt(0).toUpperCase() + key.slice(1)}
                                </button>
                                {index !== arr.length - 1 && <span className="divider">🎮</span>}
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <main className="hobby-main">
                {sections[activeSection]}
            </main>

            <footer className="hobby-footer">
                <p>Designed by <a href="https://webpages.charlotte.edu/kteah/itis3135/kevinteahenterprises.com/">Kevin Teah Enterprises</a></p>
                <div className="validation-links">
                    <img src="https://www.w3.org/Icons/valid-html401.png" alt="Valid HTML" />
                    <img src="https://jigsaw.w3.org/css-validator/images/vcss-blue.png" alt="Valid CSS" />
                    <img src="https://wave.webaim.org/static/images/wave-icon.png" alt="Accessibility Check" />
                </div>
            </footer>
        </div>
    );
};

export default Hobby;