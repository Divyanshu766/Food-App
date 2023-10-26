import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Simmer from "./Simmer";
const Body = () => {
  const [restaurentList, setRestaurentList] = useState([]);
  const [filterData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(filterData);
  async function fetchData() {
    try {
      let res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      let data = await res.json();
      let resData =
        data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setRestaurentList(resData);
      setFilteredData(resData);
      console.log(
        data.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (restaurentList.length === 0) {
    return <Simmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              console.log();

              const filterData = restaurentList.filter((element) => {
                return element.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setFilteredData(filterData);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            console.log("Btn-clicked");
          }}
          className="filter-btn"
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="res-container">
        {filterData.map((ele) => {
          return <RestaurentCard key={ele.info.id} resData={ele} />;
        })}
      </div>
    </div>
  );
};

export default Body;
