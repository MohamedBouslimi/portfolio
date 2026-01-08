import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiAcademicCap } from 'react-icons/hi'

const education = [
  {
    degree: '3rd Year Software Engineering',
    institution: 'ITEAM',
    date: 'Currently Studying',
    description: 'Pursuing advanced studies in software engineering with focus on modern development practices and system design.',
    current: true,
  },
  {
    degree: "Bachelor's in Computer Science",
    institution: 'Institut Supérieur d\'Informatique du Kef',
    date: '2020 – 2023',
    description: 'Comprehensive foundation in computer science fundamentals, algorithms, data structures, and software development.',
    current: false,
  },
  {
    degree: 'Baccalaureate in Technical Sciences',
    institution: 'Lycée Ibn Abi Dhiaf',
    date: '2020',
    description: 'High school diploma with specialization in technical sciences.',
    current: false,
  },
]

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="education" className="section-padding">
      <div className="container-main" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="section-label mb-4">Education</span>
          <h2 className="section-title">Academic Background</h2>
        </motion.div>

        {/* Education Cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className={`relative p-6 rounded-xl border transition-colors ${
                edu.current 
                  ? 'bg-blue-500/5 border-blue-500/30' 
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
              }`}
            >
              {edu.current && (
                <span className="absolute -top-3 right-6 px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                  Current
                </span>
              )}

              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${
                  edu.current ? 'bg-blue-500/20' : 'bg-slate-800'
                }`}>
                  <HiAcademicCap className={`text-2xl ${
                    edu.current ? 'text-blue-400' : 'text-slate-500'
                  }`} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                      <p className="text-blue-400">{edu.institution}</p>
                    </div>
                    <span className="text-slate-500 font-mono text-sm">{edu.date}</span>
                  </div>
                  <p className="text-slate-400 text-sm">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto mt-12"
        >
          <h3 className="text-center text-lg font-semibold text-white mb-6">Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { lang: 'Arabic', level: 'Native' },
              { lang: 'French', level: 'B1' },
              { lang: 'English', level: 'B2' },
            ].map((item) => (
              <div
                key={item.lang}
                className="px-6 py-3 bg-slate-900/50 border border-slate-800 rounded-xl"
              >
                <span className="text-white font-medium">{item.lang}</span>
                <span className="text-slate-500 ml-2">— {item.level}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
