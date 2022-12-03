import React from "react";
import Image from "next/image";

const Card = ({ heading, discount, imgURL }) => {
  return (
    <div className="flex flex-col shadow-md shadow-black/50 rounded-xl hover:scale-105 transition-all duration-150">
      {/* Card Image */}
      <div className="relative">
        <Image
          src={imgURL}
          width={300}
          height={400}
          className="self-center rounded-md mb-3"
        />
        <span className="absolute top-1 right-1 rounded-3xl bg-pink-400 text-white w-fit text-center py-1 px-3">
          {discount}% off!
        </span>
      </div>
      {/* Card Body */}
      <div className="flex justify-center gap-2">
        <h3 className="text-2xl self-center font-bold">{heading}</h3>
      </div>
      {/* Card Footer */}
      <button className="my-4 px-12 py-2 bg-pink-400 w-fit self-center rounded-3xl text-xl">
        Shop Now!
      </button>
    </div>
  );
};

export default Card;
