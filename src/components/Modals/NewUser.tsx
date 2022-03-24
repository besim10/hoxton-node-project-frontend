import { User } from "../../App";

type Props = {
  setModal: (value: string) => void;
  user: User | null;
};
function NewUser({ setModal, user }: Props) {
  return (
    <div
      onClick={() => {
        setModal("");
      }}
      className="modal-wrapper"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal-container"
      >
        <div
          className="modal-close"
          onClick={() => {
            setModal("");
          }}
        >
          <button className="close-btn">X</button>
        </div>
        <h3>Welcome, {user?.fullName}!</h3>
        <h5>You're finally ready, have a look around!</h5>
      </div>
    </div>
  );
}
export default NewUser;
