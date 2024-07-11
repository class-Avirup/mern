import React, { useState } from "react";
import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
const Featured = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div data-scroll data-scroll-speed="" className=" w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-2 mb-20">
        <h1 className="text-6xl font-[] font-thin tracking-tight mb-12">
          Featured projects
        </h1>
      </div>
      <div className="px-20 ">
        <div className="cards w-full flex gap-10 ">
          <div className=" relative card rounded-xl  w-1/2 h-[60vh]  ">
            <h1 className="absolute left-full  z-[9] text-8xl font-['impact'] -translate-x-1/2 translate-y-1/2 top-1/3 tracking-tight leading-none text-[#CDEA68] flex">
              {"FYDE".split("").map((item, index) => (
                <span className="inline-block ">{item}</span>
              ))}
            </h1>
            <div className=" rounded-xl w-full h-full">
              <div className="topic flex gap-6 ">
                <div className="h-3 w-3 bg-white rounded-full mb-16 "></div>
                <div>FYDE</div>
              </div>
              <img
                src=" https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                className="w-full h-full bg-cover"
              />
              <div className="buttons gap-3 mt-6 flex">
                <button className="rounded-3xl border-[1px] p-2 border-zinc-200 w-24 uppercase">
                  AUDIT
                </button>
                <button className="rounded-3xl border-[1px] p-2 border-zinc-200 w-32 uppercase">
                  copywriting
                </button>
                <button className="rounded-3xl border-[1px] p-2 border-zinc-200 w-32 uppercase">
                  sales deck
                </button>
                <button className="rounded-3xl border-[1px] p-2 border-zinc-200 w-32 uppercase">
                  slide design
                </button>
              </div>
            </div>
          </div>

          <div className="card rounded-xl relative w-1/2 h-[60vh] ">
            <h1 className="absolute right-full  z-[9] text-8xl font-['impact'] translate-x-1/2 translate-y-1/2 top-1/3 tracking-tight leading-none text-[#CDEA68]  flex">
              {"VISE".split("").map((item, index) => (
                <span initial={{ y: "100%" }} className="inline-block ">
                  {item}
                </span>
              ))}
            </h1>
            <div className=" rounded-xl w-full h-full ">
              <div className="topic flex gap-6 ">
                <div className="h-3 w-3 bg-white rounded-full mb-16 "></div>
                <div>VISE</div>
              </div>
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                className="w-full h-full bg-cover"
              />
              <div className="buttons gap-3 mt-6 flex">
                <button className="rounded-full border-[1px] p-2 border-zinc-200 w-32 uppercase">
                  agency
                </button>
                <button className="rounded-3xl border-[1px] p-2 border-zinc-200 w-60 uppercase">
                  company presentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-20 mt-40">
        <div className="cards w-full flex gap-10">
          <div className=" relative card rounded-xl  w-1/2 h-[60vh]  ">
            <h1 className="absolute left-full  z-[9] text-8xl font-['impact'] -translate-x-1/2 translate-y-1/2 top-1/3 tracking-tight leading-none text-[#CDEA68] flex">
              {"FYDE".split("").map((item, index) => (
                <span className="inline-block ">{item}</span>
              ))}
            </h1>
            <div className=" rounded-xl w-full h-full">
              <div className="topic flex gap-6 ">
                <div className="h-3 w-3 bg-white rounded-full mb-16"></div>
                <div>FYDE</div>
              </div>
              <img
                src=" https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                className="w-full h-full bg-cover"
              />
              <div className="buttons gap-3 mt-6 flex">
                <button className="rounded-3xl border-[1px] p-2 border-zinc-200 w-54 uppercase">
                  brand identity
                </button>
                <button className="rounded-3xl border-[1px] p-2 border-zinc-200 w-54 uppercase">
                  design research
                </button>
                <button className="rounded-3xl border-[1px] p-2 border-zinc-200 w-54 uppercase">
                  investor deck
                </button>
              </div>
            </div>
          </div>

          <div className="card rounded-xl relative w-1/2 h-[60vh] ">
            <h1 className="absolute right-full  z-[9] text-8xl font-['impact'] translate-x-1/2 translate-y-1/2 top-1/3 tracking-tight leading-none text-[#CDEA68]  flex">
              {"VISE".split("").map((item, index) => (
                <span initial={{ y: "100%" }} className="inline-block ">
                  {item}
                </span>
              ))}
            </h1>
            <div className=" rounded-xl w-full h-full">
              <div className="topic flex gap-6 ">
                <div className="h-3 w-3 bg-white rounded-full mb-16"></div>
                <div>VISE</div>
              </div>
              <img
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                className="w-full h-full bg-cover"
              />
              <div className="buttons gap-3 mt-6 flex">
                <button className="rounded-full border-[1px] p-2 border-zinc-200 w-54 uppercase">
                  branded template
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="border-[1px] border-zinc-100 uppercase ">
          view all case studies
          <div className="circle h-2 w-2"></div>
        </button>
      </div>
    </div>
  );
};

export default Featured;
