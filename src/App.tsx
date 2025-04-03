import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Car, Hotel, Phone, Stethoscope, Info, LogIn, Search } from 'lucide-react';
import Home from './pages/Home.tsx';
import AutoLocation from './pages/AutoLocation.tsx';
import CallServices from './pages/CallServices.tsx';
import Hotels from './pages/Hotels.tsx';
import Medical from './pages/Medical.tsx';
import About from './pages/About.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import Navbar from './components/Navbar';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        <main className="container mx-auto px-4 pt-20 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auto-location" element={<AutoLocation />} />
            <Route path="/call-services" element={<CallServices />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/medical" element={<Medical />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;