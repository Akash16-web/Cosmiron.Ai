"use client";
import Navbar from './components/Navbar';
import Index from './components/index';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Page2 from './components/content';
export default function Home() {
  return (

          <>
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
              rel="stylesheet"
            />
            <Navbar />
            <Index />
            <Page2 />
            <Carousel />
            <Footer />
          
        </>
        
  );
}
