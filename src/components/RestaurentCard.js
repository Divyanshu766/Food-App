import { CDN_URL } from "../utils/constants";
const RestaurentCard = (props) => {
  const { name, cuisines, avgRating, areaName } = props?.resData?.info;
  return (
    <div
      className="res-card m-4 p-4 w-[250px]"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="res-logo"
        src={CDN_URL + props?.resData?.info?.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rating : {avgRating} stars</h4>
      <h4>{props?.resData?.info?.sla?.slaString}</h4>
      <h5>{areaName}</h5>
    </div>
  );
};

export default RestaurentCard;
