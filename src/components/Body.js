
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../restaurant";

const Body = () => {
    return (
      <div className="restuarant-cards">
        {/* I am passing restaurant props to my restaurant card, restaurant card need to receive the card */}
        {/* have to write in a map way */}

        {restaurantList.map((restaurant) => {
          return <RestaurantCard restaurant={restaurant} key={restaurant.info.id}/>
          // console.log(rest.info)
        })}
        {/* <RestaurantCard resturant={restaurantList[0]} />
        <RestaurantCard resturant={restaurantList[1]} />
        <RestaurantCard resturant={restaurantList[2]} />
        <RestaurantCard resturant={restaurantList[3]} />
        <RestaurantCard resturant={restaurantList[4]} />
        <RestaurantCard resturant={restaurantList[5]} /> */}
      </div>
    );
  };

  export default Body;