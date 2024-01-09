import React from 'react';

function RightCenterItems({text,amount}) {
  return (
        <div className='bg-white w-[590px] rounded-[6px] flex flex-col items-start justify-between pl-5 p-4'>
            <p className='text-[17px] text-gray-600'>{text}</p>
            <h2 className='text-[34px]'>{amount}</h2>
        </div>
  )
}

export default RightCenterItems;
