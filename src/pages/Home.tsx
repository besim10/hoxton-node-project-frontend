import { useEffect, useState } from "react";
import RestaurantList from "../components/RestaurantsList";

export type Category = {
  id: Number;
  name: String;
};
export type Restaurant = {
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
      <RestaurantList restaurants={restaurants} />
    </main>
  );
}
export default Home;
