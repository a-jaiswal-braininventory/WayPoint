import React from "react";

function SearchSummaryCards() {
  return (
    <div className="cardBox pt-8 pb-4">
      <h1 className="text-left font-normal text-xl px-2">
        Price per passenger, includes tax and fees
      </h1>
      <div className="card-container xl:flex xl:justify-between xl:gap-4 mt-4">
        <div className="singleBox xl:w-1/4 shadow-lg rounded-2xl p-5 bg-white xl:my-0 my-4">
          <h1 className="text-left text-lg lg:text-xl font-semibold">
            Total Routes Found
          </h1>
          <span className="block text-left text-xl font-normal">100</span>
        </div>
        <div className="singleBox xl:w-1/4 shadow-lg rounded-2xl p-5 bg-white xl:my-0 my-4">
          <h1 className="text-left text-lg lg:text-xl font-semibold">Best Route</h1>
          <p className="innertexts flex justify-between">
            <span className="text-base lg:text-xl font-normal">$500</span>
            <span className="text-base lg:text-xl font-normal">(14h 15m)</span>
          </p>
        </div>
        <div className="singleBox xl:w-1/4 shadow-lg rounded-2xl p-5 bg-white xl:my-0 my-4">
          <h1 className="text-left text-lg lg:text-xl font-semibold">
            Cheapest Route
          </h1>
          <p className="innertexts flex justify-between">
            <span className="text-base lg:text-xl font-normal">$350</span>
            <span className="text-base lg:text-xl font-normal">(16h 15min)</span>
          </p>
        </div>
        <div className="singleBox xl:w-1/4 shadow-lg rounded-2xl p-5 bg-white xl:my-0 my-4">
          <h1 className="text-left text-lg lg:text-xl font-semibold">
            Fastest Route
          </h1>
          <p className="innertexts flex justify-between">
            <span className="text-base lg:text-xl font-normal">$450</span>
            <span className="text-base lg:text-xl font-normal">(12h 50min)</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchSummaryCards;
