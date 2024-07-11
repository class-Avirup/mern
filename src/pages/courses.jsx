import React from "react";
import Enavbar from "../components/Enavbar";
import Efooter from "../components/Efooter";
import Ecourse from "../components/ecourse";
const Courses = () => {
  return (
    <>
      <div className="h-screen">
        <Enavbar />
        <Ecourse />
        <Efooter />
      </div>
    </>
  );
};

export default Courses;
