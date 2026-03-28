import React from 'react';

const Introduction = () => {
  return (
    <main>
      <h2>Sophomore — Information Technology</h2>
      
      <figure className="profile-figure">

        <img src="/1738707586340.jpg" alt="Kevin Teah Profile" />
        <figcaption>Professional LinkedIn Headshot</figcaption>
      </figure>

      <section>
        <p>
          I am a Sophomore at the University of North Carolina at Charlotte focusing on Information Technology. 
          I am proficient in coding languages like JavaScript and Python, working toward creating 
          full-stack software applications.
        </p>

        <div className="info-lists">
          <ul>
            <li><strong>Skills:</strong>
              <ul>
                <li>HTML & CSS</li>
                <li>JavaScript</li>
              </ul>
            </li>
            <li><strong>Interests:</strong>
              <ul>
                <li>Creative Writing</li>
                <li>Gaming</li>
              </ul>
            </li>
            <li><strong>Courses & Why:</strong>
              <ol>
                <li><strong>ITIS 3135 — Web Development:</strong> Deepening my understanding of modern web architecture.</li>
                <li><strong>STAT 1200 — Elements of Statistics I:</strong> Learning to analyze data and take chances against the odds.</li>
                <li><strong>ITSC 3050 — Technical Interview Prep:</strong> Preparing for the professional landscape.</li>
                <li><strong>ITSC 2600 — Identity and Career:</strong> Exploring professional development.</li>
                <li><strong>ITIS 3130 — Human-Centered Computing:</strong> Understanding the Human-AI relationship.</li>
              </ol>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h3>Additional Information</h3>
        <ul>
          <li><strong>Personal Background:</strong> Born and raised in Charlotte, NC. My last name is Liberian. I recently earned my AAS from Central Piedmont and transferred to UNCC to complete my Bachelor's.</li>
          <li><strong>Professional Goals:</strong> I am pursuing a career in full-stack programming to secure a stable position by graduation.</li>
          <li><strong>Education:</strong> AAS Degree (CPCC), pursuing BA in Information Technology (UNCC), Expected 2026-2027.</li>
          <li><strong>Road to Hire:</strong> Proud participant of the Road-to-Hire program, focusing on the transition to professional life.</li>
          <li><strong>Technical Setup:</strong> Primary device is a Windows 10 Latitude E5450, with backup hardware and access to the Atkins Library.</li>
        </ul>
      </section>

      <figure className="quote-box">
        <blockquote>
          “The secret to getting ahead is getting started.”
          <cite> — Mark Twain</cite>
        </blockquote>
      </figure>
    </main>
  );
};

export default Introduction;