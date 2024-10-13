import React from 'react';

const Expartise = ({ expartices, dic, icon }) => {
  return (
    <div>
      <div>
        <span className="text-4xl">{icon}</span>
        <h3 className="font-roboto font-normal text-3xl text-primary pt-5">
          {expartices}
        </h3>
        <p className="text-secondary py-2 w-80">{dic}</p>
      </div>
    </div>
  );
};

export default Expartise;
