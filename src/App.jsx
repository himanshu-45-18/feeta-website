import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Team from "./sections/Team"
import Activities from "./sections/Activities"
import Events from "./sections/Events"
import Gallery from "./sections/Gallery"
import Achievements from "./sections/Achievements"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

function App() {
  return (
    <div className="min-h-screen">

      <Navbar />

      <main>
        <Hero />
        <About />
        <Team />
        <Activities />
        <Events />
        <Gallery />
        <Achievements />
        <Contact />
      </main>

      <Footer />

    </div>
  )
}

export default App