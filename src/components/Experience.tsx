import { motion } from 'framer-motion';
import type { Experience } from '../types';

const experiences: Experience[] = [
  {
    title: 'Governance Analyst',
    company: 'Goldman Sachs Virtual Experience',
    duration: '2023',
    description: 'Participated in a virtual internship program focusing on governance analysis and risk management.'
  },
  {
    title: 'Developer and Technology',
    company: 'Accenture UK Job Simulation on Forage',
    duration: '2024',
    description: 'Completed practical technology consulting tasks, focusing on solution architecture and development best practices.'
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Experience & Certifications
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {exp.title}
              </h3>
              <p className="text-purple-600 dark:text-purple-400 mb-2">
                {exp.company} • {exp.duration}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}