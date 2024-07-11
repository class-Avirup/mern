import React from "react";
import { useState } from "react";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/login";
  const [user, setUser] = useState({
    username: "",
    email: "",
    name: "",
    password: "",
  });
  const handleinput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // connecting react with express server
    try {
      const response = await fetch(`http://localhost:4001/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        setUser({ username: "", email: "", name: "", password: "" });

        toast.success("signup successful!");
        navigate(from, { replace: true });
      }
    } catch (error) {
      toast.error("signup unsuccessful!");
    }
    // connecting react with express server
  };
  return (
    <>
      <Navbar />
      {/* <section className="w-screen">
        <main>
          <div className="section-register bg-black h-screen w-full flex justify-center items-center">
            <div className="container flex items-center">
              <div className="registration-image ">
                <img
                  className="w-10/12 ml-14"
                  src="https://i.pinimg.com/564x/55/e5/a8/55e5a82e91d07a7c291b82b58f1d0e8f.jpg"
                  alt="register"
                ></img>
              </div>
              <div className="registration-form w-1/2 h-screen mt-96">
                <h1 className="main heading mb-3">registration form</h1>
                <br />
                <form onSubmit={handleSubmit}>
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
                        onChange={handleinput}
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
                        onChange={handleinput}
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
                        onChange={handleinput}
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
                        onChange={handleinput}
                      />
                    </div>
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section> */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Signup</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label>
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                  name="name"
                  id="name"
                  autoComplete="off"
                  value={user.name}
                  onChange={handleinput}
                />
              </div>
              <div className="form-control">
                <label>
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  className="input input-bordered"
                  required
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={user.username}
                  onChange={handleinput}
                />
              </div>
              <div className="form-control">
                <label>
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={user.email}
                  onChange={handleinput}
                />
              </div>

              <div className="form-control">
                <label>
                  <span className="label-text ">Password</span>
                </label>
                <input
                  className="input input-bordered"
                  type="password"
                  name="password"
                  placeholder="password"
                  id="password"
                  required
                  autoComplete="off"
                  value={user.password}
                  onChange={handleinput}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
