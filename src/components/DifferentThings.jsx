import React from "react";

const DifferentThings = () => {
  return (
    <div className="pt-[58px]">
      <p className=" ff_helveticaNeue font-medium text-black capitalize text-[20px] leading-[140%] text-center mb-[34px]">
        How would you know when you are busy with completely different things at
        the moment:
      </p>
      <div className="bg-[url('./assets/images/png/BgThings.png')] bg-center bg-no-repeat lg:bg-BgSize bg-cover">
        <div className="flex justify-end sm:flex-row flex-col lg:pr-[241px] sm:pr-[100px] px-7 pb-[30px]">
          <div className="sm:max-w-[250px] w-full cursor-pointer max-sm:pt-5">
            <div className="flex justify-center pt-[42px] max-lg:px-4 h-[162px] bg-[#003E9233] hover:bg-[#003E92] transition-colors ease-linear duration-500 max-sm:mb-2">
              <p className="text-white text-[16px] sm:text-start text-center font-normal lg:max-w-[173px] leading-[160%]">
                Your self-esteem is in the basement.
              </p>
            </div>
          </div>
          <div className="sm:max-w-[250px] w-full cursor-pointer">
            <div className="flex justify-center pt-[42px] max-lg:px-4 h-[162px] bg-[#003E9233] hover:bg-[#003E92] transition-colors ease-linear duration-500 max-sm:mb-2">
              <p className="text-white text-[16px] sm:text-start text-center font-normal lg:max-w-[196px] leading-[160%]">
                You keep asking yourself what you did wrong.
              </p>
            </div>
          </div>
          <div className="sm:max-w-[250px] w-full cursor-pointer">
            <div className="flex justify-center pt-[42px] max-lg:px-4 h-[162px] bg-[#003E9233] hover:bg-[#003E92] transition-colors ease-linear duration-500 max-sm:mb-2">
              <p className="text-white sm:text-start text-center text-[16px] font-normal lg:max-w-[172px] leading-[160%]">
                The feeling of helplessness is your constant companion.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-start sm:flex-row flex-col lg:pl-[199px] sm:pl-[100px] px-7">
          <div className="sm:max-w-[250px] w-full cursor-pointer max-sm:mb-2">
            <div className="flex justify-center pt-[42px] max-lg:px-4 h-[162px] bg-[#003E9233] hover:bg-[#003E92] transition-colors ease-linear duration-500">
              <p className="text-white sm:text-start text-center text-[16px] font-normal lg:max-w-[173px] leading-[160%]">
                You spend the nights alone and lonely.
              </p>
            </div>
          </div>
          <div className="sm:max-w-[250px] w-full cursor-pointer max-sm:mb-2">
            <div className="flex justify-center pt-[42px] max-lg:px-4 h-[162px] bg-[#003E9233] hover:bg-[#003E92] transition-colors ease-linear duration-500">
              <p className="text-white sm:text-start text-center text-[16px] font-normal lg:max-w-[196px] leading-[160%]">
                You have stopped going out and spend the time crying in your
                room.
              </p>
            </div>
          </div>
          <div className="sm:max-w-[250px] w-full cursor-pointer max-sm:mb-5">
            <div className="flex justify-center pt-[42px] max-lg:px-4 h-[162px] bg-[#003E9233] hover:bg-[#003E92] transition-colors ease-linear duration-500">
              <p className="text-white sm:text-start text-center text-[16px] font-normal lg:max-w-[172px] leading-[160%]">
                An emotional chaos is raging inside you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifferentThings;
