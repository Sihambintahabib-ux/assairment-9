import React, { Suspense } from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import "../index.css";
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import Services from './Services';
import Homeservices from './Homeservices';
import useServices from '../Hook/useServices';
import WinterCareTips from '../components/WinterCareTips.jsx';
import Aboutus from './Aboutus.jsx';
// import AuthContext from '../provider/AuthProvider';

// const petData = fetch('pet.json').then((res) => res.json()).catch((err)=>err.message)

// const petData = async () => {
//   const res = await fetch("pet.json");
//   return res.json();
// };

// console.log(petData ());

const Home = () => {
    const { services } = useServices();

  // const { user } = use(AuthContext);
          {
            //  <h1>loging {user && user.name }</h1> 
          }

  // const data = petData();
  // const data = petData;
  // console.log(data);
  return (
    <div>
      <main>
        {/* slider */}
        <section>
          <Slider></Slider>
        </section>
        {/* services data fetch */}
        <section>
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-xl"></span>
            }
          >
            <Homeservices services={services}></Homeservices>
          </Suspense>
        </section>
        {/* tips */}
        <WinterCareTips></WinterCareTips>
        <section></section>
        {/* advice */}
        <Aboutus></Aboutus>
        <section></section>
      </main>
    </div>
  );
};

export default Home;