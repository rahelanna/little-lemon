import "./About.css";

const About = () => (
  <section
    id="about"
    className="about"
    aria-labelledby="about-title"
    aria-describedby="about-description"
    role="region"
    tabIndex="0"
  >
    <div className="about-container">
      <div className="about-content">
        <h2 id="about-title" className="about-title">
          Little Lemon
        </h2>
        <h3 className="about-subtitle">Chicago</h3>

        <div className="about-hours" role="group" aria-labelledby="hours-title">
          <p id="hours-title" className="hours-title">
            Opening hours:
          </p>
          <p className="hours-text">Weekdays: 9.30am - 9.30pm</p>
          <p className="hours-text">Weekends: 9am - 8.30pm</p>
        </div>

        <p id="about-description" className="about-description">
          Our menu is inspired by the flavors of the Mediterranean, with a focus
          on healthy and wholesome ingredients. Whether you're in the mood for a
          hearty meal or a light snack, we've got something for everyone at
          Little Lemon
        </p>
      </div>

      <div
        className="about-images"
        role="group"
        aria-label="Restaurant staff and chefs"
      >
        <img
          className="about-image-top"
          src="/assets/staff-1.webp"
          alt="Chef cooking"
          tabIndex="0"
        />
        <img
          className="about-image-bottom"
          src="/assets/staff-2.webp"
          alt="Restaurant staff preparing dishes"
          tabIndex="0"
        />
      </div>
    </div>
  </section>
);

export default About;
