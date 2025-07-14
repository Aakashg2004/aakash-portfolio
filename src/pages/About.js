import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="max-w-3xl mx-auto p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-white/90 leading-relaxed">
        I’m a passionate and self-driven B.Tech student specializing in Artificial Intelligence & Data Science, with a CGPA of 8.2. My technical journey includes skills in Python, Java, Excel, and hands-on AI projects. I enjoy solving real-world problems through tech and aim to contribute to sustainable AI innovations.
      </p>
    </motion.div>
  );
}
