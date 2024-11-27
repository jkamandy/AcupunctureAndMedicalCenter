import React from 'react';
import Button from '../../shared/components/Button/Button';
import AMCBanner from '../../assets/acu-banner.svg'


const Navbar = () => {
  const handleClick = () => {
    // alert('Button clicked!');
  };

  return (
    <div className='py-4 px-12 bg-[#F3F3F3] flex items-center justify-between drop-shadow-sm sticky'>
      {/* <h1 className='text-[40px]'>Acupuncture Medical Center</h1> */}
      <div className='w-1/5'>
        <img src={AMCBanner}></img>
      </div>
      <div className='flex'>
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
      </div>
    </div>
  );
};

export default Navbar;
