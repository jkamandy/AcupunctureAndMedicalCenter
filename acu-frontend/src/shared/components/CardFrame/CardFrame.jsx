import React from 'react';
import { useState } from 'react';



const CardFrame = ({ title }) => {

  return (
      <>
        <div className={`relative flex items-center justify-center h-[300px] bg-black bg-opacity-40 hover:bg-opacity-50 hover:[transition:color_0.3s_ease-in-out;] hover:cursor-pointer`}>
          <div className='p-5'>
            <span className='leading-[38px] font-spartan text-[48px] flex text-center text-[#D6D6D6]'>{title}</span>
          </div>
        </div>
      </>
  );
};


export default CardFrame;

