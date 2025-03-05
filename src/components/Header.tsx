import { Github, Linkedin, Mail } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-gray-900 dark:text-white">
          PK
        </a>
        
        <div className="flex items-center space-x-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#contact" className="nav-link">Contact</a>
          
          <div className="flex items-center space-x-4">
            <a href="https://github.com/heypriyak" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/priya-kumari-798b50282" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:sanjupriya004@gmail.com" className="social-icon">
              <Mail className="w-5 h-5" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}