import React from 'react';

const FourDots = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-1'>
        {/* first row */}
        <div className='flex gap-1'>
            <div className='w-[6px] h-[6px] bg-foreground rounded-full'></div>
            <div className='w-[6px] h-[6px] bg-foreground rounded-full'></div>
        </div>

        {/* second row */}
        <div className='flex gap-1'>
            <div className='w-[6px] h-[6px] bg-foreground rounded-full'></div>
            <div className='w-[6px] h-[6px] bg-foreground rounded-full'></div>
        </div>
    </div>
  );
};

export default FourDots;