import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import techAnimation from "../assets/tech-lottie.json";
import { Link } from "react-router-dom";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const statusText = "System Status: ONLINE";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < statusText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + statusText.charAt(index));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <motion.div
      className="bg-futuristic flex flex-col justify-center items-center text-center px-6 py-20 sm:py-32 w-full min-h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <div className="mb-6 animate-float z-10">
        <Player autoplay loop src={techAnimation} style={{ height: "220px", width: "220px" }} />
      </div>

      <h1 className="text-4xl sm:text-5xl font-mono font-extrabold text-white drop-shadow mb-4 z-10">
        {typedText}
        <span className="cursor-blink">|</span>
      </h1>

      <p className="text-lg text-white/80 max-w-2xl mb-10 font-mono z-10">
        Welcome to my futuristic developer interface. Engage with AI projects, data-driven insights, and a design inspired by modern operating systems.
      </p>

      <div className="flex gap-6 mb-8 z-10">
        <a
          href="https://github.com/Aakashg2004"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-neon-blue text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/aakash-gurunathan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-neon-blue text-2xl"
        >
          <FaLinkedin />
        </a>
      </div>

      <a
        href="/resume.pdf"
        download
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-lg shadow-md transition duration-300 mb-10 z-10"
      >
        <FaDownload className="text-lg" />
        Download Resume
      </a>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 p-6 rounded-2xl bg-white/5 shadow-xl backdrop-blur-md z-10">
        <Link to="/about" className="nav-btn">• OPEN ABOUT</Link>
        <Link to="/skills" className="nav-btn">• OPEN SKILLS</Link>
        <Link to="/projects" className="nav-btn">• OPEN PROJECTS</Link>
        <Link to="/certifications" className="nav-btn">• OPEN CERTIFICATIONS</Link>
      </div>
    </motion.div>
  );
}
