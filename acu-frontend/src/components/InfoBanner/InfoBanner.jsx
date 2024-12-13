import React from 'react';
import { useState } from 'react';
import swImg from '../../assets/stemwave.svg'
import swMachine from '../../assets/swmachine.svg'
import Button from '../../shared/components/Button/Button';

// TODO: future -- Create this into a more general component
const InfoBanner = ({ title, body, images }) => {

  return (
      <>
        <div className={`relative flex flex-col items-start justify-start pl-[50px] w-[80%] h-[300px] bg-multi-gradient hover:bg-opacity-50 hover:[transition:color_0.3s_ease-in-out;] rounded-tr-xl rounded-br-xl`}>
          <div className='py-8'>
            <img src={swImg}></img>
            {/* <span className='leading-[38px] font-spartan text-[48px] flex text-center font-semibold text-[#92BF7C] underline'>{title}</span> */}
            <div className='flex'>
                <div className='flex flex-col mt-3'>
                    <span className='w-[70%] 4xl:text-[20px] text-[18px] font-spartan font-light mt-5 text-[#D6D6D6] leading-[21px]'>Experience the latest in non-invasive pain relief with the Stemwave machine. Using advanced acoustic wave therapy, this innovative technology promotes healing, reduces inflammation, and enhances mobility. Safe, effective, and FDA-approved, the Stemwave machine is designed to help you get back to feeling your best.</span>
                    <div className='flex items-center '>
                        <span className='4xl:text-[20px] text-[18px] font-spartan font-light mt-5 text-[#D6D6D6] leading-[21px]'> <span className='font-semibold text-[#92BF7C] underline'>Call</span> and ask about our introductory offer!</span>
                        <Button url="https://stemwave.com/our-technology/" bordered label='Learn more about StemWave' className='mt-5 ml-6 font-spartan text-[18px] bg-[#868686] bg-opacity-50 hover:bg-[#434343] font-light'></Button>
                    </div>
                </div>
            </div>
            
            
            <img className='flex z-0 absolute right-0 bottom-0' src={swMachine}></img>
          </div>
        </div>
      </>
  );
};


export default InfoBanner;

