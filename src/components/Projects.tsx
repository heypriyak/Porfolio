import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../types';

const projects: Project[] = [
  {
    title: 'EduNexus',
    period: 'Jul 2024',
    description: 'Full-Stack EdTech Platform with secure authentication, course management, and payment integration.',
    technologies: ['React.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/heypriyak/Edu_Nexus',
    liveUrl: 'https://edunexus-eight.vercel.app',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70674e90?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Constructed a full-stack EdTech platform supporting secure authentication, course management, and payment integration for 2 user roles.',
      'Implemented role-based access for students and instructors, controlling access to 20+ course modules.',
      'Enhanced backend APIs using indexing and query optimization, reducing response time by 25% across 50+ requests/minute.',
      'Designed responsive UI with Tailwind CSS, improving usability across desktop and mobile screens.'
    ]
  },
  {
    title: 'FoodFlyers',
    period: 'Sep 2024',
    description: 'Online food delivery platform with real-time order tracking and payment gateway integration.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/heypriyak/-FoodFlyersProject',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Built and maintained a responsive food delivery platform supporting real-time order tracking for 100+ test orders.',
      'Integrated payment gateway and streamlined checkout flow, improving completion rate by 20%.',
      'Improved UI responsiveness, ensuring seamless cross-device experience across mobile and desktop.'
    ]
  },
  {
    title: 'AI-EDA Chatbot',
    period: 'Nov 2025',
    description: 'AI-powered chatbot that automates exploratory data analysis and AutoML from natural language prompts.',
    technologies: ['Python', 'Streamlit', 'Gemini API', 'Scikit-learn', 'Pandas'],
    githubUrl: 'https://github.com/heypriyak/AI-EDA-Chatbot',
    image: 'https://images.unsplash.com/photo-1451188214936-ec16af5ca155?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Guides users through dataset ingestion and produces narrative-ready EDA summaries with visuals.',
      'AutoML pipeline evaluates 8+ models and reaches 77.4% classification accuracy with Random Forest.'
    ]
  },
  {
    title: 'Spam-Ham Classifier',
    period: 'May 2025',
    description: 'Email classification system tuned for high precision using classic NLP and model selection.',
    technologies: ['Python', 'Scikit-learn', 'NLP', 'TF-IDF'],
    githubUrl: 'https://github.com/heypriyak/Spam-Ham-Precition-Model',
    image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      '97% accuracy on 10k+ labeled emails with multinomial Naive Bayes over TF-IDF features.',
      'GridSearchCV tuning reduces false positives by 22% and hardens the preprocessing pipeline.'
    ]
  },
  {
    title: 'Interactive Analytics Dashboard',
    period: 'July 2025',
    description: 'Real-time analytics dashboard with immersive data storytelling and live API feeds.',
    technologies: ['React.js', 'Chart.js', 'Node.js', 'REST APIs'],
    githubUrl: 'https://github.com/heypriyak/Dashboard',
    liveUrl: 'https://dashboard-gamma-inky-75.vercel.app',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      '15+ interactive Chart.js visuals with user-controlled filters and light/dark theme toggling.',
      'Backend synchronization cuts data load time by 30% while lifting engagement by 40%.'
    ]
  },
  {
    title: 'Quiz Application',
    period: 'Dec 2025',
    description: 'Interactive quiz platform that fetches 15 questions from Open Trivia Database API with real-time timer and progress tracking.',
    technologies: ['Next.js', 'TypeScript', 'Trivia API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/heypriyak/Quiz-Application',
    liveUrl: 'https://quiz-application-pearl-mu.vercel.app',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70674e90?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Integrated Open Trivia Database API to dynamically fetch 15 questions with varied difficulty levels.',
      'Built 30-minute countdown timer with auto-submission on expiry, reducing user confusion by 35%.',
      'Implemented free question navigation with progress tracking and detailed results page comparing user vs correct answers.'
    ]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4 text-center gradient-text"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center text-lg max-w-2xl mx-auto mb-12"
        >
          A selection of my best work showcasing full-stack development, AI/ML, and data engineering
        </motion.p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.2)' }}
              className="card-glow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  {project.period && (
                    <span className="text-sm text-purple-300 ml-3 whitespace-nowrap px-3 py-1 bg-purple-500/20 rounded-full border border-purple-500/30">
                      {project.period}
                    </span>
                  )}
                </div>
                <p className="text-gray-300 mb-4 font-medium">
                  {project.description}
                </p>
                {project.highlights && (
                  <ul className="space-y-2 mb-4 text-gray-300 text-sm">
                    {project.highlights.map((point) => (
                      <li key={point} className="flex">
                        <span className="text-pink-500 mr-2 font-semibold">→</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="skill-badge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4 border-t border-purple-500/20">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-300 hover:text-pink-400 transition-all duration-300 hover:translate-x-1"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-300 hover:text-pink-400 transition-all duration-300 hover:translate-x-1"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}