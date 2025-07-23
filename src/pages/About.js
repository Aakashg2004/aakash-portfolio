import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="px-6 py-20 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center text-indigo-400 mb-6">
        About Me
      </h2>
      <p className="text-white/80 text-lg leading-relaxed text-center">
        I'm a passionate B.Tech student specializing in Artificial Intelligence & Data Science with a CGPA of 8.2/10. I love building intelligent systems that solve real-world problems in meaningful ways. My journey is driven by curiosity, hands-on exploration, and the belief that technology can drive change — from sustainable flight routing to AI-powered audio recognition.
        <br /><br />
        Outside the classroom, I actively build projects and explore tools like Python, Power BI, React, and Tailwind. I'm continuously learning, evolving, and striving to bring creativity, logic, and a user-focused mindset to every project I work on.
      </p>
    </motion.section>
  );
}