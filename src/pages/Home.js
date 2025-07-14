import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animation from "../assets/tech-lottie.json";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col items-center text-center py-10 px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Lottie animationData={animation} className="w-72 h-72" loop />
      <h1 className="text-3xl font-bold mt-4">Aakash Gurunathan</h1>
      <p className="mt-2 text-lg text-white/80">AI Enthusiast | Web Developer | Data Analyst</p>
      <div className="flex gap-6 mt-4">
        <a href="https://www.linkedin.com/in/aakash-gurunathan-80251825b" target="_blank" rel="noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/account" target="_blank" rel="noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="/Black_and_White_Clean_Professional_A4_Resume.pdf" download>
          <FaDownload size={24} />
        </a>
      </div>
    </motion.div>
  );
}
