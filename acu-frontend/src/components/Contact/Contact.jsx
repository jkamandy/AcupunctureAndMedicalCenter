import React from 'react';
import { useState } from 'react';

import fb from '../../assets/icons/Facebook.svg';
import yp from '../../assets/icons/Yelp.svg';
import ins from '../../assets/icons/Instagram.svg';
import ml from '../../assets/icons/Mail.svg';
import Button from '../../shared/components/Button/Button';

// TODO: future -- Create this into a more general component
const Contact = ({ title, body, images }) => {
  const teamsURL =
    'https://teams.microsoft.com/l/chat/0/0?users=vincent.poon@appliedmedical.com';
  return (
    <>
      {/* <div className="flex flex-col"> */}
      <div
        id="Contact"
        className={`relative flex h-auto w-[80%] bg-multi-gradient p-8 hover:bg-opacity-50 hover:[transition:color_0.3s_ease-in-out;] max-2lg:flex-col max-xs:w-full 2lg:w-[1200px] 2lg:rounded-lg`}
      >
        <div className="flex w-full items-center justify-center 2lg:w-1/2">
          <div className="flex flex-col items-center justify-center">
            <h1 className="flex gap-12 font-spartan text-[55px] font-medium tracking-[-3px] drop-shadow-md 2lg:text-[85px]">
              Contact Us
            </h1>
            <span className="text-center font-spartan text-[15px] font-light 2lg:text-[18px]">
              Tel: (949)-206-1040 • 30212 Tomas, Suite 180
            </span>
            <div className="mt-6 flex w-full items-center justify-center [&_a:not(:first-of-type)]:ml-5">
              <a href="">
                <img src={ins} className="hover:scale-105"></img>
              </a>
              <a>
                <img src={yp} className="hover:scale-105"></img>
              </a>
              <a>
                <img src={fb} className="hover:scale-105"></img>
              </a>
              <a href="mailto:test@gmail.com">
                <img src={ml} className="hover:scale-105" href=""></img>
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a href="mailto:test@gmail.com">
                {/* <a href={teamsURL}> */}
                <Button
                  bordered
                  label="Schedule An Appointment"
                  className="mt-8 bg-[#868686] bg-opacity-50 font-spartan text-[24px] font-light hover:bg-[#434343]"
                ></Button>
              </a>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center">
              <span className="text-center font-spartan font-medium underline">
                Hours:
              </span>
              <span className="text-center font-spartan font-light">
                Monday - Friday: 8:00 - 6:00 pm
              </span>
              <span className="text-center font-spartan font-light">
                Saturday: 8:00 - 1:00 pm
              </span>
              <span className="text-center font-spartan font-light">
                Sunday: Closed
              </span>
            </div>
          </div>
          {/* <img src={swImg}></img> */}
          {/* <span className='leading-[38px] font-spartan text-[48px] flex text-center font-semibold text-[#92BF7C] underline'>{title}</span> */}
          {/* <div className='flex'>
                <div className='flex flex-col mt-3'>
                    <span className='w-[70%] 4xl:text-[20px] text-[18px] font-spartan font-light mt-5 text-[#D6D6D6] leading-[21px]'>Experience the latest in non-invasive pain relief with the Stemwave machine. Using advanced acoustic wave therapy, this innovative technology promotes healing, reduces inflammation, and enhances mobility. Safe, effective, and FDA-approved, the Stemwave machine is designed to help you get back to feeling your best.</span>
                    <div className='flex items-center '>
                        <span className='4xl:text-[20px] text-[18px] font-spartan font-light mt-5 text-[#D6D6D6] leading-[21px]'> <span className='font-semibold text-[#92BF7C] underline'>Call</span> and ask about our introductory offer!</span>
                        <Button url="https://stemwave.com/our-technology/" bordered label='Learn more about StemWave' className='mt-5 ml-6 font-spartan text-[18px] bg-[#868686] bg-opacity-50 hover:bg-[#434343] font-light'></Button>
                    </div>
                </div>
            </div> */}

          {/* <img className='flex z-0 absolute right-0 bottom-0' src={swMachine}></img> */}
        </div>
        <div className="flex w-full items-center justify-center max-2lg:mt-10 2lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.8266157458177!2d-117.59833838479707!3d33.64236188071774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcda8b99aa1bd5%3A0x72593a3c2f1b18e6!2s30212%20Tomas%2C%20Rancho%20Santa%20Margarita%2C%20CA%2092688!5e0!3m2!1sen!2sus!4v1702394653443"
            width="500"
            height="350"
            className="shadow-lg"
            // style="border:0;"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* <div>
          <span className="text-white">test</span>
        </div> */}
      {/* </div> */}
    </>
  );
};

export default Contact;
