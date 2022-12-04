import Image from "next/image";
import React from "react";
import Navbar from "../../components/Navbar";

const Dresses = () => {
  return (
    <div>
      <div>
        <Navbar home={false} />
      </div>
      <div>
        <div className="h-[50vh]">
          <Image
            src="https://images.unsplash.com/photo-1562645361-c88442d7bc58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1976&q=80"
            width={1240}
            height={400}
            className="object-cover"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Dresses;
