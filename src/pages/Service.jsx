
import React from "react";
import crausal1 from "../resource/crausal1.jpg";
import crausal2 from "../resource/crausal2.jpg";
import crausal3 from "../resource/crausal3.jpg";
import crausal4 from "../resource/crausal4.jpg";
import crausal5 from "../resource/crausal5.jpg";
import crausal6 from "../resource/crausal6.jpg";
import crausal7 from "../resource/crausal7.jpg";
import crausal8 from "../resource/crausal8.jpg";

import pusparaj from "../resource/pusparaj.png";
import uttam from "../resource/uttam.png";

import wave from "../resource/wave_final.png";
import goldenwave from "../resource/golden_wave.png";
import { Book } from "../components/Book";
import { Button2 } from "../components/Button2";
import { keyBenefits } from "../Data/KeyBenefits";
import { BenefitCard } from "../components/BenefitCard";

import news from "../resource/news_clipping.jpeg";
import news1 from "../resource/news1.jpg";
import news2 from "../resource/news2.jpg";
import { Link } from "react-router-dom";
import { BusinessBook } from "../components/BusinessBook";
import bike5 from '../resource/bike_main.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MissionVision } from "../components/MissionVision";

export const Service = () => {

  const images = [
    crausal1,
    crausal2,
    crausal3,
    crausal4,
    crausal5,
    crausal6,
    crausal7,
    crausal8,
  
  ];

  return (
    <div className="w-screen bg-gradient-to-b from-white to-white">

<div className="relative min-h-screen pt-24 bg-blue-400">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{ backgroundImage: `url(${crausal1})` }}
  ></div>

  <header className="relative z-10 text-center mb-6 px-4">
    <h1 className="text-6xl text-white font-bold"
    style={{ textShadow: "2px 2px 4px yellow, 4px 4px 6px rgba(0, 0, 0, 0.6)" }}>SERVICE PAGE</h1>
    <h2 className="text-xl text-white font-semibold">Welcome to The Digital Agency</h2>
    <p className="text-sm text-white mt-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue.
    </p>
  </header>


</div>


{/* Key benefits section */}
<div className="flex flex-col min-h-screen w-full justify-around items-center py-12 px-4">
  {/* Heading */}
  <div className="font-extrabold text-4xl md:text-5xl text-blue-400 text-center mb-4"
    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
    How can we help you
  </div>
  
  {/* Subheading Text */}
  <div className="text-lg text-gray-600 text-center mb-8 max-w-2xl">
    Discover the benefits of our services and how they can improve your life. 
    Here are some key benefits that make us stand out.
  </div>
  
  {/* Key Benefits Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[1204px] w-full">
    {keyBenefits.map((benefits, index) => {
      return <BenefitCard key={index} passed={benefits} />;
    })}
  </div>
</div>



<div className="flex flex-col min-h-screen w-full justify-around items-center py-12 px-4">
  {/* Heading */}
  <div className="font-extrabold text-4xl md:text-5xl text-blue-400 text-center mb-4"
    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
 Our Customers
  </div>
  
  {/* Subheading Text */}
  <div className="text-lg text-gray-600 text-center mb-8 max-w-2xl">
    Discover the benefits of our services and how they can improve your life. 
    Here are some key benefits that make us stand out.
  </div>


<div className="mt-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
    <img src={crausal1} alt="Gallery Image 1" className="w-full h-40 object-cover rounded-lg" />
    <img src={crausal1} alt="Gallery Image 2" className="w-full h-40 object-cover rounded-lg" />
    <img src={crausal1} alt="Gallery Image 3" className="w-full h-40 object-cover rounded-lg" />
    <img src={crausal1} alt="Gallery Image 4" className="w-full h-40 object-cover rounded-lg" />
    <img src={crausal1} alt="Gallery Image 5" className="w-full h-40 object-cover rounded-lg" />
  </div>
</div>

</div>


<div className="flex flex-col min-h-screen w-full justify-around items-center py-12 px-4">
  {/* Heading */}
  <div className="font-extrabold text-4xl md:text-5xl text-blue-400 text-center mb-4"
    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
 "Amazing Design & Quality work"
  </div>
  
  {/* Subheading Text */}
  <div className="text-lg text-gray-600 text-center mb-8 max-w-2xl">
    Discover the benefits of our services and how they can improve your life. 
    Here are some key benefits that make us stand out.
  </div>


<div className="mt-4">
    <div className="flex justify-center mb-6">
        <img
          src={pusparaj}
          alt="Mr. Purushottam P Singhal"
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800">Mr. Purushottam P Singhal</h3>
        <p className="text-gray-500 text-lg mb-4">CEO</p>
        
      </div>
</div>
  
</div>


      <BusinessBook />
    </div>
  );
};


