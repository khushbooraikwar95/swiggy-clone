import { IMG_CDN_URL } from "../config";

// Restaurant card component: Image, name, cuisine
const FoodItem = ({ name, imageId, description, defaultPrice }) => {
  return (
    <div className="w-[200px] p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + imageId} alt="food" />
      <h2 className=" font-bold text-xl">{name}</h2>
      <h6>{description}</h6>
      <h4>{defaultPrice}</h4>
    </div>
  );
};

export default FoodItem;
