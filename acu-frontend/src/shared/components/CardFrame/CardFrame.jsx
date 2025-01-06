import React from 'react';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const CardFrame = ({ title, description, bgImage }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        style={{
          backgroundImage: `${bgImage ? `url(${bgImage})` : `none`}`,
        }}
        className={`relative flex h-[360px] items-center justify-center ${!bgImage && 'bg-black'} rounded-none bg-opacity-40 hover:cursor-pointer hover:bg-opacity-50 hover:[transition:color_0.3s_ease-in-out;]`}
        onClick={handleFlip}
      >
        <div className="p-5">
          <span className="flex text-center font-spartan text-[48px] leading-[45px] text-[#D6D6D6]">
            {title}
          </span>
        </div>
      </div>

      <div
        className={`relative flex h-[360px] items-start justify-center bg-black bg-opacity-60 hover:cursor-pointer hover:bg-opacity-50 hover:[transition:color_0.3s_ease-in-out;]`}
        onClick={handleFlip}
      >
        <div className="p-5">
          <span className="flex self-start text-left font-spartan text-[17px] font-light leading-[21px] text-[#D6D6D6]">
            {description}
          </span>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default CardFrame;
