import React from 'react';
import { NavLink} from 'react-router';
import AppsCard from '../Components/AppsCard';
import useApps from '../hooks/useApps';

const Home = () => {
  // const apps = useLoaderData()
  const {apps, loading, error} = useApps()
  const TrendingApps = apps.slice(0, 8)
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
      <div className='bg-gradient-to-b from-[#632EE3] to-[#9F62F2] space-y-5 p-10'>
        <h1 className='text-center text-white text-4xl font-bold p-10'>Trusted by Millions, Built for You</h1>
        <div className='flex flex-col md:flex-row justify-around'>
          <div className='space-y-2'>
            <p className='text-white'>Total Downloads</p>
            <h1 className='text-white text-6xl font-bold'>29.6M</h1>
            <p className='text-white'>21% more than last month</p>
          </div>
          <div>
            <p className='text-white'>Total Reviews</p>
            <h1 className='text-white text-6xl font-bold'>906K</h1>
            <p className='text-white'>46% more than last month</p>
          </div>
          <div className=' mb-15'>
            <p className='text-white'>Active Apps</p>
            <h1 className='text-white text-6xl font-bold'>132+</h1>
            <p className='text-white'>31 more will Launch</p>
          </div>

        </div>
      </div>

      <div>
        <h1 className='text-center text-4xl font-semibold mt-10'>Trending Apps</h1>
        <p className='text-center mt-2 mb-10 text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-30'>
        {
          TrendingApps.map(app => (
            <AppsCard key={app.id} app={app}></AppsCard>
          ))
        }
      </div>
      <NavLink to='/Apps'>
        <div className=' flex justify-center mb-10'>
          <button className='bg-gradient-to-b from-[#632EE3] to-[#9F62F2] rounded text-white gap-2 p-4 text-2xl hover:scale-105 transition ease-in-out'>
            Show All
          </button>
        </div>
      </NavLink>
    </section>

  );
};

export default Home;