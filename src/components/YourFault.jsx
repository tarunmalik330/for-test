import React from "react";
import layerImg from "../assets/images/png/layerImg.png";

const YourFault = () => {
  return (
    <div className="lg:mt-[-185px] max-lg:pt-[50px] relative">
      <img
        src={layerImg}
        alt="layerImg"
        className="w-full absolute right-0 xl:top-[-33%] z-[-1] xl:max-w-[180px] max-w-[109px]"
      />
      <div className="container mx-auto px-3">
        <div className="flex items-start justify-center lg:gap-[61px] sm:gap-[40px] gap-[18px] lg:flex-row flex-col">
          <div className="max-w-[444px] w-full">
            <p className="uppercase ff_helveticaNeue text-black lg:text-[60px] sm:text-[50px] text-[35px] font-normal leading-[128.8%]">
              IT'S NOT
            </p>
            <p className="uppercase ff_helveticaNeue text-black lg:text-[60px] sm:text-[50px] text-[35px] font-normal leading-[128.8%] sm:text-end text-center">
              <span className="text-[#F77B0B]">YOUR</span> FAULT!
            </p>
          </div>
          <p className="text-black font-normal text-[16px] leading-[160%] lg:max-w-[288px] relative after:absolute after:h-full after:w-[2px] after:bg-[#9800B0] after:left-0 after:top-0 pl-[11px]">
            It's not your fault for not knowing how to let go of the partner who
            no longer made you feel special.
          </p>
        </div>
      </div>
    </div>
  );
};

export default YourFault;
