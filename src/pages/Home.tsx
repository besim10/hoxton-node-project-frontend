import { useEffect, useState } from "react";

type Category = {
  id: Number;
  name: String;
};
type Restaurant = {
  id: Number;
  name: String;
  thumnail: String;
  description: String;
  location: String;
  categoryId: Number;
  address: String;
  website: String;
  email: String;
  phoneNumber: String;
  category: Category;
};
function Home() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  useEffect(() => {
    fetch(`http://localhost:8000/restaurants`)
      .then((resp) => resp.json())
      .then((data) => setRestaurants(data));
  }, []);
  if (restaurants.length === 0) return <h1>Loading</h1>;
  console.log(restaurants);
  return (
    <main>
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
    </main>
  );
}
export default Home;
