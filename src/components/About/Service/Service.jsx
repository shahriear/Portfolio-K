import React from 'react';
import Service_items from './Service_items';
import Expartise from './Expartise';
import {
  BsBox2,
  BsPencil,
  BsCart2,
  BsCamera,
  BsLightbulb,
} from 'react-icons/bs';
import { SlCamrecorder } from 'react-icons/sl';

const Service = () => {
  return (
    <div className="container">
      <h1 className="font-roboto font-medium text-2xl text-primary py-9 sm:text-4xl md:text-6xl">
        We provide effective digital services. We craft systems of utility that
        deliver value to users and differentiate brands by bringing stories.
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 pt-7 border-b-2 border-gray-200 pb-24">
        <Service_items
          img="/service-1-min.jpg"
          title="Packaging"
          txt="The majority have suffered alteration in some form, by injected humour."
          button="Read more"
        />
        <Service_items
          img="/service-3-min.jpg"
          title="Packaging"
          txt="The majority have suffered alteration in some form, by injected humour."
          button="Read more"
        />
        <Service_items
          img="/service-2-min.jpg"
          title="Packaging"
          txt="The majority have suffered alteration in some form, by injected humour."
          button="Read more"
        />
      </div>
      <h2 className="font-roboto font-normal text-5xl text-primary pt-24 pb-14">
        Our Expertise
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7  border-b-2 border-gray-200 pb-24">
        <Expartise
          icon={<BsBox2 />}
          expartices="Branding"
          dic="It is a long established fact reader will be distracted by the readable content of a page."
        />
        <Expartise
          icon={<BsPencil />}
          expartices="Caligraphy"
          dic="It is a long established fact reader will be distracted by the readable content of a page."
        />
        <Expartise
          icon={<BsCart2 />}
          expartices="Ecommerce"
          dic="It is a long established fact reader will be distracted by the readable content of a page."
        />
        <Expartise
          icon={<BsCamera />}
          expartices="Photography"
          dic="It is a long established fact reader will be distracted by the readable content of a page."
        />
        <Expartise
          icon={<BsLightbulb />}
          expartices="Marketing"
          dic="It is a long established fact reader will be distracted by the readable content of a page."
        />
        <Expartise
          icon={<SlCamrecorder />}
          expartices="Videography"
          dic="It is a long established fact reader will be distracted by the readable content of a page."
        />
      </div>
    </div>
  );
};

export default Service;
