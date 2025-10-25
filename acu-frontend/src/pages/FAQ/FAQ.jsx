import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import AMCbg from '../../assets/acu-bg-sample.svg';
import AMCbgVideo from '../../assets/videos/bg-video.mp4';
import Footer from '../../components/Footer/Footer';
import AppAccordion from '../../components/Accordion/Accordion';

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
  return (
    <div className={`relative z-0 flex min-h-screen flex-col`}>
      {/* Background Video */}
      <video
        className={`fixed inset-0 h-full w-full object-cover brightness-50 transition duration-500 ease-in-out`}
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
          <div
            // className="mt-[100px]"
            ref={ref}
            className={`mt-[60px] transition-all duration-1000 md:mt-[100px] ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="flex gap-12 font-spartan text-[35px] font-medium tracking-[-1px] drop-shadow-md max-2xs:text-[30px] xs:text-[55px] md:text-[75px] md:tracking-[-3px]">
              Frequently Asked Questions
            </h1>
          </div>
          <div className="mt-4 flex w-full flex-col items-center justify-center md:mt-[50px]">
            <AppAccordion />
          </div>
          <div
            className={`mb-[100px] mt-6 flex w-[80%] items-center justify-center transition-all duration-1000 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="z-10 self-start text-center font-spartan text-[18px] font-light text-[#D6D6D6]">
              Have other questions? Be sure to give us a call so we can help
              give you the right information!
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FAQ;
