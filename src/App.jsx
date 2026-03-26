import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Footer from './components/Footer';
import Header from './components/Header';

// Temporary placeholders
const Home = () => <div><h2>Welcome to Kevin Teah's Keen Turkey</h2></div>;
import Introduction from './pages/Introduction';
import FccCerts from './pages/FccCerts';
import Contract from './pages/Contract';
function App() {
  return (
    <Router>
      < Header />
        <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/highlight" element={<Highlight />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/radi-tude" element={<Radi-Tude />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/website evaluations" element={<Evaluations />} />
          <Route path="/hobby" element={<Hobby />} />
          {/*Adding extra routes here later */}
        </Routes>
      </main>

      < Footer />
      </Router>
  );
}

export default App;