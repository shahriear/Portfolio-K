import React from 'react';

const Service_items = ({ img, title, txt, button, expartices, dic }) => {
  return (
    <div>
      <img src={img} alt="image" />
      <h2 className="font-roboto font-normal text-3xl text-primary pt-6">
        {title}
      </h2>
      <p className="text-secondary py-2">{txt}</p>
      <a href="#">{button}</a>
    </div>
  );
};

export default Service_items;
