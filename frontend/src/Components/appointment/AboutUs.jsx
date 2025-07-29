import React from "react";

const AboutUs = () => {
  return (
    <section className="overflow-hidden h-full px-4 md:px-16 bg-white" id="About">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 mb-4">
            Our mission declares our purpose of existence as a company and our objectives.
          </p>
          <p className="text-gray-600">
            To give every customer much more than what he/she asks for in terms of quality, selection,
            value for money and customer service, by understanding local tastes and preferences and
            innovating constantly to eventually provide an unmatched experience in jewellery shopping.
          </p>
        </div>

        {/* Experience Circle */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-48 h-48 rounded-full bg-gray-100 shadow-md flex flex-col justify-center items-center">
            <span className="text-blue-600 text-5xl font-bold">12</span>
            <span className="text-gray-600 text-lg">Years</span>
            <span className="text-gray-500 text-sm">of Experiences</span>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src="https://img.freepik.com/premium-photo/nurse-preparing-syringe-young-man-vaccination_662214-291452.jpg" 
          alt="Vaccination"
          className="w-full h-auto object-cover rounded-lg shadow"
        />
        <img
          src="https://img.freepik.com/free-photo/portrait-confident-female-doctor-with-gloves_23-2148980715.jpg" // Replace with your own images
          alt="Doctor"
          className="w-full h-auto object-cover rounded-lg shadow"
        />
      </div>
    </section>
  );
};

export default AboutUs;
