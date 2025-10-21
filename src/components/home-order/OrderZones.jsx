const OrderZones = () => (
  <section className="order-zones" role="region" aria-labelledby="zones-title">
    <div className="order-container zones-layout">
      <header className="section-header">
        <h3 id="zones-title" className="section-title">
          Delivery Zones & Fees
        </h3>
        <p className="section-subtitle">
          Transparent pricing based on distance from our Chicago location
        </p>
      </header>

      <div className="zones-grid" role="list">
        <article className="zone-card" role="listitem">
          <h4 className="zone-title">Zone A - Nearby</h4>
          <p className="zone-fee">$2.50 fee, ~20-30 min</p>
          <p className="zone-text">
            Ideal if you are within 2 miles. Fastest service time windows.
          </p>
        </article>

        <article className="zone-card" role="listitem">
          <h4 className="zone-title">Zone B - Medium</h4>
          <p className="zone-fee">$4.00 fee, ~30-45 min</p>
          <p className="zone-text">
            For addresses 2-5 miles away. Most neighborhoods are here.
          </p>
        </article>

        <article className="zone-card" role="listitem">
          <h4 className="zone-title">Zone C - Extended</h4>
          <p className="zone-fee">$6.00 fee, ~45-60 min</p>
          <p className="zone-text">
            Longer routes beyond 5 miles. Times may vary during rush hours.
          </p>
        </article>
      </div>

      <p className="zones-note">
        Times are estimates and may shift due to traffic or weather. We will
        notify you in real time if anything changes.
      </p>
    </div>
  </section>
);

export default OrderZones;
