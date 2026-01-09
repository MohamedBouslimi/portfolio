import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" className="section-padding">
      <div className="container-main" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label mb-4">About Me</span>
            <h2 className="section-title mb-6">
              Software Engineer & Web Developer
            </h2>
            
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Hello! I'm Mohamed, a passionate Full Stack Developer from Tunisia with a 
                strong foundation in both frontend and backend technologies. I enjoy turning 
                complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p>
                With experience from internships at <span className="text-slate-200">Agence 
                Tunisienne de l'Internet (ATI)</span> and <span className="text-slate-200">
                Cyber Ocean</span>, I've developed real-world applications including mission 
                management systems and e-commerce platforms.
              </p>
              <p>
                Currently, I'm a 3rd year Software Engineering student at ITEAM, continuously 
                learning and staying up-to-date with modern development practices.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="text-slate-500 text-sm">Projects Built</div>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                <div className="text-2xl font-bold text-white">2</div>
                <div className="text-slate-500 text-sm">Internships</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Border decoration */}
              <div className="absolute inset-0 border-2 border-blue-500/30 rounded-2xl translate-x-4 translate-y-4" />
              
              {/* Image container */}
              <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800">
                <img
                  src={import.meta.env.BASE_URL + 'profile.jpg'}
                  alt="Mohamed Bouslimi"
                  className="w-full aspect-square object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-slate-900 items-center justify-center text-7xl font-bold text-white hidden">
                  MB
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-500/10 hover:bg-transparent transition-colors duration-300" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
