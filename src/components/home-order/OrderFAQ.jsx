const OrderFAQ = () => (
  <section className="order-faq" role="region" aria-labelledby="faq-title">
    <div className="order-container">
      <header className="section-header center">
        <h3 id="faq-title" className="section-title">
          Frequently Asked
        </h3>
        <p className="section-subtitle">Helpful details before you order</p>
      </header>

      <div className="faq-grid" role="list">
        <article className="faq-item" role="listitem">
          <h4 className="faq-q">Can I schedule an order?</h4>
          <p className="faq-a">
            Yes. Choose a later time at checkout. We will start cooking so it
            arrives close to your slot.
          </p>
        </article>

        <article className="faq-item" role="listitem">
          <h4 className="faq-q">How are allergies handled?</h4>
          <p className="faq-a">
            Add allergy notes in your order. We prepare items separately when
            possible and label the package clearly.
          </p>
        </article>

        <article className="faq-item" role="listitem">
          <h4 className="faq-q">Do you deliver drinks and desserts?</h4>
          <p className="faq-a">
            Absolutely. Chilled drinks are sealed, and desserts are packaged to
            keep their shape.
          </p>
        </article>

        <article className="faq-item" role="listitem">
          <h4 className="faq-q">What if something is missing?</h4>
          <p className="faq-a">
            Contact us right away with your order number. We will fix it quickly
            or refund the item.
          </p>
        </article>
      </div>
    </div>
  </section>
);

export default OrderFAQ;
