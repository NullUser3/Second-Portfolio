import React from 'react';

const Morse = () => {
  return (
    <div className='grid grid-cols-3 justify-center items-center w-full gap-6'>


            <div className='w-2 h-2 rounded-full bg-foreground'></div>
            <div className='w-4 h-2 bg-foreground'></div>
            <div className="w-0 h-0 
            border-l-[8px] border-l-transparent 
            border-r-[8px] border-r-transparent 
            border-t-[12px] border-t-foreground">
</div>
            <div className='w-4 h-2 bg-foreground'></div>
            <div className='w-2 h-2 rounded-full bg-foreground'></div>
            <div className='w-4 h-2 bg-foreground'></div>
            <div className='w-2 h-2 rounded-full bg-foreground'></div>
            
        
    </div>
  );
};

export default Morse;