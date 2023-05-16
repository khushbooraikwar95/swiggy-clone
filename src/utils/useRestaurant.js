import { useState, useEffect } from "react";
import { FETCH_MENU_RUL } from "../config";

const useRestaurant = (resId) => {
  const [restaurant, setRestsaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    console.log("FETCH_MENU_RUL", FETCH_MENU_RUL);
    const data = await fetch(FETCH_MENU_RUL + resId);
    const json = await data.json();
    console.log("KSFKSKF", json);
    setRestsaurant(json.data?.cards[0]?.card?.card.info);
  }

  return restaurant;
};

export default useRestaurant;
