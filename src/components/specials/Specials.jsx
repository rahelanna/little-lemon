import SpecialCard from "../special-card/SpecialCard";
import NavLink from "../common/NavLink";
import { specials } from "../../data/specials";
import "./Specials.css";

const Specials = () => (
  <section
    className="specials"
    role="region"
    aria-labelledby="specials-title"
    aria-describedby="specials-desc"
  >
    <div className="specials-container">
      <div className="specials-header">
        <h2 className="specials-title" id="specials-title">
          This week specials!
        </h2>
        <NavLink
          href="/online-menu"
          title="Online Menu"
          className="online-menu-btn"
        />
      </div>
      <div
        className="specials-grid"
        role="list"
        aria-label="Weekly special dishes list"
      >
        {specials.map((special) => (
          <SpecialCard key={special.id} {...special} />
        ))}
      </div>
    </div>
  </section>
);

export default Specials;
