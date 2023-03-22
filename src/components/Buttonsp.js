import React from 'react'
import { Link } from "react-router-dom";

function Buttonsp({lroute, title}) {
  return (
    <div className="flex justify-center items-center">
      <Link to={lroute} class="relative inline-block text-lg group">
        <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-black transition-colors duration-300 ease-out border-2 border-or rounded-3xl group-hover:text-tex">
          <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-3xl bg-tex"></span>
          <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-or group-hover:-rotate-180 ease"></span>
          <span class="relative text-xl">{title}</span>
        </span>
        <span
          class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-or rounded-3xl group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-3xl"
        ></span>
      </Link>
    </div>
  );
}

export default Buttonsp