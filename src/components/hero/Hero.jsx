import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section
      className="hero"
      aria-labelledby="hero-title"
      aria-describedby="hero-description"
      role="region"
    >
      <div className="hero-container">
        <div className="hero-content">
          <h1 id="hero-title" className="hero-title">
            Little Lemon
          </h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <p id="hero-description" className="hero-description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist
          </p>
          <Link
            to="/booking"
            className="reserve-btn"
            aria-label="Reserve a table at Little Lemon restaurant"
          >
            Reserve A Table
          </Link>
        </div>
        <div
          className="hero-image"
          role="img"
          aria-label="Little Lemon restaurant staff group photo"
        >
          <img src="/assets/hero.webp" alt="Little Lemon staff" />
        </div>
      </div>
    </section>
  );
}
