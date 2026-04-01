import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Shield, Globe, Award, Database, Repeat } from 'lucide-react'

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "VIRALIDAD DISEÑADA",
    desc: "Nuestros algoritmos de IA analizan tendencias en tiempo real para inyectar ganchos virales en cada video."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "PRODUCCIÓN BRUTAL",
    desc: "Capacidad para generar miles de piezas de contenido al mes sin degradación de calidad."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "MISTERIO MAGNÉTICO",
    desc: "Dominamos el formato 'faceless' para que la marca sea el contenido, no una persona."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "DATA-DRIVEN SCALING",
    desc: "Escalamos automáticamente los contenidos que muestran métricas ganadoras (CTR > 10%)."
  },
  {
    icon: <Repeat className="w-6 h-6" />,
    title: "MULTICHANNEL SYNC",
    desc: "Sincronización total entre plataformas para capturar atención en TikTok, YouTube y Facebook."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "RECAUDACIÓN PASIVA",
    desc: "El sistema optimiza el RPM para que cada vista valga más dinero real en tu cuenta."
  }
]

const FeatureGrid = () => {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-full mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight italic">
              TECNOLOGÍA DE <span className="text-try">ÉLITE</span>
            </h2>
            <div className="w-32 h-1 bg-try mt-6"></div>
          </div>
          
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-[2.5rem] group cursor-default hover:bg-white/[0.04] transition-all duration-500 border-white/5"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:text-try transition-colors group-hover:bg-try/10 duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-display font-black mb-4 uppercase italic tracking-tighter">
                {feature.title}
              </h3>
              <p className="text-white/30 text-xs leading-relaxed font-black uppercase tracking-tighter">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative side badge */}
      <div className="hidden lg:block absolute right-[-100px] top-1/2 -translate-y-1/2 rotate-90 opacity-10">
        <span className="text-[150px] font-display font-black tracking-tighter uppercase whitespace-nowrap">
          SYSTEM_CONTROL
        </span>
      </div>
    </section>
  )
}

export default FeatureGrid
