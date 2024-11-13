import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; 

import React from "react";
import crausal1 from "../resource/crausal1.jpg";
import crausal2 from "../resource/crausal2.jpg";
import crausal3 from "../resource/crausal3.jpg";
import crausal4 from "../resource/crausal4.jpg";
import crausal5 from "../resource/crausal5.jpg";
import crausal6 from "../resource/crausal6.jpg";
import crausal7 from "../resource/crausal7.jpg";
import crausal8 from "../resource/crausal8.jpg";
import crausal10 from "../resource/crausal10.png";
import crausal11 from "../resource/crausal11.png";
import crausal12 from "../resource/crausal12.png";
import crausal13 from "../resource/crausal13.png";
import crausal14 from "../resource/crausal14.png";
import crausal15 from "../resource/crausal15.png";
import home from "../resource/home.png";
import home1 from "../resource/home.mp4";
import video from "../resource/video.mp4";
import logotwi from "../resource/logotwi.png";
import logoustl from "../resource/logoustl.png";
import logokgvl from "../resource/logokgvl.png";
import logoxpert from "../resource/logoxpert.png";
import logogov from "../resource/logogov.png";
import logotsil from "../resource/logotsil.png";
import logogreen from "../resource/logogreen.png";
import logoadvance from "../resource/logoadvance.png";
import logodream from "../resource/logodream.png";
import logopro from "../resource/logopro.png";

import carrier from "../resource/carrier.jpg";
import carrier1 from "../resource/carrier1.png";
import overview from "../resource/overview.png";


import logo from "../resource/twcpl.png";
import Sustainability from "../resource/Sustainability.png";
import Sustainability1 from "../resource/Sustainability1.png";
import Sustainability2 from "../resource/Sustainability2.png";


import sdg1 from "../resource/sdg1.png";
import sdg2 from "../resource/sdg2.png";
import sdg3 from "../resource/sdg3.png";
import sdg4 from "../resource/sdg4.png";
import sdg5 from "../resource/sdg5.png";
import sdg6 from "../resource/sdg6.png";

import combo from "../resource/combo.jpg";
import kgvcombo from "../resource/kgvcombo.jpg";
import kgvwherehouse from "../resource/kgvwherehouse.jpg";
import kgvwherehouse1 from "../resource/kgvwherehouse1.png";
import zamatoboy from "../resource/zamatoboy.mp4";
import zamatoboy2 from "../resource/zamatoboy2.mp4";
import zamatoboy3 from "../resource/zamatoboy3.mp4";

import RadhaSinghal from "../resource/RadhaSinghal.webp";

import wave from "../resource/wave_final.png";
import goldenwave from "../resource/golden_wave.png";
import { Book } from "../components/Book";
import { MissionVision } from "../components/MissionVision";
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

