// import React, { use } from 'react';
import { use, useState } from "react";
import MyContainer from "../components/MyContainer";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
   const [error, setError] = useState("");
const { signin} = use(AuthContext)
const { user} = use(AuthContext)
  const location = useLocation();
  // const from = location.state || "/";
  const navigate = useNavigate();
  const handleloging = (e) => {
    e.preventDefault();
    console.log("handleloging");
    // const displayName = e.target.name?.value;
    // const photoURL = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    console.log(e.target);
    console.log("sign up done", { email, password });
    signin(email,password).then(() => {
            // Signed in
            // const user = res.user;
            toast.success("Signed in successful.");
            //  navigate(`${location.state ? location.state : "/"}`);
    
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            toast.error("error happened!  Sign-in incomplete", errorCode);
 setError(errorCode);            // console.log({ errorCode, errorMessage });
          });;
  };

  if (user) {
    navigate("/");
      // navigate(`${location.state ? location.state : "/"}`);
    return;
  }

  return (
    <MyContainer>
      <div className="text-center text-2xl font-bold ">
        <h1>loging </h1>
      </div>
      <div className="bg-orange-100 w-1/2  mx-auto rounded-md p-5 m-5 space-y-5">
        <form onSubmit={handleloging} className="card-body">
          <fieldset className="flex flex-col justify-center   gap-4">
            {/* email */}
            <label className="text-2xl font-bold">email</label>
            <input
              className="border"
              type="email"
              name="email"
              required
              id=""
            />
            {/* password */}
            <label className="text-2xl font-bold">password</label>
            <input
              className="border"
              type="password"
              name="password"
              id=""
              required
            />{" "}
            {error && <p className="text-red-400 text-xs">{error}</p>}
            <div className="flex flex-col justify-center  items-center">
              <NavLink to="/forgetpassword">
                <button className="link link-hover text-blue-800">
                  FORGET PASSWORD
                </button>
              </NavLink>
              <button
                className="p-2 bg-orange-400 text-white w-full rounded-md my-3"
                type="submit"
              >
                loging
              </button>
              <span>or</span>
              <div className="flex gap-5 ">
                <button
                  type="submit"
                  className="p-2 px-5 bg-white w-full rounded-md my-3"
                >
                  Google Loging
                </button>
              </div>
              <div>
                Dont have a account
                <Link
                  to="/signup"
                  className="p-2 px-5 bg-white w-full rounded-md my-3 mx-5"
                >
                  signup
                </Link>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </MyContainer>
  );
};

export default Login;
