import Navbar from './Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Rentals from './pages/Rentals';
import PowerStation from './pages/PowerStation';
import CamperGrill from './pages/CamperGrill';
import MTNOps from './pages/MTNOps';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (

    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Rentals" element={<Rentals />} />
          <Route path="/PowerStations" element={<PowerStation />} />
          <Route path="/CamperGrill" element={<CamperGrill />} />
          <Route path="/MTNOps" element={<MTNOps />} />
          <Route path="/About" element={<About />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>

  );
}

export default App;
