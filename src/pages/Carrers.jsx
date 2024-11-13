import React from 'react';

const careers = [
  {
    title: 'Software Engineer',
    location: 'Full Time',
    description: 'Join our team of engineers to design, develop, and maintain software solutions for our global clientele.',
  },
  {
    title: 'Product Manager',
    location: 'Delhi',
    description: 'Lead cross-functional teams to define, build, and scale innovative products for the future.',
  },
  {
    title: 'Marketing Specialist',
    location: 'Remote',
    description: 'Create and execute marketing strategies that drive engagement and build brand awareness worldwide.',
  },
  {
    title: 'Data Analyst',
    location: 'Delhi',
    description: 'Analyze data to provide actionable insights that help shape company strategies and decision-making.',
  },
];

const Careers = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Title and Description */}
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">Careers at TWI GROUP</h1>
        <p className="text-lg text-gray-600 mb-10">
          We're looking for passionate individuals to join our team and help us create a positive impact. Explore our open positions and take the next step in your career with us.
        </p>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {careers.map((job, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-left">
              
              {/* Job Title and Location */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{job.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{job.location}</p>

              {/* Job Description */}
              <p className="text-gray-600 mb-4">
                {job.description}
              </p>

              {/* Apply Button */}
              <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
