import RestaurantCard from "./RestaurantCard";
import restaurantList from "../config";
import { useState } from "react";

function filterRestaurantData(textToSearch) {
  return restaurantList.filter((ele) =>
    ele.info.name.toLowerCase().includes(textToSearch)
  );
}

const Body = () => {
  const [searchText, setSearchText] = useState(""); //returns an array var name and a function to update a variable
  // basically initialize a state variable with restaurant variable
  const [listOfRestaurant, setListOfRestaurant] = useState(restaurantList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            console.log(e.target.value);
            setListOfRestaurant(filterRestaurantData(e.target.value));
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() =>
            setListOfRestaurant(
              restaurantList.filter((ele) =>
                ele.info.name.toLowerCase().includes(searchText)
              )
            )
          }
        >
          Search
        </button>
      </div>
      <div className="restuarant-cards">
        {listOfRestaurant.map((restaurant) => {
          return (
            <RestaurantCard restaurant={restaurant} key={restaurant.info.id} />
          );
          // console.log(rest.info)
        })}
      </div>
    </>
  );
};

export default Body;
