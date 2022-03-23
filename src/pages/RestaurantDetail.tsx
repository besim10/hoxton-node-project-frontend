import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Restaurant } from "./Restaurants";

function RestaurantDetail() {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

  const param = useParams();
  useEffect(() => {
    fetch(`http://localhost:8000/restaurants/${param.name}`)
      .then((resp) => resp.json())
      .then((data) => setRestaurant(data));
  }, []);
  return (
    <main className="restaurant__detail">
      <section className="info__section">
        <section className="restaurant-detail__info">
          <ul>
            <li className="restaurant_booking">
              <h4 className="restaurant">RESTAURANT</h4>
              <button>Book Now</button>
            </li>
            <li>
              <h2>{restaurant?.name}</h2>
            </li>
            <li className="restaurant-detail_info_item">
              <span>Description: </span>
              <h4>{restaurant?.description}</h4>
            </li>
            <li className="restaurant-detail_info_item">
              <span>Location: </span>
              <h4>{restaurant?.location}</h4>
            </li>
            <li className="restaurant-detail_info_item">
              <span>Category: </span>
              <h4>{restaurant?.category.name}</h4>
            </li>
            <li className="restaurant-detail_info_item">
              <span>Address: </span>
              <h4>{restaurant?.address}</h4>
            </li>
            <li className="restaurant-detail_info_item">
              <span>Website: </span>
              <h4>{restaurant?.website}</h4>
            </li>
            <li className="restaurant-detail_info_item">
              <span>Email: </span>
              <h4>{restaurant?.email}</h4>
            </li>
            <li className="restaurant-detail_info_item">
              <span>Phone number: </span>
              <h4>{restaurant?.phoneNumber}</h4>
            </li>
          </ul>
        </section>
        <section className="restaurant-detail__photos">
          <ul>
            {restaurant?.photos.map((photo, index) => (
              <li key={index}>
                <img src={`${photo.image}`} />
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}
export default RestaurantDetail;
