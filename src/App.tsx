import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"
import Popular from "./components/Popular"
import Sales from "./components/Sales"
import SalesSection from "./components/SalesSection"
import Section1 from "./components/Section1"
import Testimonial from "./components/Testimonial"

  function App() {
 
    return (
      < >
      <Navbar/>
      <Hero/>
      <Popular/>
      <Sales/>
      <div className="bg-[#F7F7F7]">

      <Popular/>
      </div>
      <SalesSection/>
      <Popular/>
      <Section1/>
      <div className="bg-[#F7F7F7]">

      <Testimonial/>
      </div>
      <div className="mt-5 md:mt-0">
        <div className="bg-[#E6E6E6]">
        <Newsletter/>
        </div>
      <Footer/>
      </div>
    </>

    )
  }

  export default App
