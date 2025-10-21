const MenuItem = ({ name, description, price, image }) => {
  return (
    <article
      className="menu-item"
      role="group"
      aria-labelledby={`${name}-title`}
      aria-describedby={`${name}-desc`}
    >
      {image && (
        <div
          className="menu-image"
          role="img"
          aria-label={`${name} dish image`}
        >
          <img src={image} alt={name} />
        </div>
      )}

      <div className="menu-info">
        <h3 id={`${name}-title`} className="dish-name">
          {name}
        </h3>
        <p id={`${name}-desc`} className="dish-desc">
          {description}
        </p>
      </div>

      <p className="dish-price" aria-label={`Price: ${price}`}>
        {price}
      </p>
    </article>
  );
};

export default MenuItem;
