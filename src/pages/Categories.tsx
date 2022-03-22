import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Category } from "./Home";

function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    fetch(`http://localhost:8000/categories`)
      .then((resp) => resp.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <main className="categories-main">
      <ul className="category-list">
        {categories.map((category, index) => (
          <Link
            to={`/categories/${category.name}`}
            className="category-list__item"
            key={index}
          >
            <li>{category.name}</li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
export default Categories;
