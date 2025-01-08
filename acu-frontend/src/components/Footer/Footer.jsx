import React from 'react';

import acuLogoSm from '../../assets/acu-logo-sm.svg';

const Footer = ({}) => {
  return (
    <div className="relative h-[70px] w-screen bg-black bg-opacity-30">
      <div className="flex items-center justify-between px-8 py-0 pt-5 md:py-5">
        <span className="font-spartan text-[9px] font-extralight text-white 2xs:text-[11px] md:text-[15px]">
          Copyright © 2024 Acupuncture & Medical Center. All Rights Reserved.
        </span>
        <img className="" src={acuLogoSm}></img>
      </div>
    </div>
  );
};

export default Footer;
