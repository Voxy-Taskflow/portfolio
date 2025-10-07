'use client'

import { motion } from 'framer-motion'
import { 
  React, 
  Node, 
  Database, 
  GitBranch, 
  Cloud, 
  Shield,
  Smartphone,
  Monitor,
  Server
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Monitor,
      color: 'text-blue-400',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 98 }
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'text-green-400',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'REST APIs', level: 92 },
        { name: 'GraphQL', level: 80 },
        { name: 'Microservices', level: 85 }
      ]
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      color: 'text-purple-400',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Firebase', level: 88 },
        { name: 'AWS', level: 80 },
        { name: 'Vercel', level: 92 },
        { name: 'Docker', level: 75 }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: GitBranch,
      color: 'text-orange-400',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'CI/CD', level: 85 },
        { name: 'Testing', level: 88 },
        { name: 'Agile', level: 90 },
        { name: 'Figma', level: 75 }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications from concept to deployment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-dark-800/50 rounded-2xl p-6 hover:bg-dark-800/70 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <category.icon className={`h-8 w-8 ${category.color} mr-3`} />
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-white">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Responsive Design', 'API Integration', 'Authentication', 'Payment Systems',
              'SEO Optimization', 'Performance Tuning', 'Code Review', 'Project Management',
              'Client Communication', 'Problem Solving', 'Team Collaboration', 'Continuous Learning'
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-dark-700/50 text-gray-300 rounded-full hover:bg-primary-500/20 hover:text-primary-400 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
