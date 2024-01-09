import React from 'react';

function TableItems() {
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex justify-between mt-3 pl-4 pr-3'>
      <div><p className='text-[#146eb4] font-[500] text-[15px]'>#281209</p></div>
      <div className='w-[95px] pl-[7px] flex justify-start text-[#1a181e] text-[15px]'><p>7 July, 2023</p></div>
      <div className='w-[109px] flex justify-end text-[#1a181e] text-[15px]'><p>₹1,278.23</p></div>
      <div className='w-[140px] flex justify-end text-[#1a181e] text-[15px]'><p>₹22</p></div>
      
    </div>
    <div class="w-[98.4%] bg-cover h-[2px] bg-[50%_50%] relative bg-[url(https://c.animaapp.com/WKWi4JMK/img/line-20.svg)] left-[12px]"></div>
    </div>
    
  )
}

export default TableItems;
