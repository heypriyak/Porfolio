import { motion } from 'framer-motion';
import profilePic from './image.png';

export function About() {
  const skillGroups = [
    {
      title: 'Languages',
      items: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'SQL']
    },
    {
      title: 'Frameworks & Platforms',
      items: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS', 'GCP']
    },
    {
      title: 'Data & Analytics',
      items: ['Data Analysis', 'SQL', 'Tableau', 'Excel', 'Matplotlib', 'Experiment Design']
    },
    {
      title: 'Product & Collaboration',
      items: ['Agile', 'Scrum', 'Product Roadmapping', 'Market Research', 'A/B Testing', 'Stakeholder Communication']
    },
    {
      title: 'Development Tools',
      items: ['Git', 'CI/CD', 'API Design', 'Docker', 'Postman', 'Jira', 'Confluence']
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-2xl opacity-75 animate-pulse"></div>
              <img
                src={profilePic}
                alt="Priya Kumari"
                className="relative rounded-lg shadow-2xl w-full max-w-md mx-auto border-2 border-purple-500/30"
              />
            </motion.div>
          </div>
          
          <div>
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 gradient-text"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-4 leading-relaxed text-lg"
            >
              Hi! I'm Priya Kumari — a New Delhi-based developer blending AI/ML engineering with full-stack craft. I pursue a B.Tech in CSE at IIIT Manipur (CGPA 7.6).
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-4 leading-relaxed text-lg"
            >
              I have shipped production-grade Java backends, responsive React experiences, and data products that tie together AutoML pipelines, NLP, and real-time dashboards. My internships at Vijay Software Solutions, Celebal Technologies, and Edunet Foundation taught me to ship fast, document well, and optimize for latency and accuracy.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-6 leading-relaxed text-lg"
            >
              I enjoy building tools that turn messy data into clear decisions — whether it is an AI-EDA chatbot, a spam classifier hardened with GridSearchCV, or a dashboard synchronized with live APIs.
            </motion.p>
            
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-4 gradient-text"
            >
              Featured Skills
            </motion.h3>
            <p className="text-gray-400 text-sm mb-4">
              Explore all my skills in the dedicated Skills section below
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {skillGroups.map((group, groupIndex) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + groupIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="card-glow p-4 bg-gradient-to-br from-purple-900/20 to-pink-900/20"
                >
                  <p className="text-pink-300 font-bold mb-3 text-sm">{group.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="skill-badge text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                    {group.items.length > 3 && (
                      <span className="text-xs text-gray-500 self-center">
                        +{group.items.length - 3} more
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#skills"
              className="inline-block mt-6 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
            >
              View All Skills →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}