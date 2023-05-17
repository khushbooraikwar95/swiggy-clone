import { useState, useEffect } from "react";
import { FETCH_MENU_RUL } from "../config";

export const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";

const useRestaurant = (resId) => {
  const [restaurant, setRestsaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  // useEffect(() => {
  //   getMenuItems();
  // }, []);

  async function getRestaurantInfo() {
    console.log("FETCH_MENU_RUL", FETCH_MENU_RUL);
    const data = await fetch(FETCH_MENU_RUL + resId);
    const json = await data.json();
    console.log("KSFKSKF", json);

    const restaurantData =
      json?.data?.cards
        ?.map((x) => x.card)
        ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
        ?.info || null;
    // setRestsaurant(json.data?.cards[0]?.card?.card.info);
    setRestsaurant(restaurantData);
  }
  console.log("restaurant", restaurant);

  return restaurant;
};

export default useRestaurant;
