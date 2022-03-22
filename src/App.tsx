import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AlbanianRestaurants from "./pages/AlbanianRestaurants";
import Header from "./components/Header";
import KosovoRestaurants from "./pages/KosovoRestaurants";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/albanian-restaurants" element={<AlbanianRestaurants />} />
        <Route path="/kosovo-restaurants" element={<KosovoRestaurants />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
