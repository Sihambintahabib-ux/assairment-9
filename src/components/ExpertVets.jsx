// // Simple Winter Tips
// const WinterCareTips = () => {
//   const tips = [
//     { title: "Limit Outdoor Time", desc: "Keep walks short in extreme cold" },
//     { title: "Protect Paws", desc: "Use boots or paw balm" },
//     { title: "Keep Warm", desc: "Provide cozy bedding indoors" },
//     { title: "Fresh Water", desc: "Prevent water from freezing" },
//     { title: "Winter Grooming", desc: "Maintain coat for insulation" },
//     { title: "Monitor Health", desc: "Watch for signs of hypothermia" },
//   ];

//   return (
//     <div className="py-12 bg-blue-50">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8">
//           Winter Care Tips
//         </h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {tips.map((tip, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow">
//               <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
//               <p className="text-gray-600">{tip.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// Simple Expert Vets
const ExpertVets = () => {
  const vets = [
    { name: "Dr. Sarah Mitchell", specialty: "Winter Care", exp: "15 years" },
    { name: "Dr. James Cooper", specialty: "Emergency Care", exp: "12 years" },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Small Animals",
      exp: "10 years",
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Meet Our Experts
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {vets.map((vet, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow text-center"
            >
              <div className="w-24 h-24 bg-orange-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-xl">{vet.name}</h3>
              <p className="text-orange-600">{vet.specialty}</p>
              <p className="text-gray-600 text-sm">{vet.exp} experience</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ExpertVets;