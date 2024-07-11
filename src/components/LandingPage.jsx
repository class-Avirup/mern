import React from "react";
import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";
const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className=" w-full h-screen bg-zinc-900 text-white border-t-2 "
    >
      <div className="textStructure mt-52 px-20 ">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="flex w-fit items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }}
                    className=" mr-5 w-[10vw] h-[5.4vw] -top-[1.2vw]   rounded-md"
                  >
                    <img
                      className="w-full h-full rounded-xl bg-cover"
                      src="https://i.pinimg.com/236x/af/f9/41/aff94190ee51428f816f326cfc37daac.jpg"
                    />
                  </motion.div>
                )}
                <h1
                  className=" text-9xl font-['bison bold'] uppercase leading-[5.7vw] tracking-none font-semibold "
                  key={index}
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] flex justify-between items-center  py-5 px-20 border-zinc-700 mt-32">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            className="text-md font-light tracking-tight leading-none"
            key={index}
          >
            {item}
          </p>
        ))}
        <div className="start ">
          <a href="/Contact">
            <div className="px-4 py-2 border-[1px] border-zinc-600 bg-zinc-900 hover:bg-white   text-white rounded-full hover:text-black font-light font-sm text-capitalize flex items-center gap-3 cursor-pointer">
              Start the project
              <span className="rotate-[45deg]">
                <FaArrowUpLong />
              </span>
            </div>
          </a>
        </div>
      </div>
    </div> //color of the landing page
  );
};

export default LandingPage;
