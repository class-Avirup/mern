import React from "react";
import Enavbar from "../components/Enavbar";
import Banner from "../components/banner";
import Efooter from "../components/Efooter";
import { useState, useEffect } from "react";
import Freebook from "../components/freebook";
const Ecom = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light" //error handled
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <div
        className={`h-screen ${
          theme === "dark" ? "bg-slate-900 text-white" : "bg-white text-black"
        }`}
      >
        <Enavbar theme={theme} setTheme={setTheme} />
        
        <Banner theme={theme} setTheme={setTheme}/>
        <Freebook theme={theme} setTheme={setTheme}/>
        <Efooter theme={theme} setTheme={setTheme}/>
      </div>
    </>
  );
};

export default Ecom;
