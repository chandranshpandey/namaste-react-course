import RestaurantCard from "./RestaurantCard";
import restaurantList from "../restaurant.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

function filterRestaurantData(textToSearch, restList) {
  return restList.filter((ele) =>
    ele.info.name.toLowerCase().includes(textToSearch)
  );
}

const Body = () => {
  //just to see how many times render took place
  const [searchText, setSearchText] = useState(""); //returns an array var name and a function to update a variable
  // basically initialize a state variable with restaurant variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [listOfAllRestaurants, setListOfAllRestaurant] = useState([]);

  console.log("render");
  console.log("All Restaurant");
  console.log(listOfAllRestaurants);
  console.log("Restaurant");
  console.log(listOfRestaurant);

  useEffect(() => {
    async function fetchRestData() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();
      // console.log(
      //   jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      // );
      // console.log(jsonData)

      //no thoughts have gone on handling the errors
      setListOfAllRestaurant(
        jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
      setListOfRestaurant(listOfAllRestaurants);
    }
    fetchRestData();
  }, []);

  if(listOfRestaurant.length === 0) return <h1>No Restaurant Found</h1>

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  } else {
    return (
      <>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setListOfRestaurant(
                filterRestaurantData(e.target.value, listOfAllRestaurants)
              );
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() =>
              setListOfRestaurant(
                listOfAllRestaurants.filter((ele) =>
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
              <RestaurantCard
                restaurant={restaurant}
                key={restaurant.info.id}
              />
            );
            // console.log(rest.info)
          })}
        </div>
      </>
    );
  }
};

export default Body;
