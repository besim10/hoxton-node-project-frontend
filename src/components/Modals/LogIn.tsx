import { useState } from "react";
import { User } from "../../App";
import { Restaurant } from "../../pages/Restaurants";

export type Props = {
  setModal: (value: string) => void;
  setUser: (value: User | null) => void;
};

type Data = {
  email: string;
  password: string;
};
type Error = {
  error: string;
};
function LogIn({ setModal, setUser }: Props) {
  const [error, setError] = useState<Error | null>(null);
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
        if (data.user) {
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setModal("Welcome");
          setTimeout(() => {
            setModal("");
          }, 1500);
        } else {
          setError(data);
        }
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
          <button className="close-btn">X</button>
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
          {error !== null ? (
            <p className="modals-error">{error?.error}</p>
          ) : null}
          <button type="submit">Log In</button>
        </form>
        <p>
          Not a member yet?
          <span
            onClick={() => {
              setModal("register");
            }}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
export default LogIn;
