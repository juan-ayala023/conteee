import React from 'react'
import { motion } from 'framer-motion'
import { Target, Video, Upload, Activity, DollarSign } from 'lucide-react'

const steps = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "1. CREACIÓN",
    desc: "Nicho, idioma y estética visual automatizada.",
    color: "firs"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "2. GENERACIÓN",
    desc: "IA produce guion, voz, edición y formato viral 24/7.",
    color: "try"
  },
  {
    icon: <Upload className="w-8 h-8" />,
    title: "3. PUBLICACIÓN",
    desc: "Carga automática en YouTube, TikTok y Facebook.",
    color: "white"
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "4. OPTIMIZACIÓN",
    desc: "Análisis de datos y ajuste de CTR en tiempo real.",
    color: "try"
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "5. MONETIZACIÓN",
    desc: "Escalamiento masivo de ingresos por Ads y RPM.",
    color: "firs"
  }
]

const AutomationLoop = () => {
  return (
    <section id="automation" className="py-24 px-6 bg-vault/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-display font-black mb-6 uppercase tracking-tight italic">
            EL BUCLE <span className="text-firs italic">INFINITO</span>
          </h2>
          <p className="text-white/30 max-w-xl mx-auto uppercase tracking-widest text-[10px] font-black">
            Dominación algorítmica sin intervención humana
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[2.5rem] flex flex-col items-center text-center group hover:scale-[1.02] transition-all duration-500 border-white/5 hover:border-firs/30"
            >
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 
                ${step.color === 'firs' ? 'bg-firs/10 text-firs' : step.color === 'try' ? 'bg-try/10 text-try' : 'bg-white/5 text-white'}
                group-hover:scale-110 transition-transform duration-500`}
              >
                {step.icon}
              </div>
              <h3 className="font-display font-black text-xl mb-4 tracking-tighter uppercase italic">{step.title}</h3>
              <p className="text-white/30 text-xs leading-relaxed uppercase font-black tracking-tighter">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Decorative connecting line (simulated) */}
        <div className="hidden md:block absolute top-[65%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-firs/10 to-transparent -z-10" />
      </div>
    </section>
  )
}

export default AutomationLoop
