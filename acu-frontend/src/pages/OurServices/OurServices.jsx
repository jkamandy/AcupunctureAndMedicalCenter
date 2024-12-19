import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import AMCbg from '../../assets/acu-bg-sample.svg';
import AMCbgVideo from '../../assets/videos/bg-video.mp4';
import Footer from '../../components/Footer/Footer';
import CardStack from '../../components/Home/CardStack/CardStack';
// import AppAccordion from '../../components/Accordion/Accordion';

const OurServices = () => {
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
        <div className="flex h-auto flex-col items-center justify-start text-[#D6D6D6]">
          <div className="mt-[100px]">
            <h1 className="flex gap-12 font-spartan text-[85px] font-medium tracking-[-3px] drop-shadow-md">
              Our Services
            </h1>
          </div>
          <div className="mb-[100px] flex w-full flex-col items-center justify-center">
            {/* <AppAccordion /> */}
            <CardStack
              cardsInfoFirst={{
                Acupuncture: `A traditional Chinese medicine practice that involves inserting thin needles into specific points on the body to stimulate energy flow, known as "Qi" (pronounced "chee"). It is commonly used to relieve pain, reduce stress, and promote overall well-being by balancing the body's natural energy pathways. Modern research also suggests it may help with various conditions, including migraines, arthritis, and anxiety.`,
                'Electro-Acupuncture': `A modern variation of traditional acupuncture where a mild electrical current is passed through needles inserted at specific acupuncture points. This technique enhances the stimulation of the points, potentially increasing the effectiveness of pain relief and treatment for conditions like chronic pain, nerve injuries, and muscle spasms. It is often used in combination with traditional acupuncture to promote healing and improve overall therapeutic outcomes.`,
                Massage: '',
                Cupping: '',
              }}
            />
            <CardStack
              cardsInfoFirst={{
                'Tens Electro Muscle Stimulation': '',
                'Nutritional Supplements': '',
                Moxibustion: '',
                'Herbal Supplements': '',
              }}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OurServices;
