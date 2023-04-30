import React from 'react';

const Button = ({ text, color }) => {
  return (
    <>
      {/* <div className="after:content-[''] after:absolute after:w-[20px] sm:after:w-[40px] after:h-[50px] sm:after:h-[60px] after:bg-white" /> */}
      <button
        className={`font-semibold ${color}-btn h-[50px] md:h-[60px] px-8 sm:px-12`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
