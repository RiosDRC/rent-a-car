import './App.css'
import Navbar from './components/Navbar'
import { AboutUs, CarOptions, Footer, Gallery, Menu, Presentation, RentalDetails, Testimonial } from './containers'

function App() {
  return (
      <div>
        <Navbar />
        <Presentation />
        <Menu />
        <RentalDetails />
        <CarOptions />
        <AboutUs />
        <Gallery />
        <Testimonial />
        <Footer />
      </div>
  )
}

export default App
