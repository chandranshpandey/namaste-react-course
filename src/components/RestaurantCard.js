const RestaurantCard = (props) => {
    return (
      <div className="card">
        <img
          alt="burger king"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            props.restaurant.info.cloudinaryImageId
          }
        />
        <h3>{props.restaurant.info.name}</h3> 
        <h4>{props.restaurant.info.cuisines.join(",")}</h4>
        <h5>{props.restaurant.info.avgRatingString + "stars"}</h5>
      </div>
    );
  };

  export default RestaurantCard;