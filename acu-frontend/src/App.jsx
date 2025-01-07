// import './index.css';
// import Home from './components/Home/Home';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home/Home';
import FAQ from './pages/FAQ/FAQ';
import About from './pages/About/About';
import OurServices from './pages/OurServices/OurServices';
import Testimonals from './components/Testimonals/Testimonials';
import Error from './pages/Error/Error';
// import ScrollToSection from './functions/ScrollToSection/ScrollToSection';
import ContactPage from './pages/Contact/Contact';
import MeetTheTeam from './pages/MeetTheTeam/MeetTheTeam';

// import ScrollRestoration from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* <ScrollRestoration /> */}
      {/* <ScrollToSection /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/About" element={<MeetTheTeam />} />
        <Route path="/OurServices" element={<OurServices />} />
        <Route path="/Contact" element={<ContactPage />} />

        <Route path="*" element={<Error />} />

        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
