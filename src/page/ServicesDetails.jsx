import React, { useEffect, useState } from "react";
// import useServices from "../Hook/useServices";
import { useLoaderData, useParams } from "react-router";
import MyContainer from "../components/MyContainer";
import { toast } from "react-toastify";
// import { useParams } from 'react-router';

const ServicesDetails = () => {
  const data = useLoaderData();
  // const { services } = useServices();
  // console.log(services.length);

  const { id } = useParams();
  const [servicesdetails, setservicesdetails] = useState({});
  useEffect(() => {
    // const service = data.find((s) => s.id === id);
    const service = data.find((s) => s.serviceId === Number(id));
    setservicesdetails(service);
  }, [data, id]);

  const handleservicedetails = (e) =>{
    // e.preventDefault()
    toast.success("booking successfull")
     const displayName = e.target.name?.value;
     const email = e.target.email?.value;
    console.log("handleservicedetails", { displayName, email });
    {
      displayName ? displayName =='' : displayName;
    }
  }
  // console.log(data, id, servicesdetails);
  // console.log(services, services.serviceName);
  return (
    // <div>ServicesDetails {service.length}</div>
    // <p>dfa {service.serviceId}</p>
    <MyContainer>
      <div className=" flex flex-col md:flex-row gap-10 items-center">
        <div className="card-body w-1/2 p-10 bg-gray-100 flex-1">
          {/* provident. */}

          <img
            src={servicesdetails.image}
            alt="no img"
            className="rounded-md"
          />
          <p>serviceName : {servicesdetails.serviceName}</p>
          <p> providerEmail : {servicesdetails.providerEmail}</p>
          <p>description : {servicesdetails.description}</p>
          <p>serviceId : {servicesdetails.serviceId}</p>
          <p>providerName : {servicesdetails.providerName}</p>
          <p>price : {servicesdetails.price}</p>
          <p>rating : {servicesdetails.rating}</p>
          <p>slotsAvailable : {servicesdetails.slotsAvailable}</p>
          <p>category : {servicesdetails.category}</p>
          {/* <form onSubmit={handleservicedetails}>
            <button type="submit" className="btn btn-accent">
              {" "}
              submit{" "}
            </button>
          </form> */}

          {/* {servicesdetails.map((data) => (
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          deleniti expedita officiis quibusdam sint quisquam quos, quae ad?
          Minus culpa id ducimus hic ipsam non dolorem quasi in assumenda iure.{" "}
          {data.serviceName}
        </div>
      ))} */}
        </div>

        <div className="flex-1 bg-orange-100 p-5">
          <form onSubmit={handleservicedetails}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="Name" className="" placeholder="Name" name="name" />
              <label className="label">Email</label>
              <input
                type="email"
                className=""
                placeholder="Email"
                name="email"
              />
              {/* <div>
              <a className="link link-hover">Forgot password?</a>
            </div> */}
              <button type="submit" className="btn btn-neutral mt-4">
                book services
              </button>
            </fieldset>
          </form>
        </div>

        {/* <div>
          <form>
            <div className="hero bg-base-200 min-h-screen">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
              </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                  <div className="card-body">
                    <fieldset className="fieldset">
                      <label className="label">Email</label>
                      <input
                        type="email"
                        className="input"
                        placeholder="Email"
                      />
                      <label className="label">Password</label>
                      <input
                        type="password"
                        className="input"
                        placeholder="Password"
                      />
                      <div>
                        <a className="link link-hover">Forgot password?</a>
                      </div>
                      <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div> */}
      </div>
    </MyContainer>
    // console.log(services);
  );
};

export default ServicesDetails;
