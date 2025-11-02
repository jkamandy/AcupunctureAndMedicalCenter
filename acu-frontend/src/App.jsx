import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import FAQ from './pages/FAQ/FAQ';
import OurServices from './pages/OurServices/OurServices';
import Testimonials from './pages/Testimonials/Testimonials';
import ContactPage from './pages/Contact/Contact';
import MeetTheTeam from './pages/MeetTheTeam/MeetTheTeam';
import Error from './pages/Error/Error';
import Layout from './components/Layout/Layout'; // ✅ import Layout

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/About" element={<MeetTheTeam />} />
          <Route path="/OurServices" element={<OurServices />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
