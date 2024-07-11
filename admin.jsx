import React from "react";
import Navbar from "../src/components/Navbar";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Enavbar from "../src/components/Enavbar";
import axios from "axios";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
const admin = () => {
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/admin";
  const [ruser, setRuser] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios("http://localhost:4001/api/auth/adminUser");

        setRuser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);
  const [form, setForm] = useState([]);
  useEffect(() => {
    const getForm = async () => {
      try {
        const res = await axios("http://localhost:4001/api/auth/query");
        console.log(res.data);
        setForm(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getForm();
  }, []);
  const [card, setCard] = useState([]);
  useEffect(() => {
    const getCard = async () => {
      try {
        const res = await axios("http://localhost:4001/api/auth/course");
        console.log(res.data);
        setCard(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCard();
  }, []);

  const [post, setPost] = useState({
    name: "",
    title: "",
    image: "",
    category: "",
    price: "",
  });
  const handleinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setPost({
      ...post,
      [name]: value,
    });
  };
  const [change, setChange] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
  });
  const handleadmininput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setChange({
      ...change,
      [name]: value,
    });
    console.log(change);
  };
  const handleAdminSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:4001/api/auth/adminChangeAccount`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(change),
        }
      );
      console.log(response);
      navigate(from, { replace: true });
      modalShow();
      toast.success("changed successfully!");
    } catch (error) {
      console.log("error");
    }
  };
  const getLocalStorage = () => {
    let user = localStorage.getItem("user");

    // user defined at login.jsx
    if (user) {
      return JSON.parse(localStorage.getItem("user"));
    } else {
      return "";
    }
  };
  const [user, setUser] = useState(getLocalStorage());
  useEffect(() => {
    setUser({ user: localStorage.getItem("user") });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:4001/api/auth/admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
      toast.success("posted successfully!");
    } catch (error) {
      console.log("error");
    }
  };
  // to delete the user from table
  const deleteUser = async (id) => {
    console.log(id);
    try {
      const response = await fetch(
        `http://localhost:4001/api/auth/adminDelUser/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const deletePost = async (id) => {
    console.log(id);
    try {
      const response = await fetch(
        `http://localhost:4001/api/auth/adminDelPost/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  // to delete the account from table
  const deleteAccount = async (id) => {
    console.log(id);
    try {
      const response = await fetch(
        `http://localhost:4001/api/auth/adminDelAccount/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id }),
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const modalShow = () => {
    document.getElementById("my_modal_5").showModal();
  };
  const modalShowSecond = () => {
    document.getElementById("my_modal_4").showModal();
  };
  const [newpost, setNewpost] = useState([]);
  const handleadminpostinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setNewpost({
      ...newpost,
      [name]: value,
    });
    console.log(newpost);
  };
  const handleAdminPostSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:4001/api/auth/adminChangePost`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newpost),
        }
      );
      console.log(response);
      navigate(from, { replace: true });
      modalShowSecond();
      toast.success("changed successfully!");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <>
      <div className="h-screen">
        <Enavbar />
        <form onSubmit={handleSubmit}>
          <div className="mt-52 ">
            <label className="input input-bordered flex items-center gap-2">
              name
              <input
                type="text"
                className="grow"
                placeholder=""
                onChange={handleinput}
                name="name"
                id="name"
                value={post.name}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              image link
              <input
                type="text"
                className="grow"
                placeholder=""
                onChange={handleinput}
                name="image"
                id="image"
                value={post.image}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              category
              <input
                type="text"
                className="grow"
                placeholder=""
                onChange={handleinput}
                name="category"
                value={post.category}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Price
              <input
                type="text"
                className="grow"
                placeholder=""
                onChange={handleinput}
                name="price"
                value={post.price}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Title
              <input
                type="text"
                className="grow"
                placeholder=""
                onChange={handleinput}
                name="title"
                value={post.title}
              />
            </label>
            <button
              className="border-2 border-white text-white rounded-full p-2 mt-12  "
              onSubmit={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
        Users
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                    <tr>
                      <th className="px-6 py-4">email</th>
                      <th className="px-6 py-4">username</th>
                      <th className="px-6 py-4">name</th>
                      <th className="px-6 py-4">update</th>
                      <th className="px-6 py-4">delete</th>
                    </tr>
                  </thead>
                  <tbody className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600">
                    {ruser.map((item, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.email}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.username}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <button
                            className="btn btn-outline btn-accent"
                            onClick={modalShow}
                          >
                            update
                          </button>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <button
                            className={`btn btn-outline btn-error ${
                              item.email === "avirup@gmail.com" && "hidden"
                            }`}
                            onClick={() => deleteAccount(item._id)}
                          >
                            delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          Queries
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                    <tr>
                      <th className="px-6 py-4">name</th>
                      <th className="px-6 py-4">company</th>
                      <th className="px-6 py-4">goal</th>
                      <th className="px-6 py-4">date</th>
                      <th className="px-6 py-4">budget</th>
                      <th className="px-6 py-4">email</th>
                      <th className="px-6 py-4">details</th>

                      <th className="px-6 py-4">delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {form.map((item, index) => (
                      <tr
                        className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600"
                        key={index}
                      >
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.company}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.goal}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.date}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.budget}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.email}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.details}
                        </td>

                        <td className="whitespace-nowrap px-6 py-4">
                          <button
                            className="btn btn-outline btn-error"
                            onClick={() => deleteUser(item._id)}
                          >
                            delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          Posts
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                    <tr>
                      <th className="px-6 py-4">name</th>
                      <th className="px-6 py-4">price</th>
                      <th className="px-6 py-4">category</th>
                      <th className="px-6 py-4 ">image</th>
                      <th className="px-6 py-4">title</th>

                      <th className="px-6 py-4">Update</th>

                      <th className="px-6 py-4">delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {card.map((item, index) => (
                      <tr
                        className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600"
                        key={index}
                      >
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.price}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.category}
                        </td>
                        <td className=" whitespace-nowrap px-6 py-4 ">
                          {item.image}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.title}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <button
                            className="btn btn-outline btn-accent"
                            onClick={modalShowSecond}
                          >
                            update
                          </button>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <button
                            className="btn btn-outline btn-error"
                            onClick={() => deletePost(item._id)}
                          >
                            delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
            <div className="modal-action">
              {/* close the modal implementation yet to be performed */}
              <form onSubmit={handleAdminSubmit}>
                <div className="flex-col space-y-5 h-full">
                  <label htmlFor="username">username</label>
                  <div className="">
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      id="name"
                      required
                      autoComplete="off"
                      value={user.name}
                      onChange={handleadmininput}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleadmininput}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleadmininput}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleadmininput}
                    />
                  </div>
                </div>
                <br />
                <button type="submit" className="btn btn-submit">
                  Update
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            {/* close the modal implementation yet to be performed */}
            <form onSubmit={handleAdminPostSubmit}>
              <div className="flex-col space-y-5 h-full">
                <label htmlFor="username">username</label>
                <div className="">
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    id="name"
                    required
                    autoComplete="off"
                    value={newpost.name}
                    onChange={handleadminpostinput}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="price"
                    placeholder="price"
                    id="price"
                    required
                    autoComplete="off"
                    value={newpost.username}
                    onChange={handleadminpostinput}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="category"
                    placeholder="category"
                    id="category"
                    required
                    autoComplete="off"
                    value={newpost.email}
                    onChange={handleadminpostinput}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="image"
                    placeholder="image"
                    id="image"
                    required
                    autoComplete="off"
                    value={newpost.password}
                    onChange={handleadminpostinput}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="title"
                    placeholder="title"
                    id="title"
                    required
                    autoComplete="off"
                    value={newpost.title}
                    onChange={handleadminpostinput}
                  />
                </div>
              </div>
              <br />
              <button type="submit" className="btn btn-submit">
                Update
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default admin;
