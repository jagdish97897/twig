import React from 'react';
import { useParams } from 'react-router-dom';

const BusinessDetails = () => {
  const { name } = useParams(); 

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">{name}</h1>
      <p className="text-lg text-gray-700 text-center">Details about {name} will go here.</p>
    </div>
  );
};

export default BusinessDetails;
