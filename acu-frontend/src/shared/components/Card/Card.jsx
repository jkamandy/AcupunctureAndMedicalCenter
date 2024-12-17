import React from 'react';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const Card = ({ title, desc, bgImage }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* front */}
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className={`h-[220px] w-[270px] rounded-[20px] border-[1px] border-opacity-5 bg-black bg-opacity-40 bg-cover hover:cursor-pointer hover:bg-opacity-50 hover:[transition:color_0.3s_ease-in-out;]`}
        onClick={handleFlip}
      >
        <div className="p-5">
          <span className="font-spartan text-[38px] leading-[34px]">
            {title}
          </span>
        </div>
      </div>

      {/* back */}
      <div
        className={`h-[220px] w-[270px] rounded-[20px] bg-black bg-opacity-70 hover:cursor-pointer hover:bg-opacity-50 hover:[transition:color_0.3s_ease-in-out;]`}
        onClick={handleFlip}
      >
        <div className="px-5 py-2">
          <span className="font-spartan text-[16px] leading-[14px]">
            {desc}
          </span>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
