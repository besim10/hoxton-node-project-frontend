import { User } from "../App";

type Props = {
  user: User | null;
};

function Reservation({ user }: Props) {
  console.log(user?.reservations);
  return <div>Here are my reservation! </div>;
}
export default Reservation;
