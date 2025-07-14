import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import { BsSun, BsMoonStarsFill, BsList, BsX } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <Router>
      <div className={`min-h-screen bg-gradient-to-br from-indigo-900 via-black to-purple-900 text-white ${theme}`}>
        <nav className="bg-black/30 backdrop-blur-md shadow-lg sticky top-0 z-50 px-6 py-4">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold text-white">Aakash Gurunathan</h1>
            <button onClick={() => setOpen(!open)} className="sm:hidden text-white text-2xl">
              {open ? <BsX /> : <BsList />}
            </button>
            <ul className="hidden sm:flex gap-6 text-white text-sm md:text-base">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/certifications">Certifications</Link></li>
            </ul>
            <button onClick={toggleTheme} className="hidden sm:block text-xl text-white">
              {theme === "dark" ? <BsSun /> : <BsMoonStarsFill />}
            </button>
          </div>
          {open && (
            <ul className="sm:hidden flex flex-col text-white mt-4 gap-3 px-4">
              <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
              <li><Link to="/skills" onClick={() => setOpen(false)}>Skills</Link></li>
              <li><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
              <li><Link to="/certifications" onClick={() => setOpen(false)}>Certifications</Link></li>
              <li><button onClick={toggleTheme} className="text-left flex items-center gap-2">
                {theme === "dark" ? <BsSun /> : <BsMoonStarsFill />} Theme
              </button></li>
            </ul>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </div>
    </Router>
  );
}
