import React, { useEffect, useState } from 'react';

const Installation = () => {
  const [Instal, setInstal] = useState([])

  const [srot, setSort] = useState('none')

  useEffect(() => {
    const SavedList = JSON.parse(localStorage.getItem('instal'))
    if (SavedList) setInstal(SavedList)
  }, [])


  const sortedItem = (
    () => {
      if (srot === 'mb-asc') {
        return [...Instal].sort((a, b) => a.size - b.size)
      } else if (srot === 'mb-dsc') {
        return [...Instal].sort((a, b) => b.size - a.size)
      } else {
        return Instal
      }
    }
  )()





  const handleUninstall = (id) => {
    const existingList = JSON.parse(localStorage.getItem('instal'))
    let updatedList = existingList.filter(a => a.id !== id)

    setInstal(updatedList)

    localStorage.setItem('instal', JSON.stringify(updatedList))
  }




  return (
    <div>
      <div className='space-y-6 my-10'>
        <h1 className='text-center text-4xl font-bold'>Your Installed Apps</h1>
        <p className='text-center text-gray-400'>Explore All Trending Apps on the Market developed by us</p>
        <div className='flex justify-between mx-10'>
          <h1 className='text-2xl font-semibold'>({sortedItem.length}) Apps Found</h1>

          <select className='border rounded-md'
            value={srot}
            onChange={e => setSort(e.target.value)}>
            <option value="none">Sort By Size</option>
            <option value="mb-asc">Low-&gt;High</option>
            <option value="mb-dsc">High-&gt;Low</option>
          </select>


        </div>
      </div>



      <div className='space-y-10 mb-10'>
        {sortedItem.map(a => (
          <div className='flex justify-between mx-10 bg-gray-200 p-5 rounded-2xl items-center'>
            <div className='flex gap-5'>
              <div>
                <img className='w-20'
                  src={a.image}
                  alt=""
                />
              </div>
              <div className='space-y-6'>
                <h1 className='text-3xl font-semibold'>{a.title}</h1>
                <div className='flex gap-5'>
                  <div className='flex gap-2 text-2xl'>
                    <img className='w-5' src="/src/assets/icon-downloads.png" alt="" />
                    <p className='text-green-600 font-semibold'>{a.downloads}</p>
                  </div>
                  <div className='flex gap-2 text-2xl'>
                    <img className='w-4' src="/src/assets/icon-ratings.png" alt="" />
                    <p className='text-amber-500 font-semibold'>{a.ratingAvg}</p>
                  </div>
                  <div className='flex text-2xl'>
                    <p className='font-semibold text-gray-500'>{a.size} MB</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button onClick={() => handleUninstall(a.id)} className='bg-[#00D390] p-3 rounded-md text-2xl text-white hover:bg-green-500'>Uninstall</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;