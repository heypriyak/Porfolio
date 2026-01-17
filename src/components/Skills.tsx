import { motion } from 'framer-motion';

export function Skills() {
  const skillCategories = [
    {
      category: '💻 Languages',
      emoji: '💻',
      skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
      color: 'from-blue-900/30 to-cyan-900/30'
    },
    {
      category: '🚀 Frameworks & Libraries',
      emoji: '🚀',
      skills: ['React.js', 'Node.js', 'Express.js', 'Flask', 'Django', 'MongoDB', 'PostgreSQL'],
      color: 'from-green-900/30 to-emerald-900/30'
    },
    {
      category: '🤖 AI & ML',
      emoji: '🤖',
      skills: ['Scikit-learn', 'TensorFlow', 'NLP', 'Machine Learning', 'Deep Learning', 'AutoML', 'Pandas', 'NumPy'],
      color: 'from-purple-900/30 to-pink-900/30'
    },
    {
      category: '⚙️ Tools & Platforms',
      emoji: '⚙️',
      skills: ['Git', 'Docker', 'CI/CD', 'AWS', 'GCP', 'Postman', 'Jira', 'VS Code'],
      color: 'from-orange-900/30 to-red-900/30'
    },
    {
      category: '📊 Data & Analytics',
      emoji: '📊',
      skills: ['Data Analysis', 'SQL', 'Tableau', 'Excel', 'Matplotlib', 'Experiment Design', 'A/B Testing'],
      color: 'from-yellow-900/30 to-amber-900/30'
    },
    {
      category: '🎯 Soft Skills',
      emoji: '🎯',
      skills: ['Agile', 'Scrum', 'Product Roadmapping', 'Stakeholder Communication', 'Team Leadership', 'Problem Solving'],
      color: 'from-indigo-900/30 to-purple-900/30'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on experience and continuous learning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.2)' }}
              className={`card-glow p-6 bg-gradient-to-br ${category.color} border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.emoji}</span>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                    viewport={{ once: true }}
                    className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 border border-purple-500/30 rounded-full text-sm font-medium hover:border-purple-500/60 hover:bg-gradient-to-r hover:from-purple-500/40 hover:to-pink-500/40 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: '5+', label: 'Programming Languages' },
            { number: '7+', label: 'Frameworks' },
            { number: '30+', label: 'Technical Skills' },
            { number: '3', label: 'Full-Stack Projects' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="card-glow p-6 text-center border-purple-500/20"
            >
              <h4 className="text-3xl font-bold gradient-text mb-2">{stat.number}</h4>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
