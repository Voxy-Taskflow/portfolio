'use client'

import { motion } from 'framer-motion'
import { 
  Monitor, 
  Smartphone, 
  Database, 
  Zap, 
  Code2, 
  Palette,
  Globe,
  ShoppingCart
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Custom Web Applications',
      description: 'Full-stack web applications built with modern technologies like React, Node.js, and MongoDB.',
      features: [
        'Responsive design for all devices',
        'User authentication & authorization',
        'Real-time features & notifications',
        'API development & integration'
      ],
      price: 'Starting at $2,500',
      popular: false
    },
    {
      icon: Globe,
      title: 'Landing Page Development',
      description: 'High-converting landing pages designed to generate leads and drive business growth.',
      features: [
        'Conversion-optimized design',
        'SEO-friendly structure',
        'Fast loading & mobile-first',
        'Analytics & tracking setup'
      ],
      price: 'Starting at $800',
      popular: true
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Complete online stores with payment processing, inventory management, and admin dashboards.',
      features: [
        'Secure payment integration',
        'Product catalog management',
        'Order tracking system',
        'Admin dashboard'
      ],
      price: 'Starting at $3,500',
      popular: false
    },
    {
      icon: Database,
      title: 'API Development & Integration',
      description: 'Custom APIs and third-party integrations to connect your systems and automate workflows.',
      features: [
        'RESTful API design',
        'Database optimization',
        'Third-party integrations',
        'Documentation & testing'
      ],
      price: 'Starting at $1,200',
      popular: false
    },
    {
      icon: Palette,
      title: 'UI/UX Design & Development',
      description: 'Beautiful, user-friendly interfaces that enhance user experience and drive engagement.',
      features: [
        'User research & wireframing',
        'Interactive prototypes',
        'Design system creation',
        'Usability testing'
      ],
      price: 'Starting at $1,500',
      popular: false
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed up your existing website and improve user experience with performance optimization.',
      features: [
        'Page speed analysis',
        'Code optimization',
        'Image & asset optimization',
        'CDN setup & configuration'
      ],
      price: 'Starting at $600',
      popular: false
    }
  ]

  return (
    <section id="services" className="section-padding bg-dark-800/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive web development services tailored to your business needs and goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-dark-800/50 rounded-2xl p-6 hover:bg-dark-800/70 transition-all duration-300 ${
                service.popular ? 'ring-2 ring-primary-500' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <service.icon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="text-lg font-semibold text-accent-400">{service.price}</div>
              </div>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                    <span className="text-primary-400 mr-2 mt-1">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  service.popular
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:from-primary-600 hover:to-accent-600'
                    : 'border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">My Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your goals, target audience, and technical requirements.'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Creating a detailed project roadmap with timelines and milestones.'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Building your solution with regular updates and feedback loops.'
              },
              {
                step: '04',
                title: 'Launch',
                description: 'Deploying your project and providing ongoing support and maintenance.'
              }
            ].map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
