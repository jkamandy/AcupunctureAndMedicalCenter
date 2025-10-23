import React, { useState, useEffect, useRef } from "react";
import Card from "../../shared/components/Card/Card";

import acu0 from "../../assets/services/acu-0.svg";
import acu1 from "../../assets/services/acu-1.svg";
import acu2 from "../../assets/services/acu-2.svg";
import acu3 from "../../assets/services/acu-3.svg";
import acu4 from "../../assets/services/acu-4.svg";
import acu5 from "../../assets/services/acu-5.svg";
import acu6 from "../../assets/services/acu-6.svg";
import acu7 from "../../assets/services/acu-7.svg";

const bgImages = [acu0, acu1, acu2, acu3, acu4, acu5, acu6, acu7];

const ServiceCards = ({ cardsInfoFirst, cardsInfoSecond }) => {
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
      className={`flex flex-col gap-y-6 w-[80%] justify-center items-center mt-12 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex justify-center w-screen mt-5">
        <h1 className="text-white left-5 top-4 z-[-1] text-[152px] opacity-70 font-spartan font-medium text-start leading-[2px] uppercase tracking-[-10px]">
          Our Services
        </h1>
      </div>

      <div className="flex gap-6 z-[5] pt-14">
        {Object.entries(cardsInfoFirst).map(([title, description], index) => (
          <div>
            <Card title={title} desc={description} bgImage={bgImages[index]} />
          </div>
        ))}
      </div>

      <div className="flex gap-6">
        {Object.entries(cardsInfoSecond).map(([title, description], index) => (
          <div>
            <Card
              title={title}
              desc={description}
              bgImage={bgImages[index + 4]}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
