'use client'

import { motion } from 'framer-motion'
import { Code2, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/voxel', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/voxel', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:voxelperfect47@gmail.com', label: 'Email' }
  ]

  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Code2 className="h-8 w-8 text-primary-400" />
                <span className="text-2xl font-bold text-gradient">Voxel</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Full-stack developer passionate about creating digital solutions that make a difference. 
                Let's build something amazing together.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
              <div className="space-y-2">
                <p className="text-gray-300 text-sm">
                  <Mail className="h-4 w-4 inline mr-2" />
                  voxelperfect47@gmail.com
                </p>
                <p className="text-gray-300 text-sm">
                  Available for freelance projects
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Voxel. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-primary-500 to-accent-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  )
}

export default Footer
