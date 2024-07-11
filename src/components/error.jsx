import React from "react";
import Navbar from "./Navbar";
const Error = () => {
  return (
    <>
      <div className="bg-black text-white h-screen">
        <Navbar />
        <div className="image_container h-screen flex justify-center items-center">
          <div className="h-screen ">
            <img className="h-5/6 " src="../../images.png"></img>

            <div className="buttoncontainer flex gap-14">
              <a href="/">
                <button className="bg-gray-400 text-white rounded-full p-4 uppercase">
                  Return Home
                </button>
              </a>
              <button className="bg-gray-400 text-white rounded-full p-4 uppercase">
                Report Problem
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
