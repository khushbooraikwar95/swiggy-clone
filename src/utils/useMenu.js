import { useState, useEffect } from "react";
import { FETCH_MENU_RUL } from "../config";

// menu items api card type key
export const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

const useMenu = (resId) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getMenuInfo();
  }, []);

  async function getMenuInfo() {
    const data = await fetch(FETCH_MENU_RUL + resId);
    const json = await data.json();

    // Set menu item data
    const menuItemsData =
      json?.data?.cards
        .find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
        ?.map((x) => x.itemCards)
        .flat()
        .map((x) => x.card?.info) || [];

    const uniqueMenuItems = [];
    menuItemsData.forEach((item) => {
      if (!uniqueMenuItems.find((x) => x.id === item.id)) {
        uniqueMenuItems.push(item);
      }
    });
    setMenuItems(uniqueMenuItems);
  }
  return menuItems;
};

export default useMenu;
