
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


export const Transportation = () => {
  return (
    <div className="w-full min-w-fit overflow-hidden ">


<div className="relative h-screen bg-cover bg-center bg-blue-400" style={{ backgroundImage: `url(${logo})` }}>
      <div className="absolute inset-0 bg-blue-800 bg-opacity-50 flex flex-col justify-center items-start p-8 md:p-16">
        <div className="max-w-2xl text-white">

      <div className="block uppercase tracking-wide text-sm font-bold mb-2 ml-2 flex gap-2">
      <div className="bg-yellow-500 w-2 h-4"></div>Total Logistics & Supply Chain Solutions
      </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Gateway to any Destination in the World</h1>
          <p className="text-lg md:text-xl mb-8">
            USTrans World Logistics is a complete freight forwarding company, providing integrated solutions for all logistics needs under one roof. 
            We can handle any type of cargo despite the dimensions or weight, by any mode: air, sea, road, rail, or multimodal. 
            The foundation of our logistics services is based on global expertise coupled with local knowledge.
          </p>
          <Link to="/explore" className="inline-block bg-yellow-500 text-blue-800 text-lg font-semibold py-3 px-6 rounded shadow hover:bg-yellow-400 transition duration-200">
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
    <h2 className="text-3xl font-bold mb-4">Safe & Reliable Cargo Solutions</h2>
  </div>

{/* Services Section */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
  <div className="text-center p-6 border rounded-lg shadow-lg"> {/* Added shadow-lg here */}
    <div className="mb-4">
      <img src={ocean} alt="Ocean Transport Services" className="mx-auto"/>
    </div>
    <h3 className="font-bold mb-2">Ocean Transport Services</h3>
    <p className="text-gray-600">
      Efficient, reliable, and cost-effective ocean transportation services tailored to your needs.
    </p>
  </div>
  <div className="text-center p-6 border rounded-lg shadow-lg"> {/* Added shadow-lg here */}
    <div className="mb-4">
      <img src={cargo} alt="Project Cargo" className="mx-auto"/>
    </div>
    <h3 className="font-bold mb-2">Project Cargo</h3>
    <p className="text-gray-600">
      Handling complex, oversized, and heavy cargo with precision and care. Our expert team ensures your project cargo reaches its destination safely and on time.
    </p>
  </div>
  <div className="text-center p-6 border rounded-lg shadow-lg"> {/* Added shadow-lg here */}
    <div className="mb-4">
      <img src={air} alt="Air Freight Services" className="mx-auto"/>
    </div>
    <h3 className="font-bold mb-2">Air Freight Services</h3>
    <p className="text-gray-600">
      Trust our expertise to get your cargo to its destination efficiently and safely. Fly high with our top-tier air freight solutions!
    </p>
  </div>
  <div className="text-center p-6 border rounded-lg shadow-lg"> {/* Added shadow-lg here */}
    <div className="mb-4">
      <img src={land} alt="Land Shipping Services" className="mx-auto"/>
    </div>
    <h3 className="font-bold mb-2">Land Shipping Services</h3>
    <p className="text-gray-600">
      Experience seamless land shipping with our reliable and efficient services. We ensure timely delivery of your cargo, with comprehensive tracking and professional handling.
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
          ABOUT USTRANS WORLD LOGISTICS LIMITED
        </h2>
        <p className="text-xl text-black mb-8">
        USTrans World Logistics is a full-service freight forwarding company offering integrated logistics solutions for all cargo types, regardless of size or weight. With expertise in air, sea, road, rail, and multimodal transport, they ensure efficient and reliable services.
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
              src={logotwi}
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
              <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
              Comprehensive Solutions: We offer end-to-end logistics services, handling all types of cargo under one roof for maximum convenience.
            </li>
            <li className="flex items-center">
              <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
              Expertise: Our team combines global knowledge with local insights, ensuring efficient and effective logistics management tailored to your needs.
            </li>
            <li className="flex items-center">
              <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
              Flexibility: We handle cargo of any size and weight across multiple transportation modes—air, sea, road, rail, or multimodal—adapting to your requirements.
            </li>
            <li className="flex items-center">
              <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
              Reliability: Our commitment to secure handling and timely delivery ensures peace of mind for your freight operations.
            </li>
            <li className="flex items-center">
              <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
              Customer-Centric Approach: We prioritize your satisfaction, providing personalized support and transparent communication throughout the logistics process.
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
              <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
              E-commerce: We support online retailers with efficient logistics solutions to ensure timely delivery of products to customers.
            </li>
            <li className="flex items-center">
              <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
              Manufacturing: Our services cater to manufacturers, facilitating the transportation of raw materials and finished goods across various modes.
            </li>
            <li className="flex items-center">
              <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
              Pharmaceuticals: We ensure compliant and secure handling of sensitive pharmaceutical products, maintaining required temperature and safety standards.
            </li>
            <li className="flex items-center">
              <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
              Automotive: Our logistics solutions streamline the supply chain for automotive parts and vehicles, ensuring timely deliveries to manufacturers and dealers.
            </li>
            <li className="flex items-center">
              <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
              Retail: We provide tailored logistics services to retailers, enhancing inventory management and distribution efficiency across multiple channels.
            </li>
          </ul>
          </div>

          {/* Image (Right Side) */}
          <div className="text-center">
            <img
              src={logotwi}
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
              src={logotwi}
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
              <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
              Integrity: We uphold the highest ethical standards in all our dealings, fostering trust and transparency with clients and partners.
            </li>
            <li className="flex items-center">
              <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
              Excellence: We strive for excellence in every aspect of our services, continually improving to meet and exceed customer expectations.
            </li>
            <li className="flex items-center">
              <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
              Innovation: We embrace innovative solutions and technologies to enhance our logistics processes and provide cutting-edge services.
            </li>
            <li className="flex items-center">
              <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
              Customer Focus: Our clients are at the heart of everything we do, and we are dedicated to understanding and fulfilling their unique logistics needs.
            </li>
            <li className="flex items-center">
              <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
              Collaboration: We believe in the power of teamwork and partnerships, working closely with clients and stakeholders to achieve shared success.
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


// import React from "react";
// import crausal1 from "../resource/crausal1.jpg";
// import crausal2 from "../resource/crausal2.jpg";
// import crausal3 from "../resource/crausal3.jpg";
// import crausal4 from "../resource/crausal4.jpg";
// import crausal5 from "../resource/crausal5.jpg";
// import crausal6 from "../resource/crausal6.jpg";
// import crausal7 from "../resource/crausal7.jpg";
// import crausal8 from "../resource/crausal8.jpg";



// import wave from "../resource/wave_final.png";
// import goldenwave from "../resource/golden_wave.png";
// import { Book } from "../components/Book";
// import { Button2 } from "../components/Button2";
// import { keyBenefits } from "../Data/KeyBenefits";
// import { BenefitCard } from "../components/BenefitCard";

// import news from "../resource/news_clipping.jpeg";
// import news1 from "../resource/news1.jpg";
// import news2 from "../resource/news2.jpg";
// import { Link } from "react-router-dom";
// import { BusinessBook } from "../components/BusinessBook";
// import bike5 from '../resource/bike_main.png';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { MissionVision } from "../components/MissionVision";

// export const Transportation = () => {

//   const images = [
//     crausal1,
//     crausal2,
//     crausal3,
//     crausal4,
//     crausal5,
//     crausal6,
//     crausal7,
//     crausal8,

//   ];

//   return (
//     <div className="w-screen bg-gradient-to-b from-white to-white">

// <div className="relative min-h-screen pt-24 bg-blue-400">
//   {/* Background Image */}
//   <div
//     className="absolute inset-0 bg-cover bg-center z-0"
//     style={{ backgroundImage: `url(${crausal1})` }}
//   ></div>

//   <header className="relative z-10 text-center mb-6 px-4">
//     <h1 className="text-6xl text-white font-bold"
//     style={{ textShadow: "2px 2px 4px yellow, 4px 4px 6px rgba(0, 0, 0, 0.6)" }}>TRANSPORT WINGS (CAL) PVT.LTD</h1>
//     <h2 className="text-xl text-white font-semibold">Welcome to The world of TRANSPORT WINGS (CAL) PVT.LTD</h2>
//     <p className="text-sm text-white mt-2">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue. Aliquam ornare hendrerit augue.
//     </p>
//   </header>

//   <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 mt-24 px-4 lg:px-24">
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-lg font-bold mb-4">Who Are We</h2>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
//       </p>
//     </div>
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-lg font-bold mb-4">Our Mission</h2>
//       <p>
//         Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor.
//       </p>
//     </div>
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-lg font-bold mb-4">What We Do</h2>
//       <ul className="list-disc pl-4">
//         <li>UX/UI Design</li>
//         <li>Website Development</li>
//         <li>Marketing</li>
//         <li>Social Media</li>
//         <li>Commerce Store</li>
//         <li>Tech Support</li>
//       </ul>
//     </div>
//   </section>
// </div>


// {/* Key benefits section */}
// <div className="flex flex-col min-h-screen w-full justify-around items-center py-12 px-4">
//   {/* Heading */}
//   <div className="font-extrabold text-4xl md:text-5xl text-blue-400 text-center mb-4"
//     style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}>
//     How can we help you
//   </div>
  
//   {/* Subheading Text */}
//   <div className="text-lg text-gray-600 text-center mb-8 max-w-2xl">
//     Discover the benefits of our services and how they can improve your life. 
//     Here are some key benefits that make us stand out.
//   </div>
  
//   {/* Key Benefits Grid */}
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[1204px] w-full">
//     {keyBenefits.map((benefits, index) => {
//       return <BenefitCard key={index} passed={benefits} />;
//     })}
//   </div>
// </div>




// <div className="flex w-full h-auto bg-white">
//       {/* Image Container */}
//       <div className="w-1/2">
//         <img src={crausal1} alt="Office" className="w-full h-full object-cover" />
//       </div>
      
//       {/* Content Container */}
//       <div className="w-1/2 p-12">
//         <h1 className="text-4xl font-semibold mb-6">Why Choose Us?</h1>
//         <p className="text-gray-700 mb-6">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
//         </p>
//         <ul className="space-y-4">
//           <li className="flex items-center">
//             <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
//             Best Quality Designs
//           </li>
//           <li className="flex items-center">
//             <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
//             24x7 Live Support
//           </li>
//           <li className="flex items-center">
//             <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
//             Result Oriented Projects
//           </li>
//           <li className="flex items-center">
//             <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
//             Award Winning Support Team
//           </li>
//           <li className="flex items-center">
//             <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
//             Best ROI Techniques
//           </li>
//           <li className="flex items-center">
//             <span className="bg-blue-500 h-3 w-3 rounded-full mr-3"></span>
//             Experienced Professionals
//           </li>
//         </ul>
//       </div>
//     </div>



//     <div className="bg-white p-10">
//       {/* Statistics Section */}
//       <div className="mb-12">
//         <h2 className="text-2xl font-semibold mb-4">Some Numbers</h2>
//         <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         <div className="flex justify-between">
//           <div className="text-center">
//             <h3 className="text-3xl font-bold text-blue-500">87</h3>
//             <p className="text-gray-800">Satisfied Clients</p>
//           </div>
//           <div className="text-center">
//             <h3 className="text-3xl font-bold text-blue-500">150</h3>
//             <p className="text-gray-800">Projects Completed</p>
//           </div>
//           <div className="text-center">
//             <h3 className="text-3xl font-bold text-blue-500">28</h3>
//             <p className="text-gray-800">Accolades Earned</p>
//           </div>
//           <div className="text-center">
//             <h3 className="text-3xl font-bold text-blue-500">56K+</h3>
//             <p className="text-gray-800">Lines of Code</p>
//           </div>
//         </div>
//       </div>


//     </div>


//       <BusinessBook />
//     </div>
//   );
// };



// import React from 'react'
// export const Transportation = () => {

//   return (
//     <div>
//       bmnnbnbmn
//     </div>
//   )
// }

