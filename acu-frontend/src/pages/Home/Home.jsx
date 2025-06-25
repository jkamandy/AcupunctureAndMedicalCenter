import React from 'react';
import { useEffect, useState, useRef } from 'react';
// import Button from '../../shared/components/Button/Button';
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

/*
    Notes:
    - Navbar goes here
    - dash
*/

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
      <video
        className={`fixed left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 transform object-cover opacity-90 backdrop-blur-sm transition duration-500 ease-in-out ${isVisible ? 'backdrop-blur-sm' : 'blur-lg'}`}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={AMCbgVideo} type="video/mp4" />
        {/* If the video is not supported on certain browsers, the bgImage below will substitute it */}
        <img
          className={`fixed h-auto w-screen self-center opacity-30 ${isVisible ? 'backdrop-blur-sm' : 'blur-lg'} transition duration-500 ease-in-out`}
          src={AMCbg}
        ></img>
      </video>
      <div className="h-screen w-screen">
        <div>
          <Navbar />
        </div>
        {/* <Navbar/> */}

        <div
          //   className="flex h-screen flex-col items-center justify-center text-[#D6D6D6]"
          ref={ref}
          className={`flex h-screen flex-col items-center justify-center text-[#D6D6D6] transition-all duration-1000 ${
            isPageVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="absolute top-24">
            <span className="font-spartan font-light text-[#D6D6D6] drop-shadow-md 4xl:text-[18px]">
              Rancho Santa Margarita • (949)-206-1040
            </span>{' '}
          </div>
          <div className="absolute left-10 flex h-auto flex-col md:left-20 2lg:w-[800px] [&_h1]:leading-[60px] md:[&_h1]:leading-[90px]">
            <div className="relative mt-10">
              {' '}
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
                ></img>
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
              <a href="mailto:test@gmail.com">
                <Button
                  label="Schedule an Appointment"
                  onClick={handleClick}
                  bordered={true} //
                  // className="border-[1px] border-black p-1 m-1"
                  className="mx-0 mt-5 4xl:text-[20px]"
                />
              </a>
            </div>
          </div>

          <div
            onClick={scrollDown}
            className="group absolute bottom-8 hidden h-[50px] w-[50px] items-center justify-center text-[32px] hover:cursor-pointer 2lg:flex"
          >
            <IoChevronDownSharp
              className={`animate-pulse-down transition-opacity duration-500 group-hover:text-[#92BF7C] ${isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
            />
          </div>
        </div>

        <div className="flex flex-col justify-start text-[#D6D6D6]">
          {/* ---- Mission Statement + Nav Cards ---- */}
          <div className="relative ml-[20px] mt-[150px] w-[80%] md:ml-[50px] 2lg:w-[1090px]">
            <span className="font-spartan text-[24px] font-light leading-[27px] text-[#D6D6D6]">
              Our mission is to provide{' '}
              <span className="font-semibold text-[#92BF7C]">personalized</span>
              ,{' '}
              <span className="font-semibold text-[#92BF7C]">high-quality</span>{' '}
              care on an as-needed or preventative basis. We have created a
              practice that we believe in and choose for our own family members.{' '}
            </span>
          </div>
          <div className="mt-12">
            <CardStack
              // repurposing empty descriptions to store path if the card is not flippable
              cardsInfoFirst={{
                'Testimonials': ['/Testimonials'],
                'Our Services': ['/OurServices'],
                'Frequently Asked Questions': ['/FAQ'],
                'About the Team': ['/About'],
              }}
            />
          </div>

          {/* ---- StemWave Banner ---- */}
          {/* <About/>  */}
          <div className="my-[200px] flex">
            <InfoBanner title={'Try Out StemWave!'} />
          </div>

          <div className="mr-[20px] flex justify-end text-end md:mr-[50px]">
            <div className="relative ml-[50px] w-[80%] 2lg:w-[1090px]">
              <span className="font-spartan text-[24px] font-light leading-[30px] text-[#D6D6D6]">
                <span className="font-semibold text-[#92BF7C]">
                  We're here to help!
                </span>{' '}
                Whether you have questions about our services, need assistance
                with appointments, or want more information, feel free to reach
                out. Visit us, call, or send us a message, and our friendly team
                will be happy to assist you.{' '}
              </span>
            </div>
          </div>

          {/* ---- Contact ---- */}
          <div
            className="my-[120px] flex flex-col items-center justify-center"
            id="Contact"
          >
            <Contact />
            <div className="flex w-[80%] items-center justify-center 2xl:w-[1200px]">
              <span className="z-10 mt-5 text-center font-spartan text-[18px] font-light leading-[23px] text-[#D6D6D6]">
                Acupuncture and Medical Center can be reached during normal
                business hours by phone. If you have a medical emergency, please
                dial 911. If you have questions about our services, accepted
                forms of insurance, our facility, or our physicians, please feel
                free to contact us during normal business hours by phone or send
                us an email and we will respond within one business day.
              </span>
            </div>
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

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
