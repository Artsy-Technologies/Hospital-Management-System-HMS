import React from "react";
import Doctor from "../../assets/doctor.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen relative pt-20" 
    >
      <img
        src={Doctor}
        alt="Doctor"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        <h1 className="text-4xl text-white font-bold">Welcome to My Clinic</h1>
      </div>
    </section>
  );
};

export default Hero;
