import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AlbanianRestaurants from "./pages/AlbanianRestaurants";
import Header from "./components/Header";
import KosovoRestaurants from "./pages/KosovoRestaurants";
import Categories from "./pages/Categories";
import PageNotFound from "./pages/PageNotFound";
import CategoriesDetails from "./pages/CategoriesDetails";
import Restaurants from "./pages/Restaurants";
import RestaurantDetail from "./pages/RestaurantDetail";
import Modals from "./components/Modals/Modals";
import Reservation from "./pages/Reservation";
import FavoriteRestaurants from "./pages/FavoriteRestaurants";

export type Reservation = {
  id: number;
  userId: number;
  restaurantId: number;
  persons: number;
  dateAndTime: string;
};
export type FavoriteRestaurant = {
  id: number;
  userId: number;
  restaurantId: number;
};
export type User = {
  id: number;
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  reservations: Reservation[];
  favoriteRestaurants: FavoriteRestaurant[];
};
function App() {
  const [modal, setModal] = useState("");
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    if (localStorage.token)
      fetch("http://localhost:8000/validate", {
        headers: {
          Authorization: localStorage.token,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) console.log(data);
          else {
            setUser(data);
          }
        });
  }, []);
  return (
    <div className="App">
      <Modals setModal={setModal} modal={modal} setUser={setUser} />
      <Header setModal={setModal} user={user} setUser={setUser} />
      <Routes>
        <Route index element={<Navigate to="/restaurants" />} />
        <Route path="/" element={<Navigate to="/restaurants" />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/:name" element={<RestaurantDetail />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:name" element={<CategoriesDetails />} />
        <Route path="/albanian-restaurants" element={<AlbanianRestaurants />} />
        <Route path="/kosovo-restaurants" element={<KosovoRestaurants />} />
        <Route path="/my-reservations" element={<Reservation user={user} />} />
        <Route
          path="/my-favorite-restaurants"
          element={<FavoriteRestaurants />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
