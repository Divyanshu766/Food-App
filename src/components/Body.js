import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Simmer from "./Simmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Body = () => {
  const [restaurentList, setRestaurentList] = useState([]);
  const [filterData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { setUserName, loggedInUser } = useContext(UserContext);
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
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
    console.log(restaurentList);
  }, []);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline !! please check your Internet connection ...
      </h1>
    );
  }

  if (restaurentList?.length === 0) {
    return <Simmer />;
  }
  return (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4 ">
          <input
            type="text"
            className="border-solid border border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-md"
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
        <div className="m-4 p-6 flex items-centre">
          <button
            onClick={() => {
              console.log("Btn-clicked");
            }}
            className="filter-btn px-4 py-1.5  bg-gray-100 rounded-md"
          >
            Top Rated Restaurent
          </button>
        </div>
        <div className="m-4 p-8 flex items-centre gap-2">
          <label className="flex items-center">User Name :</label>
          <input
            className="border border-black"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filterData?.map((ele) => {
          return (
            <Link key={ele.info.id} to={"/restaurents/" + ele.info.id}>
              <RestaurentCard key={ele.info.id} resData={ele} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
