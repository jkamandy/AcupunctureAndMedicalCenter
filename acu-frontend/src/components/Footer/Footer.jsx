import React from 'react';

import acuLogoSm from '../../assets/acu-logo-sm.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-black bg-opacity-30">
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-8 md:py-5">
        <span className="font-spartan text-[11px] font-extralight leading-snug text-white md:text-[15px]">
          Copyright © {currentYear} Acupuncture & Medical Center. All Rights
          Reserved.
        </span>
        <img
          className="h-auto w-[36px] shrink-0 md:w-auto"
          src={acuLogoSm}
          alt="Acupuncture & Medical Center logo"
        />
      </div>
    </footer>
  );
};

export default Footer;
