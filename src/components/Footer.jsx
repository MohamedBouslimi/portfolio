import { FaGithub, FaLinkedinIn, FaHeart } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800">
      <div className="container-main">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/MohamedBouslimi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-400 transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-bouslimi-a919251ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-400 transition-colors"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>

          {/* Credit */}
          <div className="text-center text-slate-500 text-sm">
            <p className="flex items-center justify-center gap-1">
              Built with <FaHeart className="text-red-500 text-xs" /> by Mohamed Bouslimi
            </p>
            <p className="mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
