// import './index.css';
// import Home from './components/Home/Home';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home/Home';
import FAQ from './pages/FAQ/FAQ';
import About from './pages/About/About';
import OurServices from './pages/OurServices/OurServices';
import Testimonals from './components/Testimonals/Testimonials';
import Error from './pages/Error/Error';

// import ScrollRestoration from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* <ScrollRestoration /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/About" element={<About />} />
        <Route path="/OurServices" element={<OurServices />} />

        <Route path="*" element={<Error />} />

        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
