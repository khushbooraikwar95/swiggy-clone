// import { restaurantList } from "../config";
import RestaurantCard from "./RestruantCard";
import React, { useState, useEffect } from "react";
import { ShimmerforAllRestaurants } from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index
const Body = () => {
  // useState: To create a state variable, searchText is local state variable
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    //API call
    getRestaurants();
  }, []);

  async function getRestaurants(params) {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.907301358058373&lng=77.61228673160076&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1> 🔴Offline, Please check you internet connection!</h1>;
  }

  if (!allRestaurants) return null;

  // if (filteredRestaurants?.length === 0)
  //   return <h1>No Restraunt match your filter!!!</h1>;

  return allRestaurants.length === 0 ? (
    <ShimmerforAllRestaurants />
  ) : (
    <React.Fragment>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-blue-50 p-2 m-2"
          placeholder="Search "
          value={searchText}
          data-testid="search-input"
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          data-testid="search-btn"
          className="p-2 m-2 bg-purple-700 text-white rounded-md hover:bg-sky-700"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state of restaurants list
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap" data-testid="res-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Body;
