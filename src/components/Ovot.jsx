import React from "react";
import { Link } from "react-router-dom";
import pusparaj from "../resource/pusparaj.png";
import uttam from "../resource/uttam.png";
import RadhaSinghal from "../resource/RadhaSinghal.webp";

export const Ovot = () => {
  return (
    <div className="w-full min-w-fit overflow-hidden bg-gray-100 py-12 px-6">
      <div className="container mx-auto p-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Our Leadership – One Vision One Team
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We are a team of more than 46,000+ people across the globe working for a common purpose. 
            We are led by one of India's most visionary Chairman who is supported by a talented and 
            experienced management team.
          </p>
        </div>

        {/* Leadership Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card for Radha Devi Singhal */}
          <Link to="/Radha" className="block">
            <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 h-full">
              <div className="mb-4 h-40 flex items-center justify-center overflow-hidden rounded-full border-4 border-white mx-auto w-40">
                <img
                  src={RadhaSinghal}
                  alt="Smt. Radha Devi Singhal"
                  className="h-full w-auto rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Smt. Radha Devi Singhal</h3>
              <p className="text-sm text-gray-200">Chairman, TWI Group</p>
            </div>
          </Link>

          {/* Card for Purushottam Singhal */}
          <Link to="/Purushottam" className="block">
            <div className="text-center p-6 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 h-full">
              <div className="mb-4 h-40 flex items-center justify-center overflow-hidden rounded-full border-4 border-white mx-auto w-40">
                <img
                  src={pusparaj}
                  alt="Purushottam Singhal"
                  className="h-full w-auto rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Purushottam Singhal</h3>
              <p className="text-sm text-gray-200">CEO, TWI Group</p>
            </div>
          </Link>

          {/* Card for Dr. Uttam Singhal */}
          <Link to="/Uttam" className="block">
            <div className="text-center p-6 bg-gradient-to-br from-pink-500 to-red-600 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 h-full">
              <div className="mb-4 h-40 flex items-center justify-center overflow-hidden rounded-full border-4 border-white mx-auto w-40">
                <img
                  src={uttam}
                  alt="Dr. Uttam Singhal"
                  className="h-full w-auto rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Dr. Uttam Singhal</h3>
              <p className="text-sm text-gray-200">Managing Director, TWI Group</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};


// import React from "react";
// import { Link } from "react-router-dom";
// import pusparaj from "../resource/pusparaj.png";
// import uttam from "../resource/uttam.png";
// import RadhaSinghal from "../resource/RadhaSinghal.webp";

// export const Ovot = () => {
//   return (
//     <div className="w-full min-w-fit overflow-hidden">
//       <div className="py-12 px-6">
//         <div className="container mx-auto p-6">
//           {/* Header Section */}
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Our Leadership – One Vision One Team</h2>
//             <p className="text-xl text-black mb-8">
//               We are a team of more than 46,000+ people across the globe working for a common purpose. We are led by one of India's most visionary Chairman who is supported by a talented and experienced management team.
//             </p>
//           </div>

//           {/* Leadership Section */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//             <Link to="/Radha" className="block">
//               <div className="text-center p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
//                 <div className="mb-4 h-40 flex items-center justify-center overflow-hidden">
//                   <img
//                     src={RadhaSinghal}
//                     alt="Smt. Radha Devi Singhal"
//                     className="h-full w-auto"
//                   />
//                 </div>
//                 <h3 className="font-bold mb-2">Smt. Radha Devi Singhal</h3>
//                 <p className="text-gray-600">Chairman, TWI Group</p>
//               </div>
//             </Link>

//             <Link to="/Purushottam" className="block">
//               <div className="text-center p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
//                 <div className="mb-4 h-40 flex items-center justify-center overflow-hidden">
//                   <img
//                     src={pusparaj}
//                     alt="Purushottam Singhal"
//                     className="h-full w-auto"
//                   />
//                 </div>
//                 <h3 className="font-bold mb-2">Purushottam Singhal</h3>
//                 <p className="text-gray-600">CEO, TWI Group</p>
//               </div>
//             </Link>

//             <Link to="/Uttam" className="block">
//               <div className="text-center p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
//                 <div className="mb-4 h-40 flex items-center justify-center overflow-hidden">
//                   <img
//                     src={uttam}
//                     alt="Dr. Uttam Singhal"
//                     className="h-full w-auto"
//                   />
//                 </div>
//                 <h3 className="font-bold mb-2">Dr. Uttam Singhal</h3>
//                 <p className="text-gray-600">Managing Director, TWI Group</p>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// import React from "react";
// import { Link } from "react-router-dom";
// import pusparaj from "../resource/pusparaj.png";
// import uttam from "../resource/uttam.png";
// import RadhaSinghal from "../resource/RadhaSinghal.webp";



// export const Ovot = () => {
//   return (
//     <div className="w-full min-w-fit overflow-hidden ">
// <div className=" py-12 px-6 ">
// <div className="container mx-auto p-6">
//   {/* Header Section */}
//   <div className="text-center mb-12">
 
//     <h2 className="text-3xl font-bold mb-4">Our Leadership – One Vision One Team</h2>
//     <p className="text-xl text-black mb-8">
//     We are a team of more than 46,000+ people across the globe working for a common purpose. We are led by one of India's most visionary Chairman who is supported by a talented and experienced management team.
//         </p>
//   </div>

// {/* Services Section */}
// <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

//   <Link to="/RadhaSinghal" className="block">
//       <div className="text-center p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//         <div className="mb-4">
//           <img
//             src={RadhaSinghal} // Replace with the correct image path or URL
//             alt="Ocean Transport Services"
//             className="mx-auto"
//           />
//         </div>
//         <h3 className="font-bold mb-2">Smt. Radha Devi Singhal</h3>
//         <p className="text-gray-600">Chairman, TWI Group</p>
//       </div>
//     </Link>
//   <Link to="/Purushottam" className="block">
//       <div className="text-center p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//         <div className="mb-4">
//           <img
//             src={pusparaj} // Replace with the correct image path or URL
//             alt="Ocean Transport Services"
//             className="mx-auto"
//           />
//         </div>
//         <h3 className="font-bold mb-2">Purushottam Singhal</h3>
//         <p className="text-gray-600">CEO, TWI Group</p>
//       </div>
//     </Link>
//   <Link to="/Uttam" className="block">
//       <div className="text-center p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//         <div className="mb-4">
//           <img
//             src={uttam} // Replace with the correct image path or URL
//             alt="Ocean Transport Services"
//             className="mx-auto"
//           />
//         </div>
//         <h3 className="font-bold mb-2">Dr.Uttaam singhal</h3>
//         <p className="text-gray-600"> Managing Director, TWI Group</p>
//       </div>
//     </Link>
// </div>
// </div>
// </div>

//     </div>
//   )
// }
