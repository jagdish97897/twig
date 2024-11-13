import pusparaj from "../resource/pusparaj.png";
import uttam from "../resource/uttam.png";
import RadhaSinghal from "../resource/RadhaSinghal.webp";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function Purushottam() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pusparaj;
    link.download = "pusparaj.png";
    link.click();
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Profile Section */}
      <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-lg flex flex-col md:flex-row gap-8 bg-white">
        <div className="w-full md:w-1/3">
          <img src={pusparaj} alt="pusparaj" className="rounded-lg object-cover" />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-semibold text-gray-800">
            Mr. Purushottam Singhal
          </h1>
          <p className="text-lg text-teal-600 font-medium mt-1">CEO, TWI Group</p>
          <p className="text-gray-700 mt-4 leading-relaxed">
          CEO of the Company is well equipped with Experience shared by his Father Late Shri P.C.Singhal blog with high Qualified ( B.Com Hons, MBA - Logistics ) and working Since 1990 in the Organisation and has achieved several milestones in the last 26 years and completed various Job in PAN India in a most satisfactory manner under his Leadership. He is also Social Activist and has a good social reputation. He is a Trustee of “Sri Agarsen International Hospital “and part of various other Social Services to Society & possesses good expertise in handling & movement of critical & supercritical Jobs too.
          </p>
          <button
            onClick={handleDownload}
            className="mt-6 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition duration-300"
          >
            Download high resolution image
          </button>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="bg-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
            Our Leadership – One Vision One Team
          </h2>
          <Slider {...settings}>
            {/* Card for Radha Devi Singhal */}
            <Link to="/Radha" className="block px-4">
              <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 h-full">
                <div className="mb-4 h-40 flex items-center justify-center overflow-hidden rounded-full border-4 border-white mx-auto w-40">
                  <img src={RadhaSinghal} alt="Smt. Radha Devi Singhal" className="h-full w-auto rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Smt. Radha Devi Singhal</h3>
                <p className="text-sm text-gray-200">Chairman, TWI Group</p>
              </div>
            </Link>

            {/* Card for Purushottam Singhal */}
            <Link to="/Purushottam" className="block px-4">
              <div className="text-center p-6 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 h-full">
                <div className="mb-4 h-40 flex items-center justify-center overflow-hidden rounded-full border-4 border-white mx-auto w-40">
                  <img src={pusparaj} alt="Purushottam Singhal" className="h-full w-auto rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Purushottam Singhal</h3>
                <p className="text-sm text-gray-200">CEO, TWI Group</p>
              </div>
            </Link>

            {/* Card for Dr. Uttam Singhal */}
            <Link to="/Uttam" className="block px-4">
              <div className="text-center p-6 bg-gradient-to-br from-pink-500 to-red-600 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 h-full">
                <div className="mb-4 h-40 flex items-center justify-center overflow-hidden rounded-full border-4 border-white mx-auto w-40">
                  <img src={uttam} alt="Dr. Uttam Singhal" className="h-full w-auto rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Dr. Uttam Singhal</h3>
                <p className="text-sm text-gray-200">Managing Director, TWI Group</p>
              </div>
            </Link>
          </Slider>
        </div>
      </div>
    </div>
  );
}



// import pusparaj from "../resource/pusparaj.png";
// import uttam from "../resource/uttam.png";
// import RadhaSinghal from "../resource/RadhaSinghal.webp";
// import Slider from "react-slick";
// import { Link } from "react-router-dom";

// export default function Purushottam() {

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         arrows: true,
//       }
//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = pusparaj;
//     link.download = "pusparaj.png";
//     link.click();
//   };

//   return (
//     <div className="bg-gray-100">
//     <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-lg flex gap-8 bg-white ">
//       <div className="w-1/3">
//         <img
//           src={pusparaj}
//           alt="pusparaj"
//           className="rounded-lg object-cover"
//         />
//       </div>

//       <div className="w-2/3">
//         <h1 className="text-3xl font-semibold text-gray-800">
//           Mr. Purushottam Singhal
//         </h1>
//         <p className="text-lg text-teal-600 font-medium mt-1">
//           CEO, TWI Group
//         </p>

//         <p className="text-gray-700 mt-4 leading-relaxed">
//           An educationist and a qualified doctor with Bachelors in Dental Surgery (BDS),
//           Dr. Priti Adani has been treading a path hitherto less travelled in the Corporate
//           Social Responsibility (CSR) space. Focusing on the mantra of Growth with Goodness,
//           Dr. Adani is as much a businesswoman as she is a responsible citizen helping create
//           sustainable solutions to complex problems.
//         </p>

//         <p className="text-gray-700 mt-4 leading-relaxed">
//           She has been spearheading Adani Foundation, her brainchild, passionately for two
//           decades now – ensuring that the Adani Group helps transform the lives of as many
//           people as possible.
//         </p>

