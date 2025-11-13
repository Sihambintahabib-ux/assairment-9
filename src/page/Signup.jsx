import React, { use, useState } from "react";
import MyContainer from "../components/MyContainer";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase.config";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../firebase.config";

const auth = getAuth(app);

const Signup = () => {
  const [passwordError, setpasswordError] = useState("");
  // const { createUser_Email, setuser , updateProfile} = use(AuthContext);
  const { createUser_Email, setuser } = use(AuthContext);
  const handleSignup = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const photoURL = e.target.photourl?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    // createUserWithEmailAndPassword(auth, email, password);
    // password error handal
    if (password.length < 6) {
      setpasswordError("password should be at least 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setpasswordError("Password must contain at least one uppercase letter");
    } else if (!/[a-z]/.test(password)) {
      setpasswordError("Password must contain at least one lowercase letter");
    } else {
      setpasswordError("");
    }
    

    // console.log("sign up done", { displayName, photoURL, email, password });

    createUser_Email(email, password)
      .then((res) => {
        const user = res.user;
        updateProfile(auth.currentUser, {
          displayName: displayName,
          photoURL: photoURL,
        }) .then((res) => {
            console.log(res);
                    setuser({
                      ...user,
                      displayName: displayName,
                      photoURL: photoURL,
                    });

          }).catch((error) => {
            console.log(error);
             setuser(user)
          });
        // console.log(setuser);
        console.log("gdgdg", res);
        toast.success("Signup successful");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };
  // loging navigation
  const { user } = use(AuthContext);
  const location = useLocation();
  // const from = location.state || "/";
  const navigate = useNavigate();

  if (user) {
    navigate("/");
    // navigate(`${location.state ? location.state : "/"}`);
    return;
  }
  return (
    <MyContainer>
      <div className="text-center text-2xl font-bold ">
        <h1>Signup</h1>
      </div>
      <div className="bg-orange-100 rounded-md w-1/2 mx-auto p-5 m-5 space-y-5">
        <form onSubmit={handleSignup} className="card-body ">
          <fieldset className="flex flex-col justify-center   gap-4">
            {/* name */}
            <label className="text-2xl font-bold">
              name : {user && user.name}
            </label>
            <input type="text" className="border" name="name" id="" required />{" "}
            {/* email */}
            <label className="text-2xl font-bold">email</label>
            <input
              className="border"
              type="email"
              name="email"
              id=""
              required
            />
            {/* photourl */}
            <label className="text-2xl font-bold">photourl</label>
            <input
              type="text"
              name="photourl"
              className="border"
              id=""
              required
            />{" "}
            {/* password */}
            <label className="text-2xl font-bold">password</label>
            <input
              className="border"
              type="password"
              name="password"
              id=""
              required
            />{" "}
            {passwordError && (
              <p className="text-xs  text-red-400 ">{passwordError}</p>
            )}


            <div className="flex flex-col justify-center  items-center">
              {/* <NavLink to="/">
              <buton>FORGET PASSWORD</buton>
            </NavLink> */}
              <button
                type="submit"
                className="p-2 bg-orange-400 text-white w-full rounded-md my-3"
              >
                Signup
              </button>
              <span>or</span>
              <div className="flex gap-5 ">
                <button
                  type="submit"
                  className="p-2 px-5 bg-white w-full rounded-md my-3"
                >
                  Google Signup
                </button>
                {/* <button
                  type="submit"
                  className="p-2 px-5 bg-white w-full rounded-md my-3"
                  >
                  facebook
                  </button> */}
              </div>
              <div>
                already have a account
                <Link
                  to="/login"
                  className="p-2 px-5 bg-white w-full rounded-md my-3 mx-5"
                >
                  loging
                </Link>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </MyContainer>
  );
};

export default Signup;
