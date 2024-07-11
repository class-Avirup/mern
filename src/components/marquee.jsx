import React from "react";
import { motion } from "framer-motion";
const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".015"
      className=" w-full  py-20  bg-[#004D43] rounded-tl-3xl rounded-tr-3xl"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex font-['NeueMontreal-Medium'] h-[50vh] ">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[35vh]  uppercase font-['impact'] mb-6 pt-2  mr-16"
        >
          OCHI
        </motion.h1>
        <div className="h-56">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-[35vh] uppercase font-['impact']  mb-6 pt-2 mr-16 "
          >
            OCHI
          </motion.h1>
        </div>
        <div className="h-56">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-[35vh] uppercase font-['impact']  mb-6 pt-2  mr-16"
          >
            OCHI
          </motion.h1>
        </div>

        <div className="h-56">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-[35vh] uppercase font-['impact']  mb-6 pt-2  mr-16"
          >
            OCHI
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
