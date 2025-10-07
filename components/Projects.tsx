'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'TaskForge',
      description: 'Team Task Management Platform',
      longDescription: 'A full-stack Trello-style task board where teams can create projects, assign tasks, track progress, and comment in real time.',
      tech: ['React', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'JWT Auth'],
      highlights: [
        'Built dynamic Kanban board with drag-and-drop (React DnD)',
        'Custom user authentication + role-based access',
        'REST API with MongoDB and aggregation pipelines for stats',
        'Deployed on Render + MongoDB Atlas'
      ],
      value: 'Shows ability to build SaaS-style dashboards, manage user roles, and handle backend logic.',
      image: '/api/placeholder/600/400',
      github: 'https://github.com/voxel/taskforge',
      live: 'https://taskforge-demo.vercel.app',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'Modern Personal Portfolio',
      longDescription: 'A responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and modern design.',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
      highlights: [
        'Fully responsive design for all devices',
        'Smooth animations with Framer Motion',
        'SEO optimized with meta tags',
        'Dark theme with gradient accents'
      ],
      value: 'Demonstrates modern frontend development skills and attention to design details.',
      image: '/api/placeholder/600/400',
      github: 'https://github.com/voxel/portfolio',
      live: 'https://voxel-portfolio.vercel.app',
      featured: true
    },
    {
      title: 'Weather App',
      description: 'Real-time Weather Dashboard',
      longDescription: 'A clean weather application that displays current conditions and forecasts with location-based data.',
      tech: ['React', 'JavaScript', 'CSS3', 'OpenWeather API'],
      highlights: [
        'Real-time weather data integration',
        'Location-based weather detection',
        'Responsive design with clean UI',
        '5-day forecast with detailed information'
      ],
      value: 'Shows API integration skills and clean frontend development.',
      image: '/api/placeholder/600/400',
      github: 'https://github.com/voxel/weather-app',
      live: 'https://weather-app-demo.vercel.app',
      featured: false
    },
    {
      title: 'Todo Manager',
      description: 'Simple Task Management App',
      longDescription: 'A clean and intuitive todo application with local storage persistence and category management.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
      highlights: [
        'Add, edit, and delete tasks',
        'Category-based organization',
        'Local storage persistence',
        'Clean, minimal interface'
      ],
      value: 'Perfect example of practical JavaScript skills and user experience focus.',
      image: '/api/placeholder/600/400',
      github: 'https://github.com/voxel/todo-manager',
      live: 'https://todo-manager-demo.vercel.app',
      featured: false
    },
    {
      title: 'Calculator App',
      description: 'Advanced Calculator with History',
      longDescription: 'A feature-rich calculator application with calculation history, memory functions, and keyboard support.',
      tech: ['React', 'JavaScript', 'CSS3'],
      highlights: [
        'Basic and advanced mathematical operations',
        'Calculation history tracking',
        'Memory functions (M+, M-, MR, MC)',
        'Keyboard input support'
      ],
      value: 'Demonstrates solid JavaScript fundamentals and user interface design.',
      image: '/api/placeholder/600/400',
      github: 'https://github.com/voxel/calculator',
      live: 'https://calculator-demo.vercel.app',
      featured: false
    }
  ]

  return (
    <section id="projects" className="section-padding bg-dark-800/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world applications that showcase my full-stack capabilities and problem-solving approach.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="aspect-video bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-dark-700/50 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-400">{project.title}</span>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                  <p className="text-xl text-primary-400 font-semibold">{project.description}</p>
                  <p className="text-gray-300">{project.longDescription}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-dark-700/50 text-primary-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="text-primary-400 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Client Value */}
                  <div className="bg-dark-700/30 rounded-lg p-4">
                    <p className="text-sm text-gray-300">
                      <span className="font-semibold text-accent-400">Client Value:</span> {project.value}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
