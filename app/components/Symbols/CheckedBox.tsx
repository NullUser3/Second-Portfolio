import { Plus } from 'lucide-react';
import React from 'react';

const CheckedBox = () => {
  return (
    <div className='flex items-center justify-center w-4 h-4 border-2 border-foreground'>
        <div className='rotate-45'>
            <Plus size={14}/>
        </div>
    </div>
  );
};

export default CheckedBox;