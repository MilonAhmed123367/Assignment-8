import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Error = () => {
  const error = useRouteError()
  return (
    <>
      <Navbar></Navbar>
      <div className='space-y10'>
        <img className='w-100 mx-auto'
          src="/src/assets/error-404.png" alt="Error" />
        <h1 className='text-3xl font-semibold text-center'>Oops, page not found!</h1>
        <p className='text-center text-gray-400'>The page you are looking for is not available.</p>
      </div>
      <div className='flex justify-center mb-10 mt-5'>
        <button className=' bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-3 text-white rounded mx-auto'>Go Back!</button>
      </div>
      <Footer></Footer>
    </>

  );
};

export default Error;