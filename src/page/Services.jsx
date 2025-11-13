import { CiStar } from "react-icons/ci";
import { Link } from "react-router";
// import useServices from "../Hook/useServices";
import { useEffect, useState } from "react";

const Services = () => {
  // console.log(data);
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("pet.json")
      .then((res) => res.json())
      .then((d) => setdata(d))
      .catch((e) => console.log(e));
  }, []);

  // console.log('data s',data);
  //       const { services } = useServices();

  // console.log("Services data:", services);
  // console.log("First service:", services[0]);
  if (!data) return <div>Loading...</div>;

  const datas = data.slice(0, 12);

  return (
    <div>
      {/* <Link to="/servicesdetails"> */}
      <h1 className="text-2xl mx-10">Popular pet services : {datas.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-20 ">
      {datas.map((data, serviceId) => (
      <div
        key={serviceId}
        className=" container card bg-base-100 w-75  my-8 mx-auto shadow-2xl object-center   outline-gray-200  "
      >
        <figure className="h-60 overflow-hidden  ">
          <img className=" w-full object-fill " src={data.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="card-title ">
            <h2 className="text-md ">{data.serviceName}</h2>
          </div>
          <div className="card-actions w-full flex justify-between text-lg">
            <div className="px-3 font-bold rounded-md  ">${data.price}</div>
            {/* {downloads} */}
            <div className=" w-fit px-3 font-bold rounded-md text-[#fa892c] bg-[#ffe8ca] ">
              <p className="w-full flex items-center gap-1">
                {data.rating} <CiStar />
              </p>
            </div>
          </div>
          <div>
            <Link to={`/servicesdetails/${data.serviceId}`}>
              <button className="btn bg-orange-400 max-w-full text-center text-white p-2 rounded-md">
                view details
              </button>
            </Link>
          </div>
        </div>
      </div>
       ))} 
       </div> 
       {/* </Link>  */}
    </div>
  );
};

export default Services;
