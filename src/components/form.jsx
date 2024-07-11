import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const Form = () => {
  const [query, setQuery] = useState({
    name: "",
    company: "",
    goal: "",
    date: "",
    budget: "",
    email: "",
    details: "",
  });
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setQuery({
      ...query,
      [name]: value,
    });
    console.log(query);
  };

  const handleSubmit = async (e) => {
    // connecting react with express server
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4001/api/auth/form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(query),
      });
      toast.success("Query sent!");
    } catch (error) {
      console.log("register", error);
    }
  };
  // connecting react with express server

  return (
    <div className="h-screen text-6xl mt-24 text-white bg-black ">
      <p className="text-xl ml-6">Fill the form below:</p>
      <form className="mt-12 ml-6 mr-6 " onSubmit={handleSubmit}>
        <p>
          Hi! My name is{" "}
          <input
            className="text-center text-base underline-offset-4"
            name="name"
            type="text"
            id=""
            placeholder="enter your name"
            value={query.name}
            onChange={handleInput}
          />
          and I work with
          <input
            className="text-center text-base"
            name="company"
            type="text"
            id=""
            placeholder="Company name type here"
            value={query.company}
            onChange={handleInput}
          />
          I’m looking for a partner to help me with
          <input
            className="text-center text-base"
            name="goal"
            type="text"
            id=""
            placeholder="Your Goal type here"
            value={query.goal}
            onChange={handleInput}
          />
          With an idea of having that completed
          <input
            className="text-center text-base"
            name="date"
            type="number"
            id=""
            placeholder="Date"
            value={query.date}
            onChange={handleInput}
          />
          I am hoping to stay around a budget range of
          <input
            className="text-center text-base"
            name="budget"
            type="number"
            id=""
            placeholder="Select"
            value={query.budget}
            onChange={handleInput}
          />
          You can reach me at to start the conversation.
          <input
            className="text-center text-base"
            name="email"
            type="text"
            id=""
            placeholder="name@email.com"
            value={query.email}
            onChange={handleInput}
          />
          Optionally, i’m sharing more:
          <input
            className="text-center text-base"
            name="details"
            type="text"
            id=""
            placeholder="Product details type here"
            value={query.details}
            onChange={handleInput}
          />
        </p>
        <div className="justify-end flex mr-7 mt-10">
          <button
            className="text-white bg-gray-400 text-sm h-16 p-4 rounded-full"
            type="submit"
          >
            SEND INQUIRY
          </button>
        </div>
      </form>
      <div className="h-screen"></div>
    </div>
  );
};

export default Form;
