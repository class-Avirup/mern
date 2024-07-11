import React from "react";
import Navbar from "../components/Navbar";
import Highlight from "../components/highlight";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
const Insights = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let diffX = mouseX - window.innerWidth / 2;
      let diffY = mouseY - window.innerHeight / 2;
      var angle = Math.atan2(diffY, diffX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <>
      <Navbar />

      <div className="diff aspect-[16/9]">
        <div className="diff-item-1">
          <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
            FILTER THE BEST COURSES
          </div>
        </div>
        <div className="diff-item-2">
          <div className="bg-base-200 grid place-content-center text-9xl font-black">
            FILTER THE BEST COURSES
          </div>
        </div>

        <div className="diff-resizer"></div>
        <div
          data-scroll
          data-scroll-speed=""
          className="absolute left-[50vw] top-[40vh] -translate-x-[50%] -translate-y-[50%]  flex gap-10  mt-96 "
        >
          <div className="w-[9vw] h-[9vw] bg-zinc-100 rounded-full flex items-center justify-center">
            <div className="w-2/3 h-2/3 bg-zinc-900 rounded-full  relative">
              <div className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-center font-bold font-['poppins'] text-2xl "></div>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] "
              >
                {/*rotate the lines in order to animate*/}
                <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>{" "}
                {/*eyeball is this div */}
              </div>
            </div>
          </div>
          <div className="w-[9vw] h-[9vw] bg-zinc-100 rounded-full flex items-center justify-center">
            <div className="w-2/3 h-2/3 bg-zinc-900 rounded-full relative">
              <div className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-center font-bold font-['poppins'] text-2xl "></div>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Insights;
