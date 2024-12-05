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
        <div style={{ backgroundImage: `url(${bgImage})` }} className={`bg-cover border-[1px] border-opacity-5  h-[220px] w-[270px] bg-black bg-opacity-40 rounded-[20px] hover:bg-opacity-50 hover:[transition:color_0.3s_ease-in-out;] hover:cursor-pointer`} onClick={handleFlip}>
          <div className='p-5'>
            <span className='leading-[34px] font-spartan text-[38px]'>{title}</span>
          </div>
        </div>

        {/* back */}
        <div className={`h-[220px] w-[270px] bg-black bg-opacity-70 rounded-[20px] hover:bg-opacity-50 hover:[transition:color_0.3s_ease-in-out;] hover:cursor-pointer`} onClick={handleFlip}>
          <div className='px-5 py-2'>
            <span className='leading-[14px] font-spartan text-[16px]'>{desc}</span>
          </div>
        </div>
      </ReactCardFlip>
  );
};


export default Card;