export const Home = () => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  }
  const data = [
    // Replace with your actual data
    { name: "TRANSPORT WINGS (CAL) PVT.LTD", review: "Logistics and Supply Chain.  ", img: logotwi },
    { name: "USTRANS WORLD LOGISTICS LIMITED", review: "Freight Forwarding and Logistics. ", img: logoustl },
    { name: "KARISHMA GLOBAL VENTURES", review: "E-Mobility Solutions.", img: logokgvl },
    { name: "Transvue Solutions India Pvt Ltd", review: "IT Solutions and Digital Services. ", img: logotsil },
    { name: "Green Earth Pulp & Paper Pvt Ltd", review: "Pulp and Paper Manufacturing. ", img: logogreen },
    { name: "Trade Biz Worldwide", review: "Industrial Products and Project Supplies. ", img: logoadvance },
    { name: "Dream Luxottica", review: "Hospitality (Luxury Resorts). ", img: logodream },
    // { name: "Pro GenX Marketing Pvt Ltd", review: "Marketing and Manufacturing . ", img: logopro },
    { name: "UConnect 2 Xperts LLC, USA", review: "IT Support and Software Services. ", img: logoxpert },
    { name: "Advance Consultancy", review: "Government Advocacy and Business Consultancy. ", img: logogov },
  ];

  return (
    <div className="w-screen bg-gradient-to-b from-white to-white">

      <div className="relative h-screen">
        {/* Background video */}
        <video
          className="absolute inset-0 object-cover w-full h-full"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>


      <div className="bg-gray-100 py-12 px-6">
        {/* Container */}
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">
            ABOUT TWI GROUP
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-2xl mx-auto">
            TWI Group is a Global Logistics solution Provider with all bunches to logistics services under one umbrella. Group TWI stands for commitment and value its relationships.
          </p>

          {/* Video and text section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text (Left Side) */}
            <div className="text-left">
              <h3 className="text-3xl font-semibold text-slate-950 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                To deliver comprehensive, reliable, and innovative logistics solutions that empower businesses across the globe. We are committed to providing exceptional customer service, fostering long-lasting relationships, and consistently exceeding expectations by offering a full suite of logistics services under one umbrella.
              </p>

              <h3 className="text-3xl font-semibold text-slate-950 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700">
                To be the leading global logistics provider, recognized for our commitment to operational excellence, customer satisfaction, and value-driven services. We aim to continuously evolve and innovate, setting industry standards and driving progress in logistics solutions worldwide.
              </p>
            </div>

            {/* Video (Right Side) */}
            <div className="text-center">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/1cFpjnFdmDA" // Correct embed link
                title="Devta Gensets Video"
                frameBorder="0"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-gray-100 py-12 px-6">
        <div className="relative bg-cover bg-center h-auto md:h-[500px] max-w-7xl mx-auto rounded-xl overflow-hidden text-black p-8"
          style={{ backgroundImage: `url(${carrier})` }}>
          <div className="absolute inset-0 bg-blue-900 bg-opacity-0"></div>
          <div className="relative z-10">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">OVERVIEW</h1>
              <p className="text-lg md:text-2xl font-light">
                Over <strong>1500+ employees</strong> across <strong>7 countries</strong>, with key regional offices in Japan, Thailand and USA.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center mt-10">
              <div className="space-y-4">
                <p className="text-4xl font-bold">1956</p>
                <p className="text-sm md:text-base">Where the story begins</p>
              </div>
              <div className="space-y-4">
                <p className="text-4xl font-bold">43%</p>
                <p className="text-sm md:text-base">of our employees are Millennials and Centennials</p>
              </div>
              <div className="space-y-4">
                <p className="text-4xl font-bold">
                  <i className="fas fa-users"></i>
                </p>
                <p className="text-sm md:text-base">Our Employees range in age from 19 - 60</p>
              </div>
              <div className="space-y-4">
                <p className="text-4xl font-bold">
                  <i className="fas fa-globe"></i>
                </p>
                <p className="text-sm md:text-base">We are represented by 26 nationalities</p>
              </div>
              <div className="space-y-4">
                <p className="text-4xl font-bold">
                  <i className="fas fa-language"></i>
                </p>
                <p className="text-sm md:text-base">Our employees speak over 39 languages</p>
              </div>
              <div className="space-y-4">
                <p className="text-4xl font-bold">
                  <i className="fas fa-trophy"></i>
                </p>
                <p className="text-sm md:text-base">Best Companies to Work for in Asia (1956-2024)</p>
              </div>
            </div>

            <div className="flex justify-center mt-8">

              <Link
                to="/"
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-600"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <img src={logo} alt="Company Logo" className="h-32 w-32 object-contain mb-4" />
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
                <Link
                  to="/Twi"
                  className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
                >
                  Read
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
                <Link
                  to="/Ustl"
                  className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
                >
                  Read
                </Link>
              </div>
            </div>

            <div className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={logokgvl} alt="KARISHMA GLOBAL VENTURES" className="h-44 w-44 object-cover rounded-full border-4 border-white" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold text-center">KARISHMA GLOBAL VENTURES</p>
                <p className="text-center text-gray-600">E-Mobility Solutions.</p>
                <Link
                  to="/Kgvl"
                  className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
                >
                  Read
                </Link>
              </div>
            </div>

            <div className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={logotsil} alt="Transvue Solutions India Pvt Ltd" className="h-44 w-44 object-cover rounded-full border-4 border-white" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold text-center">Transvue Solutions India Pvt Ltd</p>
                <p className="text-center text-gray-600">IT Solutions and Digital Services.</p>
                <Link
                  to="/Tsil"
                  className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
                >
                  Read
                </Link>
              </div>
            </div>

            <div className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={logogreen} alt="Green Earth Pulp & Paper Pvt Ltd" className="h-44 w-44 object-cover rounded-full border-4 border-white" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold text-center">Green Earth Pulp & Paper Pvt Ltd</p>
                <p className="text-center text-gray-600">Pulp and Paper Manufacturing.</p>
                <Link
                  to="/Gep"
                  className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
                >
                  Read
                </Link>
              </div>
            </div>

            <div className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={logoadvance} alt="Green Earth Pulp & Paper Pvt Ltd" className="h-44 w-44 object-cover rounded-full border-4 border-white" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold text-center">Trade Biz Worldwide</p>
                <p className="text-center text-gray-600">Industrial Products and Project Supplies.</p>
                <Link
                  to="/Tbw"
                  className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
                >
                  Read
                </Link>
              </div>
            </div>

            <div className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={logodream} alt="Green Earth Pulp & Paper Pvt Ltd" className="h-44 w-44 object-cover rounded-full border-4 border-white" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold text-center">Dream Luxottica</p>
                <p className="text-center text-gray-600">Hospitality (Luxury Resorts).</p>
                <Link
                  to="/"
                  className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
                >
                  Read
                </Link>
              </div>
            </div>



            <div className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={logoxpert} alt="Green Earth Pulp & Paper Pvt Ltd" className="h-44 w-44 object-cover rounded-full border-4 border-white" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold text-center">UConnect 2 Xperts LLC, USA</p>
                <p className="text-center text-gray-600">IT Support and Software Services.</p>
                <Link
                  to="/"
                  className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
                >
                  Read
                </Link>
              </div>
            </div>

            <div className="bg-white shadow-lg h-[450px] text-black rounded-xl overflow-hidden transition-transform transform hover:scale-105">
              <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                <img src={logogov} alt="Green Earth Pulp & Paper Pvt Ltd" className="h-44 w-44 object-cover rounded-full border-4 border-white" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold text-center">Advance Consultancy</p>
                <p className="text-center text-gray-600">Government Advocacy and Business Consultancy.</p>
                <Link
                  to="/"
                  className="bg-blue-500 text-white text-lg px-6 py-2 rounded-xl transition-colors hover:bg-indigo-600"
                >
                  Read
                </Link>
              </div>
            </div>

            {/* Add the remaining companies similarly */}

          </div>
        </div>
      </div>


      <div className="bg-gray-100 py-12 px-6">
        {/* Container */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Featured Stories</h2>
          <Slider {...settings}>
            {/* First Slide */}
            <div className="bg-white shadow-lg rounded-lg p-4 w-full h-96">
              <img src={news} alt="Dharavi" className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-4">Dharavi - A Human-Centric Transformation</h3>
              <p className="text-gray-600 mt-2">By TWI Group</p>
              <a href="https://hindi.news18.com/news/auto/petrol-bike-will-also-become-electric-2-brothers-have-invented-a-kit-7880156.html?1701845158" className="text-blue-500 mt-4 inline-block">Read more</a>
            </div>

            {/* Second Slide */}
            <div className="bg-white shadow-lg rounded-lg p-4 w-full h-96">
              <img src={news1} alt="India Economy" className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-4">India on track to becoming a $25 Trillion economy by 2050</h3>
              <p className="text-gray-600 mt-2">By TWI Group</p>
              <a href="https://epaper.bhaskarhindi.com/3911626/%E0%A4%A8%E0%A4%BE%E0%A4%97%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%B5%E0%A4%BF%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%AD/%E0%A4%A8%E0%A4%BE%E0%A4%97%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%B5%E0%A4%BF%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%AD#page/19/1" className="text-blue-500 mt-4 inline-block">Read more</a>
            </div>

            {/* Third Slide */}
            <div className="bg-white shadow-lg rounded-lg p-4 w-full h-96">
              <img src={news2} alt="Women's Empowerment" className="w-full h-48 object-cover rounded-md" />
              <h3 className="text-xl font-semibold mt-4">International Women’s Day celebration at the Adani Group</h3>
              <p className="text-gray-600 mt-2">By TWI Group</p>
              <a href="https://epaper.bhaskarhindi.com/3911626/%E0%A4%A8%E0%A4%BE%E0%A4%97%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%B5%E0%A4%BF%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%AD/%E0%A4%A8%E0%A4%BE%E0%A4%97%E0%A4%AA%E0%A5%81%E0%A4%B0-%E0%A4%B5%E0%A4%BF%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%AD#page/19/1" className="text-blue-500 mt-4 inline-block">Read more</a>
            </div>
          </Slider>
        </div>
      </div>



      <div className="flex flex-col md:flex-row justify-between p-6 bg-gray-100">

        {/* News and Updates Section */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-2/5">
          <h2 className="text-xl font-bold mb-6">News and Updates</h2>
          <ul>
            <li className="mb-4">
              <div className="flex items-start">
                <span className="mr-4">
                  <i className="fas fa-newspaper"></i>
                </span>
                <div>
                  <p className="font-semibold">Gratitude to Shri Sanjiv Singh Ji for Inspiring Innovation at India Mobile Congress 2024</p>
                  <span className="text-gray-500 text-sm">Thu, 17 Oct 2024 | From Linkdin</span>
                </div>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-start">
                <span className="mr-4">
                  <i className="fas fa-newspaper"></i>
                </span>
                <div>
                  <p className="font-semibold">Honored to Meet Shri Hardeep S Puri and Discuss KGV’s Smart E-Hybrid Kits</p>
                  <span className="text-gray-500 text-sm">Tue, 08 Oct 2024 | From Linkdin</span>
                </div>
              </div>
            </li>
            <li className="mb-4">
              <div className="flex items-start">
                <span className="mr-4">
                  <i className="fas fa-newspaper"></i>
                </span>
                <div>
                  <p className="font-semibold">Collaborative Lunch Meeting with Rajasthan CM Shri Bhajan Lal Sharma and Industry Leaders</p>
                  <span className="text-gray-500 text-sm">Wed, 02 Oct 2024 | From Linkdin</span>
                </div>
              </div>
            </li> 
          </ul>

          <Link
            to="/MediaCoverage"
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
          >
            View more
          </Link>
        </div>

        {/* Chairman's Corner Section */}
        <div className="flex flex-col md:flex-row bg-blue-600 text-white rounded-lg shadow-lg p-6 w-full md:w-3/5 mt-6 md:mt-0 md:ml-6">
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-4">Chairman's Corner</h2>
            <p className="text-lg leading-relaxed mb-6">"It is my promise that we will continue to invest and do our part to help the people wherever we operate."</p>
            <p className="font-semibold">Smt. Radha Devi Singhal</p>
            <p>Chairman, TWI Group</p>
          </div>
          <div className="md:ml-6 mt-6 md:mt-0">
            <img
              src={RadhaSinghal}
              alt="Smt. Radha Devi Singhal"
              className="rounded-lg w-48 h-auto"
            />
          </div>
        </div>

      </div>

      <div className="bg-gray-100 py-12 px-6">
        <div className="relative bg-cover bg-center h-96 md:h-[500px] max-w-7xl mx-auto rounded-xl overflow-hidden m-20 "
          style={{ backgroundImage: `url(${Sustainability2})` }}>
          {/* Overlay for darker effect on text */}
          <div className="absolute inset-0 bg-black bg-opacity-0"></div>
          {/* Text Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 text-white">
            <h3 className="text-lg md:text-2xl font-light">Sustainability</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Our roadmap to Net Zero
            </h2>
            <p className="text-sm md:text-base max-w-lg mb-6">
              We are making responsible choices. By prioritizing sustainable mobility, safety, emission reduction and use of eco-friendly materials, we are driving meaningful change.
            </p>
            <Link
              to="/Sustainability1"
              className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 w-max"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>



      <div className="bg-gray-100 py-12 px-6">
        <div className="relative bg-cover bg-center h-96 md:h-[500px] max-w-7xl mx-auto rounded-xl overflow-hidden m-20 "
          style={{ backgroundImage: `url(${carrier1})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-0"></div>
          {/* Text Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 text-white">
            <h3 className="text-lg md:text-2xl font-light">Careers</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              United by passion
              and talent
            </h2>
            <p className="text-sm md:text-base max-w-lg mb-6">
              We are making responsible choices. By prioritizing sustainable mobility, safety, emission reduction and use of eco-friendly materials, we are driving meaningful change.
            </p>


            <Link
              to="/Carrers"
              className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 w-max"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
      <BusinessBook />
    </div>
  );
};






