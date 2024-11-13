import React from 'react';
import { useNavigate } from 'react-router-dom';
import logotwi from "./resource/logotwi.png";
import logoustl from "./resource/logoustl.png";
import logokgvl from "./resource/logokgvl.png";
import logoxpert from "./resource/logoxpert.png";
import logogov from "./resource/logogov.png";
import logotsil from "./resource/logotsil.png";
import logogreen from "./resource/logogreen.png";
import logoadvance from "./resource/logoadvance.png";
import logodream from "./resource/logodream.png";
import logopro from "./resource/logopro.png";
import { Link } from "react-router-dom";
const CompanyComponent = () => {
  const navigate = useNavigate();

  const handleReadMore = (name) => {
    navigate(`/business/${name}`);
  };

  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <img src={logotwi} alt="Company Logo" className="h-32 w-32 object-contain mb-4" />
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2">TWI GROUP OF COMPANIES</h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl">
            Your company description goes here. Briefly describe your company's mission or services in a few sentences.
          </p>
        </div>
        
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Businesses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          
          {/* Manually rendering each business */}
          
          <div className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
            <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
              <img src={logotwi} alt="TRANSPORT WINGS (CAL) PVT.LTD" className="h-44 w-44 object-cover rounded-full border-4 border-white" />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl font-semibold text-center">TRANSPORT WINGS (CAL) PVT.LTD</p>
              <p className="text-center text-gray-600">Logistics and Supply Chain.</p>
              <button
                className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
                onClick={() => handleReadMore("TRANSPORT WINGS (CAL) PVT.LTD")}
              >
                Read
              </button>
              <Link
        to="/Kgvl"
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-600"
      >
       LEARN MORE
      </Link>
            </div>
          </div>

          <div className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
            <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
              <img src={logoustl} alt="USTRANS WORLD LOGISTICS LIMITED" className="h-44 w-44 object-cover rounded-full border-4 border-white" />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl font-semibold text-center">USTRANS WORLD LOGISTICS LIMITED</p>
              <p className="text-center text-gray-600">Freight Forwarding and Logistics.</p>
              <button
                className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
                onClick={() => handleReadMore("USTRANS WORLD LOGISTICS LIMITED")}
              >
                Read
              </button>
            </div>
          </div>

          <div className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
            <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
              <img src={logokgvl} alt="KARISHMA GLOBAL VENTURES" className="h-44 w-44 object-cover rounded-full border-4 border-white" />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl font-semibold text-center">KARISHMA GLOBAL VENTURES</p>
              <p className="text-center text-gray-600">E-Mobility Solutions.</p>
              <button
                className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
                onClick={() => handleReadMore("KARISHMA GLOBAL VENTURES")}
              >
                Read
              </button>
            </div>
          </div>

          <div className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
            <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
              <img src={logotsil} alt="Transvue Solutions India Pvt Ltd" className="h-44 w-44 object-cover rounded-full border-4 border-white" />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl font-semibold text-center">Transvue Solutions India Pvt Ltd</p>
              <p className="text-center text-gray-600">IT Solutions and Digital Services.</p>
              <button
                className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
                onClick={() => handleReadMore("Transvue Solutions India Pvt Ltd")}
              >
                Read
              </button>
            </div>
          </div>

          <div className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
            <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
              <img src={logogreen} alt="Green Earth Pulp & Paper Pvt Ltd" className="h-44 w-44 object-cover rounded-full border-4 border-white" />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl font-semibold text-center">Green Earth Pulp & Paper Pvt Ltd</p>
              <p className="text-center text-gray-600">Pulp and Paper Manufacturing.</p>
              <button
                className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
                onClick={() => handleReadMore("Green Earth Pulp & Paper Pvt Ltd")}
              >
                Read
              </button>
            </div>
          </div>
          <div className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
            <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
              <img src={logogreen} alt="Green Earth Pulp & Paper Pvt Ltd" className="h-44 w-44 object-cover rounded-full border-4 border-white" />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl font-semibold text-center">Trade Biz Worldwide</p>
              <p className="text-center text-gray-600">Industrial Products and Project Supplies.</p>
              <button
                className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
                onClick={() => handleReadMore("Green Earth Pulp & Paper Pvt Ltd")}
              >
                Read
              </button>
            </div>
          </div>

          {/* Add the remaining companies similarly */}

        </div>
      </div>
    </div>
  );
};

export default CompanyComponent;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import logotwi from "./resource/logotwi.png";
// import logoustl from "./resource/logoustl.png";
// import logokgvl from "./resource/logokgvl.png";
// import logoxpert from "./resource/logoxpert.png";
// import logogov from "./resource/logogov.png";
// import logotsil from "./resource/logotsil.png";
// import logogreen from "./resource/logogreen.png";
// import logoadvance from "./resource/logoadvance.png";
// import logodream from "./resource/logodream.png";
// import logopro from "./resource/logopro.png";

// const data = [
//   { name: "TRANSPORT WINGS (CAL) PVT.LTD", review: "Logistics and Supply Chain.", img: logotwi },
//   { name: "USTRANS WORLD LOGISTICS LIMITED", review: "Freight Forwarding and Logistics.", img: logoustl },
//   { name: "KARISHMA GLOBAL VENTURES", review: "E-Mobility Solutions.", img: logokgvl },
//   { name: "Transvue Solutions India Pvt Ltd", review: "IT Solutions and Digital Services.", img: logotsil },
//   { name: "Green Earth Pulp & Paper Pvt Ltd", review: "Pulp and Paper Manufacturing.", img: logogreen },
//   { name: "Trade Biz Worldwide", review: "Industrial Products and Project Supplies.", img: logoadvance },
//   { name: "Dream Luxottica", review: "Hospitality (Luxury Resorts).", img: logodream },
//   { name: "Pro GenX Marketing Pvt Ltd", review: "Marketing and Manufacturing.", img: logopro },
//   { name: "UConnect 2 Xperts LLC, USA", review: "IT Support and Software Services.", img: logoxpert },
//   { name: "Advance Consultancy", review: "Government Advocacy and Business Consultancy.", img: logogov },
// ];

// const CompanyComponent = () => {
//   const navigate = useNavigate();

//   const handleReadMore = (name) => {
//     navigate(`/business/${name}`);
//   };

//   return (
//     <div className="bg-gray-100 py-12 px-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col items-center mb-12">
//           <img src={logotwi} alt="Company Logo" className="h-32 w-32 object-contain mb-4" />
//           <h1 className="text-5xl font-extrabold text-gray-900 mb-2">TWI GROUP OF COMPANIES</h1>
//           <p className="text-lg text-gray-600 text-center max-w-2xl">
//             Your company description goes here. Briefly describe your company's mission or services in a few sentences.
//           </p>
//         </div>

//         <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Businesses</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
//           {data.map((d) => (
//             <div key={d.name} className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
//               <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
//                 <img src={d.img} alt={d.name} className="h-44 w-44 object-cover rounded-full border-4 border-white" />
//               </div>
//               <div className="flex flex-col items-center justify-center gap-4 p-4">
//                 <p className="text-xl font-semibold text-center">{d.name}</p>
//                 <p className="text-center text-gray-600">{d.review}</p>
//                 <button
//                   className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
//                   onClick={() => handleReadMore(d.name)} // Navigate to details page on click
//                 >
//                   Read
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompanyComponent;
