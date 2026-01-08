import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  SiSpring, SiAngular, SiVuedotjs, SiJavascript, 
  SiHtml5, SiCss3, SiNodedotjs, SiGit, SiMysql, SiPostgresql
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const skills = [
  { name: 'Java', icon: FaJava, category: 'Backend' },
  { name: 'Spring Boot', icon: SiSpring, category: 'Backend' },
  { name: 'Node.js', icon: SiNodedotjs, category: 'Backend' },
  { name: 'Angular', icon: SiAngular, category: 'Frontend' },
  { name: 'Vue.js', icon: SiVuedotjs, category: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, category: 'Frontend' },
  { name: 'HTML5', icon: SiHtml5, category: 'Frontend' },
  { name: 'CSS3', icon: SiCss3, category: 'Frontend' },
  { name: 'MySQL', icon: SiMysql, category: 'Database' },
  { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database' },
  { name: 'Git', icon: SiGit, category: 'Tools' },
]

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="skills" className="section-padding bg-slate-900/30">
      <div className="container-main" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="section-label mb-4">My Skills</span>
          <h2 className="section-title">Technologies I Work With</h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-6 bg-slate-900/80 border border-slate-800 rounded-xl hover:border-blue-500/50 transition-all duration-300 text-center"
            >
              <skill.icon className="text-3xl text-slate-400 group-hover:text-blue-400 transition-colors mx-auto mb-3" />
              <p className="text-sm text-slate-300 font-medium">{skill.name}</p>
              <p className="text-xs text-slate-600 mt-1">{skill.category}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Categories Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { title: 'Frontend', desc: 'Angular, Vue.js, JavaScript, HTML/CSS', color: 'blue' },
            { title: 'Backend', desc: 'Java, Spring Boot, Node.js, REST APIs', color: 'green' },
            { title: 'Database & Tools', desc: 'MySQL, PostgreSQL, Git', color: 'purple' },
          ].map((cat) => (
            <div key={cat.title} className="p-6 bg-slate-900/50 rounded-xl border border-slate-800">
              <h3 className="text-lg font-semibold text-white mb-2">{cat.title}</h3>
              <p className="text-slate-500 text-sm">{cat.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
