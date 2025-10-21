import ReservationForm from "../components/reservation/ReservationForm";
import ReservationHero from "../components/reservation/ReservationHero";
import "../components/reservation/Reservation.css";

const Reservation = () => {
  return (
    <main role="reservation-page" aria-label="Reservation main content">
      <ReservationHero />
      <ReservationForm />
    </main>
  );
};

export default Reservation;
