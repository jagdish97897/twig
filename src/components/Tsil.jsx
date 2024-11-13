
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
import tsilmain from "../resource/tsilmain.png";

import tsil1 from "../resource/tsil1.png";
import tsil2 from "../resource/tsil2.png";
import tsil3 from "../resource/tsil3.png";
import tsil4 from "../resource/tsil4.png";
import tsil5 from "../resource/tsil5.png";
import tsil6 from "../resource/tsil6.png";
import tsil7 from "../resource/tsil7.png";
import tsil8 from "../resource/tsil8.png";
import tsil9 from "../resource/tsil9.png";




export const Tsil = () => {
  return (
    <div className="w-full min-w-fit overflow-hidden ">


<div className="relative h-screen bg-cover bg-center bg-blue-100" style={{ backgroundImage: `url(${tsilmain})` }}>
      <div className="absolute inset-0 bg-blue-800 bg-opacity-50 flex flex-col justify-center items-start p-8 md:p-16">
        <div className="max-w-2xl text-white">

      <div className="block uppercase tracking-wide text-sm font-bold mb-2 ml-2 flex gap-2">
      <div className="bg-yellow-500 w-2 h-4"></div>IT Solutions and Digital Services
      </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">EMPOWERING BUSINESSES WITH INNOVATIVE IT SOLUTIONS</h1>
          <p className="text-lg md:text-xl mb-8">
          We transform businesses by providing innovative and cutting-edge technology solutions tailored to meet the needs of modern enterprises. Our team of highly skilled professionals is committed to delivering customized software, IT consulting, and digital transformation services that empower businesses to thrive in today’s digital landscape.
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
    <h2 className="text-3xl font-bold mb-4">Innovative IT Solutions and Cutting-Edge Digital Services</h2>
  </div>


{/* Services Section */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
  <div className="text-center p-6 border rounded-lg shadow-lg"> {/* Added shadow-lg here */}
    <div className="mb-4">
      <img src={tsil1} alt="Ocean Transport Services" className="mx-auto"/>
    </div>
    <h3 className="font-bold mb-2">Web Design & Development</h3>
    <p className="text-gray-600">
    We combine creativity and technical expertise to deliver websites that are both visually stunning and highly functional. Our web design focuses on creating engaging, user-friendly interfaces, while our web development ensures seamless performance, responsiveness, and security. From simple websites to complex web applications, we build scalable solutions tailored to your business needs.
    </p>
  </div>
  <div className="text-center p-6 border rounded-lg shadow-lg"> 
    <div className="mb-4">
      <img src={tsil2} alt="Project Cargo" className="mx-auto"/>
    </div>
    <h3 className="font-bold mb-2"> Mobile App Development</h3>
    <p className="text-gray-600">
    We specialize in building custom mobile applications that deliver exceptional user experiences. Our mobile app development services cover both iOS and Android platforms, ensuring seamless performance, intuitive interfaces, and scalability. Whether it's a consumer-facing app or an enterprise solution, we create feature-rich, secure apps that align with your business objectives.
    </p>
  </div>
  <div className="text-center p-6 border rounded-lg shadow-lg">
    <div className="mb-4">
      <img src={tsil3} alt="Air Freight Services" className="mx-auto"/>
    </div>
    <h3 className="font-bold mb-2">Branding & Marketing</h3>
    <p className="text-gray-600">
    We help businesses build strong, memorable brands that resonate with their target audience. Our branding and marketing services include creating unique brand identities, developing strategic campaigns, and utilizing digital platforms to enhance visibility. From logo design to social media management, we ensure your brand stands out and drives growth across all channels.
    </p>
  </div>
  <div className="text-center p-6 border rounded-lg shadow-lg"> 
    <div className="mb-4">
      <img src={tsil4} alt="Land Shipping Services" className="mx-auto"/>
    </div>
    <h3 className="font-bold mb-2">Logistic & Sipping</h3>
    <p className="text-gray-600">
    We provide comprehensive logistics and shipping solutions to streamline your supply chain. From efficient transportation management to real-time tracking, we ensure timely and secure delivery of goods. Whether it’s local or international shipping, our services are tailored to optimize costs, improve efficiency, and meet your business needs.
    </p>
  </div>
  <div className="text-center p-6 border rounded-lg shadow-lg"> 
    <div className="mb-4">
      <img src={tsil5} alt="Land Shipping Services" className="mx-auto"/>
    </div>
    <h3 className="font-bold mb-2">Expert Legal Consultant</h3>
    <p className="text-gray-600">
    Our expert legal consulting services provide tailored guidance to help businesses navigate complex legal landscapes. From contract drafting and compliance to dispute resolution and regulatory advice, we offer strategic solutions to protect your interests. Our experienced legal consultants ensure you make informed decisions while minimizing risks.
    </p>
  </div>
  <div className="text-center p-6 border rounded-lg shadow-lg"> 
    <div className="mb-4">
      <img src={tsil6} alt="Land Shipping Services" className="mx-auto"/>
    </div>
    <h3 className="font-bold mb-2">Business Consultant</h3>
    <p className="text-gray-600">
    We offer expert business consulting services to help companies improve performance, streamline operations, and achieve their goals. Our consultants provide strategic insights, market analysis, and tailored solutions in areas like business development, process optimization, and growth strategies. We partner with you to drive success and long-term sustainability.
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
          About Transvue Solutions India Pvt Ltd.
        </h2>
        <p className="text-xl text-black mb-8">
        At TRANSVUE Solutions India Private Limited (TSIL), we are passionate about transforming businesses through innovative technology and strategic consulting. With years of experience and a dedicated team of professionals, we offer a broad range of services designed to help businesses thrive in today's competitive landscape.
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
              src={tsil8}
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
      Tailored Solutions:We provide customized IT and digital services, ensuring that every solution fits your business needs.
            </li>
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Expert Team:Our seasoned professionals bring extensive industry experience and technical expertise to every project.
            </li>
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Innovative Approach:We stay ahead of trends, using cutting-edge technology to drive digital transformation and growth.
            </li>
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      End-to-End Support: From concept to execution, we offer comprehensive support and ensure seamless delivery.

            </li>
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Client-Centric Focus: We prioritize your success by understanding your goals and delivering measurable, impactful results.

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
      </span>
      E-Commerce:Delivering robust digital platforms and seamless logistics solutions to enhance online retail.
            </li>
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Manufacturing: Supporting supply chain optimization with digital tools and efficient transportation solutions.
            </li>
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Healthcare & Pharmaceuticals: Ensuring compliance and security with specialized solutions for sensitive data and logistics.
            </li>
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Automotive: Streamlining operations for automotive manufacturers with technology-driven solutions and efficient supply chains.
            </li>
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Logistics & Shipping: Offering advanced shipping management, real-time tracking, and optimized delivery systems.
            </li>

          </ul>
          </div>

          {/* Image (Right Side) */}
          <div className="text-center">
            <img
              src={tsil9}
              alt="tsil"
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
              src={tsil7}
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
      Innovation:We embrace new ideas and technologies to continuously evolve and create value for our clients.
            </li>
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Integrity: We maintain transparency, honesty, and ethics in all our dealings, building trust with clients and partners.
            </li>
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Customer Satisfaction: We are committed to exceeding client expectations and delivering solutions that drive success.

            </li>
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500"/>
      </span>
      Collaboration: We believe in teamwork and foster a collaborative environment that enhances creativity and results.
            </li>
            <li className="flex items-center">
            <span className="mr-3">
        <FaCircle className="text-blue-500" />
      </span>
      Sustainability: We focus on long-term solutions that promote environmental and business sustainability for future generations.
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