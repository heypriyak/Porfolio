import { motion } from 'framer-motion';
import type { Experience } from '../types';

const experiences: Experience[] = [
  {
    title: 'Java Developer Intern',
    company: 'Vijay Software Solutions',
    duration: 'Jan 2025 – Dec 2025',
    location: 'Remote',
    highlights: [
      'Engineered and maintained 5+ Java applications, delivering 12+ features and resolving 20+ critical bugs.',
      'Collaborated with an 8-member cross-functional team to ensure on-time releases, reducing deployment errors by 30%.',
      'Authored technical documentation and user guides, improving onboarding efficiency for 3+ developers by 40%.',
      'Implemented caching strategies and database optimization, improving system response time by 25%.'
    ]
  },
  {
    title: 'React.js Developer Intern',
    company: 'Celebal Technologies',
    duration: 'Mar 2025 – Aug 2025',
    location: 'Remote',
    highlights: [
      'Built 8+ responsive React applications with Redux and REST APIs, serving 1,000+ monthly active users.',
      'Optimized data fetching with advanced caching and lazy loading, cutting API response time by 35%.',
      'Implemented WebSocket-powered real-time features supporting 500+ concurrent users with sub-second latency.',
      'Improved bundle size by 18% through code splitting and tree-shaking, boosting lighthouse score to 92.'
    ]
  },
  {
    title: 'AI/Data Analytics Intern',
    company: 'Edunet Foundation AICTE',
    duration: 'Jan 2025 – Mar 2025',
    location: 'Remote',
    highlights: [
      'Designed a crop recommendation system using Random Forest achieving 89% accuracy with improved yield prediction by 25%.',
      'Streamlined data preprocessing with parallel computing, reducing processing time by 20% for 50k+ records.',
      'Built data pipeline handling ETL workflows, ensuring data quality and consistency across datasets.'
    ]
  }
];

const education = {
  school: 'Indian Institute of Information Technology, Manipur',
  degree: 'Bachelor of Technology in Computer Science and Engineering',
  duration: 'Nov 2022 – Jun 2026',
  details: 'CGPA: 7.6'
};

const leadership = {
  title: 'Co-Lead of Cyber Security',
  org: 'Indian Institute of Information Technology (IIIT) Manipur',
  duration: '2023 – 2024',
  highlights: [
    'Organized cybersecurity awareness sessions and hands-on workshops for students.',
    'Led Capture The Flag (CTF) challenges and competitions with cross-functional coordination.'
  ]
};

const certifications = [
  'Solutions Architecture Job Simulation – Goldman Sachs (2024)',
  'Consulting Development Job Simulation – Accenture UK (2024)'
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          Experience, Education & Leadership
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ x: 10, boxShadow: '0 10px 30px rgba(168, 85, 247, 0.2)' }}
              className="card-glow p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-pink-400 font-semibold">{exp.company}</p>
                </div>
                <div className="text-sm text-gray-400 text-right">
                  <p className="font-mono">{exp.duration}</p>
                  {exp.location && <p className="text-gray-500">{exp.location}</p>}
                </div>
              </div>
              {exp.highlights && (
                <ul className="space-y-2 text-gray-300">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex">
                      <span className="text-pink-500 mr-3 font-bold">▸</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(168, 85, 247, 0.2)' }}
            className="card-glow p-6"
          >
            <h3 className="text-2xl font-bold gradient-text mb-3">📚 Education</h3>
            <p className="text-pink-400 font-semibold mb-1">{education.school}</p>
            <p className="text-gray-300 text-lg font-medium mb-3">{education.degree}</p>
            <div className="space-y-2 text-gray-400">
              <p className="text-sm">{education.duration}</p>
              <p className="text-sm font-mono bg-purple-900/20 px-3 py-1 rounded inline-block">{education.details}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(236, 72, 153, 0.2)' }}
            className="card-glow p-6"
          >
            <h3 className="text-2xl font-bold gradient-text mb-3">🎯 Leadership</h3>
            <p className="text-pink-400 font-semibold mb-1">{leadership.title}</p>
            <p className="text-gray-400 text-sm mb-3">{leadership.duration} • {leadership.org}</p>
            <ul className="space-y-2 text-gray-300">
              {leadership.highlights.map((item) => (
                <li key={item} className="flex">
                  <span className="text-pink-500 mr-2">✓</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-10 card-glow p-6"
        >
          <h3 className="text-2xl font-bold gradient-text mb-4">🏆 Certifications</h3>
          <ul className="grid md:grid-cols-2 gap-3 text-gray-300">
            {certifications.map((cert) => (
              <li key={cert} className="flex items-start p-3 bg-purple-900/20 border border-purple-500/20 rounded-lg hover:border-purple-500/40 transition-all">
                <span className="text-pink-500 mr-3 font-bold">→</span>
                <span className="text-sm">{cert}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}