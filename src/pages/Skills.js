import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaJava, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiTensorflow, SiOpenai } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact className="text-cyan-400 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  { name: "Python", icon: <FaPython className="text-yellow-300 text-4xl" /> },
  { name: "Java", icon: <FaJava className="text-orange-500 text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-4xl" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400 text-4xl" /> },
  { name: "OpenAI API", icon: <SiOpenai className="text-white text-4xl" /> },
  { name: "Databases", icon: <FaDatabase className="text-blue-300 text-4xl" /> },
];

export default function Skills() {
  return (
    <motion.section
      className="px-6 py-20 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center text-indigo-400 mb-10">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="bg-white/10 border border-white/10 rounded-lg p-6 text-center shadow-glow backdrop-blur-md hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <div className="mb-3 flex justify-center">{skill.icon}</div>
            <p className="text-white text-sm font-mono tracking-wide">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
