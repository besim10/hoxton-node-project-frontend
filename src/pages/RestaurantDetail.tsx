import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { User } from "../App";
import { Restaurant } from "./Restaurants";

type Props = {
  setModal: (value: string) => void;
  restaurant: Restaurant | null;
  setRestaurant: (value: Restaurant | null) => void;
  user: User | null;
  setUser: (value: User) => void;
};
type Data = {
  userId: number | undefined;
  restaurantId: number;
};
function RestaurantDetail({
  setModal,
  restaurant,
  setRestaurant,
  user,
  setUser,
}: Props) {
  const checkIfRestaurantIsFavorited = () => {
    const matched = user?.favoriteRestaurants.find(
      (favRestaurant) => favRestaurant.restaurantId === restaurant?.id
    );
    if (matched) return matched;
    return false;
  };
  const addToFavorites = (data: Data) => {
    fetch(`http://localhost:8000/favorites`, {
      method: "POST",
      headers: {
        authorization: localStorage.token,
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((resp) =>
      resp.json().then((data) => {
        if (data.error) alert(data.error);
        else {
          setUser(data);
        }
      })
    );
  };
  const removeFromFavorites = () => {
    const RestaurantToRemove = checkIfRestaurantIsFavorited() as any;
    fetch(`http://localhost:8000/favorites/${RestaurantToRemove.id}`, {
      method: "DELETE",
      headers: {
        authorization: localStorage.token,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) alert(data.error);
        else {
          setUser(data);
        }
      });
  };
  const param = useParams();
  useEffect(() => {
    fetch(`http://localhost:8000/restaurants/${param.name}`)
      .then((resp) => resp.json())
      .then((data) => setRestaurant(data));
  }, []);
  if (restaurant === null) return <h1>Loading...</h1>;
  return (
    <main className="restaurant__detail">
      <section className="info__section">
        <section className="restaurant-detail__info">
          <ul>
            <li className="restaurant_booking">
              <h4 className="restaurant">RESTAURANT</h4>
              <button
                className="button book"
                onClick={() => {
                  if (user === null) {
                    setModal("please-sign-in");
                    setTimeout(() => {
                      setModal("sign-in");
                    }, 1500);
                  } else {
                    const reservation = user.reservations.find(
                      (reservation) =>
                        reservation.restaurantId === restaurant.id
                    );
                    if (reservation) setModal("already-booked");
                    else {
                      setModal("book");
                    }
                  }
                }}
              >
                Book Now
              </button>
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
            {checkIfRestaurantIsFavorited() ? (
              <button
                onClick={() => {
                  removeFromFavorites();
                }}
                className="remove-from-favorites"
              >
                ❌Remove from favorites
              </button>
            ) : (
              <button
                onClick={() => {
                  addToFavorites({
                    userId: user?.id,
                    restaurantId: restaurant?.id,
                  });
                }}
                className="add-to-favorite"
              >
                ⭐Add to favorites
              </button>
            )}
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
