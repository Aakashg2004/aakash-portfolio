import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import { BsList, BsX } from "react-icons/bs";
import { useState, useEffect } from "react";
import ParticlesBg from "./components/ParticlesBg";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <ParticlesBg />
      <div className="relative z-10 min-h-screen bg-gradient-to-br from-indigo-900 via-black to-purple-900 text-white">
        <nav className="bg-black/30 backdrop-blur-md shadow-lg sticky top-0 z-50 px-6 py-4">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold text-white">Aakash Gurunathan</h1>
            <button onClick={() => setOpen(!open)} className="sm:hidden text-white text-2xl">
              {open ? <BsX /> : <BsList />}
            </button>
            <ul className="hidden sm:flex gap-6 text-white text-sm md:text-base items-center">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/certifications">Certifications</Link></li>
              <li>
                <a
                  href="/resume.pdf"
                  download
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded shadow text-sm"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
          {open && (
            <ul className="sm:hidden flex flex-col text-white mt-4 gap-3 px-4">
              <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
              <li><Link to="/skills" onClick={() => setOpen(false)}>Skills</Link></li>
              <li><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
              <li><Link to="/certifications" onClick={() => setOpen(false)}>Certifications</Link></li>
              <li>
                <a
                  href="/resume.pdf"
                  download
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded shadow"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          )}
        </nav>

        <AnimatedRoutes />
      </div>
    </Router>
  );
}
