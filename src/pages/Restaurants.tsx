import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import RestaurantList from "../components/RestaurantsList";

export type Category = {
  id: Number;
  name: String;
};
export type Photo = {
  id: Number;
  image: String;
  restaurantId: Number;
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
  photos: Photo[];
};
function Home() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  useEffect(() => {
    fetch(`http://localhost:8000/restaurants`)
      .then((resp) => resp.json())
      .then((data) => setRestaurants(data));
  }, []);
  if (restaurants.length === 0)
    return (
      <h1 className="spinner">
        <CircularProgress disableShrink />
      </h1>
    );
  return (
    <main>
      <RestaurantList restaurants={restaurants} />
    </main>
  );
}
export default Home;
