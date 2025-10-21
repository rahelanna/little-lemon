import MenuItem from "./MenuItem";

const MenuSection = ({ title, items }) => {
  return (
    <section
      className="menu-section"
      role="region"
      aria-labelledby={`${title}-section-title`}
    >
      <div className="menu-container">
        <h2 id={`${title}-section-title`} className="menu-category">
          {title}
        </h2>
        <div
          className="menu-grid"
          role="list"
          aria-label={`${title} menu items list`}
        >
          {items.map((item, index) => (
            <div role="listitem" key={index}>
              <MenuItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
