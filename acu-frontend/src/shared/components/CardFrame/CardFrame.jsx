import React from 'react';
import { useState } from 'react';

const CardFrame = ({ title }) => {
  return (
    <>
      <div
        className={`relative flex h-[300px] items-center justify-center bg-black bg-opacity-40 hover:cursor-pointer hover:bg-opacity-50 hover:[transition:color_0.3s_ease-in-out;]`}
      >
        <div className="p-5">
          <span className="flex text-center font-spartan text-[48px] leading-[38px] text-[#D6D6D6]">
            {title}
          </span>
        </div>
      </div>
    </>
  );
};

export default CardFrame;
