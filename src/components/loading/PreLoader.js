import React, { useEffect, useState } from "react";
import { preLoaderAnim } from "../animations";
import "./preloader.css";

const PreLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show preloading animation
    preLoaderAnim();

    // Set a timeout to hide loading after 5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clean up the timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  // Render the PreLoader component only when isLoading is true
  return isLoading ? (
    <div className="preloader">
      <div className="texts-container">
        <span>PT Astel Indonesia. </span>
        <span>Digital, </span>
        <span>business, </span>
        <span>Technology. </span>
      </div>
    </div>
  ) : null;
};

export default PreLoader;
