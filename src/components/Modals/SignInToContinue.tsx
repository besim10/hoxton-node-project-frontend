type SetModal = {
  setModal: (value: string) => void;
};
function SignInToContinue({ setModal }: SetModal) {
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
        <h3>Please sign in to Book</h3>
      </div>
    </div>
  );
}
export default SignInToContinue;
