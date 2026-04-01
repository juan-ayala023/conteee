import React from 'react'
import { motion } from 'framer-motion'
import { Clapperboard, Zap } from 'lucide-react'

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-center p-3 md:p-6 font-body"
    >
      <div className="max-w-7xl w-full glass rounded-2xl md:rounded-3xl flex items-center justify-between px-4 py-3 md:px-8 md:py-5 backdrop-blur-xl border-white/5">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-firs rounded-lg md:rounded-xl flex items-center justify-center glow-orange">
            <Clapperboard className="text-white w-4 h-4 md:w-6 md:h-6" />
          </div>
          <span className="text-xl md:text-3xl font-display font-black tracking-tighter uppercase italic flex items-center">
            <span className="text-firs">firs</span>
            <span className="text-try">try.</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-[10px] font-black tracking-[0.2em] uppercase text-white/40">
          <a href="#hero" className="hover:text-firs transition-colors">Sistema</a>
          <a href="#automation" className="hover:text-firs transition-colors">Bucle</a>
          <a href="#features" className="hover:text-firs transition-colors">Tecnología</a>
          <a href="#cta" className="hover:text-firs transition-colors">Activar</a>
        </div>

        <button className="bg-white text-obsidian px-4 py-2 md:px-8 md:py-3 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs flex items-center gap-1.5 md:gap-2 hover:bg-firs hover:text-white transition-all duration-300 uppercase tracking-widest italic">
          <Zap className="w-3 h-3 md:w-4 md:h-4 fill-current" />
          ACCESO
        </button>
      </div>
    </motion.nav>
  )
}

export default Navbar
