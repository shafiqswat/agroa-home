/** @format */

import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`mt-5 py-3 px-5 font-sans rounded-full font-semibold text-sm ${className} bg-gray-100`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
