import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiBriefcase } from 'react-icons/hi'

const experiences = [
  {
    title: 'End-of-Studies Internship',
    company: 'Cyber Ocean',
    date: '2023',
    description: 'Developed a full-featured marketplace web application using Node.js and Vue.js. Implemented e-commerce functionality including product management, user authentication, shopping cart, and order processing.',
    tech: ['Node.js', 'Vue.js', 'MongoDB'],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Agence Tunisienne de l\'Internet (ATI)',
    date: '2022',
    description: 'Built a foreign mission management web application to streamline operations. Worked with a team using agile methodologies to deliver efficient solutions.',
    tech: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="experience" className="section-padding bg-slate-900/30">
      <div className="container-main" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="section-label mb-4">Experience</span>
          <h2 className="section-title">Where I've Worked</h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-px bg-slate-800" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-6 h-6 bg-blue-500/20 border-2 border-blue-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
              </div>

              {/* Content */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 ml-4 hover:border-slate-700 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-blue-400">{exp.company}</p>
                  </div>
                  <span className="text-slate-500 font-mono text-sm">{exp.date}</span>
                </div>
                
                <p className="text-slate-400 mb-4 leading-relaxed">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800 text-slate-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
