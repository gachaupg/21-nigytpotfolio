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
import SingleProduct from './pages/SingleProduct';
import Services from './pages/Services';
import Sustainability from './pages/Sustainability';
import Error from './pages/Error';
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
 
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Page />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<SingleProduct />} />
            <Route path="/services" element={<Services />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="*" element={<Error />} />
            </Routes>
       
      <Footer/>
  </Suspense>


   
  );
}

export default App;


