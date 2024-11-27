import React from 'react';
// import Button from '../../shared/components/Button/Button';
import Navbar from '../Navbar/Navbar';
import AMCLogo from '../../assets/acu-logo.svg'
import AMCbg from '../../assets/acu-bg-sample.svg'
import Card from '../../shared/components/Card/Card';



/*
    Notes:
    - Navbar goes here
    - dash
*/

const Home = () => {
//   const handleClick = () => {
//     alert('Button clicked!');
//   };

  return (
    <div>
        <img className=' w-screen opacity-30 self-center fixed blur-lg' src={AMCbg}></img>
        <div className='h-screen w-screen'>
            <div > 
                <Navbar/>
            </div>
            {/* <Navbar/> */}
        <div className='h-[91%] text-[#D6D6D6] flex justify-center items-center'>
            <div className='relative'> <span className='text-[80px] font-medium font-spartan tracking-[-2px] flex gap-12 '>Compassion with us is a <img className='absolute right-[205px] top-1' src={AMCLogo}></img>radition</span></div>
        </div>

        <div className='h-screen text-[#D6D6D6] flex justify-center items-center'>
            <Card/>
        </div>

      </div>
    </div>
  );
};

export default Home;
