import React from 'react';
import { useEffect, useState } from 'react';
// import Button from '../../shared/components/Button/Button';
import Navbar from '../Navbar/Navbar';
import AMCLogo from '../../assets/acu-logo.svg'
import AMCbg from '../../assets/acu-bg-sample.svg'
import AMCbgVideo from '../../assets/videos/bg-video.mp4'
import ServiceCards from '../../components/ServiceCards/ServiceCards';

import { IoChevronDownSharp } from "react-icons/io5";
import Footer from '../Footer/Footer';
import Testimonals from '../Testimonals/Testimonials';
import About from '../About/About';



/*
    Notes:
    - Navbar goes here
    - dash
*/

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
//   const handleClick = () => {
//     alert('Button clicked!');
//   };
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

  return (
    <div className='relative z-0 w-full h-screen'>
        {/* <img className={`h-auto w-screen opacity-30 self-center fixed ${isVisible ? "backdrop-blur-sm" : "blur-lg"} transition duration-500 ease-in-out`} src={AMCbg}></img> */}
        <video 
          className={` fixed top-1/2 left-1/2 opacity-90 backdrop-blur-sm transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover transition duration-500 ease-in-out ${isVisible ? "backdrop-blur-sm" : "blur-lg"}`}
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src={AMCbgVideo} type="video/mp4" />
          {/* If the video is not supported on certain browsers, the bgImage below will substitute it */}
          <img className={`h-auto w-screen opacity-30 self-center fixed ${isVisible ? "backdrop-blur-sm" : "blur-lg"} transition duration-500 ease-in-out`} src={AMCbg}></img>
        </video>
        <div className='h-screen w-screen'>
            <div > 
                <Navbar/>
            </div>
            {/* <Navbar/> */}
        <div className='h-screen text-[#D6D6D6] flex flex-col justify-center items-center'>
            <div className='relative'> <span className='text-[80px] font-medium font-spartan tracking-[-2px] flex gap-12 '>Compassion with us is a <img className='absolute right-[205px] top-1' src={AMCLogo}></img>radition</span></div>
            <div className='absolute bottom-12 text-[32px]'>
              <IoChevronDownSharp onClick={scrollDown} className={`hover:cursor-pointer animate-pulse-down hover:text-[#92BF7C]  transition-opacity duration-500  ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`} />
            </div>
        </div>

        <div className=' h-screen text-[#D6D6D6] flex justify-center items-center'><About/> </div>

        <div className='h-screen text-[#D6D6D6] flex justify-center items-center'>
            <ServiceCards cardsInfoFirst={{"Acupuncture":"A traditional Chinese therapy that uses thin needles to stimulate specific points on the body, promoting healing and balance. It’s often used for pain relief, stress reduction, and overall well-being.", 
                                      "Electro-Acupuncture":"A modern variation of traditional acupuncture where small electrical currents are applied to the needles, enhancing stimulation at specific points. It's often used to treat pain, nerve issues, and muscle conditions." ,
                                      "Massage":"Manipulating the body's soft tissues to relieve tension, reduce pain, and promote relaxation. It improves circulation, supports healing, and enhances overall well-being.",
                                      "Cupping":"Uses suction created by placing cups on the skin to improve circulation, relieve muscle tension, and promote healing. It’s often used for pain relief, inflammation, and relaxation.",
                                      }}
                          cardsInfoSecond={{"Tens Electro Muscle Stimulation":"Uses low-voltage electrical currents to stimulate nerves and relieve pain. It's commonly used for muscle relaxation, pain management, and rehabilitation.",
                                      "Nutritional Supplements":"Provides essential vitamins, minerals, or other nutrients that may be lacking in your diet. Support overall health, improve energy, and address specific deficiencies or wellness goals.",
                                      "Moxibustion":"Involves burning dried mugwort (moxa) near specific acupuncture points on the body. It is believed to stimulate circulation, enhance healing, and restore balance by warming the body and promoting energy flow.", 
                                      "Herbal Supplements":"Products made from plant extracts or herbs that are used to support health and wellness. Commonly used to address specific conditions, boost immunity, or improve overall vitality, often as an alternative or complement to conventional medicine."}}
                          
            />
        </div>

        <div className=' h-screen text-[#D6D6D6] flex justify-center items-center'><Testimonals/> </div>

        <div>
          <Footer/>
        </div>

      </div>
    </div>
  );
};

export default Home;
