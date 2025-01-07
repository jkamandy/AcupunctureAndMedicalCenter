import React, { useState, useEffect, useRef } from 'react';
import CardFrame from '../../../shared/components/CardFrame/CardFrame';

const CardStack = ({ cardsInfoFirst, isFlip }) => {
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
    <div
      ref={ref}
      className={`flex flex-col items-center justify-center gap-y-6 transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      {/* <div className='flex justify-center w-screen mt-5'>
        <h1 className='text-white left-5 top-4 z-[-1] text-[152px] opacity-70 font-spartan font-medium text-start leading-[2px] uppercase tracking-[-10px]'>Our Services</h1>
      </div> */}

      {/* TODO: Create general card vs FlipCard */}

      <div className="z-[5] flex items-center justify-start gap-6 pt-14">
        {Object.entries(cardsInfoFirst).map(([title, description], index) => (
          <div className="w-[280px]">
            <CardFrame
              title={title}
              description={description[0]}
              bgImage={description[1]}
              isFlip={isFlip}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardStack;
