import { motion } from 'framer-motion';
import { Download, ArrowDown } from 'lucide-react';

export function Hero() {
  const floatingElements = [
    { emoji: '💻', delay: 0, position: 'top-20 left-10' },
    { emoji: '🚀', delay: 0.2, position: 'top-32 right-20' },
    { emoji: '⚡', delay: 0.4, position: 'bottom-32 left-1/4' },
    { emoji: '🔧', delay: 0.6, position: 'top-1/3 right-1/4' },
    { emoji: '🤖', delay: 0.8, position: 'bottom-20 right-10' },
    { emoji: '💡', delay: 1, position: 'top-2/3 left-1/3' },
    { emoji: '📊', delay: 1.2, position: 'bottom-1/4 left-1/2' },
    { emoji: '🌐', delay: 1.4, position: 'top-1/4 left-1/2' },
    { emoji: '🎯', delay: 1.6, position: 'bottom-32 right-1/3' },
    { emoji: '<>', delay: 1.8, position: 'top-40 left-1/2' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-900/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Floating developer emojis and symbols */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: element.delay }}
          className={`absolute ${element.position} text-4xl md:text-5xl floating pointer-events-none`}
        >
          {element.emoji}
        </motion.div>
      ))}

      {/* Code snippet backgrounds */}
      <div className="absolute top-1/3 right-5 text-xs text-purple-500/30 font-mono pointer-events-none hidden md:block">
        <div>const buildWorld = ()</div>
        <div>{'{'}</div>
        <div>  return &lt;portfolio/&gt;</div>
        <div>{'}'}</div>
      </div>
      <div className="absolute bottom-1/3 left-5 text-xs text-pink-500/30 font-mono pointer-events-none hidden md:block">
        <div>while (learning)</div>
        <div>{'{'}</div>
        <div>  ship();</div>
        <div>{'}'}</div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6 max-w-5xl mx-auto z-10"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 mb-6">
            🚀 Immediate Joiner | Ready to build cutting-edge solutions
          </span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Priya Kumari</span>
        </h1>
        
        <p className="text-2xl md:text-3xl text-purple-300 mb-3 font-semibold">
          Software Developer Engineer
        </p>
        <p className="text-lg text-gray-300 mb-4 leading-relaxed max-w-2xl mx-auto">
          New Delhi, India · B.Tech CSE @ IIIT Manipur (CGPA 7.6)
        </p>
        
        <p className="text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
          Shipping production-grade systems that blend AI intelligence with user-centric design. Proven track record of building 5+ full-stack projects, optimizing backend performance by 25%+, and achieving 97% ML accuracy on real-world problems. Eager to contribute to transformative tech at scale.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1iUXgwfNIulih8XzHRbClveMAZhwe-Ry1/view"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:sanjupriya004@gmail.com"
            className="btn-secondary inline-flex items-center"
          >
            Schedule a Call
          </motion.a>
        </div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mb-12 text-center"
        >
          <div>
            <p className="text-2xl font-bold gradient-text">5+</p>
            <p className="text-sm text-gray-400">Full-Stack Projects</p>
          </div>
          <div>
            <p className="text-2xl font-bold gradient-text">3</p>
            <p className="text-sm text-gray-400">Internships Completed</p>
          </div>
          <div>
            <p className="text-2xl font-bold gradient-text">97%</p>
            <p className="text-sm text-gray-400">ML Model Accuracy</p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-12"
        >
          <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}