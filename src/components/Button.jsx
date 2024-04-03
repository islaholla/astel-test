import React from "react";

const Button = ({ styles,isi,id_btn }) => (
  <button  id={id_btn} type="button" className={`py-2 px-6 font-poppins font-medium text-[18px] text-primary rounded-[10px]  ${styles}`}>
    {isi}
  </button>
);

export default Button;
