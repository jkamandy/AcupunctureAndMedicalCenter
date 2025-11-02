import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import AMCLogo from '../../assets/acu-logo.svg';
import AMCbg from '../../assets/acu-bg-sample.svg';
import AMCbgVideo from '../../assets/videos/bg-video.mp4';
import { IoChevronDownSharp } from 'react-icons/io5';
import Footer from '../../components/Footer/Footer';
import Button from '../../shared/components/Button/Button';
import CardStack from '../../components/Home/CardStack/CardStack';
import InfoBanner from '../../components/InfoBanner/InfoBanner';
import Contact from '../../components/Contact/Contact';

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPageVisible, setIsPageVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsPageVisible(true);
      },
      { threshold: 0.05 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY < 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight * 0.8,
      behavior: 'smooth',
    });
  };

  const handleClick = () => {};

  return (
    <div className="relative z-0 h-auto w-full">
      {/* --- Background Video --- */}

      {/* <video
        className={`fixed left-1/2 top-1/2 min-h-[120svh] min-w-[100vw] -translate-x-1/2 -translate-y-1/2 transform object-cover transition duration-500 ease-in-out ${
          !isVisible ? 'brightness-50' : 'brightness-100'
        }`}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={AMCbgVideo} type="video/mp4" />
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          src={AMCbg}
          alt="Fallback background"
        />
      </video> */}

      {/* <div className="pointer-events-none fixed inset-0 z-[1] bg-black/20" /> */}

      {/* ✅ Dark overlay (prevents white vignette) */}

      {/* --- Main Content --- */}
      <div className="relative min-h-[100svh] w-screen">
        <Navbar />

        {/* --- Hero Section --- */}
        <div
          ref={ref}
          className={`flex min-h-[100svh] flex-col items-center justify-center text-[#D6D6D6] transition-all duration-1000 ${
            isPageVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Header info */}
          <div className="absolute top-24">
            <span className="font-spartan font-light text-[#D6D6D6] drop-shadow-md 4xl:text-[18px]">
              Rancho Santa Margarita •{' '}
              <a
                href="tel:9492061040"
                className="font-spartan text-[18px] text-[#D6D6D6] hover:underline"
              >
                (949) 206-1040
              </a>
            </span>
          </div>

          {/* Headline */}
          <div className="absolute left-[1.5rem] flex h-auto flex-col md:left-20 2lg:w-[800px] [&_h1]:leading-[60px] md:[&_h1]:leading-[90px]">
            <div className="relative mt-10">
              <h1 className="flex gap-12 font-spartan text-[65px] font-medium tracking-[-2px] drop-shadow-md md:text-[85px] md:tracking-[-3px]">
                Compassion with us
              </h1>
            </div>

            <div className="relative">
              <h1 className="relative flex gap-12 font-spartan text-[65px] font-medium tracking-[-2px] drop-shadow-md md:text-[85px] md:tracking-[-3px]">
                is a{' '}
                <img
                  className="absolute bottom-[-15px] left-[65px] scale-75 md:bottom-0 md:left-[92px] md:scale-90"
                  src={AMCLogo}
                  alt="AMC Logo"
                />
                radition
              </h1>
            </div>

            <div className="relative mt-5 max-2lg:w-[70%]">
              <span className="pt-10 font-spartan text-[18px] font-light leading-[18px] 4xl:text-[20px]">
                All new patients receive a{' '}
                <span className="font-semibold">complementary</span> half-hour
                consult with our head physician to establish a personalized care
                plan. Schedule your free consultation now!
              </span>
            </div>

            <div className="flex">
              <a href="#schedule_appointment">
                <Button
                  label="Schedule an Appointment"
                  onClick={handleClick}
                  bordered
                  className="mx-0 mt-5 font-bold"
                />
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            onClick={scrollDown}
            className="group absolute bottom-8 hidden h-[50px] w-[50px] items-center justify-center text-[32px] hover:cursor-pointer 2lg:flex"
          >
            <IoChevronDownSharp
              className={`animate-pulse-down transition-opacity duration-500 group-hover:text-[#92BF7C] ${
                isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            />
          </div>
        </div>

        {/* --- Mission + Cards --- */}
        <div className="flex flex-col justify-start text-[#D6D6D6]">
          <div className="relative ml-[20px] mt-[20px] w-[80%] md:ml-[50px] 2lg:w-[1090px]">
            <span className="font-spartan text-[20px] font-light leading-[27px] text-[#D6D6D6] 2lg:text-[24px]">
              <span className="text-[60px] font-semibold uppercase leading-none tracking-[-1.8px]">
                Our mission{' '}
              </span>{' '}
              is to provide{' '}
              <span className="font-semibold text-[#92BF7C]">personalized</span>
              ,{' '}
              <span className="font-semibold text-[#92BF7C]">high-quality</span>{' '}
              care on an as-needed or preventative basis. We have created a
              practice that we believe in and choose for our own family members.
            </span>
          </div>

          <div className="mt-12">
            <CardStack
              cardsInfoFirst={{
                Testimonials: ['/Testimonials'],
                'Our Services': ['/OurServices'],
                'Frequently Asked Questions': ['/FAQ'],
                'About the Team': ['/About'],
              }}
            />
          </div>

          {/* --- Info Banner --- */}
          <div className="mb-[150px] mt-[200px] flex">
            <InfoBanner title={'Try Out StemWave!'} />
          </div>

          {/* --- Contact Section --- */}
          <div className="mr-[20px] flex justify-end text-end md:mr-[50px]">
            <div className="relative ml-[50px] w-[80%] 2lg:w-[1090px]">
              <span className="font-spartan text-[20px] font-light leading-[30px] text-[#D6D6D6] 2lg:text-[24px]">
                <span className="font-semibold text-[#92BF7C]">
                  We're here to help!
                </span>{' '}
                Whether you have questions about our services, need assistance
                with appointments, or want more information, feel free to reach
                out. Visit us, call, or send us a message, and our friendly team
                will be happy to assist you.
              </span>
            </div>
          </div>

          <div
            className="my-[120px] flex flex-col items-center justify-center"
            id="Contact"
          >
            <Contact />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
