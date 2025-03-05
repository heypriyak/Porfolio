import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Code, BookOpen } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="mailto:sanjupriya004@gmail.com"
              className="contact-link"
            >
              <Mail className="w-6 h-6 mb-2" />
              <span>Email</span>
            </a>
            
            <a
              href="tel:+917005222081"
              className="contact-link"
            >
              <Phone className="w-6 h-6 mb-2" />
              <span>Phone</span>
            </a>
            
            <a
              href="https://linkedin.com/in/priya-kumari-798b50282"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Linkedin className="w-6 h-6 mb-2" />
              <span>LinkedIn</span>
            </a>
            
            <a
              href="https://github.com/heypriyak"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Github className="w-6 h-6 mb-2" />
              <span>GitHub</span>
            </a>

            <a
              href="https://leetcode.com/u/priyachaurasia04"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Code className="w-6 h-6 mb-2" />
              <span>LeetCode</span>
            </a>

            <a
              href="https://www.geeksforgeeks.org/user/sanjupriya004"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <BookOpen className="w-6 h-6 mb-2" />
              <span>GeeksForGeeks</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}