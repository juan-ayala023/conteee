import React from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight, Zap } from 'lucide-react'

const CTASection = () => {
  return (
    <section id="cta" className="py-32 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-firs/5 -z-10 blur-[200px] animate-pulse-slow"></div>
      
      <div className="max-w-4xl mx-auto glass p-10 md:p-24 rounded-[4rem] border-white/5 relative">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-firs/10 px-8 py-3 rounded-full border border-firs/30 mb-12"
        >
          <Zap className="w-5 h-5 text-firs fill-current shadow-[0_0_10px_#FF5B0D]" />
          <span className="text-[10px] font-black tracking-[0.3em] uppercase italic text-firs">
            SISTEMA DE ALTO RENDIMIENTO
          </span>
        </motion.div>

        <h2 className="text-5xl md:text-8xl font-display font-black mb-12 leading-[0.9] uppercase italic tracking-tighter">
          ENCIENDE TU <br />
          MÁQUINA DE <br />
          <span className="text-firs">DINERO</span>
        </h2>

        <p className="text-xl text-white/30 mb-16 max-w-xl mx-auto uppercase font-black tracking-tight leading-snug">
          El algoritmo no descansa. Activa tu red de canales y deja que la IA trabaje por ti 24/7/365.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <button className="w-full md:w-auto bg-firs px-16 py-8 rounded-[2rem] font-black text-3xl italic uppercase tracking-tighter flex items-center justify-center gap-4 hover:scale-105 transition-all glow-orange group">
            <Play className="w-10 h-10 fill-current group-hover:scale-110 transition-transform" />
            ACTIVAR YA
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTASection
