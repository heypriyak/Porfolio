import { Github, Linkedin, Mail } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 via-black/50 to-black/0 backdrop-blur-md border-b border-purple-500/10"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          whileHover={{ scale: 1.1 }}
          href="#"
          className="text-2xl font-bold gradient-text"
        >
          PK
        </motion.a>
        
        <div className="flex items-center space-x-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#contact" className="nav-link">Contact</a>
          
          <div className="flex items-center space-x-4 pl-4 border-l border-purple-500/20">
            <motion.a
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/heypriyak"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/priya-kumari-798b50282"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:sanjupriya004@gmail.com"
              className="social-icon"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </motion.header>
  );
}