import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiExternalLink, HiFolder } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'Fitness Tracking Application',
    description: 'Full-stack fitness app to track workouts, nutrition, and progress. Features user authentication, progress charts, and personalized workout plans.',
    tech: ['Spring Boot', 'Angular', 'Java', 'MySQL'],
    github: 'https://github.com/MohamedBouslimi',
    featured: true,
  },
  {
    title: 'Car Rental Management System',
    description: 'Web application for managing car reservations. Includes booking system, fleet management, and customer dashboard with real-time availability.',
    tech: ['Spring Boot', 'Angular', 'PostgreSQL'],
    github: 'https://github.com/MohamedBouslimi',
    featured: true,
  },
  {
    title: 'Marketplace Platform',
    description: 'E-commerce marketplace with product listings, shopping cart, user authentication, and order processing. Built during internship at Cyber Ocean.',
    tech: ['Node.js', 'Vue.js', 'MongoDB'],
    github: 'https://github.com/MohamedBouslimi',
    featured: true,
  },
  {
    title: 'Library Management System',
    description: 'Java application for managing books, users, and loan operations with inventory tracking and due date reminders.',
    tech: ['Java', 'MySQL'],
    github: 'https://github.com/MohamedBouslimi',
    featured: false,
  },
  {
    title: 'Mission Management System',
    description: 'Web application built at ATI to streamline foreign mission management and improve operational efficiency.',
    tech: ['Spring Boot', 'Angular'],
    github: 'https://github.com/MohamedBouslimi',
    featured: false,
  },
]

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="projects" className="section-padding">
      <div className="container-main" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="section-label mb-4">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-20">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'md:text-right' : ''
              }`}
            >
              {/* Project Image Placeholder */}
              <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-slate-800 flex items-center justify-center group overflow-hidden">
                  <div className="text-center p-8">
                    <HiFolder className="text-5xl text-blue-500/50 mx-auto mb-4 group-hover:text-blue-400 transition-colors" />
                    <span className="text-slate-500 group-hover:text-slate-400 transition-colors">{project.title}</span>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <p className="text-blue-400 font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                
                <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 mb-4">
                  <p className="text-slate-400 leading-relaxed">{project.description}</p>
                </div>

                <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-slate-500 font-mono text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={`flex gap-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    <FaGithub size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-center text-xl font-semibold text-white mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.filter(p => !p.featured).map((project) => (
              <div
                key={project.title}
                className="p-6 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors group"
              >
                <div className="flex items-start justify-between mb-4">
                  <HiFolder className="text-3xl text-blue-500" />
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-blue-400 transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-500 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-slate-600 font-mono text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/MohamedBouslimi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <FaGithub />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
