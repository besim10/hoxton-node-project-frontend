import { useEffect, useState } from "react";
import RestaurantList from "../components/RestaurantsList";
import { Restaurant } from "./Restaurants";

function KosovoRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  useEffect(() => {
    fetch(`http://localhost:8000/kosovo-restaurants`)
      .then((resp) => resp.json())
      .then((data) => setRestaurants(data));
  }, []);
  return (
    <main>
      <RestaurantList restaurants={restaurants} />
    </main>
  );
}
export default KosovoRestaurants;
