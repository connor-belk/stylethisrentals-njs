import React from "react";

const Hero = ({ heading, message }) => {
  const handleCTA = () => {
    console.log("CTA clicked");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img">
      {/* OVERLAY */}
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/30 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-5rem] text-center">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-2xl">{message}</p>
        <button
          className="bg-slate-50 text-slate-800 text-xl py-2 px-8 border border-white rounded-3xl hover:scale-105 transition-all duration-150"
          onClick={handleCTA}
        >
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
