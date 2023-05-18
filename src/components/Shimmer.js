import React from "react";

export function ShimmerforAllRestaurants() {
  return (
    <div className="flex flex-wrap ">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div key={index} className="  bg-gray-200 w-52 h-52 m-4 border"></div>
        ))}
    </div>
  );
}

export function ShimmerforOneRestuarant() {
  return (
    <div className="flex flex-wrap ">
      {Array(1)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="  bg-gray-200 w-[500px] h-80 m-4 border"
          ></div>
        ))}
    </div>
  );
}
