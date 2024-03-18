import React from "react";
import { useState } from "react";
import pagelogo from "../assets/images/png/PageLogo.png";
import bgHeader from "../assets/images/png/bgHeader.png";
import ButtonComment from "../assets/images/png/buttonComment.png";
import { CallSvg } from "./IconImg";
import headerRelative from "../assets/images/png/headerRelative.png";

const Header = () => {
  const [nav, setNav] = useState(true);
  if (nav === false) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  return (
    <div className="relative overflow-hidden">
      <img src={headerRelative} alt="headerRelative" className="" />
      <img
        src={bgHeader}
        alt="bgHeader"
        className="absolute lg:right-[-3%] right-0 lg:max-w-[791px] w-full h-full max-h-[810px] z-[-1] lg:skew-x-[-6deg]"
      />
      <div className="container mx-auto px-3 pt-[24px]">
        <div className="flex items-center justify-between">
          <a href="#">
            <img
              src={pagelogo}
              alt="pagelogo"
              className=" max-w-[145.37px] xl:h-[53px] w-full"
            />
          </a>
          <ul
            className={`${
              nav ? "left-[-100%]" : "left-0"
            } flex max-lg:fixed max-lg:top-0 max-lg:bg-[#020202] max-lg:h-full max-lg:w-full max-lg:z-50 max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:min-h-screen max-lg:flex-col gap-[40px] items-center justify-center`}
          >
            <li onClick={() => setNav(!nav)}>
              <a
                href="#AboutUs"
                className="text-[16px] capitalize font-normal text-white opacity-70 hover:after:w-[100%] leading-[128.8%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
              >
                Benifits
              </a>
            </li>
            <li onClick={() => setNav(!nav)}>
              <a
                href="#AboutUs"
                className="text-[16px] capitalize font-normal text-white opacity-70 hover:after:w-[100%] leading-[128.8%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
              >
                Testimonials
              </a>
            </li>

            <li>
              <button
                className="bg-gradient-to-br from-[#0C5FD1] to-[#8703C5] text-white ff_inter py-[16px] px-[28.21px] font-medium text-[16px
              ]"
              >
                Book consultation now
              </button>
            </li>
          </ul>
          <div
            onClick={() => setNav(!nav)}
            className="lg:hidden w-[28px] h-[20px] relative z-[55] flex justify-between flex-col"
          >
            <span
              className={`${
                nav
                  ? "bg-white h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                  : "bg-white transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[50deg] translate-y-[14px]"
              }`}
            ></span>
            <span
              className={`${
                nav
                  ? "bg-white h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                  : "duration-300 rounded-[3px] ease-linear transition-all hidden"
              }`}
            ></span>
            <span
              className={`${
                nav
                  ? "bg-white h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                  : "bg-white transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[-50deg] translate-y-[-50%]"
              }`}
            ></span>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-3 lg:pt-[160px] pt-[60px] max-lg:pb-[20px]">
        <div>
          <p className="ff_helveticaNeue text-[18.8px] text-[#F77B0B] font-medium leading-[128.8%]">
            Marc joachim hubrich
          </p>
          <h1 className="lg:text-[60px] sm:text-[45px] text-[35px] text-black ff_helveticaNeue font-normal leading-[128.8%] uppercase mb-[7.6px]">
            <span className="lg:block">Now I let you</span> go!
          </h1>
          <p className=" font-normal sm:text-[16px] text-[14px] text-black opacity-70 leading-[160%] mb-[32.29px]">
            For women who do not want to be completely dragged down by{" "}
            <span className="lg:block">a SEPARATION.</span>{" "}
            <span className="lg:block">
              {" "}
              How to let go of your EX so you can leave him behind without
            </span>{" "}
            having to run to a therapist right away.
          </p>
          <div className="flex items-center sm:flex-row flex-col sm:gap-[17px] gap-[12px]">
            <button className="bg-gradient-to-r from-[#0C5FD1] to-[#8703C5] p-[2px] hover:shadow-[0_3px_20px_rgba(135,_3,_197,_0.3)] capitalize text-nowrap transition-all ease-linear duration-500 rounded-[63px] ">
              <div className=" bg-[#fff] rounded-[63px] flex items-center gap-[4px] sm:py-[3.7px] py-[16px] pl-[9px] sm:pr-[48px] pr-[19px]">
                <img
                  src={ButtonComment}
                  alt="ButtonComment"
                  className="w-full sm:max-w-[50.84px] max-w-[20px]"
                />
                <span className="bg-gradient-to-br from-[#0C5FD1] to-[#8703C5] bg-clip-text text-transparent inline-block ff_inter font-medium sm:text-[16px] text-[14px] capitalize leading-[150%]">
                  {" "}
                  Book a non-binding initial consultation now
                </span>
              </div>
            </button>
            <CallSvg />
          </div>
          <div className="flex sm:items-center lg:justify-end">
            <div className="flex gap-9 lg:pr-[186px] sm:pb-[46px] pb-[24px] lg:pt-[63px] sm:pt-[40px] pt-[30px]">
              <div className="relative after:absolute after:w-[2px] after:h-full after:bg-[#9800B0] after:top-0 after:left-0">
                <p className="ff_helveticaNeue font-normal sm:text-[16px] text-[14px] leading-[170%] uppercase text-white ml-[13px]">
                  Die wichtigsten <br /> Aspekte einer <br /> Trennung:
                </p>
              </div>
              <ul className="">
                <li className="text-white font-medium sm:text-[16px] text-[14px] leading-[160%] !list-disc mb-[2px]">
                  physische Trennung
                </li>
                <li className="text-white font-medium sm:text-[16px] text-[14px] leading-[160%] !list-disc">
                  mentale Trennung
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:translate-y-[-45%]">
            <div className="flex items-center w-full max-lg:gap-4">
              <p className="tracking-[4.5%] lg:text-black text-white text-[20px] font-light text_vertical leading-[170%] lg:ml-[-14px] lg:mb-[11px]">
                MJH
              </p>
            </div>
            <div className="flex lg:items-baseline items-center lg:gap-[2px] gap-4">
              <div className="border-l-[2px] border-b-[2px] border-solid border-[#F77B0B] lg:h-[269px] h-[2px] lg:w-2 sm:w-[296px] w-[150px]"></div>
              <p className="vertical_01 ff_helveticaNeue font-normal lg:text-black text-white leading-[128.8%] sm:text-[40px] text-[20px]">
                01
              </p>
              <p className="uppercase sm:text-[24px] text-[20px] font-normal ff_helveticaNeue lg:text-black text-white leading-[128.8%]">
                fault
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
