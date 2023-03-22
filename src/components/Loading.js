import React, { useRef } from "react";
import Lottie from "lottie-web";

function Loding() {
  const container = useRef(null);

  React.useEffect(() => {
    if (!container.current.children.length) {
      Lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../images/animation.json"),
      });
    }
  }, []);

  return (
    <div>
      <div className="loader">
        <div className="loding_container" ref={container}></div>
      </div>
    </div>
  );
}

export default Loding;
