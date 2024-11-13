import React from 'react';
import crausal1 from "../resource/crausal1.jpg";
import crausal2 from "../resource/crausal2.jpg";
import btsil from "../resource/btsil.jpg";
// import more images if needed

const blogs = [
  {
    title: "Exploring Innovation at India Mobile Congress 2024",
    author: "Transvue Solutions India Pvt Ltd",
    imageUrl: btsil,
    url: "/Imc" // Add the actual link here
  },
  {
    title: "Dharavi - A Beacon of Resilience and Transformation",
    author: "Snehal Adani",
    imageUrl: crausal2,
    url: "/BlogGrid" // Add the actual link here
  },
  {
    title: "Dharavi - A Beacon of Resilience and Transformation",
    author: "Snehal Adani",
    imageUrl: crausal2,
    url: "/BlogGrid" // Add the actual link here
  },
  {
    title: "Dharavi - A Beacon of Resilience and Transformation",
    author: "Snehal Adani",
    imageUrl: crausal2,
    url: "/BlogGrid" // Add the actual link here
  },
  {
    title: "Dharavi - A Beacon of Resilience and Transformation",
    author: "Snehal Adani",
    imageUrl: crausal2,
    url: "/BlogGrid" // Add the actual link here
  },
  // Add more blog items here
];

const BlogGrid = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-semibold text-center mb-8">Blogs</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-md"
            style={{ backgroundImage: `url(${blog.imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
              <div className="text-white">
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                {blog.author && <p className="text-sm text-gray-300">By {blog.author}</p>}
                <a href={blog.url}>
                  <button className="text-blue-400 font-semibold mt-2">Read More</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;

// import React from 'react';
// import crausal1 from "../resource/crausal1.jpg";
// import crausal2 from "../resource/crausal2.jpg";
// import crausal3 from "../resource/crausal3.jpg";
// import crausal4 from "../resource/crausal4.jpg";

// const blogs = [
//   {
//     title: "Ratan Tata, the perfect renaissance man",
//     author: "Snehal Adani",
//     imageUrl: crausal1,
//     url: "/Imc" // Add the actual link here
//   },
//   {
//     title: "Dharavi - A Beacon of Resilience and Transformation",
//     imageUrl: crausal2,
//     url: "/BlogGrid" // Add the actual link here
//   },
 
//   // Add more blog items here
// ];

// const BlogGrid = () => {
//   return (
//     <div className="bg-gray-100 py-10 px-4">
//       <h1 className="text-4xl font-semibold text-center mb-8">Blogs</h1>
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {blogs.map((blog, index) => (
//           <div
//             key={index}
//             className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-md"
//             style={{ backgroundImage: `url(${blog.imageUrl})` }}
//           >
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
//               <div className="text-white">
//                 <h2 className="text-xl font-semibold">{blog.title}</h2>
//                 {blog.author && <p className="text-sm text-gray-300">By {blog.author}</p>}
//                 <a href={blog.url} target="_blank" rel="noopener noreferrer">
//                   <button className="text-blue-400 font-semibold mt-2">Read More</button>
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogGrid;

// import React from 'react';
// import crausal1 from "../resource/crausal1.jpg";
// import crausal2 from "../resource/crausal2.jpg";
// import crausal3 from "../resource/crausal3.jpg";
// import crausal4 from "../resource/crausal4.jpg";

// const blogs = [
//   {
//     title: "Ratan Tata, the perfect renaissance man",
//     author: "Snehal Adani",
//     imageUrl: crausal1, 
//   },
//   {
//     title: "Dharavi - A Beacon of Resilience and Transformation",
//     imageUrl: crausal2,
//   },
//   {
//     title: "India to become a $30 Trillion Economy by 2050",
//     imageUrl: crausal3,
//   },
//   {
//     title: "International Women’s Day celebration at the Adani Group",
//     imageUrl: crausal4,
//   },
//   // Add more blog items here
// ];

// const BlogGrid = () => {
//   return (
//     <div className="bg-gray-100 py-10 px-4">
//       <h1 className="text-4xl font-semibold text-center mb-8">Blogs</h1>
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {blogs.map((blog, index) => (
//           <div
//             key={index}
//             className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden shadow-md"
//             style={{ backgroundImage: `url(${blog.imageUrl})` }}
//           >
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
//               <div className="text-white">
//                 <h2 className="text-xl font-semibold">{blog.title}</h2>
//                 {blog.author && <p className="text-sm text-gray-300">By {blog.author}</p>}
//                 <button className="text-blue-400 font-semibold mt-2">Read More</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogGrid;


// import React from 'react';
// import crausal1 from "../resource/crausal1.jpg";
// import crausal2 from "../resource/crausal2.jpg";
// import crausal3 from "../resource/crausal3.jpg";
// import crausal4 from "../resource/crausal4.jpg";

// const blogs = [
//   {
//     title: "Ratan Tata, the perfect renaissance man",
//     author: "Snehal Adani",
//     imageUrl: crausal1, 
//   },
//   {
//     title: "Dharavi - A Beacon of Resilience and Transformation",
//     imageUrl: crausal2,
//   },
//   {
//     title: "India to become a $30 Trillion Economy by 2050",
//     imageUrl: crausal3,
//   },
//   {
//     title: "International Women’s Day celebration at the Adani Group",
//     imageUrl: crausal4,
//   },
//   // Add more blog items here
// ];

// const BlogGrid = () => {
//   return (
//     <div className="bg-gray-100 py-10 px-4">
//       <h1 className="text-4xl font-semibold text-center mb-8">Blogs</h1>
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {blogs.map((blog, index) => (
//           <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
//             <div
//               className="h-48 bg-cover bg-center"
//               style={{ backgroundImage: `url(${blog.imageUrl})` }}
//             ></div>
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
//               {blog.author && <p className="text-gray-500 mb-4">By {blog.author}</p>}
//               <button className="text-blue-500 font-semibold">Read More</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogGrid;
