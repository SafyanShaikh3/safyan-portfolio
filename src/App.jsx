import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import SignalRail from './components/SignalRail.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import FeaturedProject from './components/FeaturedProject.jsx'
import Projects from './components/Projects.jsx'
import AISection from './components/AISection.jsx'
import Journey from './components/Journey.jsx'
import Education from './components/Education.jsx'
import Philosophy from './components/Philosophy.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="relative overflow-x-clip bg-base-900 font-body text-ink-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-signal-gradient focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-base-950"
      >
        Skip to content
      </a>
      <SignalRail />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <Projects />
        <AISection />
        <Journey />
        <Education />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
