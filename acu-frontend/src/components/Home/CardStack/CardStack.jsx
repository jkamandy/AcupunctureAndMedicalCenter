import React, { useState, useEffect, useRef } from "react";
import CardFrame from "../../../shared/components/CardFrame/CardFrame";



const CardStack = ({ cardsInfoFirst }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 } // Animation triggers when 10% of the element is visible
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
    <div ref={ref} className={`flex flex-col gap-y-6 justify-center items-center mt-12 transition-all duration-1000 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}>
      {/* <div className='flex justify-center w-screen mt-5'>
        <h1 className='text-white left-5 top-4 z-[-1] text-[152px] opacity-70 font-spartan font-medium text-start leading-[2px] uppercase tracking-[-10px]'>Our Services</h1>
      </div> */}

      {/* TODO: Create general card vs FlipCard */}
      
        <div className='flex gap-6 z-[5] pt-14 items-center justify-center'>
        {Object.entries(cardsInfoFirst).map(([title, description], index) => (
            <div className="w-[20%]"><CardFrame title={title} /></div>
        ))}
        </div>
        
    
      
    </div>
  );
};


export default CardStack;