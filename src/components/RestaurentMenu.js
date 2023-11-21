import Simmer from "./Simmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurentMenu(resId);

  if (resInfo === null) return <Simmer />;
  console.log(resInfo.cards[0].card.card.info);
  let { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  let itemCards =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name}- {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
