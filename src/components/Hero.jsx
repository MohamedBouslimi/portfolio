import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container-main">
        <div className="max-w-4xl">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-400 font-mono text-sm mb-4"
          >
            Hello, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4"
          >
            Mohamed Bouslimi.
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-400 mb-8"
          >
            I build things for the web.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 text-lg max-w-xl mb-10 leading-relaxed"
          >
            I'm a <span className="text-blue-400">Full Stack Developer</span> specializing in 
            building exceptional digital experiences. Currently based in{' '}
            <span className="text-slate-300">Mannouba, Tunisia</span>, I focus on creating 
            clean, scalable, and performant web applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-5"
          >
            <a
              href="https://github.com/MohamedBouslimi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-400 transition-colors"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-bouslimi-a919251ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-400 transition-colors"
            >
              <FaLinkedinIn size={22} />
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-slate-600 hover:text-blue-400 transition-colors"
          >
            <HiArrowDown size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
