import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestrauntMenu = () => {
  const params = useParams();
  //how to read a dynamic url params

  const [restsaurant, setRestsaurant] = useState({});
  const { id } = params;

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.907301358058373&lng=77.61228673160076&restaurantId=" +
        id
    );

    const json = await data.json();

    console.log(json);

    setRestsaurant(json.data?.cards[0]?.card?.card.info);
  }

  return !restsaurant ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <h1>Restraunt id: {id}</h1>
        <h2>{restsaurant.name}</h2>
        <img src={IMG_CDN_URL + restsaurant.cloudinaryImageId}></img>
        <h2>{restsaurant.area}</h2>
        <h3>{restsaurant.city}</h3>
        <h3>{restsaurant.avgRating}</h3>
      </div>
    </div>
  );
};

export default RestrauntMenu;
