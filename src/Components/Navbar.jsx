import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/Apps'>Apps</NavLink></li>
            <li><NavLink to='/Installation'>Installation</NavLink></li>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl">
          <img className='w-8' src="/src/assets/logo.png" alt="" />
          <span className="inline-block text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text">
            HERO.IO
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/Apps'>Apps</NavLink></li>
          <li><NavLink to='/Installation'>Installation</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end flex mr-6">
        <a href="https://github.com/">
          <button className='bg-gradient-to-b from-[#632EE3] to-[#9F62F2] flex items-center p-1 rounded text-white gap-2'>
            <img className='w-8' src="/src/assets/pngegg.png" alt="" /> Contribute
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;