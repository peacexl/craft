import React from 'react';

const footer = () => {
  return (
    <footer className='lg: bg-[rgba(0,0,0,0.86)]'>
      <div className='lg: mx-18 flex pb-20 pt-10 gap-x-15'>
    <div className=''> 
      <img src="src/assets/new.png" alt="" srcset="" />
      <img src="src/assets/Group 135 (2).png" alt="" srcset="" className='w-50 pt-7 pb-7'/>
      <p className="text-gray-400 w-[30em]">© 2024 Centre for Research in African Trade Facilitation (CRAFT). All Rights Reserved.</p>
    </div>
    <nav className="lg: list-none text-white ml-[24em]">
          <li className='font-bold pb-3'><a href="#">Links</a></li>
          <li className='text-gray-400 pb-1'><a href="#">About Us</a></li>
          <li className='text-gray-400 pb-1'><a href="#">Services</a></li>
          <li className='text-gray-400 pb-1'><a href="#">Mission</a></li>
          <li className='text-gray-400'><a href="#">Contact Us</a></li>
    </nav>

     <nav className="lg: list-none gap-10 text-white">
          <li className='font-bold pb-3'><a href="#">More</a></li>
          <li className='text-gray-400 pb-2'><a href="#">Documentation</a></li>
          <li className='text-gray-400'><a href="#">License</a></li>
    </nav>
    </div>
    </footer>
  );
};

export default footer;