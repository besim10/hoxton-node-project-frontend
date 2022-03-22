import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="header">
        <h1 className="header-logo">
          <Link to="/home">Albania & Kosovo Restaurants</Link>
        </h1>
        <ul className="header-ul">
          <li className="header-home">
            <NavLink to="/restaurants">Home</NavLink>
          </li>
          <li className="header-categories">
            <NavLink to="/categories">Categories</NavLink>
          </li>
          <li className="header-alb__rest">
            <NavLink to="/albanian-restaurants">Albanian Restaurants</NavLink>
          </li>
          <li className="header-kos__rest">
            <NavLink to="/kosovo-restaurants">Kosovo Restaurants</NavLink>
          </li>
          <li className="header-signin">Sign In</li>
          <li className="header-signin">Register</li>
        </ul>
      </header>
    </div>
  );
}
export default Header;
