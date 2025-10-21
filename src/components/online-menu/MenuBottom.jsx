import NavLink from "../common/NavLink";

const MenuBottom = () => (
  <section
    className="menu-bottom"
    role="region"
    aria-labelledby="menu-bottom-title"
  >
    <div className="menu-container">
      <div className="menu-actions" role="navigation" aria-label="Menu actions">
        <NavLink
          href="/home-order"
          title="Order Delivery"
          className="menu-btn"
          aria-label="Go to home delivery page"
        />
        <NavLink
          href="/booking"
          title="Reserve a Table"
          className="menu-btn secondary"
          aria-label="Go to table booking page"
        />
      </div>

      <div
        className="menu-notes"
        role="complementary"
        aria-labelledby="menu-bottom-title"
      >
        <div className="notes-icon">
          <img
            src="/assets/olive.webp"
            alt="Olive branch icon"
            aria-hidden="true"
          />
        </div>

        <div className="notes-content">
          <h3 id="menu-bottom-title">Freshness & Care</h3>
          <p>
            All dishes are prepared from scratch using premium local
            ingredients. Our olive oil is cold-pressed, and all sauces are made
            in-house daily.
          </p>
          <p>
            Please inform us of any allergies or dietary preferences before
            ordering. While we take great care, cross-contamination may occur in
            a shared kitchen.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default MenuBottom;
