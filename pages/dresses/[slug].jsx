import React from "react";
import Navbar from "../../components/Navbar";
import { GiAmpleDress } from "react-icons/gi";

const DressShowPage = () => {
  return (
    <div>
      <Navbar home={false} />
      <div className="mx-2 mt-24 mb-7 max-h-screen">
        <div className="h-[300px] w-[400px] bg-black/10 flex justify-center items-center">
          <GiAmpleDress size={200} className="opacity-25" />
        </div>
        <div className="bg-blue-200"></div>
        <div
          id="infoWrapper"
          className="flex flex-col justify-center items-center"
        >
          <h3 className="mt-4 text-3xl font-bold text-center">
            Dress Name Here
          </h3>
          <p className="text-xl font-bold text-center">$90/day</p>
          <p className="mt-3 text-lg text-center">
            Description of the dress goes here. The description should only be
            about 3 to 4 sentences long to make sure the space isn't too large.
          </p>
          <button className="mt-8 max-w-[75%] px-12 py-3 bg-green-300 rounded-[10rem] text-2xl text-center">
            Rent Now
          </button>
        </div>
      </div>
      <div id="informationWrapper">
        <div id="reviewsWrapper"></div>
      </div>
    </div>
  );
};

export default DressShowPage;
