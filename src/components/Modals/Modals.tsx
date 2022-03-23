import { User } from "../../App";
import LogIn from "./LogIn";
import Register from "./Register";
type Props = {
  setModal: (value: string) => void;
  setUser: (value: User | null) => void;
  modal: string;
};
function Modals({ setModal, modal, setUser }: Props) {
  switch (modal) {
    case "sign-in":
      return <LogIn setModal={setModal} setUser={setUser} />;
    case "register":
      return <Register setModal={setModal} setUser={setUser} />;
    default:
      return null;
  }
}
export default Modals;
