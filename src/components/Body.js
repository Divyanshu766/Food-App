import RestaurentCard from "./RestaurentCard";
import resObject from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  return (
    <div className="body">
      <div className="filter">
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
        {resObject.map((ele) => {
          return <RestaurentCard key={ele.info.id} resData={ele} />;
        })}
      </div>
    </div>
  );
};

export default Body;