//         <p className="text-gray-700 mt-4 leading-relaxed">
//           Under her guidance and leadership, Adani Foundation has been carrying out its
//           activities in four core areas namely, Education, Community Health, Sustainable
//           Livelihood Development, and Infrastructure Development. At present, the Foundation
//           is helping uplift 3.4 Million people annually across 18 states of the country.
//         </p>

//         <button
//           onClick={handleDownload}
//           className="mt-6 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
//         >
//           Download high resolution image
//         </button>
//       </div>



//     </div>


    
//     <div className="bg-gray-100 py-12 px-6">
//         {/* Container */}
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Our Leadership – One Vision One Team</h2>
//           <Slider {...settings}>
//              {/* Leadership Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Card for Radha Devi Singhal */}
//           <Link to="/Radha" className="block">
//             <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 h-full">
//               <div className="mb-4 h-40 flex items-center justify-center overflow-hidden rounded-full border-4 border-white mx-auto w-40">
//                 <img
//                   src={RadhaSinghal}
//                   alt="Smt. Radha Devi Singhal"
//                   className="h-full w-auto rounded-full"
//                 />
//               </div>
//               <h3 className="text-xl font-bold text-white mb-1">Smt. Radha Devi Singhal</h3>
//               <p className="text-sm text-gray-200">Chairman, TWI Group</p>
//             </div>
//           </Link>

//           {/* Card for Purushottam Singhal */}
//           <Link to="/Purushottam" className="block">
//             <div className="text-center p-6 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 h-full">
//               <div className="mb-4 h-40 flex items-center justify-center overflow-hidden rounded-full border-4 border-white mx-auto w-40">
//                 <img
//                   src={pusparaj}
//                   alt="Purushottam Singhal"
//                   className="h-full w-auto rounded-full"
//                 />
//               </div>
//               <h3 className="text-xl font-bold text-white mb-1">Purushottam Singhal</h3>
//               <p className="text-sm text-gray-200">CEO, TWI Group</p>
//             </div>
//           </Link>

//           {/* Card for Dr. Uttam Singhal */}
//           <Link to="/Uttam" className="block">
//             <div className="text-center p-6 bg-gradient-to-br from-pink-500 to-red-600 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300 h-full">
//               <div className="mb-4 h-40 flex items-center justify-center overflow-hidden rounded-full border-4 border-white mx-auto w-40">
//                 <img
//                   src={uttam}
//                   alt="Dr. Uttam Singhal"
//                   className="h-full w-auto rounded-full"
//                 />
//               </div>
//               <h3 className="text-xl font-bold text-white mb-1">Dr. Uttam Singhal</h3>
//               <p className="text-sm text-gray-200">Managing Director, TWI Group</p>
//             </div>
//           </Link>
//         </div>
//           </Slider>
//         </div>
//       </div>
// </div>
    
//   );
// }

// import pusparaj from "../resource/pusparaj.png";

// export default function Purushottam() {
//     return (
//       <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg flex gap-8">
//         {/* Left: Image Section */}
//         <div className="w-1/3">
//           <img
//             src={pusparaj} // Replace with the correct path or image URL
//             alt="pusparaji"
//             className="rounded-lg object-cover"
//           />
//         </div>
  
//         {/* Right: Content Section */}
//         <div className="w-2/3">
//           <h1 className="text-3xl font-semibold text-gray-800">
//             Mr. Purushottam Singhal
//           </h1>
//           <p className="text-lg text-teal-600 font-medium mt-1">
//           CEO, TWI Group
//           </p>
  
//           <p className="text-gray-700 mt-4 leading-relaxed">
//             An educationist and a qualified doctor with Bachelors in Dental Surgery (BDS),
//             Dr. Priti Adani has been treading a path hitherto less travelled in the Corporate
//             Social Responsibility (CSR) space. Focusing on the mantra of Growth with Goodness,
//             Dr. Adani is as much a businesswoman as she is a responsible citizen helping create
//             sustainable solutions to complex problems.
//           </p>
  
//           <p className="text-gray-700 mt-4 leading-relaxed">
//             She has been spearheading Adani Foundation, her brainchild, passionately for two
//             decades now – ensuring that the Adani Group helps transform the lives of as many
//             people as possible.
//           </p>
  
//           <p className="text-gray-700 mt-4 leading-relaxed">
//             Under her guidance and leadership, Adani Foundation has been carrying out its
//             activities in four core areas namely, Education, Community Health, Sustainable
//             Livelihood Development, and Infrastructure Development. At present, the Foundation
//             is helping uplift 3.4 Million people annually across 18 states of the country.
//           </p>
  
//           <button className="mt-6 px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">
//             Download high resolution image
//           </button>
//         </div>
//       </div>
//     );
//   }
  