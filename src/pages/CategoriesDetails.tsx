import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantList from "../components/RestaurantsList";
import { Restaurant } from "./Restaurants";

function CategoriesDetails() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const param = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/categories/${param.name}`)
      .then((resp) => resp.json())
      .then((data) => setRestaurants(data.restaurants));
  }, []);

  return (
    <main>
      <RestaurantList restaurants={restaurants} />;
    </main>
  );
}
export default CategoriesDetails;
