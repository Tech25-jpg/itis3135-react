import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Temporary placeholders
const Home = () => <div><h2>Welcome to Kevin Teah's Keen Turkey</h2></div>;
import Introduction from './pages/Introduction';
import FccCerts from './FccCerts';

function App() {
  return (
    <Router>
      <header>
        <h1>Kevin Teah's Keen Turkey | ITIS 3135</h1>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/fcc-cert" element={<FccCerts />} />
          <Route path="/contract" element={<Contract />} />
          {/*Adding extra routes here later */}
        </Routes>
      </main>

      <footer>
        <p>Built by Kevin Teah &copy; 2026</p>
        <a href="https://github.com/Tech25-jpg" target="_blank">Github</a> |
        <a href="#" id="vercel-link">ITIS3135@Vercel</a>
      </footer>
      </Router>
  );
}

export default App;