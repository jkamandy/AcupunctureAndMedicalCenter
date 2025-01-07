import React from 'react';
import Button from '../../shared/components/Button/Button';
import AMCBanner from '../../assets/acu-banner.svg';
import { Link } from 'react-router-dom';

import { FaPhone } from 'react-icons/fa6';

const Navbar = () => {
  const handleClick = () => {
    // alert('Button clicked!');
  };

  return (
    <div className="fixed z-20 flex h-[80px] w-full items-center justify-between bg-[#F3F3F3] px-12 py-4 drop-shadow-lg">
      {/* <h1 className='text-[40px]'>Acupuncture Medical Center</h1> */}
      <div className="w-1/5">
        <Link to="/">
          <img className="h-[50px] w-auto" src={AMCBanner}></img>
        </Link>
      </div>
      <div className="flex items-center">
        <Button
          className="mx-2"
          label="About"
          onClick={handleClick}
          // className="border-[1px] border-black p-1 m-1"
        />
        <Link to="/OurServices">
          <Button
            className="mx-2"
            label="Services"
            onClick={handleClick}
            // className="border-[1px] border-black p-1 m-1"
          />
        </Link>
        {/* <Link to="/Testmonials">
          <Button className="mx-2" label="Testimonials" onClick={handleClick} />
        </Link> */}
        <Link to="/FAQ">
          <Button
            className="mx-2"
            label="FAQ"
            onClick={handleClick}
            // className="border-[1px] border-black p-1 m-1"
          />
        </Link>
        <Button
          className="mx-2"
          label="Contact"
          onClick={handleClick}
          // bordered={true} //
          // className="border-[1px] border-black p-1 m-1"
        />
        <div className="flex flex-col items-center justify-center">
          <Button
            className="mx-2"
            label="Schedule an Appointment"
            onClick={handleClick}
            bordered={true} //
            // className="border-[1px] border-black p-1 m-1"
          />
          {/* <div className='flex items-center justify-center hover:scale-105 hover:cursor-pointer group'>
            <FaPhone className='text-[14px] mr-2 group-hover:text-[#92BF7C]'/>
            <span className='font-spartan uppercase text-[12px] group-hover:text-[#92BF7C]'> (949)-206-1040 </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
