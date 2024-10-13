import React from 'react';

const PortfolioSingle_item = ({ title, text }) => {
  return (
    <div>
      <div>
        <h3 className="font-roboto font-normal text-2xl text-primary pt-5">
          {title}
        </h3>
        <p className="text-secondary border-b-2 border-gray-200 pb-2">{text}</p>
      </div>
    </div>
  );
};

export default PortfolioSingle_item;
