import React from 'react';
import { Home ,CircleUser} from 'lucide-react';
import Image from 'next/image';
import Pfp from '../images/231e1b2d-d351-4e21-9b12-792116efd57b.jpg';
const Sidebar = () => {
  return (
    <aside className='flex flex-col gap-3 lg:w-[192px] md:w-[156px] h-screen pt-6'>
      <div className='flex flex-col justify-center gap-1 items-center overflow-hidden w-full h-1/3  px-6'>
      <div className='flex w-[70%] h-[50%] items-center justify-center bg-[#4C493E]'>
        <Image className=' object-fit w-2/3 p-1' src={Pfp} alt=''/>
      </div>
      
      <span className='text-background text-base pt-2'>Ahmed Mohamed</span>
      <span className='text-subtle text-sm'>Web Developer</span>
      </div>
        <nav className='w-full h-1/3 '>
          <ul className='flex flex-col   gap-1 w-full h-screen  text-sm '>
            <div className='h-[2px] bg-[#5E5A50]  mr-6'/>
            <div className='bg-[#5E5A50] px-6 mr-6'>
              <li className='flex pl-3 justify-start items-center gap-3 h-10 text-background'>
              <div className='flex items-center bg-background text-foreground px-1 py-1'><Home size={18}/></div>
              <span>Home</span>
            </li>      
            </div>
            
            <div className='h-[2px] bg-[#5E5A50] mr-6'/>
            {/*  */}
            
            <div className='h-[2px] bg-transparent -mb-1'/>
            <div className='px-6'>
<li className='flex pl-3 justify-start items-center gap-3 h-10 text-background'>
              <div className='flex items-center bg-background text-foreground px-1 py-1'><CircleUser size={18}/></div>
              <span>About me</span>
            </li>
            </div>
            
<div className='h-[2px] bg-transparent -mt-1'/>
{/*  */}
            <div className='h-[2px] bg-transparent -mb-1'/>
            <div className='px-6'>
<li className='flex pl-3 justify-start items-center gap-3  h-10  text-background'>
              <div className='flex items-center  bg-background text-foreground px-1 py-1'><CircleUser size={18}/></div>
              <span>About</span>
            </li>
            </div>
<div className='h-[2px] bg-transparent -mt-1'/>
{/*  */}
            <div className='h-[2px] bg-transparent -mb-1'/>
            <div className='px-6'>
<li className='flex pl-3 justify-start items-center gap-3  h-10  text-background'>
              <div className='flex items-center bg-background text-foreground px-1 py-1'><CircleUser size={18}/></div>
              <span>About</span>
            </li>
            </div>
<div className='h-[2px] bg-transparent -mt-1'/>
{/*  */}
            <div className='h-[2px] bg-transparent -mb-1'/>
            <div className='px-6'>
<li className='flex pl-3 justify-start items-center gap-3 h-10 text-background'>
              <div className='flex items-center bg-background text-foreground px-1 py-1'><CircleUser size={18}/></div>
              <span>About</span>
            </li>
            </div>
<div className='h-[2px] bg-transparent -mt-1'/>
{/*  */}
          </ul>
        </nav>
    </aside>
  );
};

export default Sidebar;