import { User } from "../../App";

export type Props = {
  setModal: (value: string) => void;
  setUser: (value: User | null) => void;
};

type Data = {
  email: string;
  password: string;
};
function LogIn({ setModal, setUser }: Props) {
  function signIn(data: Data) {
    fetch(`http://localhost:8000/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data.user);
        localStorage.setItem("token", data.token);
        setTimeout(() => {
          setModal("");
        }, 1000);
      });
  }
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
          <span>X</span>
        </div>
        <h3>Log in</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            //@ts-ignore
            const email: string = e.target.email.value;
            //@ts-ignore
            const password: string = e.target.password.value;
            const data = {
              email: email,
              password: password,
            };
            signIn(data);
          }}
        >
          <input type="email" placeholder="Email: " name="email" required />
          <input
            type="password"
            placeholder="Password: "
            name="password"
            required
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}
export default LogIn;
