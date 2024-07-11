import React from "react";
import Navbar from "../components/Navbar.jsx";
import Form from "../components/form.jsx";
import Footer from "../components/footer.jsx";
import { motion } from "framer-motion";
import Highlight from "../components/highlight.jsx";
const Contact = () => {
  return (
    <>
      <Navbar />
      <div
        data-scroll
        data-scroll-speed="-.3"
        className=" w-full h-screen bg-black text-white border-t-2  "
      >
        <div className="textStructure mt-52 px-20 font-['impact']">
          {["LET’S START", "A PROJECT TOGETHER"].map((item, index) => {
            return (
              <div key={index} className="masker">
                <div className="flex w-fit items-end overflow-hidden">
                  {index === 0 && (
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
                    className=" text-8xl tracking-wide font-['bison bold'] uppercase leading-[5.7vw] tracking-none font-semibold "
                    key={index}
                  >
                    {item}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <Form />
        <Highlight />
        <div
          data-scroll
          data-scroll-speed="0.3"
          className="bg-slate-500 h-[50vh] rounded-2xl"
        >
          <div
            data-scroll
            data-scroll-speed="0.4"
            className="bg-slate-300 h-[50vh] rounded-2xl"
          >
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
