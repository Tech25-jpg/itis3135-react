import React from 'react';
{/* March 25th, 2026*/}
const Footer = () => {
  return (
    <footer>
      <hr />
      <table style={{ margin: '0 auto' }}> 
        <tbody>
          <tr>
            <td><a href="/">Home</a></td>
            <td>|</td>
            <td><a href="https://tech25-jpg.github.io/Tech25.github.io/">ITIS3135</a></td>
            <td>|</td>
            <td><a href="https://webpages.charlotte.edu/kteah/">CLT Web</a></td>
            <td>|</td>
            <td><a href="https://github.com/Tech25-jpg">GitHub</a></td>
            <td>|</td>
            <td><a href="https://github.com/Tech25-jpg/Tech25-jpg.github.io">GitHub.io</a></td>
            <td>|</td>
            <td><a href="https://www.linkedin.com/in/kevin-teah-90b1a0332/">LinkedIn</a></td>
            <td>|</td>
            <td><a href="https://www.freecodecamp.org/kteah25">freeCodeCamp</a></td>
            <td>|</td>
            <td><a href="https://itis3135-react-alpha.vercel.app">ITIS3135@Vercel</a></td>
          </tr>
        </tbody>
      </table>

      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <p>Designed by Kevin Teah</p>
        <a href="https://www.freecodecamp.org/certification/kteah25/responsive-web-design-v9">
          Certified in Responsive Web Design
        </a>
        <p>
          &copy; 2026 Kevin Teah | ITIS 3135 
          <a href="mailto:kteah@charlotte.edu"> | kteah@charlotte.edu</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;