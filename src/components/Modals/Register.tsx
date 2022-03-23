import { Props } from "./LogIn";

function Register({ setModal, setUser }: Props) {
  //@ts-ignore
  const handleSubmit = (e) => {
    e.preventDefault();

    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const phoneNumber = e.target.phoneNumber.value;

    fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, email, password, phoneNumber }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) alert(data.error);
        else {
          localStorage.token = data.token;
          setUser(data.user);
          setTimeout(() => {
            setModal("");
          }, 1000);
        }
      });
  };
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
        <span
          onClick={() => {
            setModal("");
          }}
        >
          X
        </span>
        <h3>Register</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name: "
            name="fullName"
            required
          />
          <input type="email" placeholder="Email: " name="email" required />
          <input
            type="password"
            placeholder="Password: "
            name="password"
            required
          />
          <input
            type="phone"
            placeholder="Phone Number: "
            name="phoneNumber"
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
export default Register;
