import React from 'react';

const Home = () => {
  return (
    <section>
    <div className='items-center space-y-5 mt-10'>
      <h1 className='text-center text-5xl font-bold '>We Build
        <br />
        <span className='inline-block text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text'> Productive</span> Apps</h1>
      <p className='text-center mx-25 text-gray-400'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
      <div className='flex justify-center gap-3'>

        <a href="https://play.google.com/store/games?hl=en">
          <button className='border border-[#D2D2D2] rounded p-1 flex gap-2 hover:bg-gray-200'><img className='w-5' src="/src/assets/play.png" alt="" /> Google Play</button>
        </a>

        <a href="https://www.apple.com/app-store/">
          <button className='border border-[#D2D2D2] rounded p-1 flex gap-2 hover:bg-gray-200'> <img className='w-5' src="/src/assets/appstor.png" alt="" />App Store</button>
        </a>

      </div>
      <img className='w-150 mx-auto' src="/src/assets/hero.png" alt="" />
    </div>
    </section>

  );
};

export default Home;