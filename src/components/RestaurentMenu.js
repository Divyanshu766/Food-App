import Simmer from "./Simmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import ResCategory from "./ResCategory";

const RestaurentMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurentMenu(resId);

  if (resInfo === null) return <Simmer />;
  console.log(resInfo.cards[0].card.card.info);
  let { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  let itemCards =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;
  let categories = [];
  categories =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (element) =>
        element?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines} - {costForTwoMessage}
      </p>
      {categories.map((category) => {
        return (
          <ResCategory
            key={category.card.card.title}
            data={category.card.card}
          />
        );
      })}
    </div>
  );
};

export default RestaurentMenu;
