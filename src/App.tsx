import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AlbanianRestaurants from "./pages/AlbanianRestaurants";
import Header from "./components/Header";
import KosovoRestaurants from "./pages/KosovoRestaurants";
import Categories from "./pages/Categories";
import PageNotFound from "./pages/PageNotFound";
import CategoriesDetails from "./pages/CategoriesDetails";
import Restaurants from "./pages/Restaurants";
import RestaurantDetail from "./pages/RestaurantDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Navigate to="/restaurants" />} />
        <Route path="/" element={<Navigate to="/restaurants" />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/:name" element={<RestaurantDetail />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:name" element={<CategoriesDetails />} />
        <Route path="/albanian-restaurants" element={<AlbanianRestaurants />} />
        <Route path="/kosovo-restaurants" element={<KosovoRestaurants />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
