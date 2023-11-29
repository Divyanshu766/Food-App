import { CDN_URL } from "../utils/constants";
const RestaurentCard = (props) => {
  const { name, cuisines, avgRating, areaName } = props?.resData?.info;
  return (
    <div className="res-card m-4 p-4 w-[250px] h-[420px]  bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        className="res-logo rounded-lg h-[200px] w-[250px]"
        src={CDN_URL + props?.resData?.info?.cloudinaryImageId}
      />
      <h3 className="font-bold py-3 text-md">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating : {avgRating} stars</h4>
      <h4>{props?.resData?.info?.sla?.slaString}</h4>
      <h5>{areaName}</h5>
    </div>
  );
};

export default RestaurentCard;
