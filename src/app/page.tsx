import Image from 'next/image'
import HeroSection from './components/hero/HeroSection'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/project/Projects'
import Archieves from './components/archives/Archieves'
import ContactMe from './components/contact/ContactMe'

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Experience />
      <Projects />
      {/* <Archieves/> */}
      <ContactMe/>
    </>

  )
}
