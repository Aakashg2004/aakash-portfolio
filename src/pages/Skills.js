import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "Python",
    "Java (Basics)",
    "React",
    "Tailwind CSS",
    "Power BI",
    "Excel"
  ];

  return (
    <motion.section
      className="px-6 py-20 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center text-indigo-400 mb-6">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-white/90 text-center text-lg">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white/10 p-4 rounded-md shadow"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
