import { Link, useLocation, useNavigate } from "react-router-dom";

const NavLink = ({ href, title, onClick, className, children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (!href.startsWith("#")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (onClick) onClick();
      return;
    }

    e.preventDefault();
    const targetId = href.replace("#", "");

    if (location.pathname === "/" || location.pathname === "/home") {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { replace: false });

      setTimeout(() => {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }

    if (onClick) onClick();
  };

  if (href.startsWith("#")) {
    return (
      <a href={href} onClick={handleClick} className={className}>
        {title}
      </a>
    );
  }

  return (
    <Link
      to={href}
      onClick={(e) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (onClick) onClick(e);
      }}
      className={className}
    >
      {children ? children : title}
    </Link>
  );
};

export default NavLink;
