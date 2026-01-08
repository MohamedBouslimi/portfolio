import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiMail, HiLocationMarker } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="contact" className="section-padding bg-slate-900/30">
      <div className="container-main" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="section-label mb-4">Contact</span>
          <h2 className="section-title mb-6">Get In Touch</h2>
          
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question, a project idea, or just want to say hi, 
            I'll do my best to get back to you!
          </p>

          {/* Email Button */}
          <motion.a
            href="mailto:mohamedbouslimi360@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary inline-flex items-center gap-2 text-lg mb-10"
          >
            <HiMail className="text-xl" />
            Say Hello
          </motion.a>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400 mb-10">
            <div className="flex items-center gap-2">
              <HiMail className="text-blue-400" />
              <span>mohamedbouslimi360@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <HiLocationMarker className="text-blue-400" />
              <span>Mannouba, Tunisia</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/MohamedBouslimi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-bouslimi-a919251ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all"
            >
              <FaLinkedinIn size={22} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
