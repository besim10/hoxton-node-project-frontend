import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import RestaurantList from "../components/RestaurantsList";

export type Category = {
  id: number;
  name: string;
};
export type Photo = {
  id: number;
  image: string;
  restaurantId: number;
};
export type Restaurant = {
  id: number;
  name: string;
  thumnail: string;
  description: string;
  location: string;
  categoryId: number;
  address: string;
  website: string;
  email: string;
  phoneNumber: string;
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
