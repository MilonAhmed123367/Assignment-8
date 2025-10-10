import React, { useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../hooks/useApps';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppDetail = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const app = apps.find(p => String(p.id) === id);
  const [isInstalled, setIsInstalled] = useState(false);

  if (loading) return <p>a</p>;
  const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = app;

  const handleInstal = () => {
    const existingList = JSON.parse(localStorage.getItem('instal')) || [];
    const isDuplicate = existingList.some(p => p.id === app.id);

    if (isDuplicate) {
      toast.error('Already installed');
      setIsInstalled(true);
      return;
    }

    const updatedList = [...existingList, app];
    localStorage.setItem('instal', JSON.stringify(updatedList));
    toast.success('Installed successfully');
    setIsInstalled(true);
  };

  return (
    <div>
      <section className='flex mx-20 gap-10'>
        <div>
          <figure>
            <img className='w-70' src={image} alt="Shoes" />
          </figure>
        </div>

        <div>
          <h1 className='text-4xl font-semibold'>{title}</h1>
          <p className='space-x-2'>
            <span className='text-gray-500 text-2xl'>Developed by</span>
            <span className='text-2xl inline-block text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text font-semibold'>{companyName}</span>
          </p>

          <div className='flex gap-8 mt-10'>
            <div className='space-y-2'>
              <img src="/src/assets/icon-downloads.png" alt="" />
              <p>Downloads</p>
              <h1 className='text-4xl font-bold'>{downloads}</h1>
            </div>

            <div className='space-y-2'>
              <img src="/src/assets/icon-ratings.png" alt="" />
              <p>Average Ratings</p>
              <h1 className='text-4xl font-bold'>{ratingAvg}</h1>
            </div>

            <div className='space-y-2'>
              <img src="/src/assets/icon-review.png" alt="" />
              <p>Total Reviews</p>
              <h1 className='text-4xl font-bold'>{reviews}</h1>
            </div>
          </div>

          <button
            onClick={handleInstal}
            disabled={isInstalled}
            className={`bg-[#00D390] p-3 rounded text-white text-2xl font-semibold mt-5 hover:bg-green-400 ${isInstalled ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isInstalled ? 'Installed' : `Install Now ${size} MB`}
          </button>
        </div>
      </section>

      <div className='space-y-4 mx-10'>
        <h1 className='font-semibold text-2xl'>Ratings</h1>
        <div className='bg-base-100 border rounded-md p-5 h-80'>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ratings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className='my-10'>
        <h1 className='text-2xl font-semibold mx-10'>Description</h1>
        <p className='text-gray-500 mt-5 mx-10'>{description}</p>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default AppDetail;
