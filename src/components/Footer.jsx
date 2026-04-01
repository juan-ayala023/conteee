import React from 'react'
import { Zap } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-12 md:py-24 px-4 md:px-6 border-t border-white/5 flex flex-col items-center bg-obsidian">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 bg-firs/10 rounded-xl flex items-center justify-center">
          <Zap className="text-firs w-6 h-6 fill-current shadow-[0_0_15px_#FF5B0D]" />
        </div>
        <span className="text-2xl font-display font-black tracking-tighter uppercase italic flex items-center">
          <span className="text-firs">firs</span>
          <span className="text-try">try.</span>
        </span>
      </div>

      <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-white/30 text-xs font-bold uppercase tracking-widest">
        <a href="#" className="hover:text-white transition-colors">Términos</a>
        <a href="#" className="hover:text-white transition-colors">Privacidad</a>
        <a href="#" className="hover:text-white transition-colors">Soporte</a>
        <a href="#" className="hover:text-white transition-colors">API</a>
      </nav>

      <p className="text-white/10 text-[10px] uppercase font-bold tracking-[0.3em]">
        © 2026 FIRSTRY AUTOMATION SYSTEMS — TODO EL CONTENIDO PROCESADO POR IA
      </p>
    </footer>
  )
}

export default Footer
