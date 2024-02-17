import Hero from "../components/Hero"
import WhyChooseUs from "../components/WhyChooseUs"
import Page from "./AboutUs"
import Certs from "./Certs"
import Clients from "./Clients"
import Contact from "./Contact"
import Projects from "./Projects"

const Home = () => {
  return (
    <div className="w-full ">
      <Hero />
      <WhyChooseUs />
      <Page />
      <Clients/>
      <Certs/>
      <Projects/>
      <Contact/>

    </div>
  )
}

export default Home