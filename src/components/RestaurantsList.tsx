import { Link } from "react-router-dom";
import { Restaurant } from "../pages/Restaurants";

type Props = {
  restaurants: Restaurant[];
};
function RestaurantList({ restaurants }: Props) {
  return (
    <ul className="restaurants-list">
      {restaurants.map((restaurant, index) => (
        <Link
          to={`/restaurants/${restaurant.name}`}
          key={index}
          className="restaurant-list__item"
        >
          <li>
            <div className="item-info">
              <span className="item-info__category">
                {restaurant.category.name}
              </span>
              <h3 className="item-info__title"> {restaurant.name}</h3>
              <p className="item-info__details">{restaurant.address}</p>
            </div>
            <div className="item-info__photo">
              <img src={`${restaurant.thumnail}`} />
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
export default RestaurantList;
