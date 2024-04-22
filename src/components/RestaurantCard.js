import { IMG_CDN_LINK } from "../config";

const RestaurantCard = (props) => {
    return (
      <div className="card">
        <img
          alt="burger king"
          src={
            IMG_CDN_LINK + props.restaurant.info.cloudinaryImageId
          }
        />
        <h3>{props.restaurant.info.name}</h3> 
        <h4>{props.restaurant.info.cuisines.join(",")}</h4>
        <h5>{props.restaurant.info.avgRatingString + "stars"}</h5>
      </div>
    );
  };

  export default RestaurantCard;