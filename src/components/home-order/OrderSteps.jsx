import { orderSteps } from "../../data/order-steps";

const OrderSteps = () => (
  <section
    className="order-steps"
    role="region"
    aria-labelledby="order-steps-title"
  >
    <div className="order-container">
      <header className="section-header">
        <h3 id="order-steps-title" className="section-title">
          How to Order
        </h3>
        <p className="section-subtitle">
          Three easy ways to get Little Lemon at home
        </p>
      </header>

      <div className="steps-grid" role="list">
        {orderSteps.map((step) => (
          <article key={step.id} className="step-card" role="listitem">
            <div className="step-media" role="img" aria-label={step.alt}>
              <img src={step.img} alt={step.alt} />
            </div>
            <div className="step-content">
              <p className="step-number">{String(step.id).padStart(2, "0")}</p>
              <h4 className="step-title">{step.title}</h4>
              <p className="step-text">{step.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default OrderSteps;
