import { motion } from "framer-motion";

export default function Skills() {
  const skills = ["Java", "Python", "HTML/CSS", "MS Power BI", "Excel"];
  return (
    <motion.div
      className="max-w-3xl mx-auto p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="grid grid-cols-2 gap-4">
        {skills.map((skill) => (
          <li key={skill} className="bg-white/10 p-3 rounded">{skill}</li>
        ))}
      </ul>
    </motion.div>
  );
}
