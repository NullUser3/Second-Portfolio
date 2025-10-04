import React from "react";
import { Header } from "../layout";
import { SemiBold } from "../layout";
import { Plus } from "lucide-react";
import FirstPlanet from "./heliocentrism/FirstPlanet";
import TlPlanet from "./heliocentrism/TlPlanet";

// import { Mail } from "lucide-react";

// import {  X } from "lucide-react";
const Hero = () => {
  return (
    <div className="flex items-center relative w-full h-screen">


      {/*  */}
      <div className="flex  justify-center gap-12 w-full absolute bottom-5 text-subtle2">
                {Array.from({length:1},(_,j)=>
                <div className="flex gap-1 items-end justify-center" key={j}>
        {/* */}
<div className="w-2 h-1 bg-subtle2 "></div>
                  {Array.from({length:3},(_,i)=>
                  <div key={i} className={`flex items-end gap-1 `}>
                    
                    <div className="flex flex-col items-center justify-center">
                      
<div>
                      <Plus className={`${i%2==1?'rotate-45':''}`} size={9}/>
                    </div>
                    <div className="flex items-center">


                        <Plus className={`${i%2==1?'rotate-45':''}  mb-[2px]`} size={9}/>
                      <Plus className={`${i%2==1?'rotate-45':''} mb-[2px] `} size={9}/>

                      
                      
                    </div>
                    
                    </div>
                    <div className="w-2 h-1 bg-subtle2 "></div>
                    
                  </div>
                  )}

      
                </div>
                
                )}
      </div>
      {/*  */}
      
      {/* <div className="absolute bottom-10 right-0 bg-foreground/30 w-5 h-5">
      </div> */}
      {/* <div className="w-0 h-0 absolute bottom-10 right-0
  border-l-[10px] border-l-transparent 
  border-r-[10px] border-r-transparent 
  border-t-[15px] border-t-foreground/30">
</div> */}
<div className="flex items-center">

</div>

      
      <div className="flex justify-center w-full sm:px-4  py-4">

        <div className="flex flex-col justify-center w-full ">
 {/* top side */}

          <div className="flex flex-col text-center items-center justify-center w-full space-y-6 sm:space-y-9 sm:py-12">
            <h2 className="text-sm mb-3 text-foreground/70">[ Full Stack Web Developer ]</h2>
            <h1
              className={` text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-snug text-foreground ${SemiBold.className}`}
            >
              I design and build web applications
            </h1>
            <p className="lg:text-xl text-lg leading-normal text-[#5E5A50] lg:w-[70%]">
              I specialize in building end-to-end applications using
              technologies like React And Spring Boot.
            </p>
            <div className="flex pt-6 gap-6 sm:gap-6 text-sm items-center">
              {/* <button className='px-8 py-4 bg-[#1E1E1E] text-white' >
        Sketchy Button
      </button> */}

              <button
                className={`group text-sm flex justify-between items-center uppercase
         text-background px-2 py-2
         bg-foreground hover:bg-foreground hover:text-background ${Header.className}`}
              >
                {/* <div className=' flex items-center justify-center w-5 h-5 border-3 border-foreground group-hover:border-background' >
                <X className="hidden group-hover:block" />
              </div> */}
                <span className="">Projects</span>
              </button>

              <button
                className={`group text-sm inline-flex items-center uppercase
         text-foreground px-2 py-2
         bg-border hover:bg-foreground hover:text-background ${Header.className}`}
              >
                {/* <div className=' flex items-center justify-center w-5 h-5 border-3 border-foreground group-hover:border-background' >
                <X className="hidden group-hover:block" />
              </div> */}
                <span className="hidden sm:block"></span>Download CV
              </button>
              {/* <button className='px-8 py-4 text-[#1E1E1E] border-2' >
        Sketchy Button
      </button> */}
            </div>
          </div>
        </div>
        
       <div className="absolute -bottom-5 right-[20%]">
                  <FirstPlanet/>
       </div>
       <div className="absolute -top-20 -left-30 -z-10">
                  <TlPlanet/>
       </div>
      </div>
      
    </div>
  );
};

export default Hero;
