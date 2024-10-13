import React from 'react';

const Basic_item = ({ titel, txt, img }) => {
  return (
    <div className="project_items">
      <img src={img} alt="pic-1" className="w-full" />
      <div className="project_details">
        <h4>{titel}</h4>
        <p>{txt}</p>
      </div>
    </div>
  );
};

export default Basic_item;
