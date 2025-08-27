import React from 'react';

const Header = () => {
  return (
    <header className='lg: bg-gray-200'>
      <div className='lg: mx-18 flex pb-20 pt-10'>
    <div className=''> 
      <img src="src/assets/header research.png" alt="" srcset="" />
    </div>
    <nav className="lg:flex list-none gap-10 text-lg font-medium ml-auto">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">What We Do</a></li>
          <li><a href="#">Mission</a></li>
          <li><a href="#">Contact Us</a></li>
    </nav>
    </div>
    </header>
  );
};

export default Header;
