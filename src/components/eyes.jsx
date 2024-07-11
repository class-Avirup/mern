import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Eyes = () => {
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
    <div className=" eyes w-full h-screen overflow-hidden flex justify-center items-center bg-zinc-900 text-white">
      <div
        data-scroll
        data-scroll-speed="-.8"
        className="w-full h-full relative bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
      >
        <div
          data-scroll
          data-scroll-speed=".15"
          className="absolute top-1/2 left-[40vw] -translate-x-[50%] -translate-y-[50%]  flex gap-10 "
        >
          <div className="w-[10vw] h-[10vw] bg-zinc-100 rounded-full flex items-center justify-center">
            <div className="w-2/3 h-2/3 bg-zinc-900 rounded-full  relative">
              <div className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-center font-bold font-['poppins'] text-2xl ">
                PLAY
              </div>
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
          <div className="w-[10vw] h-[10vw] bg-zinc-100 rounded-full flex items-center justify-center">
            <div className="w-2/3 h-2/3 bg-zinc-900 rounded-full relative">
              <div className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-center font-bold font-['poppins'] text-2xl ">
                PLAY
              </div>
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
    </div>
  );
};

export default Eyes;
