import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import AMCbg from '../../assets/acu-bg-sample.svg';
import AMCbgVideo from '../../assets/videos/bg-video.mp4';

import Button from '../../shared/components/Button/Button';

/*
    Notes:
    - Navbar goes here
    - dash
*/

const Error = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPageVisible, setIsPageVisible] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    // alert('Button clicked!');
  };

  return (
    <div className="relative z-0 h-auto w-full">
      {/* <img className={`h-auto w-screen opacity-30 self-center fixed ${isVisible ? "backdrop-blur-sm" : "blur-lg"} transition duration-500 ease-in-out`} src={AMCbg}></img> */}
      {/* TODO: convert the video into its own component */}
      <video
        className={`fixed left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 transform object-cover opacity-90 backdrop-blur-sm transition duration-500 ease-in-out ${isVisible ? 'backdrop-blur-sm' : 'blur-lg'}`}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={AMCbgVideo} type="video/mp4" />
        {/* If the video is not supported on certain browsers, the bgImage below will substitute it */}
        <img
          className={`fixed h-auto w-screen self-center opacity-30 ${isVisible ? 'backdrop-blur-sm' : 'blur-lg'} transition duration-500 ease-in-out`}
          src={AMCbg}
        ></img>
      </video>
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        {/* <div>
          <Navbar />
        </div> */}
        {/* <Navbar/> */}

        {/* <div className="items-center justify-center"> */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-spartan text-[192px] font-medium uppercase leading-[100px] tracking-[-8px] text-white opacity-70">
            404
          </h1>
          <span className="mt-3 w-[80%] text-center font-spartan text-white opacity-70">
            Sorry, the page you are looking for does not exist. Please return to
            the home page.
          </span>
          <Button
            label="Return to Home"
            onClick={handleClick}
            bordered={true} //
            // className="border-[1px] border-black p-1 m-1"
            className="mx-0 mt-5 4xl:text-[20px]"
          />
        </div>

        {/* </div> */}

        {/* <div className=' text-[#D6D6D6] flex justify-center items-center'><Testimonals/> </div> */}

        {/* <div>
          <Footer />
        </div> */}
      </div>
    </div>
  );
};

export default Error;
