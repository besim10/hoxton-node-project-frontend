import { Link, NavLink } from "react-router-dom";
import { User } from "../App";
import { useNavigate } from "react-router-dom";

type Props = {
  setModal: (value: string) => void;
  user: User | null;
  setUser: (value: null) => void;
};
function Header({ setModal, user, setUser }: Props) {
  const navigate = useNavigate();
  function checkForValue(value: string) {
    if (value === "sign-out") {
      setUser(null);
      localStorage.clear();
      navigate("restaurants");
    } else if (value === "reservations") navigate("my-reservations");
    else if (value === "favorites") navigate("my-favorite-restaurants");
    else {
      navigate("restaurants");
    }
  }
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
          {user === null ? (
            <li onClick={() => setModal("sign-in")} className="header-signin">
              Sign In
            </li>
          ) : null}
          {user === null ? (
            <li onClick={() => setModal("register")} className="header-signin">
              Register
            </li>
          ) : (
            <select
              defaultValue={""}
              onChange={(e) => {
                checkForValue(e.target.value);
              }}
            >
              <option value="">{user.fullName}</option>
              <option value={"reservations"}>My reservation</option>
              <option value={"favorites"}>My fav restaurants</option>
              <option value={"sign-out"}>Log out</option>
            </select>
          )}
        </ul>
      </header>
    </div>
  );
}
export default Header;
