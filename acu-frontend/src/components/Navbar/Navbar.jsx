import React from 'react';
import Button from '../../shared/components/Button/Button';
import AMCBanner from '../../assets/acu-banner.svg';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';

import { FaPhone } from 'react-icons/fa6';

import NavDrawer from '../Drawer/Drawer';
import { Drawer } from '@mui/material';

const Navbar = () => {
  const handleClick = () => {
    // alert('Button clicked!');
  };

  const handleDrawer = () => {
    // alert('Button clicked!');
  };

  const sendEmail = () => {};

  return (
    <>
      <div className="fixed z-20 hidden h-[80px] w-full items-center justify-between bg-[#F3F3F3] px-12 py-4 drop-shadow-lg 2lg:flex">
        {/* <h1 className='text-[40px]'>Acupuncture Medical Center</h1> */}
        {/* <div className="hidden w-full items-center justify-between lg:flex"> */}
        <div className="w-[300px]">
          <Link to="/">
            <img className="h-[50px] w-auto" src={AMCBanner}></img>
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/">
            <Button
              className="mx-2"
              label="Home"
              onClick={handleClick}
              // className="border-[1px] border-black p-1 m-1"
            />
          </Link>
          <Link to="/About">
            <Button
              className="mx-2"
              label="About"
              onClick={handleClick}
              // className="border-[1px] border-black p-1 m-1"
            />
          </Link>
          <Link to="/OurServices">
            <Button
              className="mx-2"
              label="Services"
              onClick={handleClick}
              // className="border-[1px] border-black p-1 m-1"
            />
          </Link>
          <Link to="/Testimonials">
            <Button
              className="mx-2"
              label="Testimonials"
              onClick={handleClick}
              // className="border-[1px] border-black p-1 m-1"
            />
          </Link>
          <Link to="/FAQ">
            <Button
              className="mx-2"
              label="FAQ"
              onClick={handleClick}
              // className="border-[1px] border-black p-1 m-1"
            />
          </Link>
          <Link to="/Contact">
            <Button
              className="mx-2"
              label="Contact"
              onClick={handleClick}
              // url="#Contact"
              // bordered={true} //
              // className="border-[1px] border-black p-1 m-1"
            />
          </Link>
          <div className="flex flex-col items-center justify-center">
            <Link to="mailto:test@gmail.com">
              <Button
                className="mx-2"
                label="Schedule an Appointment"
                onClick={handleClick}
                bordered={true} //
                // mailTo="test@gmail.com"
                // className="border-[1px] border-black p-1 m-1"
              />
            </Link>
            {/* <div className='flex items-center justify-center hover:scale-105 hover:cursor-pointer group'>
            <FaPhone className='text-[14px] mr-2 group-hover:text-[#92BF7C]'/>
            <span className='font-spartan uppercase text-[12px] group-hover:text-[#92BF7C]'> (949)-206-1040 </span>
          </div> */}
          </div>
        </div>
        {/* </div> */}
      </div>

      <div className="fixed top-5 z-20 text-[20px] text-[#F3F3F3] lg:hidden">
        {/* <GrClose /> */}
        {/* <RxHamburgerMenu /> */}
        <NavDrawer />
        {/* <Drawer /> */}
      </div>
    </>
  );
};

export default Navbar;
