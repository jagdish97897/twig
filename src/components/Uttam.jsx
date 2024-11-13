
import pusparaj from "../resource/pusparaj.png";
import uttam from "../resource/uttam.png";
import RadhaSinghal from "../resource/RadhaSinghal.webp";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function Uttam() {
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
    link.href = uttam;
    link.download = "uttam.png";
    link.click();
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Profile Section */}
      <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-lg flex flex-col md:flex-row gap-8 bg-white">
        <div className="w-full md:w-1/3">
          <img src={uttam} alt="uttam" className="rounded-lg object-cover" />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-semibold text-gray-800">
          Dr. Uttam Singhal
          </h1>
          <p className="text-lg text-teal-600 font-medium mt-1">Managing Director, TWI Group</p>
          <p className="text-gray-700 mt-4 leading-relaxed">
          Managing Director of the Company, B.Com (H) & MBA (Fin) had been actively leading all the Activities & managing well through his screwed knowledge, well experienced, high qualified & joined Organisation in 2004 and had achieved various Landmarked Achievement in recognized as best service providers with new Outlook & Modern approach & solutions. He is well connected through Political links & has a great span of vendor base all over India. He is a Person of Vision & enthusiasm & promised to deliver what he commits always & this is his best quality.
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
// import Slider from "react-slick";
// import { Link } from "react-router-dom";

// export default function Uttam() {

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
//             <Link to="/" className="block">
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
//             <Link to="/" className="block">
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
//             <Link to="/" className="block">
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
//             <Link to="/" className="block">
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
//             <Link to="/" className="block">
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
//           </Slider>
//         </div>
//       </div>
// </div>
    
//   );
// }