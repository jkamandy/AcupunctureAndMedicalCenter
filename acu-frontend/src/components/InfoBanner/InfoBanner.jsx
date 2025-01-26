import React from 'react';
import { useState } from 'react';
import swImg from '../../assets/stemwave.svg';
import swMachine from '../../assets/swmachine.svg';
import Button from '../../shared/components/Button/Button';

// TODO: future -- Create this into a more general component
const InfoBanner = ({ title, body, images }) => {
  return (
    <>
      <div
        className={`relative flex flex-col items-start justify-start bg-multi-gradient px-8 hover:bg-opacity-50 hover:[transition:color_0.3s_ease-in-out;] 2lg:w-[80%] 2lg:rounded-br-xl 2lg:rounded-tr-xl`}
      >
        <div className="flex-col justify-start py-8">
          <img className="flex max-md:scale-75" src={swImg}></img>
          {/* <span className='leading-[38px] font-spartan text-[48px] flex text-center font-semibold text-[#92BF7C] underline'>{title}</span> */}
          <div className="flex">
            <div className="mt-3 flex flex-col">
              <span className="mt-5 font-spartan text-[18px] font-light leading-[21px] text-[#D6D6D6] sm:w-[70%] 4xl:text-[20px]">
                Experience the latest in non-invasive pain relief with the
                Stemwave machine. Using advanced acoustic wave therapy, this
                innovative technology promotes healing, reduces inflammation,
                and enhances mobility. Safe, effective, and FDA-approved, the
                Stemwave machine is designed to help you get back to feeling
                your best.
              </span>
              <div className="z-10 flex items-center justify-start max-sm:ml-0 max-sm:flex-col max-sm:items-start">
                <span className="mt-5 font-spartan text-[18px] font-light leading-[21px] text-[#D6D6D6] 4xl:text-[20px]">
                  {' '}
                  <span className="font-semibold text-[#92BF7C] underline">
                    Call
                  </span>{' '}
                  and ask about our introductory offer!
                </span>
                <a href="https://stemwave.com/our-technology/">
                  <Button
                    standard
                    // url="https://stemwave.com/our-technology/"
                    bordered
                    label="Learn more about StemWave"
                    className="mt-5 bg-[#868686] bg-opacity-50 font-spartan text-[18px] font-light hover:bg-[#434343] sm:ml-6"
                  ></Button>
                </a>
              </div>
            </div>
          </div>

          <img
            className="absolute bottom-0 right-0 z-0 flex opacity-30 md:opacity-100"
            src={swMachine}
          ></img>
        </div>
      </div>
    </>
  );
};

export default InfoBanner;
