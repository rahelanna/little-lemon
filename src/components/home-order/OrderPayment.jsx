const OrderPayment = () => (
  <section
    className="order-payment"
    role="region"
    aria-labelledby="payment-title"
  >
    <div className="order-container payment-layout">
      <header className="section-header">
        <h3 id="payment-title" className="section-title alt">
          Payment Methods
        </h3>
        <p className="section-subtitle alt">
          Secure, flexible options at your door or online
        </p>
      </header>

      <div className="payment-grid" role="list">
        <article className="payment-card" role="listitem">
          <div
            className="payment-media"
            role="img"
            aria-label="Credit and debit cards"
          >
            <img src="/assets/credit.webp" alt="Credit and debit cards" />
          </div>
          <h4 className="payment-title">Credit/Debit Cards</h4>
          <p className="payment-text">
            Pay online or at the door with major cards. Receipts are emailed
            automatically.
          </p>
        </article>

        <article className="payment-card" role="listitem">
          <div
            className="payment-media"
            role="img"
            aria-label="Contactless payment terminal"
          >
            <img src="/assets/online.webp" alt="Contactless payment terminal" />
          </div>
          <h4 className="payment-title">Contactless</h4>
          <p className="payment-text">
            Tap to pay with your phone or card. Fast and secure with end-to-end
            encryption.
          </p>
        </article>

        <article className="payment-card" role="listitem">
          <div
            className="payment-media"
            role="img"
            aria-label="Cash on delivery"
          >
            <img src="/assets/cash.webp" alt="Cash on delivery" />
          </div>
          <h4 className="payment-title">Cash On Delivery</h4>
          <p className="payment-text">
            Prefer cash? No problem. Our couriers carry change and provide a
            printed receipt.
          </p>
        </article>
      </div>

      <ul className="payment-notes">
        <li>All prices include taxes. Delivery fees calculated at checkout.</li>
        <li>
          For large orders or corporate invoices, please contact us ahead of
          time.
        </li>
      </ul>
    </div>
  </section>
);

export default OrderPayment;
