import { motion } from 'framer-motion';
import { Award, Zap, Target, TrendingUp } from 'lucide-react';

export function Achievements() {
  const achievements = [
    {
      icon: Award,
      title: 'Full-Stack Expertise',
      description: 'Built 5+ production-grade applications spanning frontend, backend, databases, and DevOps',
      color: 'from-blue-600/20 to-cyan-600/20',
      emoji: '🏆'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Achieved 25% API response time reduction and 30% data load acceleration through intelligent indexing',
      color: 'from-green-600/20 to-emerald-600/20',
      emoji: '📈'
    },
    {
      icon: Zap,
      title: 'AI/ML Excellence',
      description: '97% email classifier accuracy, 77.4% multi-class ML model with AutoML pipeline',
      color: 'from-purple-600/20 to-pink-600/20',
      emoji: '⚡'
    },
    {
      icon: Target,
      title: 'Impact Driven',
      description: 'Reduced deployment errors by 30%, improved user engagement by 40%, 20%+ conversion rate lift',
      color: 'from-orange-600/20 to-red-600/20',
      emoji: '🎯'
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
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">
            Why Choose Me?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proven capability to deliver measurable results and ship high-quality code at scale
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.2)' }}
                className={`card-glow p-6 bg-gradient-to-br ${achievement.color} border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group`}
              >
                <div className="text-4xl mb-3">{achievement.emoji}</div>
                <Icon className="w-8 h-8 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Divider */}
        <div className="my-16 max-w-2xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        </div>

        {/* Tech Stack Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Quick Tech Stack</h3>
          <p className="text-gray-400 mb-6">
            Proficient in modern development paradigms with expertise across the entire software development lifecycle
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Node.js', 'Python', 'Java', 'ML/AI', 'AWS', 'Docker', 'SQL'].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-200 rounded-full text-sm font-semibold hover:border-purple-500/60 transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
