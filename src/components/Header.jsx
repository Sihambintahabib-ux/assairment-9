// import logo from "../assets/img/logo.png"
import MyContainer from "./MyContainer";
import { IoPawSharp } from "react-icons/io5";
import "../index.css";
import Footer from "./Footer";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { use } from "react";
import { CgProfile } from "react-icons/cg";
import LOGO from "../assets/img/logo.png";

const Header = () => {
  const { user, logout } = use(AuthContext);

  const linklogo = (
    <>
      <Link to="/" className="btn btn-ghost text-xl">
        <IoPawSharp /> WarmPaws
      </Link>
    </>
  );
  const linkitems = (
    <>
      <NavLink to="/">
        {" "}
        <li className="mx-5 ">Home</li>
      </NavLink>
      <NavLink to="/Homeservices">
        {/* <li className="mx-5 ">Homeservices</li> */}
      </NavLink>
      <NavLink to="/services">
        <li className="mx-5 ">services</li>
      </NavLink>

      <NavLink to="/myprofile">
        {" "}
        <li className="mx-5 ">myprofile</li>
      </NavLink>
      <NavLink to="/aboutus">
        {" "}
        <li className="mx-5 ">Aboutus</li>
      </NavLink>
    </>
  );
  const handlelogout = (e) => {
    e.preventDefault();
    console.log("handlelogout");
    logout();
  };
  const logInOut = (
    <>
      {!user ? (
        <ul className="flex justify-end gap-5">
          <li className="mx-5 ">
            <NavLink to="/login">login </NavLink>
          </li>
          <li className="mx-5 ">
            <NavLink to="/signup">signup</NavLink>
          </li>
        </ul>
      ) : (
        <li className="mx-5 ">
          {/* <NavLink to="/signup"> */}{" "}
          <span onClick={handlelogout}>logout</span>
          {/* </NavLink> */}
        </li>
      )}
    </>
  );
  return (
    <div>
      <MyContainer>
        <nav>
          <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />{" "}
                  </svg>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  {linkitems}
                </ul>
              </div>
              <span className=" text-xl  "> {linklogo} </span>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{linkitems}</ul>
            </div>

            {/* profile  start*/}
            <div className="navbar-end  ">
              <span className="btn list-none  w-fit mx-5  ">{logInOut}</span>
              <div
                // tabIndex="0"
                // role="button"
                className=" btn-circle avatar  group "
              >
                {/* btn btn-ghost */}
                {/* profile img */}
                <NavLink to="/myprofile">
                  <div className="w-18 rounded-full flex ">
                    <img
                      className=" z-2 bg-gray-300"
                      alt=""
                      src={`${user ? user.photoURL : LOGO}`}
                    />
                  </div>
                  {/* <CgProfile /> */}
                </NavLink>
                <span className=" -translate-x-15  text-center    group-hover:translate-x-1 transition">
                  {/* siham  */}
                  {user ? user.displayName : "siha...."}
                </span>{" "}
              </div>
              {/* profile datails end */}

              {/*  */}
            </div>
          </div>
        </nav>
      </MyContainer>
    </div>
  );
};
export default Header;
