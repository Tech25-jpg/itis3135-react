import React from 'react';
import { Link } from 'react-router-dom';

const RadiTude = () => {
  return (
    <div style={{ backgroundColor: 'white', color: 'black', fontFamily: 'Arial, sans-serif', minHeight: '100vh' }}>
      <nav><Link to="/">Back to Home Page</Link></nav>
      
      <h2 style={{ fontFamily: '"Comic Sans MS", cursive', marginLeft: '50px' }}>
        THIS WEBSITE IS FOR C00LKIDDS ONLY!! GET OUT
      </h2>
      
      <h1 style={{ fontFamily: 'Papyrus, fantasy', marginLeft: '5px' }}>
        ITS I, THE GREAT PAPYRUS, HAVE COME TO MAKE AN EXPLICIT CAMEO IN THIS WEBSITE!
      </h1>

      <br /><br /><br /><br />

      {/* OPPOSITE OF BIG */}
      <p style={{ textAlign: 'center', fontFamily: '"Times New Roman", serif', marginTop: '100px', marginBottom: '5px' }}>
        WARNING: THIS WEBSITE CONTAINS EXTREME LEVELS OF LAME-ITUDE. PROCEED WITH CAUTION IF YOU VALUE YOUR COOLNESS AND YOUR SANITY.
      </p>

      {/* OPPOSITE OF SMALL */}
      <p style={{ fontSize: '48px', fontFamily: '"Comic Sans MS", cursive', marginRight: '10px', marginTop: '2px' }}>
        YOU HAVE BEEN WARNED! NOW BEGONE, LAME ONE!
      </p>

      {/* Messed up Image Ratio */}
      <img 
        src="https://static.wikia.nocookie.net/joke-battles/images/6/65/Wega.png/revision/latest?cb=20240617155810" 
        width="400" 
        height="400" 
        alt="BAHHH" 
      />

      <h5 style={{ fontFamily: '"Arial Black", Gadget, sans-serif', marginLeft: '150px', marginTop: '10px' }}>
        FIGURE 1: AN IMAGE OF THE INFAMOUS WEGA, KNOWN FOR HIS UNPARALLELED RAD-ITUDE AND ABSOLUTE COOLNESS PROFICIENCY.
      </h5>

      <br /><br />

      <p style={{ fontFamily: '"Comic Sans MS", cursive', marginLeft: '80px', marginRight: '200px', marginTop: '3px', marginBottom: '60px' }}>
        <u style={{ fontFamily: '"Comic Sans MS", cursive' }}>DISCLAIMER: THIS TEXT CONTAINS A SCARY NON-UNDERLINED LINK!</u>{' '}
        <span style={{ backgroundColor: 'yellow', fontFamily: 'Papyrus, fantasy' }}>Yellow; my favorite food</span>{' '}
        and this is a real <a href="#">link</a> next to it.
      </p>

      <br /><br /><br /><br />

      {/* Bulleted list */}
      <ul style={{ textAlign: 'center', listStylePosition: 'inside', fontFamily: '"Times New Roman", serif', marginLeft: '15px', marginRight: '300px', marginTop: '5px', marginBottom: '80px' }}>
        <li>A VERY CENTERED LIST</li>
        <li>WITH SOME RAD ITEMS</li>
        <li>FOR YOUR (NOW) COOL READING PLEASURE</li>
        <li>ENJOY THE RAD-ITUDE!</li>
      </ul>

      <br /><br />

      {/* POOR contrasting text */}
      <p style={{ color: '#CCCCCC', backgroundColor: 'white', fontFamily: 'Papyrus, fantasy', fontSize: '14px', marginLeft: '250px', marginRight: '10px', marginTop: '10px', marginBottom: '3px' }}>
        THIS TEXT IS HARD TO READ DUE TO POOR CONTRAST! PROCEED WITH CAUTION IF YOU VALUE YOUR EYESIGHT!
      </p>

      <br /><br /><br />

      {/* Elemental Battleground */}
      <div style={{ borderTop: '20px solid red', borderRight: '20px dotted blue', borderBottom: '20px dashed green', borderLeft: '20px double purple', padding: '30px', fontFamily: '"Comic Sans MS", cursive', marginTop: '100px', marginBottom: '5px', marginLeft: '50px', marginRight: '150px' }}>
        <p style={{ margin: 0 }}>
          WELCOME TO THE ELEMENTAL BATTLEGROUND! HERE, THE FORCES OF RAD-ITUDE CLASH IN AN EPIC SHOWDOWN OF COOLNESS AND LAME-ITUDE. MAY THE RADDEST ONE WIN! Red is Right, Blue is True, Green is Keen, and Purple is Superior to all the other colors.
        </p>
      </div>

      <br /><br /><br /><br /><br /><br />

      <h3 style={{ fontFamily: 'Papyrus, fantasy', textAlign: 'center', marginBottom: '150px' }}>
        The Header No One Invited:
      </h3>

      <div style={{ backgroundColor: 'lightblue', padding: '10px', marginLeft: '400px', marginBottom: '200px' }}>
        <p style={{ fontFamily: '"Comic Sans MS", cursive' }}>
          <u>More useless text</u> that is not a link. And some <span style={{ backgroundColor: 'lime', fontFamily: 'Papyrus, fantasy' }}>highlighted words that dislike their distant cousins; lemons</span> mixed in.
        </p>
      </div>

      <p style={{ fontFamily: '"Times New Roman", serif', fontSize: '12px', textAlign: 'center', marginTop: '300px' }}>
        © 2026 THE RAD COMPANY. ALL RIGHTS RESERVED. NO COOL KIDS WERE HARMED IN THE MAKING OF THIS WEBSITE.
      </p>
    </div>
  );
};

export default RadiTude;