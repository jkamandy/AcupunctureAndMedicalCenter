import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import AMCbg from '../../assets/acu-bg-sample.svg';
import AMCbgVideo from '../../assets/videos/bg-video.mp4';
import Footer from '../../components/Footer/Footer';
import AppAccordion from '../../components/Accordion/Accordion';

const Testimonials = () => {
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

      <div className="flex-grow">
        <Navbar />
        <div
          //   className="flex h-auto flex-col items-center justify-start text-[#D6D6D6]"
          ref={ref}
          className={`flex h-auto flex-col items-center justify-start text-[#D6D6D6] transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="mt-[50px] md:mt-[100px]">
            <h1 className="flex gap-12 font-spartan text-[35px] font-medium tracking-[-1px] drop-shadow-md xs:text-[55px] md:text-[75px] md:tracking-[-3px]">
              Testimonials
            </h1>
          </div>
          <div className="mt-2 flex w-[80%] items-center 2lg:w-[1200px]">
            <span className="z-10 self-start font-spartan text-[18px] font-light text-[#D6D6D6]">
              Learn more about the experiences of our clients and how our
              holistic approach to health and wellness has made a difference in
              their lives. Our testimonials showcase the positive impact of our
              services, highlighting the personalized care and attention that
              sets us apart. Discover how we've helped others find balance and
              vitality, and gain insight into what you can expect on your own
              wellness journey.
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Testimonials;
