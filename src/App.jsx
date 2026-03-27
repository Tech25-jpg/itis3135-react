import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
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
import Documentation from './pages/Documentation';
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
          {/*Adding extra routes here later */}
        </Routes>
      </main>

      < Footer />
      </Router>
  );
}

export default App;