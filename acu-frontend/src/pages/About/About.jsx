import React from 'react';
import { useEffect, useState } from 'react';
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

const About = () => {
  const [isVisible, setIsVisible] = useState(true);
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
        className={`fixed inset-0 h-full w-full object-cover brightness-50 transition duration-500 ease-in-out`}
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

        <div className="flex h-screen flex-col items-center justify-start text-[#D6D6D6]">
          <div className="mt-[100px]">
            {' '}
            <h1 className="flex gap-12 font-spartan text-[85px] font-medium tracking-[-3px] drop-shadow-md">
              Who We Are
            </h1>
          </div>
          <div className="relative flex w-[1090px] flex-col">
            <span className="font-spartan text-[20px] font-light leading-[24px] text-[#D6D6D6]">
              Acupuncture and Medical Center's mission is to provide
              personalized, high-quality care on an as-needed or preventative
              basis.  We have created a practice that we believe in and choose
              for our own family members.We wish to take this opportunity to
              better acquaint you with our services. We offer the very best and
              latest technique in alternative health care methods for all your
              needs. Our top priority is you, your health and well being. We are
              a full service clinic offering consultation, examination, oriental
              medical diagnosis, specific acupuncture treatments, nutritional
              and herbal counseling, massage therapy, physio-therapy, and
              patient education.​
            </span>
            <span className="mt-10 text-right font-spartan text-[20px] font-light leading-[24px] text-[#D6D6D6]">
              We are a full-service family practice of dedicated, experienced
              physicians who believe in working with our patients to maintain
              and improve their health. We work together to serve your entire
              family for all of your medical needs in all stages of life. Our
              physicians believe in providing comprehensive health care services
              to our patients in a friendly, relaxed atmosphere. We also believe
              in educating our patients as we work with them to achieve the best
              physical state possible. At Acupuncture and Medical Center we
              understand the concerns and requirements of the modern medical
              consumer. We know that you are sophisticated and well informed,
              and we believe that you have a right to expect the highest degree
              of quality, and efficiency in health care for you and your family.
              We also recognize that each individual is unique. Thus we accept
              it as our obligation as medical professionals to offer a wide
              range of personally tailored service in order to accommodate all
              your health needs.
            </span>
            <span className="mt-10 font-spartan text-[20px] font-light leading-[24px] text-[#D6D6D6]">
              Our personal belief is in the satisfaction and gratification of
              knowing that we were able to restored happiness and well being in
              another person. Our biggest achievement and fulfillment in life is
              that we have been blessed and hope to continue to see happiness
              and good health in our patients. We are happy to have the
              opportunity to assist you in obtaining optimal health and do
              encourage you to call or come in our office as I would be happy to
              answer any questions that you may have.
            </span>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
