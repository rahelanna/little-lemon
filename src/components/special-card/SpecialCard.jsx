import NavLink from "../common/NavLink";
import { Icon } from "@iconify/react";
import "./SpecialCard.css";

const SpecialCard = ({ name, price, description, image }) => (
  <div
    className="special-card"
    role="article"
    aria-labelledby={`${name}-title`}
    aria-describedby={`${name}-desc`}
  >
    <div className="card-image" aria-label={`${name} dish image`}>
      <img src={image || "/placeholder.svg"} alt={name} />
    </div>
    <div className="card-content">
      <div className="card-header">
        <h3 id={`${name}-title`} className="card-title">
          {name}
        </h3>
        <span className="card-price" aria-label={`Price ${price}`}>
          {price}
        </span>
      </div>
      <p id={`${name}-desc`} className="card-description">
        {description}
      </p>
      <NavLink
        href="/home-order"
        title="Order A Delivery"
        className="delivery-btn"
        aria-label={`Order a delivery of ${name}`}
      >
        <span>Order A Delivery</span>
        <Icon icon="streamline:transfer-motorcycle" width="20" height="20" />
      </NavLink>
    </div>
  </div>
);

export default SpecialCard;
