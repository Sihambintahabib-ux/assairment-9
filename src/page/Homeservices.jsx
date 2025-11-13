import { Suspense,  useEffect, useState } from "react";
// import { use} from "react";
import MyContainer from "../components/MyContainer";
import { Link } from "react-router";
import Services from "./Services";
// import useServices from "../Hook/useServices";
import { CiStar } from "react-icons/ci";

// const petData = fetch("pet.json")
// .then((res) => res.json())
// .catch((err) => err.message);
const Homeservices = () => {
  // const { services } = useServices();
  const [services, setservices] = useState([]);
  useEffect(() => {
    fetch("pet.json")
      .then((res) => res.json())
      .then((d) => setservices(d))
      .catch((e) => console.log(e));
  }, []);

  // const datas = use(petData);
  // const dispetdatas = datas.slice(0, 12);
  // console.log(dispetdatas);

  return (
    <div>
      <MyContainer>
        <div>
          <h1 className="text-2xl">Popular pet services :</h1>
          {/* <Suspense fallback="{<h1>i am loaddata</h1>}"> */}
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-20 ">
            {services.slice(0, 8).map((data, serviceId) => (
              // <Services key={serviceId} data={data}></Services>
              <div
                key={serviceId}
                data={data}
                className=" container card bg-base-100 w-75  my-8 mx-auto shadow-2xl object-center   outline-gray-200 "
              >
                <figure className="h-60 overflow-hidden  ">
                  <img
                    className=" w-full object-fill "
                    src={data.image}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <div className="card-title ">
                    <h2 className="text-md ">{data.serviceName}</h2>{" "}
                  </div>
                  <div className="card-actions w-full flex justify-between text-lg">
                    <div className="px-3 font-bold rounded-md  ">
                      ${data.price}
                    </div>
                    <div className=" w-fit px-3 font-bold rounded-md text-[#fa892c] bg-[#ffe8ca] ">
                      <p className="w-full flex items-center gap-1">
                        {data.rating} <CiStar />
                      </p>
                    </div>
                  </div>
                  <div>
                    <Link to={`/servicesdetails/${data.serviceId}`}>
                      <button className="btn bg-orange-400 max-w-full text-center text-white p-2 rounded-md">
                        view details{" "}
                      </button>
                    </Link>
                  </div>
                </div>
                ;
              </div>
            ))}
          </div>
          {/* </Suspense> */}
          <Link to="/login">
            <button className=" flex justify-center  my-5 btn bg-orange-400 text-white p-3 rounded-md text-center w-fit mx-auto ">
              show all
            </button>
          </Link>
        </div>
      </MyContainer>
    </div>
  );
};

// <div className="card-body">
//   <div className="card-title ">
//     <h2 className="text-md ">{data.serviceName}</h2>
//   </div>
//   <div className="card-actions w-full flex justify-between text-lg">
//     <div className="px-3 font-bold rounded-md  ">${data.price}</div>
//     {/* {downloads} */}
//     <div className=" w-fit px-3 font-bold rounded-md text-[#fa892c] bg-[#ffe8ca] ">
//       <p className="w-full flex items-center gap-1">
//         {data.rating} <CiStar />
//       </p>
//     </div>
//   </div>
//   <div>
//     <Link to={"/servicesdetails/${data.serviceId}"}>
//       <button className="btn bg-orange-400 max-w-full text-center text-white p-2 rounded-md">
//         view details
//       </button>
//     </Link>
//   </div>
// </div>;

export default Homeservices;
