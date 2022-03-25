type SetModal = {
  setModal: (value: string) => void;
};
function SignInToAddToFavorites({ setModal }: SetModal) {
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
        <h3>Please sign in to Add to Favorites!</h3>
      </div>
    </div>
  );
}
export default SignInToAddToFavorites;
