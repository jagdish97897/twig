
import React from "react";
import logo from "../resource/ship.png";
import climate from "../resource/climate.png";
import ocean from "../resource/ocean.png";
import cargo from "../resource/cargo.png";
import air from "../resource/air.png";
import land from "../resource/land.png";
import girl from "../resource/girl.png";
import airindia from "../resource/air india.png";
import box from "../resource/box.png";
import cash from "../resource/cash.png";
import lequid from "../resource/lequid.png";
import package1 from "../resource/package1.jpg";
import contract from "../resource/contract.png";
import warehouse from "../resource/warehouse.png";
import specialized from "../resource/specialized.png";
import col1 from "../resource/form-col1.png";
import col2 from "../resource/form-col2.png";
import col3 from "../resource/form-col3.png";
import col4 from "../resource/form-col4.png";
import col5 from "../resource/form-col5.png";
import { FaClock, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from "react-router-dom";
import logotwi from "../resource/logotwi.png";
import { FaCircle } from 'react-icons/fa';
import twi from "../resource/twi.png";

import twi1 from "../resource/twi1.png";
import twi2 from "../resource/twi2.png";
import twi3 from "../resource/twi3.png";

import twiwwd1 from "../resource/twiwwd1.png";
import twiwwd2 from "../resource/twiwwd2.png";

import twiwwd4 from "../resource/twiwwd4.png";

import kgvmain from "../resource/kgvmain.png";
import bike1 from "../resource/bike1.jpg";
import bike4 from "../resource/bike4.jpg";
import bike5 from "../resource/bike5.png";
import crausal3 from "../resource/crausal3.jpg";
import crausal6 from "../resource/crausal6.jpg";
import kgv2 from "../resource/kgv2.png";
import kgv3 from "../resource/kgv3.png";

import tbwmain from "../resource/tbwmain.png";
import tbw1 from "../resource/tbw1.png";
import tbw2 from "../resource/tbw2.png";
import tbw3 from "../resource/tbw3.png";
import tbw4 from "../resource/tbw4.png";
import tbw5 from "../resource/tbw5.png";
import tbw6 from "../resource/tbw6.png";
import tbw7 from "../resource/tbw7.png";




export const Tbw = () => {
  return (
    <div className="w-full min-w-fit overflow-hidden ">


<div className="relative h-screen bg-cover bg-center bg-blue-100" style={{ backgroundImage: `url(${tbwmain})` }}>
      <div className="absolute inset-0 bg-blue-800 bg-opacity-50 flex flex-col justify-center items-start p-8 md:p-16">
        <div className="max-w-2xl text-white">

      <div className="block uppercase tracking-wide text-sm font-bold mb-2 ml-2 flex gap-2">
      <div className="bg-yellow-500 w-2 h-4"></div>Industrial & Commercial Solutions
      </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">YOUR TRUSTED PARTNER FOR INDUSTRIAL PRODUCTS</h1>
          <p className="text-lg md:text-xl mb-8">
          TRADE BIZ WORLDWIDE provides a vast array of industrial and commercial products, serving the Indian subcontinent with high-quality solutions across multiple sectors.
          </p>
          <Link to="/" className="inline-block bg-yellow-500 text-blue-800 text-lg font-semibold py-3 px-6 rounded shadow hover:bg-yellow-400 transition duration-200">
            Explore More
          </Link>
        </div>
      </div>
    </div>

<div className=" py-12 px-6 ">
<div className="container mx-auto p-6">
  {/* Header Section */}
  <div className="text-center mb-12">
  <div className="block uppercase tracking-wide text-sm font-bold mb-2 ml-2 flex gap-2">
  <div className="bg-yellow-500 w-2 h-4"></div>What we do
  </div>
    <h2 className="text-3xl font-bold mb-4">Comprehensive Industrial Solutions</h2>
  </div>


{/* Services Section */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
  <div className="text-center p-6 border rounded-lg shadow-lg"> {/* Added shadow-lg here */}
    <div className="mb-4">
      <img src={tbw1} alt="Ocean Transport Services" className="mx-auto"/>
    </div>
    <h3 className="font-bold mb-2">Papers & Packaging</h3>
    <p className="text-gray-600">
    High-quality papers, polyester, and BOPP film rolls for industrial needs.
    </p>
  </div>
  <div className="text-center p-6 border rounded-lg shadow-lg"> 
    <div className="mb-4">
      <img src={tbw2} alt="Project Cargo" className="mx-auto"/>
    </div>
    <h3 className="font-bold mb-2">Steel & Fabrications</h3>
    <p className="text-gray-600">
    Reliable TMT bars, steel, and fabrication materials for construction.
    </p>
  </div>
  <div className="text-center p-6 border rounded-lg shadow-lg">
    <div className="mb-4">
      <img src={tbw3} alt="Air Freight Services" className="mx-auto"/>
    </div>
    <h3 className="font-bold mb-2">Industrial Chemicals</h3>
    <p className="text-gray-600">
    WTP chemicals, adhesives, and sealing compounds to meet industry demands.
    </p>
  </div>
  <div className="text-center p-6 border rounded-lg shadow-lg"> 
    <div className="mb-4">
      <img src={tbw4} alt="Land Shipping Services" className="mx-auto"/>
    </div>
    <h3 className="font-bold mb-2">Mechanical Components</h3>
    <p className="text-gray-600">
    Valves, bearings, tools, cables, and more for smooth operations.
    </p>
  </div>
</div>

</div>


</div>

    <div className=" py-12 px-6">
      {/* Container */}
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-back mb-4">
        About TRADE BIZ WORLDWIDE
        </h2>
        <p className="text-xl text-black mb-8">
        TRADE BIZ WORLDWIDE has been serving a wide range of industrial projects by providing top-notch products from TMT bars to WTP chemicals and industrial papers. We are your trusted partner for all industrial needs across the Indian subcontinent.
        </p>
      </div>
    </div>

      <div className="py-12 px-6">
      {/* Container */}
      <div className="max-w-7xl mx-auto text-center">

        {/* Image and text section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div>
            <img
              src={tbw6}
              alt="Devta Gensets"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="text-left">
            <h3 className="text-3xl font-semibold text-black mb-4">
            Why Choose Us?
            </h3>

            <ul className="space-y-4 text-black">
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Broad Product Range: We offer everything from paper products to valves and chemicals.
            </li>
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Quality Assurance: All products meet industry standards for quality and performance.
            </li>
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Project Flexibility: We cater to ongoing projects with precise product supply.
            </li>
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Expertise: Decades of experience in the industrial sector, ensuring the best solutions.
            </li>
           
          </ul>

          </div>
        </div>
      </div>
    </div>


    <div className="py-12 px-6">
      {/* Container */}
      <div className="max-w-7xl mx-auto">

        {/* Image and text section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text (Left Side) */}
          <div className="text-left">
            <h3 className="text-3xl font-semibold text-black mb-4">
            Industries We Serve?
            </h3>


            <ul className="space-y-4 text-black">
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>Construction: Reliable steel and materials for ongoing projects.
            </li>
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Manufacturing: Industrial chemicals, fasteners, and tools for production.
            </li>
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Packaging: High-quality papers and packaging materials for diverse sectors.
            </li>
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Energy & Infrastructure: Lubricant oils, valves, cables, and pipes for energy projects.
            </li>
          </ul>
          </div>

          {/* Image (Right Side) */}
          <div className="text-center">
            <img
              src={tbw5}
              alt="Devta Gensets"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>


    <div className=" py-12 px-6">
      {/* Container */}
      <div className="max-w-7xl mx-auto text-center">

        {/* Image and text section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div>
            <img
              src={tbw7}
              alt="Devta Gensets"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="text-left">
            <h3 className="text-3xl font-semibold text-black mb-4">
            Core Values
            </h3>

            <ul className="space-y-4 text-black">
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Integrity: We uphold honesty, transparency, and ethical business practices in all our interactions with clients and partners.
            </li>
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Quality Assurance: We are dedicated to delivering the highest quality industrial products that meet or exceed industry standards.
            </li>
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Customer Commitment: Our focus is on building long-term relationships by consistently exceeding customer expectations with reliable solutions.

            </li>
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500"/>
      </span>
      Innovation:We continuously explore new technologies and improve our product offerings to meet the evolving needs of the industrial sector.
            </li>
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Sustainability: We are committed to providing environmentally friendly products and solutions that promote sustainable practices.
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>


    <div className=" py-12 px-6">
    <div className="container mx-auto p-6">
      {/* Contact Section */}
      <div className="bg-blue-900 text-white p-12 rounded-lg">
        <div className="md:flex md:justify-between">
          {/* Contact Information */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold mb-4">Get in touch with us</h2>
            <p className="text-gray-300 mb-4">
              Have questions or need assistance with your shipping needs? Contact us today for reliable and efficient freight forwarding solutions. We're here to help!
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
              <div className="flex items-center space-x-2">
              <div className="bg-blue-800 text-white rounded-full p-2">
                <FaClock />
              </div>
              <span>
                Mon - Sat 9:00 - 18:00
                <br />
                Sunday Closed
              </span>
            </div>
              </li>

              <li className="flex items-center">
                            <div className="flex items-center space-x-2">
              <div className="bg-blue-800 text-white rounded-full p-2">
                <FaEnvelope />
              </div>
              <span>
                Email
                <br />
                cse@ustl.in
              </span>
            </div>
           
              </li>
              <li className="flex items-center">
              <div className="flex items-center space-x-2">
              <div className="bg-blue-800 text-white rounded-full p-2">
                <FaPhone />
              </div>
              <span>
                Call Us
                <br />
                +91 11 27351591
              </span>
            </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your name" className="p-3 rounded-lg w-full bg-gray-100 text-gray-900" />
                <input type="email" placeholder="Email" className="p-3 rounded-lg w-full bg-gray-100 text-gray-900" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Phone Number" className="p-3 rounded-lg w-full bg-gray-100 text-gray-900" />
                <input type="text" placeholder="City" className="p-3 rounded-lg w-full bg-gray-100 text-gray-900" />
              </div>
              <textarea placeholder="Your Message" className="p-3 rounded-lg w-full bg-gray-100 text-gray-900" rows="4"></textarea>
              <button type="submit" className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-full shadow-md hover:bg-yellow-600">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>


     
    </div>
</div>




    </div>
  )
}
