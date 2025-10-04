import React from "react";

const TlPlanet = () => {
  return (
    <div className="flex justify-center items-center w-[320px] h-[320px] rounded-[50%] border border-border">
        <div className="relative flex justify-center items-center w-36 h-36 rounded-[50%] border border-border">
            <div className="absolute left-1/2 top-1/2 w-[700px] h-[1px] translate-x-[65px] translate-y-[65px] bg-pattern origin-left rotate-45"></div>
            <div className="absolute left-1/2 top-1/2 w-[700px] h-[1px] translate-x-[85px] translate-y-[35px] bg-pattern origin-left rotate-45"></div>
<div className=" flex flex-col items-center ">
        <div className="flex gap-4"> 
            <div className='triangle -rotate-45'></div>
            <div className='triangle translate-y-[-20px]'></div>
            <div className='triangle rotate-45'></div>
        </div>
        <div className="w-7 h-7 bg-pattern rounded-[50%]">

        </div>
        <div className="flex gap-4"> 
            <div className='triangle -rotate-135'></div>
            <div className='triangle rotate-180 translate-y-[20px]'></div>
            <div className='triangle rotate-135'></div>
        </div>
      </div>
        </div>
      
    </div>
  );
};

export default TlPlanet;
