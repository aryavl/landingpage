import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"
import Popular from "./components/Popular"

  function App() {
 
    return (
      < >
      <Navbar/>
      <Hero/>
      <Popular/>
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
