import { User } from "../../App";

type Props = {
  setModal: (value: string) => void;
  user: User | null;
};
function AlreadyBooked({ setModal, user }: Props) {
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
        <h2>Nope!❌</h2>
        <h4>You had already booked this restaurant!</h4>
        <button
          onClick={() => {
            setModal("");
          }}
          className="confirm-button"
        >
          OK
        </button>
      </div>
    </div>
  );
}
export default AlreadyBooked;
