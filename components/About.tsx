'use client'

import { motion } from 'framer-motion'
import { Code2, Zap, Target } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Code2,
      title: 'Full-Stack Expertise',
      description: 'From pixel-perfect UIs to robust backend systems, I handle every aspect of web development.'
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'I build fast, scalable applications that provide exceptional user experiences.'
    },
    {
      icon: Target,
      title: 'Business Solutions',
      description: 'Every project I work on solves real problems and delivers measurable value.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-dark-800/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Voxel</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating digital solutions 
            that make a difference. With expertise spanning the entire development stack, 
            I bring ideas to life through clean code and innovative thinking.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-dark-700/50 hover:bg-dark-700/70 transition-all duration-300"
            >
              <feature.icon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">My Approach</h3>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            I believe in building relationships, not just applications. Every project starts with 
            understanding your goals, challenges, and vision. From there, I craft solutions that 
            are not only technically sound but also aligned with your business objectives. 
            <span className="text-primary-400 font-semibold"> Let's create something amazing together.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
