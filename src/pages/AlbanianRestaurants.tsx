import { useEffect, useState } from "react";
import RestaurantList from "../components/RestaurantsList";
import { Restaurant } from "./Restaurants";

function AlbanianRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  useEffect(() => {
    fetch(`http://localhost:8000/albanian-restaurants`)
      .then((resp) => resp.json())
      .then((data) => setRestaurants(data));
  }, []);
  return (
    <main>
      <RestaurantList restaurants={restaurants} />
    </main>
  );
}
export default AlbanianRestaurants;
