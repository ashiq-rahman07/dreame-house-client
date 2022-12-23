import React from 'react';
import {BiBed, BiBath, BiArea} from 'react-icons/bi';
const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surfac, price } = house
  return (
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className='mb-8' src={image} alt="" />
      <div className='flex gap-x-2 mb-4 text-sm'>
        <div className='bg-green-500 text-white rounded-full px-3'>{type}</div>
        <div className='bg-violet-500 text-white rounded-full px-3'>{country}</div>
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>
        {address}
      </div>
      <div>
        <div className='flex gap-1 text-gray-600 items-center'>
          <div><BiBed /></div>
          <div>{bedrooms}</div>
        </div>
      </div>
      <div className='text-lg font-semibold text-violet-600 mb-4'>{price}</div>
    </div>
  );
};

export default House;
