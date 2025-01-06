import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import AMCbg from '../../assets/acu-bg-sample.svg';
import AMCbgVideo from '../../assets/videos/bg-video.mp4';
import Footer from '../../components/Footer/Footer';
import CardStack from '../../components/Home/CardStack/CardStack';
// import AppAccordion from '../../components/Accordion/Accordion';

import acu0 from '../../assets/services/acu0.svg';
import acu1 from '../../assets/services/acu1.svg';
import acu2 from '../../assets/services/acu2.svg';
import acu3 from '../../assets/services/acu3.svg';
import acu4 from '../../assets/services/acu4.svg';
import acu5 from '../../assets/services/acu5.svg';
import acu6 from '../../assets/services/acu6.svg';
import acu7 from '../../assets/services/acu7.svg';

const OurServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

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
            <h1 className="flex gap-12 font-spartan text-[85px] font-medium tracking-[-3px] drop-shadow-md">
              Our Services
            </h1>
          </div>
          <div className="mb-[100px] flex w-full flex-col items-center justify-center">
            {/* <AppAccordion /> */}
            <CardStack
              cardsInfoFirst={{
                Acupuncture: [
                  `A traditional Chinese medicine practice that involves inserting thin needles into specific points on the body to stimulate energy flow, known as "Qi" (pronounced "chee"). It is commonly used to relieve pain, reduce stress, and promote overall well-being by balancing the body's natural energy pathways. Modern research also suggests it may help with various conditions, including migraines, arthritis, and anxiety.`,
                  acu0,
                ],
                'Electro-Acupuncture': [
                  `A modern variation of traditional acupuncture where a mild electrical current is passed through needles inserted at specific acupuncture points. This technique enhances the stimulation of the points, potentially increasing the effectiveness of pain relief and treatment for conditions like chronic pain, nerve injuries, and muscle spasms. It is often used in combination with traditional acupuncture to promote healing and improve overall therapeutic outcomes.`,
                  acu1,
                ],
                Massage: [
                  `Involves manipulating the body’s soft tissues, including muscles, tendons, and ligaments, to promote relaxation and alleviate pain. Techniques can range from gentle strokes to deep pressure, depending on the type of massage and the individual's needs. It is widely used to reduce stress, improve circulation, relieve muscle tension, and enhance overall well-being.`,
                  acu2,
                ],
                Cupping: [
                  `A traditional therapy that involves placing cups on the skin to create suction, which helps improve blood flow, reduce muscle tension, and promote healing. The suction can be achieved through heat or mechanical devices, and it is often used to relieve pain, inflammation, and stress. This practice is commonly integrated into wellness routines for its relaxing and restorative benefits.`,
                  acu3,
                ],
              }}
            />
            <CardStack
              cardsInfoFirst={{
                'Tens Electro Muscle Stimulation': [
                  `TENS (Transcutaneous Electrical Nerve Stimulation) is a therapy that uses a device to deliver low-voltage electrical currents through electrodes placed on the skin. This stimulation targets nerves and muscles to relieve pain, reduce inflammation, and improve circulation. Commonly used for managing chronic pain, muscle rehabilitation, and post-injury recovery, TENS is a non-invasive and drug-free treatment option.`,
                  acu4,
                ],
                'Nutritional Supplements': [
                  `Products designed to provide essential nutrients, such as vitamins, minerals, amino acids, and herbal extracts, that may be lacking in a person’s diet. They support overall health, boost energy levels, and address specific deficiencies or health concerns. While supplements can enhance well-being, they are most effective when used alongside a balanced diet and healthy lifestyle.`,
                  acu5,
                ],
                Moxibustion: [
                  'A traditional Chinese medicine therapy that involves burning dried mugwort (moxa) near specific acupuncture points on the body. The heat generated by moxa stimulates circulation, enhances the flow of energy (Qi), and promotes healing. It is often used to relieve pain, improve digestion, and support overall wellness, sometimes combined with acupuncture for enhanced effectiveness.',
                  acu6,
                ],
                'Herbal Supplements': [
                  `Natural products made from plants or plant extracts designed to support health and address specific conditions. They are often used to enhance immunity, reduce stress, and promote overall well-being. While generally considered safe, herbal supplements should be taken with care, as they can interact with medications or cause side effects in some individuals.`,
                  acu7,
                ],
              }}
            />
          </div>
          <div className="mb-[100px] mt-2 flex w-[1200px] items-center">
            <span className="z-10 self-start font-spartan text-[20px] font-light text-[#D6D6D6]">
              Discover the range of services we offer to help you achieve
              optimal health and wellness. From expert acupuncture treatments to
              therapeutic massages and holistic herbal remedies, our
              personalized care is designed to meet your unique needs. Explore
              how our services can bring balance and vitality to your life.
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OurServices;
