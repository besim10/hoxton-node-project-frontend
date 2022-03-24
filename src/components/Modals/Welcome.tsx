import { User } from "../../App";

type Props = {
  setModal: (value: string) => void;
  user: User | null;
};
function Welcome({ setModal, user }: Props) {
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
        <h3>Welcome back, {user?.fullName}!</h3>
      </div>
    </div>
  );
}
export default Welcome;
