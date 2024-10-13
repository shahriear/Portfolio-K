import React from 'react';

const Main = () => {
  return (
    <section>
      <div className="container flex pb-14">
        <div className="item_img">
          <img src="/donut-min.jpg.png" alt="donut-img " />
        </div>
        <div className="Items_txt ml-12">
          <h2 className="text-primary font-roboto font-medium text-3xl">
            Balance is important in design
          </h2>
          <h3 className="text-primary font-roboto font-medium text-sm pt-2 pb-5">
            By Caliberthemes / In Inspirational / On 22 Sep 2019
          </h3>
          <p className="text-secondary pb-7 max-w-sm">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
            penatibus et magnis.
          </p>
          <a
            href="#"
            className="border-solid border-2 border-black box-border px-4 py-2"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Main;
