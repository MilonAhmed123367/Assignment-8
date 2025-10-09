import React from 'react';
import { NavLink } from 'react-router';

const AppsCard = ({ app }) => {
  const { image, title, ratingAvg, downloads, id } = app
  return (
    <div>
      <NavLink to={`/apps/${id}`}>
        <div className="bg-base-100 w-70 mx-auto shadow-md hover:scale-105 transition ease-in-out rounded-2xl">
          <figure>
            <img
              src={image}
              alt="Shoes" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">{title}</h2>
            <div className='flex justify-between'>
              <h1 className='bg-[#F1F5E8] flex rounded gap-2 items-center text-1xl font-semibold p-2'>
                <img className='w-4' src="/src/assets/icon-downloads.png" alt="" />
                {downloads}</h1>

              <h1 className='bg-[#FFF0E1] flex rounded gap-2 items-center text-1xl p-2 font-semibold'>
                <img className='w-4' src="/src/assets/icon-ratings.png" alt="" />
                {ratingAvg}</h1>

            </div>
          </div>



        </div>
      </NavLink>
    </div>

  );
};

export default AppsCard;