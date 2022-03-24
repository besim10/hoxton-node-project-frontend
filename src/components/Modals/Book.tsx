import { useState } from "react";
import { useNavigate } from "react-router";
import { User } from "../../App";
import { Restaurant } from "../../pages/Restaurants";
type Props = {
  setModal: (value: string) => void;
  setUser: (value: User | null) => void;
  restaurant: Restaurant | null;
  user: User | null;
};
type Reservation = {
  userId: number;
  restaurantId: number;
  persons: number;
  dateAndTime: string;
};
function Book({ setModal, setUser, restaurant, user }: Props) {
  const navigate = useNavigate();

  const makeReservation = (data: Reservation) => {
    fetch(`http://localhost:8000/reservation`, {
      method: "POST",
      headers: {
        Authorization: localStorage.token,
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) console.log(data.error);
        else {
          setUser(data);
          setModal("booking-success");
          navigate("my-reservations");
        }
      });
  };
  if (restaurant === null) return <h1>Loading...</h1>;
  if (user === null) return <h1>Loading...</h1>;

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
        <h3>Reservation</h3>
        <p>Request a reservation. We will come back to you shortly.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            //@ts-ignore
            const dateAndTime: string = e.target.dateAndTime.value;
            //@ts-ignore
            const guests: number = Number(e.target.guests.value);
            const data = {
              userId: user.id,
              restaurantId: restaurant.id,
              dateAndTime: dateAndTime,
              persons: guests,
            };
            makeReservation(data);
          }}
        >
          <label className="not-allowed">
            Restaurant:
            <input type="text" defaultValue={restaurant?.name} disabled />
          </label>
          <label className="not-allowed">
            Location:
            <input type="text" disabled defaultValue={restaurant?.location} />
          </label>
          <label>
            Date and time:
            <input type="datetime-local" name="dateAndTime" required />
          </label>

          <label>
            Guests:
            <input
              type="number"
              placeholder="1-9 "
              name="guests"
              min={1}
              max={9}
              required
            />
          </label>

          <button type="submit">BOOK</button>
        </form>
      </div>
    </div>
  );
}
export default Book;
