import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import AMCbg from '../../assets/acu-bg-sample.svg';
import AMCbanner from '../../assets/acu-banner-light.svg';
import AMCbgVideo from '../../assets/videos/bg-video.mp4';
import Footer from '../../components/Footer/Footer';

const MeetTheTeam = () => {
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
        <div
          //   className="flex h-auto flex-col items-center justify-start text-[#D6D6D6]"
          ref={ref}
          className={`flex h-auto flex-col items-center justify-start text-[#D6D6D6] transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="mt-[100px]">
            <h1 className="flex gap-12 font-spartan text-[75px] font-medium tracking-[-3px] drop-shadow-md md:text-[85px]">
              Who We Are
            </h1>
          </div>
          <div className="mb-[100px] mt-2 flex w-[80%] flex-col items-center xl:w-[1200px] [&_span:not(:first-of-type)]:mt-5">
            <span className="z-10 self-start font-spartan text-[18px] font-light text-[#D6D6D6]">
              Acupuncture and Medical Center's mission is to provide
              personalized, high-quality care on an as-needed or preventative
              basis. We have created a practice that we believe in and choose
              for our own family members. We wish to take this opportunity to
              better acquaint you with our services. We offer the very best and
              latest techniques in alternative health care methods for all your
              needs. Our top priority is you—your health and well-being. We are
              a full-service clinic offering consultation, examination, oriental
              medical diagnosis, specific acupuncture treatments, nutritional
              and herbal counseling, massage therapy, physiotherapy, and patient
              education.
            </span>
            <span className="z-10 self-start font-spartan text-[18px] font-light text-[#D6D6D6]">
              We are a full-service family practice of dedicated, experienced
              physicians who believe in working with our patients to maintain
              and improve their health. We work together to serve your entire
              family for all of your medical needs at all stages of life. Our
              physicians believe in providing comprehensive health care services
              to our patients in a friendly, relaxed atmosphere. We also believe
              in educating our patients as we work with them to achieve the best
              physical state possible.
            </span>
            <span className="z-10 self-start font-spartan text-[18px] font-light text-[#D6D6D6]">
              At Acupuncture and Medical Center, we understand the concerns and
              requirements of the modern medical consumer. We know that you are
              sophisticated and well-informed, and we believe that you have a
              right to expect the highest degree of quality and efficiency in
              health care for you and your family. We also recognize that each
              individual is unique. Thus, we accept it as our obligation as
              medical professionals to offer a wide range of personally tailored
              services in order to accommodate all your health needs.
            </span>
            <span className="z-10 self-start font-spartan text-[18px] font-light text-[#D6D6D6]">
              Our personal belief is in the satisfaction and gratification of
              knowing that we were able to restore happiness and well-being in
              another person. Our biggest achievement and fulfillment in life is
              that we have been blessed and hope to continue to see happiness
              and good health in our patients. We are happy to have the
              opportunity to assist you in obtaining optimal health and
              encourage you to call or visit our office, as we would be happy to
              answer any questions that you may have. Many of the frequently
              asked questions can be found on our{' '}
              <a className="underline hover:text-[#92BF7C]" href="/FAQ">
                FAQ
              </a>{' '}
              page . If you like, you may contact us via our{' '}
              <a className="underline hover:text-[#92BF7C]" href="/Contact">
                Contact
              </a>{' '}
              page, and we will be delighted to answer any questions that have
              not been answered for you through our site.
            </span>
            <div className="mt-[100px]">
              <img className="scale-105 md:scale-125" src={AMCbanner}></img>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MeetTheTeam;
