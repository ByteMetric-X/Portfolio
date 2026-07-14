import { useSmoothScroll } from './lib/useLenis'
import { Cursor } from './components/Cursor'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Certifications } from './components/Certifications'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

function App() {
  useSmoothScroll()

  return (
    <>
      <div className="grain" />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Certifications />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

export default App
