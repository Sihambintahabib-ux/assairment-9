// import React from 'react';
// import MyContainer from './MyContainer';

// const WinterCareTips = () => {
//   return (
//     <MyContainer>
//       <div className="flex justify-between items-center">
//         <div className="">
//           <h1>Species-appropriate diet</h1>
//           <p>
//             Feed your pet a well-balanced, high-quality diet that is appropriate
//             for their species, age, and health status.
//           </p>
//         </div>
//         <div className="">
//           <h1>Avoid harmful foods</h1>
//           <p>
//             Never give your pet human foods that are toxic to them, such as
//             chocolate, grapes, and onions.
//           </p>
//         </div>
//         <div className="">
//           <h1>Prevent obesity</h1>
//           <p>
//             Give them the correct amount of food to prevent obesity, which can
//             lead to serious health issues. Consult your vet for dietary
//             recommendations if you are unsure.
//           </p>
//         </div>
//       </div>
//     </MyContainer>
//   );
// };

// export default WinterCareTips;





import React from "react";
import {
  FaSnowflake,
  FaPaw,
  FaThermometerHalf,
  FaHome,
  FaHeartbeat,
  FaShieldAlt,
} from "react-icons/fa";

const WinterCareTips = () => {
  const tips = [
    {
      id: 1,
      icon: <FaSnowflake className="text-4xl text-blue-500" />,
      title: "Limit Outdoor Time",
      description:
        "Reduce walk duration in extreme cold. Watch for signs of discomfort like shivering or lifting paws.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      id: 2,
      icon: <FaPaw className="text-4xl text-orange-500" />,
      title: "Protect Their Paws",
      description:
        "Use paw balm or boots to protect against ice, salt, and chemicals. Wipe paws after walks.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      id: 3,
      icon: <FaThermometerHalf className="text-4xl text-red-500" />,
      title: "Maintain Body Temperature",
      description:
        "Provide warm clothing for short-haired breeds. Keep indoor temperature comfortable and draft-free.",
      color: "bg-red-50 border-red-200",
    },
    {
      id: 4,
      icon: <FaHome className="text-4xl text-green-500" />,
      title: "Create Cozy Spaces",
      description:
        "Set up warm, draft-free resting areas with blankets. Keep beds away from cold floors and windows.",
      color: "bg-green-50 border-green-200",
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaSnowflake className="text-3xl text-blue-500 animate-spin-slow" />
            <h2 className="text-4xl font-bold text-gray-800">
              Winter Care Tips for Pets
            </h2>
            <FaSnowflake className="text-3xl text-blue-500 animate-spin-slow" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Keep your furry friends safe, warm, and healthy during the cold
            season with these essential winter care tips
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className={`${tip.color} border-2 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 transform hover:scale-110 transition-transform duration-300">
                  {tip.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {tip.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Banner */}
        <div className="mt-12 bg-blue-400 rounded-2xl p-8 text-white shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">
                Need Professional Help?
              </h3>
              <p className="text-blue-100">
                Our expert veterinarians are here 24/7 to help you keep your
                pets safe and healthy this winter
              </p>
            </div>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
              Contact Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinterCareTips;