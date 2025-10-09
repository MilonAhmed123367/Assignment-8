import React from 'react';
import { useParams } from 'react-router';
import useApps from '../hooks/useApps';

const AppDetail = () => {
  const { id } = useParams()
  const { apps, loading, error } = useApps()
  const app = apps.find(p => String(p.id) === id)

  if (loading) return <p>a</p>
  const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = app


  return (
    <div>
      <section className='flex mx-20 gap-10'>
        <div>
          <figure>
            <img className='w-70'
              src={image}
              alt="Shoes" />
          </figure>
        </div>


        <div>
          <h1 className='text-4xl font-semibold'>{title}</h1>
          <p className='space-x-2'>
             <span className='text-gray-500 text-2xl'>Developed by</span>
              <span className='text-2xl inline-block text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text font-semibold'>{ companyName}</span>
             </p>

          <div className='flex gap-8 mt-10'>

            <div className='space-y-2'>
              <img src="/src/assets/icon-downloads.png" alt="" />
              <p>Downloads</p>
                <h1 className='text-4xl font-bold'>{downloads}</h1>
            </div>

            <div  className='space-y-2'>
              <img src="/src/assets/icon-ratings.png" alt="" />
              <p>Average Ratings</p>
                <h1 className='text-4xl font-bold'>{ratingAvg}</h1>
            </div>

            <div  className='space-y-2'>
              <img src="/src/assets/icon-review.png" alt="" />
              <p>Total Reviews</p>
                <h1 className='text-4xl font-bold'>{reviews}</h1>
            </div>

          </div>


          <button className='bg-[#00D390] p-3 rounded text-white text-2xl font-semibold mt-5 hover:bg-green-400'>Install Now {size} MB </button>
        </div>
      </section>

    </div>
  );
};

export default AppDetail;