import { User } from "../App";

type Props = {
  user: User | null;
  setUser: (value: User) => void;
};
function FavoriteRestaurants({ user, setUser }: Props) {
  const removeFromFavorites = (favoriteRestaurant: number) => {
    fetch(`http://localhost:8000/favorites/${favoriteRestaurant}`, {
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
  if (user?.favoriteRestaurants.length === 0)
    return (
      <main>
        <h3 className="No-favorite-and-reservation-message">
          You don't have any favorite restaurant yet..{" "}
        </h3>
      </main>
    );
  return (
    <main>
      <ul className="reservation-list">
        <h3>My favorite restaurants: </h3>
        {user?.favoriteRestaurants.map((favoriteRestaurant, index) => (
          <li
            key={index}
            className="reservation-list__item favorite-list__item"
          >
            <div className="reservation-list__item-photo">
              <img src={`${favoriteRestaurant.restaurant.thumnail}`} />
            </div>
            <p>
              Name: <span>{favoriteRestaurant.restaurant.name}</span>
            </p>
            <p>
              Location:
              <span>{favoriteRestaurant.restaurant.location}</span>
            </p>
            <p>
              Address:
              <span>{favoriteRestaurant.restaurant.address}</span>
            </p>
            <p>
              Email Address:
              <span>{favoriteRestaurant.restaurant.email}</span>
            </p>
            <p>
              Phone Number:
              <span>{favoriteRestaurant.restaurant.phoneNumber}</span>
            </p>
            <button
              onClick={() => {
                removeFromFavorites(favoriteRestaurant.id);
              }}
              className="cancel_button_reservation"
            >
              REMOVE
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
export default FavoriteRestaurants;
