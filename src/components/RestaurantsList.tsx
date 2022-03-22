import { Restaurant } from "../pages/Home";

type Props = {
  restaurants: Restaurant[];
};
function RestaurantList({ restaurants }: Props) {
  return (
    <ul className="restaurants-list">
      {restaurants.map((restaurant, index) => (
        <li key={index} className="restaurant-list__item">
          <a href="#">
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
          </a>
        </li>
      ))}
    </ul>
  );
}
export default RestaurantList;
