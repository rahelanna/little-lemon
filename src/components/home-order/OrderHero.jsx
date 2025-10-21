const OrderHero = () => (
  <section
    className="order-hero"
    role="region"
    aria-labelledby="order-hero-title"
  >
    <div className="order-container">
      <div className="order-hero-content">
        <h1 id="order-hero-title" className="order-title">
          Home Delivery
        </h1>
        <h2 className="order-subtitle">Fresh. Fast. From Our Kitchen.</h2>
        <p className="order-lead">
          Order Mediterranean comfort food to your door. Simple steps, flexible
          payment, and friendly couriers.
        </p>
        <a
          className="order-cta"
          href="/booking"
          aria-label="Go to booking page instead of ordering delivery"
        >
          Reserve A Table Instead
        </a>
      </div>
      <div
        className="order-hero-image"
        role="img"
        aria-label="Courier delivering Little Lemon order"
      >
        <img
          src="/assets/courier.webp"
          alt="Courier delivering Little Lemon order"
        />
      </div>
    </div>
  </section>
);

export default OrderHero;
