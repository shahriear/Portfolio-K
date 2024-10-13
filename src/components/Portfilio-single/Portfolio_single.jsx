import React from 'react';
import PortfolioSingle_item from './PortfolioSingle_item';

const Portfolio_single = () => {
  return (
    <section>
      <div className="container">
        <div className=" flex  ">
          <div className="w-1/2">
            <img src="/pic-9.png" alt="pic-1" className="w-full" />
          </div>
          <div className="pl-20">
            <h2 className="font-roboto font-medium text-5xl text-primary">
              Collective Arts
            </h2>
            <p className="text-secondary text-2xl py-5">Mockups</p>
            <p className="text-secondary w-80">
              There are many variations of passages of Lorem Ipsum available,
              the majority have suffered alteration in form, by injected humour,
              or randomising words which do look slightly believable.
            </p>
            <PortfolioSingle_item
              title="Project Type"
              text="Branding & Identity"
            />
            <PortfolioSingle_item title="Project Scope" text="Ongoing" />
            <PortfolioSingle_item title="Project Type" />
          </div>
        </div>
        <h2 className="font-roboto font-medium text-5xl text-primary text-center py-20">
          Related Works
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <img src="/pic-6.png" alt="pic-1" className="w-full" />
          <img src="/pic-7.png" alt="pic-1" className="w-full" />
          <img src="/pic-8.png" alt="pic-1" className="w-full" />
        </div>
        <div className="flex justify-around">
          <h3 className="font-roboto font-normal text-2xl text-primary pt-5">
            Cusion Mockup
          </h3>
          <h3 className="font-roboto font-normal text-2xl text-primary pt-5">
            Cusion Mockup
          </h3>
          <h3 className="font-roboto font-normal text-2xl text-primary pt-5">
            Cusion Mockup
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Portfolio_single;
