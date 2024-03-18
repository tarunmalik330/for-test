import React from "react";

const Loader = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute w-[274px] h-[274px] top-[40%] left-[45%] z-[1] bg-[#0066FF] blur-[150px] rounded-[274px] animate-pulse"></div>
      <div className="min-h-screen bg-[#08090e5c] fixed z-[5] flex flex-col justify-center items-center left-0 right-0">
        <div>
          <p className="text_animate inline-flex uppercase text-center sm:text-[95px] text-[65px] font-semibold ff_play scale-[.5] text-white">
            N
          </p>
          <p className="text_animate inline-flex text-center sm:text-[90px] text-[65px] font-semibold ff_play scale-[.5] text-white">
            e
          </p>
          <p className="text_animate inline-flex text-center sm:text-[90px] text-[65px] font-semibold ff_play scale-[.5] text-white">
            x
          </p>
          <p className="text_animate inline-flex uppercase text-center sm:text-[95px] text-[65px] font-semibold ff_play scale-[.5] text-white">
            A
          </p>
          <p className="text_animate inline-flex text-center sm:text-[90px] text-[65px] font-semibold ff_play scale-[.5] text-white">
            i
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
