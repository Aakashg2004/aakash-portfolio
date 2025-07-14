import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      className="max-w-3xl mx-auto p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Projects</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Audio Visual Object Detection System</h3>
        <p>Built a real-time object detection system using Python, Librosa, and TensorFlow based on audio input.</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Sustainable Flight Route Optimization</h3>
        <p>Designed an eco-friendly flight routing model using Dijkstra’s & A* algorithms in Python to minimize distance and fuel usage.</p>
      </div>
    </motion.div>
  );
}
