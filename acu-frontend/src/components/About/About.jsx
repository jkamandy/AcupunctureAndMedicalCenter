import React, { useState, useEffect, useRef } from "react";

import acuLogo from '../../assets/acu-logo.svg'

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Animation triggers when 10% of the element is visible
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
    <div className="relative">
        <div
        ref={ref}
        className={`mt-8 flex justify-center flex-col items-center w-screen h-screen transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        >
        <div className={`flex flex-col items-center w-screen bg-black bg-opacity-40 mt-10 pb-10`}>
            <h1 className="text-white text-[152px] opacity-70 font-spartan font-medium h-[180px] uppercase tracking-[-10px]">
                Who We Are
            </h1>
            <div className="z-10">
                <div className='flex flex-col items-center justify-center p-5 w-full px-14'>
                    <span className='leading-[24px] font-spartan font-light text-[18px]'>Acupuncture and Medical Center's mission is to provide personalized, high-quality care on an as-needed or preventative basis.  We have created a practice that we believe in and choose for our own family members.We wish to take this opportunity to better acquaint you with our services. We offer the very best and latest technique in alternative health care methods for all your needs. Our top priority is you, your health and well being. We are a full service clinic offering consultation, examination, oriental medical diagnosis, specific acupuncture treatments, nutritional and herbal counseling, massage therapy, physio-therapy, and patient education.​</span>
                    <span className='leading-[24px] font-spartan font-light text-[18px] mt-6'>We are a full-service family practice of dedicated, experienced physicians who believe in working with our patients to maintain and improve their health. We work together to serve your entire family for all of your medical needs in all stages of life. Our physicians believe in providing comprehensive health care services to our patients in a friendly, relaxed atmosphere. We also believe in educating our patients as we work with them to achieve the best physical state possible. At Acupuncture and Medical Center we understand the concerns and requirements of the modern medical consumer. We know that you are sophisticated and well informed, and we believe that you have a right to expect the highest degree of quality, and efficiency in health care for you and your family. We also recognize that each individual is unique. Thus we accept it as our obligation as medical professionals to offer a wide range of personally tailored service in order to accommodate all your health needs.</span>
                    <span className='leading-[24px] font-spartan font-light text-[18px] mt-6'>My personal belief is in the satisfaction and gratification of knowing that I was able to restored happiness and well being in another person. My biggest achievement and fulfillment in life is that I have been blessed and hope to continue to see happiness and good health in my patients. I am happy to have the opportunity to assist you in obtaining optimal health and do encourage you to call or come in our office as I would be happy to answer any questions that you may have.</span>

                </div>
            </div>
            {/* <div className="relative w-full"> */}
                <img className="mt-6 z-0 self-center scale-105" src={acuLogo}></img>
            {/* </div> */}
            
        </div>

        </div>
    </div>
  );
};

export default About;
