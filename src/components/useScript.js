import { useEffect } from "react";

const useScript = (src) => {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.src = src;
    script.async = true;

    // Append the script to the DOM
    document.body.appendChild(script);

    // Clean up
    return () => {
      document.body.removeChild(script);
    };
  }, [src]);
};

export default useScript;
