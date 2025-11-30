import React, { useState, useEffect } from 'react';
import Button from '../../shared/components/Button/Button';
import AMCBanner from '../../assets/acu-banner.svg';
import { Link } from 'react-router-dom';
import NavDrawer from '../Drawer/Drawer';

const Navbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledPast = window.scrollY > window.innerHeight;
      setHideNavbar(scrolledPast);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
      handleScroll(); // re-evaluate visibility when resizing
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <div
        className={`fixed z-20 hidden h-[80px] w-full items-center justify-between bg-[#F3F3F3] px-12 py-4 drop-shadow-lg transition-all duration-500 ease-in-out 2lg:flex ${
          hideNavbar && !isMobile
            ? 'pointer-events-none -translate-y-full opacity-0'
            : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="w-[300px]">
          <Link to="/">
            <img className="h-[75px] w-auto" src={AMCBanner} alt="AMC Banner" />
          </Link>
        </div>

        <div className="flex items-center">
          <Link to="/">
            <Button className="mx-2" label="Home" />
          </Link>
          <Link to="/About">
            <Button className="mx-2" label="About" />
          </Link>
          <Link to="/OurServices">
            <Button className="mx-2" label="Services" />
          </Link>
          <Link to="/Testimonials">
            <Button className="mx-2" label="Testimonials" />
          </Link>
          <Link to="/FAQ">
            <Button className="mx-2" label="FAQ" />
          </Link>
          <Link to="/Contact">
            <Button className="mx-2" label="Contact" />
          </Link>
          <div className="flex flex-col items-center justify-center">
            <Link to="/Contact">
              <Button
                className="mx-2"
                label="Schedule an Appointment"
                bordered
              />
            </Link>
          </div>
        </div>
      </div>

      {/* NAVDRAWER */}
      <div
        className={`fixed right-5 top-5 z-30 text-[24px] text-[#333] transition-all duration-500 ease-in-out ${
          isMobile || hideNavbar
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <NavDrawer />
      </div>
    </>
  );
};

export default Navbar;
