import React from 'react'
import { motion } from 'framer-motion'
import { Play, TrendingUp, Cpu } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-5xl w-full text-center relative">
        {/* Machine Status Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-vault/50 px-4 py-2 rounded-full border border-try/20 mb-8"
        >
          <div className="w-2 h-2 bg-try rounded-full animate-pulse shadow-[0_0_8px_#005BFF]" />
          <span className="text-xs font-body font-black tracking-widest text-try/80 uppercase">
            LIVE: SISTEMA DE INGRESOS — 24/7 AUTO-PRODUCCIÓN
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-6xl md:text-8xl font-display font-black leading-[0.9] tracking-tighter mb-8 uppercase italic"
        >
          LA MÁQUINA DE <br />
          <span className="text-firs">DINERO</span> TOTAL
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto mb-12 leading-relaxed font-body"
        >
          Bienvenido a la automatización absoluta. 
          Generamos, publicamos y escalamos canales <span className="text-white italic">faceless</span> con IA. 
          <span className="block mt-2 font-black text-white/60 underline decoration-firs decoration-2">Volumen masivo. Ingresos constantes.</span>
        </motion.p>

        {/* Hero Actions */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <button className="bg-firs px-12 py-6 rounded-3xl font-black text-2xl italic uppercase tracking-tighter flex items-center gap-3 hover:scale-105 transition-transform glow-orange">
            <Play className="w-6 h-6 fill-current" />
            ENCENDER
          </button>
          
          <button className="glass px-12 py-6 rounded-3xl font-black text-2xl italic uppercase tracking-tighter flex items-center gap-3 hover:bg-white/10 transition-all border-white/5">
            <TrendingUp className="w-6 h-6" />
            RENDIMIENTO
          </button>
        </motion.div>

        {/* Stats Preview */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 border-y border-white/5 py-12"
        >
          <div className="flex flex-col items-center">
            <span className="text-try text-4xl font-display uppercase font-black italic">+2.5M</span>
            <span className="text-white/20 text-[10px] tracking-widest font-black uppercase">Views / Día</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-firs text-4xl font-display uppercase font-black italic">+50</span>
            <span className="text-white/20 text-[10px] tracking-widest font-black uppercase">Canales IA</span>
          </div>
          <div className="hidden md:flex flex-col items-center">
            <span className="text-white text-4xl font-display uppercase font-black italic">100%</span>
            <span className="text-white/20 text-[10px] tracking-widest font-black uppercase">Autónomo</span>
          </div>
        </motion.div>
      </div>

      {/* Hero Visual Element (Abstract Machine) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-try/5 blur-[120px] rounded-full animate-pulse-slow"></div>
      </div>
    </section>
  )
}

export default Hero
