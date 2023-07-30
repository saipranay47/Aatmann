import React, { useState, useEffect } from "react";
import "../index.css";
const BgAnimation = () => {
  return (
    <div className="h-[400px] flex justify-center items-center bg-white w-screen mt-10 lg:mt-0" >
      <img src="/logoV.png" alt="" className="h-full object-cover"/>
      {/* <h2 className=" text-5xl text-or font-pd font-bold">"From Nature With Nature"</h2> */}
    </div>
  );
};

export default BgAnimation;
