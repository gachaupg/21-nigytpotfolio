import Hero from "../components/Hero"
import BackgroundSlider from "../components/Slider"
// 
// import Page from "./AboutUs"
// import Certs from "./Certs"
import Clients from "./Clients"
import Contact from "./Contact"
import Excutive from "./Excutive"
// import Projects from "./Projects"

const Home = () => {
  return (
    <div className="w-full ">
      {/* <Hero /> */}
      <BackgroundSlider/>
      <Hero/>
      {/* <Page /> */}
      <Clients/>
    <Excutive/>
      {/* <Projects/> */}
      <Contact/>

    </div>
  )
}

export default Home