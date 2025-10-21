const OrderSustain = () => (
  <section
    className="order-sustain"
    role="region"
    aria-labelledby="sustain-title"
  >
    <div className="order-container sustain-layout">
      <div
        className="sustain-media"
        role="img"
        aria-label="Eco-friendly packaging"
      >
        <img src="/assets/package.webp" alt="Eco-friendly packaging" />
      </div>

      <div className="sustain-content">
        <h3 id="sustain-title" className="section-title">
          Responsible Packaging
        </h3>
        <p className="sustain-text">
          We use recyclable packaging and paper-based cutlery on request. If you
          do not need napkins or cutlery, simply leave a note at checkout.
        </p>
        <ul className="sustain-list">
          <li>Recyclable containers and sleeves</li>
          <li>Optional cutlery by request</li>
          <li>Thermal bags for hot items</li>
        </ul>
      </div>
    </div>
  </section>
);

export default OrderSustain;
