import { IMG_CDN_URL } from "../config";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="w-[200px] p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="food-pics" />
      <h2 className=" font-bold text-xl">{name}</h2>
      <h6>{area}</h6>
      <span>
        <h4
          style={
            avgRating < 3 ? { backgroundColor: "red" } : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
