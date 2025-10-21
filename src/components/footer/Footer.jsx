import { Icon } from "@iconify/react";
import "./Footer.css";

const Footer = () => (
  <footer
    className="footer"
    role="contentinfo"
    aria-label="Website footer with contact and social media information"
  >
    <div className="footer-container">
      <div
        className="footer-logo"
        role="img"
        aria-label="Little Lemon restaurant logo"
      >
        <img
          src="/assets/logo-big-transparent.webp"
          alt="Little Lemon logo"
          tabIndex="0"
        />
      </div>

      <div
        className="footer-section"
        role="region"
        aria-labelledby="footer-contact-title"
      >
        <h4 id="footer-contact-title" className="footer-title">
          Contact Us
        </h4>

        <address
          className="footer-contact"
          aria-label="Contact information for Little Lemon restaurant"
        >
          <div
            className="contact-item"
            role="group"
            aria-label="Restaurant address"
          >
            <Icon
              icon="mdi:map-marker"
              width="24"
              height="24"
              aria-hidden="true"
            />
            <span tabIndex="0">
              813 S Western Ave, Chicago,
              <br />
              IL 60612-4170
            </span>
          </div>

          <div
            className="contact-item"
            role="group"
            aria-label="Restaurant phone number"
          >
            <Icon icon="mdi:phone" width="24" height="24" aria-hidden="true" />
            <a
              href="tel:+17758637196"
              className="footer-link"
              tabIndex="0"
              aria-label="Call Little Lemon restaurant at plus one seven seven five eight six three seven one nine six"
            >
              +1 (775) 863-7196
            </a>
          </div>

          <div
            className="contact-item"
            role="group"
            aria-label="Restaurant email address"
          >
            <Icon icon="mdi:email" width="24" height="24" aria-hidden="true" />
            <a
              href="mailto:littlelemon@gmail.com"
              className="footer-link"
              tabIndex="0"
              aria-label="Send email to littlelemon@gmail.com"
            >
              littlelemon@gmail.com
            </a>
          </div>
        </address>
      </div>

      <div
        className="footer-section"
        role="region"
        aria-labelledby="footer-social-title"
      >
        <h4 id="footer-social-title" className="footer-title">
          Find Us On
        </h4>

        <nav
          className="footer-social"
          aria-label="Little Lemon social media links"
        >
          <div className="social-item">
            <Icon
              icon="mdi:facebook"
              width="24"
              height="24"
              aria-hidden="true"
            />
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Little Lemon Facebook page"
              tabIndex="0"
            >
              Little Lemon
            </a>
          </div>

          <div className="social-item">
            <Icon
              icon="mdi:twitter"
              width="24"
              height="24"
              aria-hidden="true"
            />
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Little Lemon Twitter profile"
              tabIndex="0"
            >
              Little Lemon Chicago
            </a>
          </div>

          <div className="social-item">
            <Icon
              icon="mdi:instagram"
              width="24"
              height="24"
              aria-hidden="true"
            />
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Little Lemon Instagram page"
              tabIndex="0"
            >
              @littlelemon
            </a>
          </div>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
