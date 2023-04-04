import React, { useState, useEffect } from "react";
import "../index.css";
const BgAnimation = () => {
  const [bgPosition, setBgPosition] = useState(-900);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgPosition((prevPosition) => prevPosition + -1);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const bgStyle = {
    backgroundPosition: `50% ${bgPosition}px`,
  };

  return (
    <div className="relative bottom-0">
      <div className="w-screen overflow-hidden relative bgp">
        <div className="absolute inset-0 bg-cover bggg" style={bgStyle}></div>
        <img
          className="absolute bottom-0 w-full"
          src="http://www.farmofhappiness.com/images/footer-farm.png"
          alt="Farm Stay"
        />
      </div>
    </div>
  );
};

export default BgAnimation;
