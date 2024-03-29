import React from "react";
import left from "../images/chevron-left.svg";
import right from "../images/chevron-right.svg";
import { useState,useEffect } from "react";
const CottageCarousel=({children:slides,autoslide=false,autoslideinterval=3000})=>{

    const [curr, setCurr] = useState(0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  
  useEffect(()=>{
    if(!autoslide) return 
    const slideinterval=setInterval(next, autoslideinterval)
    return()=>clearInterval(slideinterval)
  })
return(
    <div className="overflow-hidden relative border-2 border-white w-[95vw] mx-auto  "
    style={{ maxHeight: "650px" }}>
        <div className="flex transition-transform ease-out duration-500 "
        style={{ transform: `translateX(-${curr * 100}%)` }}>
            {slides}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev}>
          <img
            src={left}
            width="30px"
            className="rounded-3xl p-1 shadow bg-white/80 text-gray-800 hover:bg-white "
          />
        </button>
        <button onClick={next}>
          <img
            src={right}
            width="30px"
            className="rounded-3xl p-1 shadow bg-white/80 text-gray-800 hover:bg-white"
          />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
      <div className=" flex items-center justify-center gap-2">
        {slides.map((_,i)=>(
         <div
         className={`
         transition-all w-2 h-2 bg-white rounded-full
         ${curr === i ? "p-1" : "bg-opacity-50"}
       `}
       />
        ))}
      </div>
      </div>

    </div>
)
}
export default CottageCarousel;