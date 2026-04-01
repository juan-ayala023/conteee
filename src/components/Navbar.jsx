import React from 'react'
import { motion } from 'framer-motion'
import { Clapperboard, Zap } from 'lucide-react'

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-center p-6 font-body"
    >
      <div className="max-w-7xl w-full glass rounded-3xl flex items-center justify-between px-8 py-5 backdrop-blur-xl border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-firs rounded-xl flex items-center justify-center glow-orange">
            <Clapperboard className="text-white w-6 h-6" />
          </div>
          <span className="text-3xl font-display font-black tracking-tighter uppercase italic flex items-center">
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

        <button className="bg-white text-obsidian px-8 py-3 rounded-2xl font-black text-xs flex items-center gap-2 hover:bg-firs hover:text-white transition-all duration-300 uppercase tracking-widest italic">
          <Zap className="w-4 h-4 fill-current" />
          ACCESO TOTAL
        </button>
      </div>
    </motion.nav>
  )
}

export default Navbar
