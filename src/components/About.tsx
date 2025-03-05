import { motion } from 'framer-motion';
import profilePic from './image.png';

export function About() {
  const skills = [
    'Python', 'React', 'Node.js', 'MongoDB', 'Flask',
    'AI/ML', 'NLP', 'Deep Learning'
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
            <img
              src={profilePic}
              alt="Priya Kumari"
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              About Me
            </h2>
            <p className="text-gray-300 mb-6">
              Hi! I'm Priya Kumari, a Python Developer, AI & ML Enthusiast, and MERN Stack Developer passionate about building innovative software solutions. Currently, I am pursuing a B.Tech in Computer Science & Engineering at IIIT Manipur.
            </p>
            <p className="text-gray-300 mb-6">
              With expertise in Python, Machine Learning, NLP, and Full-Stack Web Development, I have worked on various projects, including ShopSmart (an e-commerce platform) and AI-driven text analysis tools. I have also gained hands-on experience through internships in AI, software development, and web technologies.
            </p>
            <p className="text-gray-300 mb-6">
              I love solving real-world problems with data-driven insights, scalable applications, and AI-powered automation. My goal is to contribute to cutting-edge projects that push the boundaries of technology.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-white">
              Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-purple-900/50 text-purple-200 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}