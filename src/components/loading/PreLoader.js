import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";
import './preloader.css'
const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>PT Astel Indonesia.  </span>
        <span>Digital, </span>
        <span>business, </span>
        <span>Technology. </span>
      </div>
    </div>
  );
};

export default PreLoader;
