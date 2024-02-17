/* eslint-disable no-unused-vars */
import  { useEffect, useState,Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Page from './pages/AboutUs';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
 AOS.init(); // Import the CSS for AOS

const App = () => {
  const [showItems, setShowItems] = useState(false);

    useEffect(() => {
      AOS.init({}); // Initialize AOS
    }, []);
  useEffect(() => {
    setShowItems(true);
  }, []);

  return (

    <Suspense fallback={<div className='flex items-center justify-center w-full'>Loading...</div>}>
      <Navbar/>
      {/* <div className="container flex items-center w-full justify-center pt-16">
        {showItems && (
          <div className="item animated"> */}
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Page />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            </Routes>
          {/* </div>
        )}
       
      </div> */}
      <Footer/>
  </Suspense>


   
  );
}

export default App;


