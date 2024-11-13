import React from 'react';
import RadhaSinghal from "../resource/RadhaSinghal.webp";

const ChairmansMessage = () => {
  return (
    <div className="bg-gray-100 p-8 flex justify-center items-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl">
        
        {/* Profile and Heading */}
        <div className="flex items-center mb-6">
          <img src={RadhaSinghal} alt="Gautam Adani" className="w-24 h-24 rounded-full object-cover mr-6" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Chairman's Message</h2>
            <p className="text-2xl font-bold text-gray-800 mt-1">Goodness is imperative for growth</p>
          </div>
        </div>

        {/* Message Content */}
        <div className="text-gray-700 space-y-4">
          <p>
            The Adani Group’s existence and emergence have been an integral part of India’s resurgence. Over the past three decades, we were fortunate to touch millions, who believed in our vision, inspired us to be audacious, pushed us to achieve those ambitions and disciplined us in setting new benchmarks in everything we did.
          </p>
          <p>
            Today, as the world watches India move into its most defining phase of growth, the Adani Group’s responsibility towards the nation assumes greater importance. I believe that our responsibility to give back to the society coincides with who we are and our ability to contribute where our achievements will define our future and hold us together as a global organization.
          </p>
          <p className="font-semibold text-green-700">
            While we continue to work towards mitigating urban-rural divides and creating equal development opportunities across geographies, we will also explore new horizons catering to the changing aspirations of New India.
          </p>
          <p>
            It is increasingly being recognized that growth is incomplete if it is bereft of any good for the nation and the society as a whole. For me, growth must infuse prosperity – it must infuse purpose, harmony and most of all – it must infuse happiness!
          </p>
          <p>
            Over the past 30 years, we have created stellar and sustainable assets fundamental to nation-building. The vision for the future must be to scale up the goodness factor. It must be to tap into new opportunities – within India as well as across the world.
          </p>
          <p>
            When I say goodness, it is broadly split into three dimensions:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              First, our presence in unseeded critical to a nation must have a defining impact on the millions of lives touched by our projects. Whether it is delivering cooking gas to a fuel-starved rural kitchen or safe-keeping the country’s staple food produce, our acts must contribute to the country’s happiness index.
            </li>
            <li>
              Secondly, we must ensure that our immediate communities settled around our business sites are empowered by our presence and become self-reliant in the shadow of our growth.
            </li>
            <li>
              Thirdly, we must continue to foray into sectors where the country needs to establish a foothold. We will look at these opportunities as part of our national duty.
            </li>
          </ul>
          <p>
            We, at the Adani Group, believe in enriching lives, through state-of-the-art infrastructure and our contributions to nation-building.
          </p>
          <p className="font-semibold">
            We believe in Growth with Goodness.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex mt-6 space-x-4">
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">ONE VISION ONE TEAM</button>
          <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">CHAIRMAN'S CORNER</button>
        </div>
      </div>
    </div>
  );
};

export default ChairmansMessage;
