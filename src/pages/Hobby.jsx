import React, { useState } from 'react';

const Hobby = () => {
    const [activeSection, setActiveSection] = useState('what');

    const sections = {
        what: (
            <section className="active">
                <h2>First Macguffin: What is Gaming?</h2>
                <p>Gaming is the activity of playing online (or offline) games, which can be done for entertainment, competition, or educational purposes. From the 8-bit pixels to the immersive virtual worlds of modern ray tracing, gaming has evolved into a global phenomenon that transcends age, culture, and geography.</p>
                <figure>
                    <img src="/images/modernpc.jpg" alt="Modern PC Gaming Setup" />
                    <figcaption>Modern PC Gaming Setup</figcaption>
                </figure>
                <p className="ai-prompt">Prompt: Describe the evolution of gaming from its early days to modern immersive experiences.</p>
                <p>Whether it's the nostalgia of classic arcade games or the cutting-edge graphics of today's titles, gaming offers a diverse range of experiences that cater to all kinds of players. From casual mobile games to competitive esports, gaming has become a central part of modern culture and entertainment.</p>
            </section>
        ),
        who: (
            <section className="active">
                <h2>Second Macguffin: Who Plays Games?</h2>
                <p>Gaming is a universal activity that attracts people from distant corners of the world; me included. My interests range from turn-based RPGs to side-scrolling platformers, and I enjoy both single-player narratives and multiplayer competitions. Gaming has become a significant part of my life, providing not only entertainment but also a sense of community and connection with others who share similar interests.</p>
                <figure>
                    <img src="/images/gamingcommunity.jpg" alt="Gaming Community" />
                    <figcaption>Gamers from around the world connecting through their shared passion whether in-person or online.</figcaption>
                </figure>
                <p className="ai-prompt">Prompt: Describe the diversity of the gaming community and how it brings people together.</p>
                <form onSubmit={(e) => e.preventDefault()}>
                    <fieldset>
                        <legend>Player Registration</legend>
                        <label htmlFor="gamertag">Gamertag:</label>
                        <input type="text" id="gamertag" name="gamertag" /><br /><br />
                        <label htmlFor="platform">Preferred platform:</label>
                        <select id="platform" name="platform">
                            <option value="pc">PC</option>
                            <option value="console">Console (Xbox, PlayStation, etc.)</option>
                            <option value="handheld">Handheld (Nintendo Switch, Steam Deck, etc.)</option>
                        </select><br /><br />
                        <button type="submit">Submit</button>
                    </fieldset>
                </form>
            </section>
        ),
        when: (
            <section className="active">
                <h2>Third Macguffin: When Do People Play Games?</h2>
                <p>Gaming is a time-honored activity that is defined by seasonal events in-game, special occasions, and community gatherings. Gaming can also be spent as an alone-time activity apart of one's schedule, where players can immerse themselves in a captivating story or challenge their skills in a competitive match against other users or with their friends.</p>
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
                            <td>Festivities (Winter Solstice)</td>
                            <td>Steam Seasonal Sales & AAA Releases</td>
                            <td>Esports Tournaments & LAN Parties</td>
                            <td>1-2 hours daily, more on weekends</td>
                        </tr>
                        <tr>
                            <td>Spring</td>
                            <td>Spring Sales & Indie Game Showcases</td>
                            <td>Game Jams & Online Multiplayer Events</td>
                            <td>Moderate</td>
                        </tr>
                        <tr>
                            <td>Summer</td>
                            <td>Summer Sales & Gaming Conventions</td>
                            <td>Esports Championships & Community Meetups</td>
                            <td>Increased during vacations</td>
                        </tr>
                    </tbody>
                </table>
                <figure>
                    <img src="/images/gamingcalendar.jpg" alt="Gaming Calendar" />
                    <figcaption>Seasonal events and community gatherings throughout the year</figcaption>
                </figure>
            </section>
        ),
        where: (
            <section className="active">
                <h2>Fourth Macguffin: Where Do People Play Games?</h2>
                <p>Gaming can be enjoyed in various settings, from the comfort of one's home to public gaming centers, on-the-go with mobile devices, and even arcade games. The rise of online gaming has also created virtual spaces where players can connect and play together regardless of their physical location.</p>
                <figure>
                    <img src="/images/gaminglocations.jpg" alt="Gaming Locations" />
                    <figcaption>An arcade is where people can enjoy playing video games in a social setting</figcaption>
                </figure>
                <p className="ai-prompt">Prompt: Describe the various locations where people play games and how technology has enabled gaming in different environments.</p>
                <p>Whether it's a cozy living room setup, a bustling internet cafe, or a mobile gaming session during a commute, gaming has become an accessible and versatile form of entertainment that can be enjoyed anywhere and anytime.</p>
            </section>
        ),
        why: (
            <section className="active">
                <h2>Fifth Macguffin: Why Do People Play Games?</h2>
                <p>People play games for a variety of reasons, including entertainment, social connection, stress relief, and personal growth. Gaming can provide an escape from reality, allowing players to immerse themselves in fantastical worlds, engaging narratives, and establish common ground with other users on a certain topic of interest.</p>
                <figure>
                    <img src="/images/gamingreasons.jpg" alt="Pokemon Wind and Waves landscape" />
                    <figcaption>Beautiful landscape from the upcoming Pokemon Wind and Waves</figcaption>
                </figure>
                <p className="ai-prompt">Prompt: Describe the various reasons why people play games and how gaming can benefit individuals in different ways.</p>
                <p>Additionally, gaming can serve as a form of stress relief and a way to unwind after a long day. It can also promote personal growth by challenging players to develop problem-solving skills, strategic thinking, and creativity. Overall, gaming offers a multifaceted experience that caters to a wide range of motivations and benefits for players.</p>
            </section>
        ),
        how: (
            <section className="active">
                <h2>Sixth Macguffin: How Do People Play Games?</h2>
                <p>People play games using various platforms and devices, including PCs, consoles, handheld devices, and mobile phones. As long as a user is connected to the internet and their specifications meet the requirements, they can play their favorite games from anywhere.</p>
                <ol>
                    <li><strong>PC Gaming:</strong> Many gamers prefer playing on a personal computer due to the flexibility and customization options it offers. PC gaming allows for high-end graphics, modding capabilities, and access to a vast library of games through platforms like Steam.</li>
                    <li><strong>Console Gaming:</strong> Consoles such as the PlayStation, Xbox, and Nintendo Switch provide a more streamlined gaming experience with exclusive titles and user-friendly interfaces. They are popular for their ease of use and social gaming features.</li>
                    <li><strong>Handheld Devices:</strong> Handheld gaming devices like the Nintendo Switch and Steam Deck offer portability without sacrificing performance. They allow gamers to enjoy their favorite titles on the go.</li>
                    <li><strong>Mobile Gaming:</strong> Mobile phones have become a dominant platform for gaming, with a wide variety of games available on app stores. Mobile gaming is accessible to a broad audience and often includes casual games that can be played in short sessions.</li>
                </ol>
                <figure>
                    <img src="/images/gamingplatforms.png" alt="Gaming Platforms" />
                    <figcaption>Different platforms and devices used for gaming</figcaption>
                </figure>
                <p className="ai-prompt">Prompt: Describe the different platforms and devices people use to play games and how technology has evolved to support gaming on various mediums.</p>
                <p>Whether it's through a high-end gaming PC, a popular console like the PlayStation or Xbox, a portable device like the Nintendo Switch, or a mobile phone, gaming has become accessible to a wide audience. The evolution of technology has also led to innovations such as cloud gaming and virtual reality, further expanding the ways in which people can experience and enjoy games.</p>
            </section>
        ),
        'ai-prompts': (
            <section className="active">
                <h2>AI Prompts</h2>
                <p>Throughout this website, you will find various AI prompts that encourage you to reflect on different aspects of gaming. These prompts are designed to spark your creativity and critical thinking about the gaming industry, its impact on culture, and your personal experiences with gaming.</p>
                <ul>
                    <li>Describe the evolution of gaming from its early days to modern immersive experiences.</li>
                    <li>Describe the diversity of the gaming community and how it brings people together.</li>
                    <li>Describe the various locations where people play games and how technology has enabled gaming in different environments.</li>
                    <li>Describe the various reasons why people play games and how gaming can benefit individuals in different ways.</li>
                    <li>Describe the different platforms and devices people use to play games and how technology has evolved to support gaming on various mediums.</li>
                </ul>
            </section>
        )
    };

    return (
        <div className="hobby-body">
            <header className="hobby-header">
                <h1>Gaming Quest</h1>
                <nav id="hobby-nav">
                    <ul>
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