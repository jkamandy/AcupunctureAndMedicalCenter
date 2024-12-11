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
import Button from '../../shared/components/Button/Button';
import CardStack from './CardStack/CardStack';
import InfoBanner from '../InfoBanner/InfoBanner';



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

  const handleClick = () => {
    // alert('Button clicked!');
  };

  return (
    <div className='relative z-0 w-full h-auto'>
        {/* <img className={`h-auto w-screen opacity-30 self-center fixed ${isVisible ? "backdrop-blur-sm" : "blur-lg"} transition duration-500 ease-in-out`} src={AMCbg}></img> */}
        {/* TODO: convert the video into its own component */}
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
            <div className='absolute top-24'><span className='text-[#D6D6D6] 4xl:text-[18px] font-spartan font-light drop-shadow-md'>Rancho Santa Margarita  •  (949)-206-1040</span>   </div>
            <div className='flex flex-col absolute left-20 [&_h1]:leading-[90px] w-[800px] h-auto'>
              <div className='relative mt-10'> <h1 className='text-[85px] font-medium font-spartan tracking-[-3px] flex gap-12 drop-shadow-md'>Compassion with us</h1></div>
              <div className='relative'><h1 className='relative text-[85px] font-medium font-spartan tracking-[-3px] flex gap-12 drop-shadow-md'>is a <img className='absolute left-[92px] bottom-0 scale-90' src={AMCLogo}></img>radition</h1></div>

              <div className='relative mt-5'><span className='text-[18px] 4xl:text-[20px] font-spartan leading-[18px] font-light pt-10'>All new patients receive a <span className='font-semibold'>complementary</span> half-hour consult with our head physician to establish a personalized care plan. Schedule your free consultation now!</span></div>
              <div className='flex'>
                <Button
                  label="Schedule an Appointment" 
                  onClick={handleClick}
                  bordered={true} //
                  // className="border-[1px] border-black p-1 m-1" 
                  className="mx-0 mt-5 4xl:text-[20px]"
                />
              </div>
            </div>
            
            <div onClick={scrollDown} className='flex items-center justify-center absolute bottom-8 text-[32px] h-[50px] w-[50px] hover:cursor-pointer group'>
              <IoChevronDownSharp className={` animate-pulse-down group-hover:text-[#92BF7C]  transition-opacity duration-500  ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`} />
            </div>
        </div>

        <div className=' text-[#D6D6D6] flex flex-col justify-start'>
          <div className='relative w-[1090px] mt-[150px] ml-[50px]'>
              <span className='font-spartan text-[36px] text-[#D6D6D6] font-light leading-[36px]'>Our mission is to provide <span className='font-semibold text-[#92BF7C]'>personalized</span>, <span className='font-semibold text-[#92BF7C]'>high-quality</span> care on an as-needed or preventative basis. We have created a practice that we believe in and choose for our own family members. </span>
          </div>
          <div >
            <CardStack cardsInfoFirst={{"Health Insurance":"", 
                                      "Our Services":"" ,
                                      "Testimonials":"",
                                      "Meet the Doctor":"",
                                      }}
                         />
          </div>
          
          {/* <About/>  */}
          <div className='flex my-[200px]'>
            <InfoBanner title={"Try Out StemWave!"}/>
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
          <Footer/>
        </div>

      </div>
    </div>
  );
};

export default Home;
