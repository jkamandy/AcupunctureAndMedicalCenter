import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { IoChevronDownSharp } from 'react-icons/io5';
import clsx from 'clsx';
import './styles.css';

// TODO:
const AccordionItem = ({ value, header, children }) => {
  return (
    <Accordion.Item value={value} className="w-full border-b border-[#D6D6D6]">
      <Accordion.Header>
        <Accordion.Trigger
          className={clsx(
            'AccordionTrigger group flex w-full items-center justify-between px-1 py-2 text-left font-spartan text-[20px] text-[#D6D6D6]',
            'hover:text-[#92BF7C]',
          )}
        >
          {header}
          <IoChevronDownSharp className="AccordionChevron h-10 w-5" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="AccordionContent px-5">
        <div className="py-2 font-spartan text-[16px] font-light">
          {children}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default AccordionItem;
