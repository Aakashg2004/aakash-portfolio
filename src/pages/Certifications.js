import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaDownload } from "react-icons/fa";

export default function Certifications() {
  const [activeTab, setActiveTab] = useState("courses");

  const courses = [
    {
      name: "Foundation of IoT, Cloud & Edge ML - NPTEL",
      file: "foundation_iot_ml_nptel.pdf",
      thumbnail: "foundation_iot_ml_nptel.png"
    },
    {
      name: "Data Analyst Internship - Novitech, Coimbatore",
      file: "novitech_internship.pdf",
      thumbnail: "novitech_internship.png"
    }
  ];

  const internships = [
    {
      name: "YBI Foundation Certification",
      file: "ybi_foundation.pdf",
      thumbnail: "ybi_foundation.png"
    }
  ];

  const tabStyle = (tab) =>
    `px-4 py-2 rounded-full font-semibold backdrop-blur-lg border ${
      activeTab === tab
        ? "bg-blue-500 text-white shadow-lg"
        : "bg-white/10 text-white hover:bg-white/20 border-white/10"
    } transition-all duration-300`;

  const activeList = activeTab === "courses" ? courses : internships;

  return (
    <motion.div
      className="max-w-4xl mx-auto px-4 py-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-white drop-shadow">
        🎓 Certifications & Internships
      </h2>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <button className={tabStyle("courses")} onClick={() => setActiveTab("courses")}>
          Courses
        </button>
        <button className={tabStyle("internships")} onClick={() => setActiveTab("internships")}>
          Internships
        </button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 mt-6">
        {activeList.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 border border-white/10 p-5 rounded-2xl shadow-xl backdrop-blur-md transition-all duration-300"
          >
            <motion.img
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              src={`/certificates/${cert.thumbnail}`}
              alt={cert.name}
              className="w-full h-48 object-cover rounded mb-4 border border-white/10"
            />
            <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
            <div className="flex items-center gap-4">
              <a
                href={`/certificates/${cert.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
              >
                <FaFilePdf /> View PDF
              </a>
              <a
                href={`/certificates/${cert.file}`}
                download
                className="flex items-center gap-2 text-green-400 hover:text-green-300 transition"
              >
                <FaDownload /> Download
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}