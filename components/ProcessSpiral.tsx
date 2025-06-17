import React from 'react';

const ProcessSpiral: React.FC = () => {
  return (
    <div
      className="hidden md:flex justify-center items-center my-4 h-24"
      aria-hidden="true"
    >
      <svg
        width="26"
        height="98"
        viewBox="0 0 26 98"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 0.999999C13 10.3726 13 18.8341 13 26.5C13 41.5 1 48.5 1 61.5C1 72.5 13 78.5 13 97"
          stroke="#CBD5E1" // A neutral gray color (slate-300)
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 4" // Creates a dashed line effect
        />
      </svg>
    </div>
  );
};

export default ProcessSpiral;