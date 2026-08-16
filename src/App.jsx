import Navbar from "./components/Navbar"

import Hero from "./sections/Hero"
import About from "./sections/About"
import Committees from "./sections/Committees"
import Events from "./sections/Events"
import InnovationHub from "./sections/InnovationHub"
import Opportunities from "./sections/Opportunities"
import Team from "./sections/Team"
import Gallery from "./sections/Gallery"
import Contact from "./sections/Contact"

import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Committees />
        <Events />
        <InnovationHub />
        <Opportunities />
        <Team />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App