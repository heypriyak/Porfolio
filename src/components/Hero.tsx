import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Priya Kumari
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Python Developer | AI & ML Enthusiast
        </p>
        <a
          href="/Priya_resume..pdf"
          download
          className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}