import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { IoChevronDownSharp } from "react-icons/io5";
import clsx from 'clsx';
import "./styles.css";


// TODO: 
const AccordionItem = ({ value, header, children }) => {
    return (
        <Accordion.Item value={value} className="border-b w-full border-[#D6D6D6]">
            <Accordion.Header>
                <Accordion.Trigger
                    className={clsx(
                        ' AccordionTrigger flex group justify-between px-4 items-center w-full py-2 text-left text-[20px] text-[#D6D6D6] font-spartan',
                        'hover:text-[#92BF7C]',
                        
                    )}
                >
                    {header}
                    <IoChevronDownSharp
                        className="AccordionChevron w-5 h-10"
                    />
                </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content
                className="AccordionContent px-5"
            >
                <div className="py-2 font-spartan font-light text-[16px]">{children}</div>
            </Accordion.Content>
        </Accordion.Item>
    );
};

export default AccordionItem;
