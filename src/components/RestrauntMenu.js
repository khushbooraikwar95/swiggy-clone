import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import { ShimmerforOneRestuarant } from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import useMenu from "../utils/useMenu";
import { addItem, remmoveItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestrauntMenu = () => {
  const { id } = useParams();
  console.log("resId", useParams());
  //how to read a dynamic url params

  const restsaurant = useRestaurant(id);
  const menuItems = useMenu(id);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const removeFoodItem = (item) => {
    dispatch(remmoveItem(item));
  };

  return !restsaurant ? (
    <ShimmerforOneRestuarant />
  ) : (
    <div className="flex">
      <div>
        <h2 className="m-2 p-1 font-bold text-2xl text-black-800">
          {restsaurant.name}
        </h2>
        <img
          className="w-[500px] h-80"
          alt={restsaurant.name}
          src={IMG_CDN_URL + restsaurant.cloudinaryImageId}
        ></img>
        <p className="font-bold">{restsaurant?.cuisines?.join(", ")}</p>
        <h2 className="font-bold">{restsaurant?.area}</h2>
        <h3 className="font-bold">
          {restsaurant?.city}, {restsaurant.costForTwoMessage}
        </h3>
        <h3 className="font-bold">Rating: {restsaurant?.avgRating}⭐</h3>
      </div>
      <div className="flex p-8">
        <div className="border">
          <div>
            <h3 className="p-2 underline font-bold border">
              Recommended({menuItems.length} ITEMS)
            </h3>
          </div>
          <div className="p-5">
            {menuItems.map((item) => (
              <div key={item?.id}>
                <div className="text-lg">
                  <h3>
                    {item?.name} -{" "}
                    <button
                      className=" p-1 m-1 bg-green-500"
                      onClick={() => addFoodItem(item)}
                    >
                      +
                    </button>
                    <button
                      className=" p-1 m-1 bg-green-500"
                      onClick={() => removeFoodItem(item)}
                    >
                      -
                    </button>
                  </h3>
                  <p className="text-sm font-bold">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="text-sm">{item?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestrauntMenu;
