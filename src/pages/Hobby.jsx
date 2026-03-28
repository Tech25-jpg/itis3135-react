const Hobby = () => {
    const [activeSection, setActiveSection] = useState('what');

    //
    const sections = {
        what: (
            <section className="active">
                <h2>First Macguffin: What is Gaming?</h2>
                <p>Gaming is the activity of playing online (or offline) games...</p>
                <figure>
                    <img src="/images/modernpc.jpg" alt="Modern PC Gaming Setup" />
                    <figcaption>Modern PC Gaming Setup</figcaption>
                </figure>
                <p className="ai-prompt">Prompt: Describe the evolution of gaming from its early days to modern immersive experiences.</p>
            </section>
        ),
        who: (
            <section className="active">
                <h2>Second Macguffin: Who Plays Games?</h2>
                <p>Gaming is a universal activity that attracts people from distant corners of the world...</p>
                <form onSubmit={(e) => e.preventDefault()}>
                    <fieldset>
                        <legend>Player Registration</legend>
                        <label htmlFor="gamertag">Gamertag:</label>
                        <input type="text" id="gamertag" name="gamertag" />
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
                            <th>Average Play-Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Spring</td>
                            <td>Spring Sales</td>
                            <td>Moderate</td>
                        </tr>
                        <tr>
                            <td>Summer</td>
                            <td>Summer Sales</td>
                            <td>Increased during vacations</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        ),
        where: (
            <section className="active">
                <h2>Fourth Macguffin: Where Do People Play Games?</h2>
                <p>Gaming can be enjoyed in various settings...</p>
            </section>
        ),
        why: (
            <section className="active">
                <h2>Fifth Macguffin: Why Do People Play Games?</h2>
                <p>People play games for a variety of reasons...</p>
            </section>
        ),
        how: (
            <section className="active">
                <h2>Sixth Macguffin: How Do People Play Games?</h2>
                <p>People play games using various platforms and devices...</p>
            </section>
        ),
        'ai-prompts': (
            <section className="active">
                <h2>AI Prompts</h2>
                <ul>
                    <li>Describe the evolution of gaming.</li>
                    <li>Describe the diversity of the community.</li>
                </ul>
            </section>
        )
    };
    return (
        <div className="hobby-body">
            {/* the rest of the component */}
        </div>
    );
};