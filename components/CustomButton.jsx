import React from 'react';

const CustomButton = ({ data }) => {
  return (
    <button
      key={data}
      type="button"
      className="relative m-1 inline-flex items-center rounded-full px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10 mr-2"
      style={{ 'color': 'rgb(94 234 212 / 100%)', 'backgroundColor': 'hsla(160, 52%, 71%, .1)' }}
    >
      {data}
    </button>
  );
};

export default CustomButton;