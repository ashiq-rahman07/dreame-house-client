import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg'

const Header = () => {
  return (
    <header className='py-6 mb-12 '>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link to='/'>
          <img src={logo} alt="" />
        </Link>
        {/* button */}
        <div className='flex items-center gap-6'>
          <Link className='hover:text-violet-900' to=''>Login</Link>
          <Link className='bg-violet-700  hover:bg-violet-800 text-white px-4 py-3' to=''>Sign up</Link>
        </div>
      </div>
    </header >
  );
};

export default Header;
