import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import RestaurantList from "../components/RestaurantsList";
import Search from "../components/Search";

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
type Props = {
  setSearch: (value: string) => void;
  search: string;
};
function Restaurants({ setSearch, search }: Props) {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  useEffect(() => {
    fetch(`http://localhost:8000/restaurants`)
      .then((resp) => resp.json())
      .then((data) => setRestaurants(data));
  }, []);
  const restaurantsToDisplay = () => {
    let updatedRestaurants = [...restaurants];
    updatedRestaurants = updatedRestaurants.filter((restaurant) =>
      restaurant.name.toUpperCase().includes(search.toUpperCase())
    );
    return updatedRestaurants;
  };
  if (restaurants.length === 0)
    return (
      <h1 className="spinner">
        <CircularProgress disableShrink />
      </h1>
    );
  return (
    <main className="homeMain">
      <Search setSearch={setSearch} />
      {search !== "" ? (
        <p className="search-result">
          Founded <span>{restaurantsToDisplay().length} restaurants</span> with
          search matching: <span>"{search}"</span>
        </p>
      ) : null}
      <RestaurantList restaurants={restaurantsToDisplay()} />
    </main>
  );
}
export default Restaurants;
