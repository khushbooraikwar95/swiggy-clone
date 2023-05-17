import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import useMenu from "../utils/useMenu";

const RestrauntMenu = () => {
  const { id } = useParams();
  console.log("resId", useParams());
  //how to read a dynamic url params

  const restsaurant = useRestaurant(id);
  const menuItems = useMenu(id);

  console.log("MENU khushboo :", menuItems);

  return !restsaurant ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <h2 className="m-2 p-1 font-bold text-2xl text-black-800">
          {restsaurant.name}
        </h2>
        <img
          alt={restsaurant.name}
          src={IMG_CDN_URL + restsaurant.cloudinaryImageId}
        ></img>
        <p className="font-bold">{restsaurant?.cuisines?.join(", ")}</p>
        <h2 className="font-bold">{restsaurant?.area}</h2>
        <h3 className="font-bold">
          {restsaurant?.city}, {restsaurant.costForTwoMessage}
        </h3>
        <h3 className="font-bold">Rating: {restsaurant?.avgRating}⭐</h3>
        <div className="flex">
          <div className="border">
            <div>
              <h3 className="p-2 underline font-bold border">
                Recommended({menuItems.length} ITEMS)
              </h3>
            </div>
            <div>
              {menuItems.map((item) => (
                <div key={item?.id}>
                  <div className="text-lg">
                    <h3>{item?.name}</h3>
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
    </div>
  );
};

export default RestrauntMenu;
