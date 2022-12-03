import React from "react";
import Card from "./Card";

const FeaturedDresses = ({ season }) => {
  return (
    <div className="flex flex-col justify-center items-center pt-7 mx-4 mb-10">
      <div>
        <h2 className="mb-6 text-3xl font-bold text-center">
          {season}'s Featured Dresses
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          heading="one"
          discount="25"
          imgURL="https://images.unsplash.com/photo-1492175742197-ed20dc5a6bed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z293bnxlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60"
        />
        <Card
          heading="two"
          discount="25"
          imgURL="https://images.unsplash.com/photo-1611091040057-710ef13bdb20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z293bnxlbnwwfDF8MHx8&auto=format&fit=crop&w=1100&q=60"
        />
        <Card
          heading="three"
          discount="25"
          imgURL="https://images.unsplash.com/photo-1492175742197-ed20dc5a6bed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z293bnxlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60"
        />
        <Card
          heading="four"
          discount="25"
          imgURL="https://images.unsplash.com/photo-1492175742197-ed20dc5a6bed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z293bnxlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60"
        />
      </div>
    </div>
  );
};

export default FeaturedDresses;
