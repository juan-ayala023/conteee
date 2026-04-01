import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AutomationLoop from './components/AutomationLoop'
import FeatureGrid from './components/FeatureGrid'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-obsidian text-white selection:bg-phantom/30">
      {/* Decorative background elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-phantom/10 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-signal/10 blur-[120px] rounded-full animate-pulse-slow"></div>
      </div>

      <Navbar />
      
      <main className="relative pt-20">
        <Hero />
        <AutomationLoop />
        <FeatureGrid />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}

export default App
