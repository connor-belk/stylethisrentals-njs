import Image from "next/image";
import React from "react";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Card from "../../components/Card";
import { dressesList } from "../../components/dressesList";

const Dresses = () => {
  return (
    <div>
      <div>
        <Navbar home={true} />
      </div>
      <div>
        <div className="h-full relative">
          <div className="bg-black/30 absolute w-full h-full top-0 right-0 bottom-0 left-0" />
          <Image
            src="https://images.unsplash.com/photo-1605636911199-0872bd83f676?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            width={1440}
            height={400}
            className="object-cover"
          />
          <div className="w-full h-full absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center text-[#fefefe]">
            <p className="text-2xl mt-2 mb-1 sm:mb-10 text-center">
              Wide selection of gowns and dresses for all settings.
            </p>
            <button className="bg-[#fefefe] rounded-[10rem] py-3 px-12 text-[#101010] text-xl sm:text-2xl hover:scale-105 transition-all duration-150">
              <Link href="#dressesList">See Dresses!</Link>
            </button>
          </div>
        </div>
      </div>
      <div id="dressesList" className="mx-4 my-8">
        <h2 className="font-bold text-3xl text-center mb-14">
          Available Dresses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {dressesList.map((dress) => (
            <Card
              heading={dress.name}
              imgURL={dress.image}
              discount={dress.discount}
              price={dress.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dresses;
