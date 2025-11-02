import React from 'react';
import { useEffect, useState, useRef } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import AMCbg from '../../assets/acu-bg-sample.svg';
import AMCbanner from '../../assets/acu-banner-light.svg';
import AMCbgVideo from '../../assets/videos/bg-video.mp4';
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/Contact/Contact';
import SubmissionForm from '../../components/SubmissionForm/SubmissionForm';

/*
    Notes:
    - Navbar goes here
    - dash
*/

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPageVisible, setIsPageVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPageVisible(true);
        }
      },
      { threshold: 0.05 }, // Animation triggers when 10% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  //   const handleClick = () => {
  //     alert('Button clicked!');
  //   };
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100); // Show chevron when near the top
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight, // Scroll down by the height of the viewport (100vh)
      behavior: 'smooth', // Smooth scrolling
    });
  };

  const handleClick = () => {
    // alert('Button clicked!');
  };

  return (
    <div className="relative z-0 h-auto w-full">
      {/* <img className={`h-auto w-screen opacity-30 self-center fixed ${isVisible ? "backdrop-blur-sm" : "blur-lg"} transition duration-500 ease-in-out`} src={AMCbg}></img> */}
      {/* TODO: convert the video into its own component */}
      {/* <video
        className={`fixed inset-0 h-full w-full object-cover brightness-50 transition duration-500 ease-in-out`}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={AMCbgVideo} type="video/mp4" />
        
        <img
          className={`fixed h-auto w-screen self-center opacity-30 blur-lg transition duration-500 ease-in-out`}
          src={AMCbg}
        ></img>
      </video> */}
      <div className="h-auto w-screen">
        <div>
          <Navbar />
        </div>
        {/* <Navbar/> */}

        <div
          //   className="flex h-screen flex-col items-center justify-center text-[#D6D6D6]"
          ref={ref}
          className={`flex h-screen flex-col items-center justify-between text-[#D6D6D6] transition-all duration-1000 ${
            isPageVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          {/* ---- Contact ---- */}
          <div
            className="mb-[100px] flex w-full flex-col items-center justify-center md:mt-[150px]"
            id="Contact"
          >
            <Contact />

            <div className="mt-[100px]">
              <img className="scale-100 2lg:scale-125" src={AMCbanner}></img>
            </div>
          </div>

          <div className="relative flex">
            <Footer />
          </div>
        </div>

        {/* <div className='text-[#D6D6D6] flex justify-center items-center'>
            

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
        </div> */}

        {/* <div className=' text-[#D6D6D6] flex justify-center items-center'><Testimonals/> </div> */}
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default ContactPage;
