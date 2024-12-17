import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import AMCbg from '../../assets/acu-bg-sample.svg';
import AMCbgVideo from '../../assets/videos/bg-video.mp4';
import Footer from '../../components/Footer/Footer';
import AppAccordion from '../../components/Accordion/Accordion';

const FAQ = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsVisible(window.scrollY < 100); // Show chevron when near the top
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollDown = () => {
//     window.scrollBy({
//       top: window.innerHeight, // Scroll down by the height of the viewport (100vh)
//       behavior: "smooth", // Smooth scrolling
//     });
//   };

  return (
    <div className="relative z-0 min-h-screen flex flex-col">
      {/* Background Video */}
      <video
        className="fixed top-1/2 left-1/2 opacity-90 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover transition duration-500 ease-in-out blur-lg"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={AMCbgVideo} type="video/mp4" />
        {/* Fallback Background Image */}
        <img
          className="h-auto w-screen opacity-30 self-center fixed blur-lg transition duration-500 ease-in-out"
          src={AMCbg}
          alt="Background"
        />
      </video>

      {/* Main Content */}
      <div className="flex-grow">
        <Navbar />
        <div className="h-auto text-[#D6D6D6] flex flex-col justify-start items-center">
          <div className="mt-[100px]">
            <h1 className="text-[85px] font-medium font-spartan tracking-[-3px] flex gap-12 drop-shadow-md">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="w-full flex flex-col mt-[50px] items-center justify-center mb-[100px]">
            <AppAccordion />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FAQ;
