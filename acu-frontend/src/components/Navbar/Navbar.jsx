import React from 'react';
import Button from '../../shared/components/Button/Button';
import AMCBanner from '../../assets/acu-banner.svg'

import { FaPhone } from "react-icons/fa6";



const Navbar = () => {
  const handleClick = () => {
    // alert('Button clicked!');
  };

  return (
    <div className='h-[80px] z-10 py-4 px-12 bg-[#F3F3F3] flex items-center justify-between drop-shadow-lg fixed w-full'>
      {/* <h1 className='text-[40px]'>Acupuncture Medical Center</h1> */}
      <div className='w-1/5'>
        <img className='h-[50px] w-auto' src={AMCBanner}></img>
      </div>
      <div className='flex items-center '>
        <Button
          label="About" 
          onClick={handleClick} 
          // className="border-[1px] border-black p-1 m-1" 
        />
        <Button
          label="Services" 
          onClick={handleClick} 
          // className="border-[1px] border-black p-1 m-1" 
        />
        <Button
          label="FAQ" 
          onClick={handleClick} 
          // className="border-[1px] border-black p-1 m-1" 
        />
        <Button
          label="Contact" 
          onClick={handleClick}
          // bordered={true} //
          // className="border-[1px] border-black p-1 m-1" 
        />
        <div className='flex flex-col items-center justify-center'>
          <Button
            label="Schedule an Appointment" 
            onClick={handleClick}
            bordered={true} //
            // className="border-[1px] border-black p-1 m-1" 
          />
          <div className='flex items-center justify-center hover:scale-105 hover:cursor-pointer group'>
            <FaPhone className='text-[14px] mr-2 group-hover:text-[#92BF7C]'/>
            <span className='font-spartan uppercase text-[12px] group-hover:text-[#92BF7C]'> (949)-206-1040 </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
