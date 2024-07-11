import React from "react";
import Navbar from "../components/Navbar";
const About = () => {
  return (
    <>
      <Navbar />
      <script src="https://cdn.tailwindcss.com"></script>

      <div class="  bg-black" id="full">
        <div class="cursorcircle h-3 w-3 absolute z-50 rounded-full bg-white transition-all"></div>
        {/* implement the cursor later */}
        <div class="hero w-full h-screen bg-black">
          <div class="heading text-white text-9xl  font-medium pl-3 pt-24 w-screen">
            <div class="bounding bg-black overflow-hidden w-fit">
              <h1 class="  text-white ">PRODUCT</h1>
            </div>
            <div class="pattern inline-block">
              <div class="bounding bg-black overflow-hidden w-fit">
                <h1 class="opacity-60 ml-24 ">DESIGNER</h1>
              </div>
              <div class="bounding bg-black overflow-hidden w-fit">
                <h5 class="text-lg opacity-90 translate-y-full text-right">
                  BASED IN TORONTO
                </h5>
              </div>
            </div>

            <div class="smallheadings text-sm mr-4 mt-5 text-right flex-col items-end">
              <div class="bounding bg-black overflow-hidden w-fit">
                <h5 class="">AVAILABLE FOR FREELANCE</h5>
              </div>
              <div class="bounding bg-black overflow-hidden w-fit ">
                <h5 class="">WORK FROM MAY'23</h5>
              </div>
            </div>

            <div class="footer text-sm flex justify-between text-white mt-52">
              <a href="#">
                PREVIOUSLY WORKED AT YML<i class="ri-arrow-right-up-line"></i>
              </a>
              <a href="#">
                PROTOPIE AMBASSADOR<i class="ri-arrow-right-up-line"></i>
              </a>
              <div class="flex gap-2 mr-1">
                {" "}
                <button class="bg-slate-400 rounded-full w-5 h-5">
                  <i class="ri-arrow-down-fill"></i>
                </button>
                <button class="bg-slate-400 rounded-full w-5 h-5">
                  <i class="ri-arrow-down-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="second h-screen pt-14 bg-black ">
          <div class="elem w-10/12 border-zinc-100  border-t-2 text-white border-solid flex justify-between items-center relative ml-4">
            <img
              src="plug.png"
              class="absolute z-20 h-full hidden"
              alt="plug"
            />
            <h1 class="text-8xl mt-7 mb-8 opacity-80 font-medium">THE PLUG</h1>
            <h5>2022</h5>
          </div>
          <div class="elem w-10/12 border-zinc-100  border-t-2 text-white border-solid flex justify-between items-center relative ml-4">
            <img
              src="ixperience.png"
              class="absolute z-20 h-full hidden"
              alt="ixperience"
            />
            <h1 class="text-8xl mt-7 mb-8 opacity-80 font-medium">
              IXPERIENCE
            </h1>
            <h5>2022</h5>
          </div>
          <div class="elem w-10/12 border-zinc-100  border-t-2 text-white border-solid flex justify-between items-center relative ml-4">
            <img
              src="hudu.png"
              class="absolute z-20 h-full hidden"
              alt="hudu"
            />
            <h1 class="text-8xl mt-7 mb-8 opacity-80 font-medium">HUDU</h1>
            <h5>2022</h5>
          </div>
          <div class="elem w-10/12 border-zinc-100  border-t-2 text-white border-solid  ml-4"></div>
        </div>
        <div class="third bg-black h-1/2">
          <div class="about bg-black px-11 flex items-center space-x-8 pl-16 justify-center pt-11">
            <img src="cynthia.png" class="w-48 " alt="me" />
            <div class="textcontainer text-white w-96">
              <h6 class="opacity-70">(ABOUT ME)</h6>
              <p class="mb-5">
                I'm a product designer with a passion for creating products that
                not only look good but also solve real problems. When I'm not
                sketching ideas on paper, you can find me binge-watching a
                Netflix series or playing video games. My design philosophy is
                simple: make it visually appealing, functional, and bring a
                smile to people's faces. I'm the designer you want on your team
                if you want to make people say 'I need that in my life!'.
              </p>
              <a href="#" class="border-2 rounded-xl  p-1">
                Let's talk
              </a>
            </div>
          </div>
        </div>
        <div class="fourth bg-black h-1/2 pt-28">
          <p class="opacity-60 text-white">(FORGOT TO MENTION)</p>
          <a class="pt-4 text-white" href="#">
            SUBSCRIBE TO MY YOUTUBE CHANNEL
            <i class="ri-arrow-right-up-line"></i>
          </a>

          <div
            id="footer"
            class="text-white flex justify-between px-6 mt-96 pb-9"
          >
            <div id="footerleft" class="flex space-x-4">
              <p>2023 &copy;</p>
              <p>0:35 AM EST</p>
            </div>

            <div id="footerright" class="flex space-x-8">
              <a href="#">DRIBBBLE</a>
              <a href="#">INSTAGRAM</a>
              <a href="#">LINKEDIN</a>
              <a href="#">TWITTER</a>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

      <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.min.js"></script>
      <script src="script.js"></script>
    </>
  );
};

export default About;
