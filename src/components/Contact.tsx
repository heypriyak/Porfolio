import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Code, BookOpen } from 'lucide-react';

export function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:sanjupriya004@gmail.com',
      color: 'hover:text-pink-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      href: 'tel:+917005222081',
      color: 'hover:text-blue-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/priya-kumari-798b50282',
      color: 'hover:text-blue-500',
      target: true
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/heypriyak',
      color: 'hover:text-gray-300',
      target: true
    },
    {
      icon: Code,
      label: 'LeetCode',
      href: 'https://leetcode.com/u/priyachaurasia04',
      color: 'hover:text-yellow-400',
      target: true
    },
    {
      icon: BookOpen,
      label: 'GeeksForGeeks',
      href: 'https://www.geeksforgeeks.org/user/sanjupriya004',
      color: 'hover:text-green-400',
      target: true
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black via-purple-900/10 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Get in Touch
          </h2>
          <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
            Let's connect and build something amazing together. Feel free to reach out through any of these channels.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.target ? '_blank' : undefined}
                  rel={contact.target ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`contact-link group`}
                >
                  <div className="relative p-4 rounded-lg border border-purple-500/20 bg-purple-900/10 hover:bg-purple-900/30 transition-all duration-300 group-hover:border-purple-500/50">
                    <Icon className={`w-6 h-6 mb-2 mx-auto transition-colors duration-300 ${contact.color}`} />
                    <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">{contact.label}</span>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-900/20 to-pink-900/20 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold gradient-text mb-3">Let's Create Together</h3>
            <p className="text-gray-300 mb-6">
              Whether you're interested in collaborating on a project, discussing ideas, or just want to connect, I'd love to hear from you.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:sanjupriya004@gmail.com"
              className="btn-primary inline-flex items-center"
            >
              Send me an Email
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}