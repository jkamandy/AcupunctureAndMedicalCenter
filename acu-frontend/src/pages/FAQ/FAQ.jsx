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
    <div className="relative z-0 flex min-h-screen flex-col">
      {/* Background Video */}
      <video
        className="fixed left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 transform object-cover opacity-90 blur-lg transition duration-500 ease-in-out"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={AMCbgVideo} type="video/mp4" />
        {/* Fallback Background Image */}
        <img
          className="fixed h-auto w-screen self-center opacity-30 blur-lg transition duration-500 ease-in-out"
          src={AMCbg}
          alt="Background"
        />
      </video>

      {/* Main Content */}
      <div className="flex-grow">
        <Navbar />
        <div className="flex h-auto flex-col items-center justify-start text-[#D6D6D6]">
          <div className="mt-[100px]">
            <h1 className="flex gap-12 font-spartan text-[85px] font-medium tracking-[-3px] drop-shadow-md">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="mb-[100px] mt-[50px] flex w-full flex-col items-center justify-center">
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
