import { User } from "../App";

type Props = {
  user: User | null;
  setUser: (value: User) => void;
};

function Reservation({ user, setUser }: Props) {
  function cancelReservation(id: number) {
    fetch(`http://localhost:8000/reservation/${id}`, {
      method: "DELETE",
      headers: {
        authorization: localStorage.token,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) alert(data.error);
        else {
          setUser(data);
        }
      });
  }
  if (user?.reservations.length === 0)
    return (
      <main>
        <h3 className="No-favorite-and-reservation-message">
          You don't have any reservation yet..{" "}
        </h3>
      </main>
    );
  return (
    <main>
      <ul className="reservation-list">
        <h3>My reservations: </h3>
        {user?.reservations.map((reservation, index) => (
          <li key={index} className="reservation-list__item">
            <div className="reservation-list__item-photo">
              <img src={`${reservation.restaurant.thumnail}`} />
            </div>
            <p>
              Name: <span>{reservation.restaurant.name}</span>
            </p>
            <p>
              Guests:
              <span>{reservation.persons}</span>
            </p>
            <p>
              Date and Time:
              <span>{reservation.dateAndTime}</span>
            </p>
            <p>
              Location:
              <span>{reservation.restaurant.location}</span>
            </p>
            <p>
              Address:
              <span>{reservation.restaurant.address}</span>
            </p>
            <p>
              Email Address:
              <span>{reservation.restaurant.email}</span>
            </p>
            <p>
              Phone Number:
              <span>{reservation.restaurant.phoneNumber}</span>
            </p>
            <button
              onClick={() => {
                cancelReservation(reservation.id);
              }}
              className="cancel_button_reservation"
            >
              CANCEL
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
export default Reservation;
