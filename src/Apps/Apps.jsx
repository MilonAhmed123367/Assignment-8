import React, { useState } from 'react';
import useApps from '../hooks/useApps';
import AppsCard from '../Components/AppsCard';
import { NavLink } from 'react-router';
import LoadingSpinner from '../Components/LoadingSpinner';

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState('');
  const trem = search.trim().toLocaleLowerCase();

  const searchApp = trem
    ? apps.filter(app => app?.title?.toLocaleLowerCase().includes(trem))
    : apps;

  console.log(searchApp);

  return (
    <div className="space-y-5">
      <h1 className="text-center text-5xl font-bold">Our All Applications</h1>
      <p className="text-center text-gray-400">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex justify-between mx-10 items-center">
        <h1 className="text-3xl font-semibold">({searchApp.length}) Apps Found</h1>
        <label>
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="search"
            placeholder="Search App..."
            className="max-w-md px-4 py-2 border rounded-md shadow"
          />
        </label>
      </div>



      {
        loading ? <LoadingSpinner count={20}></LoadingSpinner> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-8">
          {searchApp.length > 0 ? (
            searchApp.map(app => (
              <AppsCard key={app.id} app={app} />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-10">
              <img src="/src/assets/App-Error.png" alt="" className="w-48 h-48 object-contain" />
              <h1 className='text-3xl font-bold'>OPPS!! APP NOT FOUND</h1>
              <p className="mt-4 text-gray-500">The App you are requesting is not found on our system.  please try another apps</p>
              <NavLink to='/Apps'>
                <button className=' bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-3 text-white rounded'>Go Back!</button>
              </NavLink>
            </div>

          )}
        </div>
      }


    </div>
  );
};

export default Apps;

