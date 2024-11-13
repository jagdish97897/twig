
import React from "react";
import crausal1 from "../resource/crausal1.jpg";
import crausal2 from "../resource/crausal2.jpg";
import crausal3 from "../resource/crausal3.jpg";
import crausal4 from "../resource/crausal4.jpg";
import crausal5 from "../resource/crausal5.jpg";
import crausal6 from "../resource/crausal6.jpg";
import crausal7 from "../resource/crausal7.jpg";
import crausal8 from "../resource/crausal8.jpg";



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

export const AboutUs = () => {

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
    style={{ textShadow: "2px 2px 4px yellow, 4px 4px 6px rgba(0, 0, 0, 0.6)" }}>ABOUT US</h1>
    <h2 className="text-xl text-white font-semibold">Welcome to The Digital Agency</h2>
    <p className="text-sm text-white mt-2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue.
    </p>
  </header>

  <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 mt-24 px-4 lg:px-24">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4">Who Are We</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4">Our Mission</h2>
      <p>
        Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4">What We Do</h2>
      <ul className="list-disc pl-4">
        <li>UX/UI Design</li>
        <li>Website Development</li>
        <li>Marketing</li>
        <li>Social Media</li>
        <li>Commerce Store</li>
        <li>Tech Support</li>
      </ul>
    </div>
  </section>
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




<div className="flex w-full h-auto bg-white">
      {/* Image Container */}
      <div className="w-1/2">
        <img src={crausal1} alt="Office" className="w-full h-full object-cover" />
      </div>
      
      {/* Content Container */}
      <div className="w-1/2 p-12">
        <h1 className="text-4xl font-semibold mb-6">Why Choose Us?</h1>
        <p className="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center">
            <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
            Best Quality Designs
          </li>
          <li className="flex items-center">
            <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
            24x7 Live Support
          </li>
          <li className="flex items-center">
            <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
            Result Oriented Projects
          </li>
          <li className="flex items-center">
            <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
            Award Winning Support Team
          </li>
          <li className="flex items-center">
            <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
            Best ROI Techniques
          </li>
          <li className="flex items-center">
            <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
            Experienced Professionals
          </li>
        </ul>
      </div>
    </div>



    <div className="bg-white p-10">
      {/* Statistics Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Some Numbers</h2>
        <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex justify-between">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-500">87</h3>
            <p className="text-gray-800">Satisfied Clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-500">150</h3>
            <p className="text-gray-800">Projects Completed</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-500">28</h3>
            <p className="text-gray-800">Accolades Earned</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-500">56K+</h3>
            <p className="text-gray-800">Lines of Code</p>
          </div>
        </div>
      </div>


    </div>


      <BusinessBook />
    </div>
  );
};


