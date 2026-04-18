import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

const Home = () => (
  <div>
    <h1>I am Kevin Teah and this is my ITIS First Course Page.</h1>
    
    <nav style={{ margin: '10px 0' }}>
       | <a href="/contract">Contract</a>
    </nav>

    <section>
      <h2>ITIS 3135 Course Page</h2>
      <p>Kevin Teah's Keen Turkey ~ | ITIS 3135</p>
    </section>
  </div>
);
// Components
import Footer from './components/Footer';
import Header from './components/Header';

// Pages
import Introduction from './pages/Introduction';
import FccCerts from './pages/FccCerts';
import Contract from './pages/Contract';
import Survey from './pages/Survey';
import Gallery from './pages/Gallery';
import Inventory from './pages/Inventory';
import Highlight from './pages/Highlight';
import Instructions from './pages/Instructions';
import Hobby from './pages/Hobby';
import Evaluations from './pages/Evaluations';
import RadiTude from './pages/RadiTude';
function App() {
  return (
    <Router>
      < Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/cards" element={<Gallery />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/documentation" element={<Instructions />} />
          <Route path="/product" element={<Highlight />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/hTm_@🤣.htm" element={<RadiTude />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/website_evaluations" element={<Evaluations />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="/fcc" element={<FccCerts />} />
          {/*Adding extra routes here later */}
        </Routes>
      </main>

      < Footer />
      </Router>
  );
}

export default App;