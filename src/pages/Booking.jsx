import BookingForm from "../components/booking/BookingForm";
import BookingHero from "../components/booking/BookingHero";
import "../components/booking/Booking.css";

const Booking = () => {
  return (
    <main role="booking-page" aria-label="Booking main content">
      <BookingHero />
      <BookingForm />
    </main>
  );
};

export default Booking;
