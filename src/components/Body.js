import RestaurantCard from "./RestaurantCard";
import restaurantList from "../config";
import { useState, useEffect } from "react";

function filterRestaurantData(textToSearch) {
  return restaurantList.filter((ele) =>
    ele.info.name.toLowerCase().includes(textToSearch)
  );
}

const Body = () => {
  const [searchText, setSearchText] = useState(""); //returns an array var name and a function to update a variable
  // basically initialize a state variable with restaurant variable
  const [listOfRestaurant, setListOfRestaurant] = useState(restaurantList);

  useEffect(() => {
    async function fetchRestData() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();
      console.log(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      setListOfRestaurant(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    }
    fetchRestData()

  }, []);
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
