import NavLink from "../common/NavLink";
import { Icon } from "@iconify/react";
import { links } from "../../data/links";
import { useState, useEffect, useContext, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDisableScroll } from "../../hooks/useDisableScroll";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Header.css";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [avatarMenu, setAvatarMenu] = useState(false);
  const avatarRef = useRef(null);

  useDisableScroll(isOpen);

  const toggleView = () => setIsOpen((prev) => !prev);
  const toggleAvatarMenu = () => setAvatarMenu((prev) => !prev);

  // ESC / outside click zárás
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setAvatarMenu(false);
      }
    };
    const handleClickOutside = (e) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target)) {
        setAvatarMenu(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="sticky glass-card">
        <div className="inner">
          <div className="row">
            <a href="/">
              <img src="/assets/logo-small.webp" alt="logo" className="logo" />
            </a>

            {/* Desktop links */}
            <div className="links">
              {links.map((link, index) => {
                const isLogin = link.title === "Login";
                return (
                  (!user || !isLogin) && (
                    <NavLink
                      key={index}
                      href={link.href}
                      title={link.title}
                      className={isLogin ? "login" : ""}
                    />
                  )
                );
              })}

              {/* Avatar (csak ha user van) */}
              {user && (
                <div ref={avatarRef} className="avatar-wrapper">
                  <img
                    src="/assets/avatar.webp"
                    alt="avatar"
                    className="avatar"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleAvatarMenu();
                    }}
                  />

                  {avatarMenu && (
                    <div className="avatar-menu">
                      <button onClick={logout} className="signout-btn">
                        <Icon icon="mdi:logout" />
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile hamburger */}
            <div className="menu-button">
              <Icon
                icon={
                  isOpen
                    ? "line-md:close"
                    : "streamline-ultimate:navigation-menu-bold"
                }
                color="black"
                onClick={toggleView}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              className="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Side menu */}
            <motion.div
              key="menu"
              className="side-menu glass-card"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="close-button"
              >
                <Icon
                  icon="line-md:close-small"
                  width="60"
                  height="60"
                  color="black"
                  onClick={toggleView}
                />
              </motion.div>

              {links.map((link, index) => {
                const isLogin = link.title === "Login";
                if (user && isLogin) return null;
                return (
                  <NavLink
                    key={index}
                    href={link.href}
                    title={link.title}
                    onClick={() => setIsOpen(false)}
                  />
                );
              })}

              {user && (
                <span
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="mobile-signout"
                >
                  <Icon icon="mdi:logout" />
                  Sign out
                </span>
              )}

              <Link to="/">
                <img
                  src="/assets/logo-big-transparent.webp"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
