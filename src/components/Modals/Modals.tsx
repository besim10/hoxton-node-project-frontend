import { User } from "../../App";
import { Restaurant } from "../../pages/Restaurants";
import BookingSuccesfully from "./BookingSuccesfully";
import AlreadyBooked from "./AlreadyBooked";
import Book from "./Book";
import LogIn from "./LogIn";
import NewUser from "./NewUser";
import Register from "./Register";
import SignInToContinue from "./SignInToContinue";
import Welcome from "./Welcome";
import SignInToAddToFavorites from "./SignInToAddToFavorites";
type Props = {
  setModal: (value: string) => void;
  setUser: (value: User | null) => void;
  modal: string;
  user: User | null;
  restaurant: Restaurant | null;
};
function Modals({ setModal, modal, setUser, restaurant, user }: Props) {
  switch (modal) {
    case "sign-in":
      return <LogIn setModal={setModal} setUser={setUser} />;
    case "register":
      return <Register setModal={setModal} setUser={setUser} />;
    case "please-sign-in":
      return <SignInToContinue setModal={setModal} />;
    case "Welcome":
      return <Welcome setModal={setModal} user={user} />;
    case "new-user":
      return <NewUser setModal={setModal} user={user} />;
    case "booking-success":
      return <BookingSuccesfully setModal={setModal} user={user} />;
    case "already-booked":
      return <AlreadyBooked setModal={setModal} user={user} />;
    case "sign-in-to-favorite":
      return <SignInToAddToFavorites setModal={setModal} />;

    case "book":
      return (
        <Book
          restaurant={restaurant}
          user={user}
          setModal={setModal}
          setUser={setUser}
        />
      );
    default:
      return null;
  }
}
export default Modals;
