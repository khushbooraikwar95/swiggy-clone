import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestrauntMenu = () => {
  const { id } = useParams();
  console.log("resId", useParams());
  //how to read a dynamic url params

  const restsaurant = useRestaurant(id);

  return !restsaurant ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <h1>Restraunt id: {id}</h1>
        <h2>{restsaurant.name}</h2>
        <img alt="logo" src={IMG_CDN_URL + restsaurant.cloudinaryImageId}></img>
        <h2>{restsaurant.area}</h2>
        <h3>{restsaurant.city}</h3>
        <h3>{restsaurant.avgRating}</h3>
      </div>
    </div>
  );
};

export default RestrauntMenu;
