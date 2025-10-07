'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Founder, TechStart Inc.',
      project: 'E-commerce Platform',
      content: 'Voxel transformed our vision into a stunning, fully-functional e-commerce platform. The attention to detail and performance optimization exceeded our expectations. Our conversion rates increased by 40% after launch.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO, DataFlow Solutions',
      project: 'Analytics Dashboard',
      content: 'Working with Voxel was a game-changer for our team. He delivered a complex analytics dashboard ahead of schedule, with clean code and excellent documentation. His communication throughout the project was outstanding.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emily Watson',
      role: 'Marketing Director, GrowthCo',
      project: 'Landing Page Campaign',
      content: 'Voxel built us a conversion-optimized landing page that generated 3x more leads than our previous site. His understanding of user experience and technical implementation is remarkable. Highly recommended!',
      rating: 5,
      avatar: 'EW'
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what clients have to say about working with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-dark-800/50 rounded-2xl p-6 hover:bg-dark-800/70 transition-all duration-300 relative"
            >
              <Quote className="h-8 w-8 text-primary-400 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-xs text-primary-400">{testimonial.project}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="bg-dark-800/30 rounded-xl p-6">
            <div className="text-3xl font-bold text-primary-400 mb-2">50+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="bg-dark-800/30 rounded-xl p-6">
            <div className="text-3xl font-bold text-accent-400 mb-2">100%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div className="bg-dark-800/30 rounded-xl p-6">
            <div className="text-3xl font-bold text-primary-400 mb-2">3+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="bg-dark-800/30 rounded-xl p-6">
            <div className="text-3xl font-bold text-accent-400 mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
