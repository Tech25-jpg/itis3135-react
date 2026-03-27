import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Footer from './components/Footer';
import Header from './components/Header';

// Temporary placeholders
const Home = () => <div><h2>Welcome to Kevin Teah's Keen Turkey</h2></div>;
const Gallery = () => <div><h2>Gallery Page</h2></div>
const RadiTude = () => <div><h2>Radi-Tude Zone 🤣</h2></div>
const Evaluations = () => <div><h2>Website Evaluations</h2></div>
const Hobby = () => <div><h2>Hobby Page</h2></div>
import Introduction from './pages/Introduction';
import FccCerts from './pages/FccCerts';
import Contract from './pages/Contract';
import Survey from './pages/Survey';
import Gallery from './pages/Gallery';
import Inventory from './pages/Inventory';
import Highlight from './pages/Highlight';
import Documentation from './pages/Documentation';
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
          {/*Adding extra routes here later */}
        </Routes>
      </main>

      < Footer />
      </Router>
  );
}

export default App;