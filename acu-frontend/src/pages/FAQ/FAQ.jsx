import React from 'react';
import { useEffect, useState } from 'react';
// import Button from '../../shared/components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';
import AMCLogo from '../../assets/acu-logo.svg'
import AMCbg from '../../assets/acu-bg-sample.svg'
import AMCbgVideo from '../../assets/videos/bg-video.mp4'
import { IoChevronDownSharp } from "react-icons/io5";
import Footer from '../../components/Footer/Footer';
import Button from '../../shared/components/Button/Button';
import CardStack from '../../components/Home/CardStack/CardStack';
import InfoBanner from '../../components/InfoBanner/InfoBanner';
import Contact from '../../components/Contact/Contact';
import AppAccordion from '../../components/Accordion/Accordion';



const FAQ = () => {
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100); // Show chevron when near the top
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight, // Scroll down by the height of the viewport (100vh)
      behavior: "smooth", // Smooth scrolling
    });
  };

  const handleClick = () => {
    // alert('Button clicked!');
  };

  return (
    <div className='relative z-0 w-full h-auto'>
        {/* <img className={`h-auto w-screen opacity-30 self-center fixed ${isVisible ? "backdrop-blur-sm" : "blur-lg"} transition duration-500 ease-in-out`} src={AMCbg}></img> */}
        {/* TODO: convert the video into its own component */}
        <video 
          className={` fixed top-1/2 left-1/2 opacity-90 backdrop-blur-sm transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover transition duration-500 ease-in-out blur-lg`}
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src={AMCbgVideo} type="video/mp4" />
          {/* If the video is not supported on certain browsers, the bgImage below will substitute it */}
          <img className={`h-auto w-screen opacity-30 self-center fixed blur-lg transition duration-500 ease-in-out`} src={AMCbg}></img>
        </video>
        <div className='xl:h-screen w-screen'>
            <div > 
                <Navbar/>
            </div>
            {/* <Navbar/> */}
       
            <div className='h-auto text-[#D6D6D6] flex flex-col justify-start items-center'>
            <div className='mt-[100px]'> <h1 className='text-[85px] font-medium font-spartan tracking-[-3px] flex gap-12 drop-shadow-md'>Frequently Asked Questions</h1></div>
                <div className='w-full flex flex-col mt-[50px] items-center justify-center mb-[100px]'>
                    <AppAccordion />
                </div>

                <div className='2xl:absolute bottom-0'>
                    <Footer/>
                </div>
            </div>
        
        {/* <div className='absolute bottom-0'>
            <Footer/>
        </div> */}
      </div>
    </div>
  );
};

export default FAQ;
