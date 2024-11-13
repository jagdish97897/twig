import React from 'react';

const Sustainability1 = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Title and Description */}
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">Our Commitment to Sustainability</h1>
        <p className="text-lg text-gray-600 mb-8">
          At TWI GROUP, we are dedicated to creating a sustainable future by focusing on responsible environmental, social, and economic practices. We believe in driving positive impact for the planet, our communities, and future generations.
        </p>

        {/* Pillars of Sustainability */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Environmental Sustainability */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <span className="bg-green-100 p-4 rounded-full text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm1-13h-2v6h2zm0 8h-2v2h2z" />
                </svg>
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Environmental Sustainability</h2>
            <p className="text-gray-600 mb-4">
              We strive to minimize our environmental impact through renewable energy, waste reduction, and resource conservation.
            </p>
            <ul className="text-gray-600 text-left list-disc ml-5 space-y-2">
              <li>Implementing renewable energy solutions across all facilities by 2025.</li>
              <li>Reducing carbon emissions by 50% through sustainable transport and logistics practices.</li>
              <li>Implementing zero-waste policies, targeting a 90% waste reduction across operations.</li>
              <li>Partnering with suppliers committed to sustainable sourcing and resource conservation.</li>
            </ul>
          </div>

          {/* Social Responsibility */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <span className="bg-blue-100 p-4 rounded-full text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2a6.63 6.63 0 0 0-5.5 3.11A7.78 7.78 0 0 0 4 23h16a7.78 7.78 0 0 0-2.5-5.89A6.63 6.63 0 0 0 12 14z" />
                </svg>
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Social Responsibility</h2>
            <p className="text-gray-600 mb-4">
              We are committed to enhancing the well-being of communities through education, healthcare, and inclusive growth.
            </p>
            <ul className="text-gray-600 text-left list-disc ml-5 space-y-2">
              <li>Supporting local education initiatives and STEM programs for underrepresented groups.</li>
              <li>Providing healthcare resources and benefits to employees and their families.</li>
              <li>Encouraging diversity, equity, and inclusion within our workforce and in our communities.</li>
              <li>Collaborating with nonprofit organizations to address key social issues.</li>
            </ul>
          </div>

          {/* Economic Growth */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <span className="bg-yellow-100 p-4 rounded-full text-yellow-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 3h-6v2h6v14H3V5h6V3H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM7 9H5v6h2zm5-4h-2v10h2zm5 6h-2v4h2z" />
                </svg>
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Economic Growth</h2>
            <p className="text-gray-600 mb-4">
              We aim to foster economic growth through responsible business practices that create long-term value.
            </p>
            <ul className="text-gray-600 text-left list-disc ml-5 space-y-2">
              <li>Investing in local businesses and fostering supplier diversity.</li>
              <li>Creating jobs that offer fair wages, benefits, and opportunities for advancement.</li>
              <li>Building strategic partnerships to drive sustainable development and economic resilience.</li>
              <li>Focusing on transparency in all financial and business practices.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability1;


// import React from 'react';

// const Sustainability1 = () => {
//   return (
//     <div className="bg-gray-100 py-12 px-4">
//       <div className="max-w-6xl mx-auto text-center">
        
//         {/* Title and Description */}
//         <h1 className="text-4xl font-semibold text-gray-800 mb-4">Our Commitment to Sustainability</h1>
//         <p className="text-lg text-gray-600 mb-8">
//           At TWI GROUP, we are dedicated to creating a sustainable future by focusing on responsible environmental, social, and economic practices. We believe in driving positive impact for the planet, our communities, and future generations.
//         </p>

//         {/* Pillars of Sustainability */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
//           {/* Environmental Sustainability */}
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <div className="flex justify-center mb-4">
//               <span className="bg-green-100 p-4 rounded-full text-green-700">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm1-13h-2v6h2zm0 8h-2v2h2z" />
//                 </svg>
//               </span>
//             </div>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-2">Environmental Sustainability</h2>
//             <p className="text-gray-600">
//               We strive to minimize our environmental impact through renewable energy, waste reduction, and resource conservation.
//             </p>
//           </div>

//           {/* Social Responsibility */}
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <div className="flex justify-center mb-4">
//               <span className="bg-blue-100 p-4 rounded-full text-blue-700">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2a6.63 6.63 0 0 0-5.5 3.11A7.78 7.78 0 0 0 4 23h16a7.78 7.78 0 0 0-2.5-5.89A6.63 6.63 0 0 0 12 14z" />
//                 </svg>
//               </span>
//             </div>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-2">Social Responsibility</h2>
//             <p className="text-gray-600">
//               We are committed to enhancing the well-being of communities through education, healthcare, and inclusive growth.
//             </p>
//           </div>

//           {/* Economic Growth */}
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <div className="flex justify-center mb-4">
//               <span className="bg-yellow-100 p-4 rounded-full text-yellow-700">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M21 3h-6v2h6v14H3V5h6V3H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM7 9H5v6h2zm5-4h-2v10h2zm5 6h-2v4h2z" />
//                 </svg>
//               </span>
//             </div>
//             <h2 className="text-2xl font-semibold text-gray-800 mb-2">Economic Growth</h2>
//             <p className="text-gray-600">
//               We aim to foster economic growth through responsible business practices that create long-term value.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sustainability1;
