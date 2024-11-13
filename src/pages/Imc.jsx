import React from 'react';
import crausal1 from "../resource/crausal1.jpg"; // Importing the image
import btsil from "../resource/btsil.jpg"; // Importing the image

const Imc = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Image */}
        <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${btsil})` }}></div>
        
        {/* Content */}
        <div className="p-8">
          {/* Title and Subtitle */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">A Thrilling Experience at India Mobile Congress 2024</h1>
          <p className="text-gray-500 mb-4">By Transvue Solutions India Pvt Ltd</p>

          {/* Social Sharing */}
          <div className="flex space-x-4 mb-6">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://www.linkedin.com/posts/lakshay-monga-40641818b_imc2024-innovationinmotion-startupecosystem-ugcPost-7252022333832364032-TC7-?utm_source=share&utm_medium=member_desktop" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>

          {/* Article Content */}
          <div className="text-gray-700 space-y-4">
            <p>
            Transvue Solutions India Pvt Ltd recently attended the India Mobile Congress 2024, showcasing its innovative solutions and exploring new frontiers in the tech ecosystem. Known for delivering cutting-edge software and digital transformation services, 
            </p>
            <p>
            Transvue Solutions leverages advanced technologies to empower businesses and streamline operations across diverse sectors.
            </p>
            <p>
            At IMC 2024, Transvue Solutions had the opportunity to engage with tech leaders, explore emerging trends, and share insights on their latest offerings, including digital infrastructure solutions, AI-driven analytics, and customized software applications. This visit provided the team with invaluable exposure to industry advancements and allowed them to connect with thought leaders and other innovators who are shaping the future of technology. Transvue’s participation in Asia's largest tech event highlights their commitment to driving digital innovation and contributing to the tech evolution in India and beyond.
            </p>
     

            {/* Additional paragraphs can go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imc;


// import React from 'react';

// const Imc = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen py-10 px-4">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
//         {/* Image */}
//         <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('https://example.com/dharavi-image.jpg')` }}></div>
        
//         {/* Content */}
//         <div className="p-8">
//           {/* Title and Subtitle */}
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">Dharavi - A Human-Centric Transformation</h1>
//           <p className="text-gray-500 mb-4">By Gautam Adani</p>

//           {/* Social Sharing */}
//           <div className="flex space-x-4 mb-6">
//             <a href="#" className="text-blue-600 hover:text-blue-800">
//               <i className="fab fa-facebook"></i> Facebook
//             </a>
//             <a href="#" className="text-blue-400 hover:text-blue-600">
//               <i className="fab fa-twitter"></i> Twitter
//             </a>
//             <a href="#" className="text-blue-600 hover:text-blue-800">
//               <i className="fab fa-linkedin"></i> LinkedIn
//             </a>
//           </div>

//           {/* Article Content */}
//           <div className="text-gray-700 space-y-4">
//             <p>
//               On his bucket list, former world heavyweight boxing champion Mike Tyson listed two places in India that he wished to visit: one was the Taj Mahal and the other was Dharavi.
//             </p>
//             <p>
//               My first tryst with Dharavi was in the late 1970s. New to Mumbai, I was just another anonymous youngster lured to the big city by opportunity and an optimism that wealth would sparkle in the diamond dew. Even back then, Dharavi was a melting pot of a diverse array of beliefs, cultures, and languages from every part of India.
//             </p>
//             <p>
//               That visit to Dharavi was both humbling and disturbing. The community’s struggle for survival, laced with equanimity and happiness, inspired me. However, it also sowed a question into my mind: will their fate ever change?
//             </p>
//             <p>
//               My amazement is no less today. Seeing Dharavi spread out like a giant human quilt below the landing approach to Mumbai Airport is not only a reminder of stark human adaptation and Mumbai’s capacity to embrace settlers of contrastive origins but also a grim reminder of a community living in urban squalor, forever waiting for its revival.
//             </p>
//             <p>
//               A new chapter of pride and purpose is beginning. It is a historic opportunity for us to create a new Dharavi of dignity, safety, and inclusiveness.
//             </p>
//             {/* Additional paragraphs can go here */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Imc;
