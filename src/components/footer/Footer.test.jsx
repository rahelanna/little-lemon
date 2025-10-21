import Footer from "./Footer.jsx";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("Footer component", () => {
  it("renders the footer element with proper role", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveAttribute(
      "aria-label",
      expect.stringContaining("Website footer")
    );
  });

  it("renders logo, contact, and social sections", () => {
    render(<Footer />);

    expect(
      screen.getByRole("img", { name: /little lemon restaurant logo/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("region", { name: /contact us/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("region", { name: /find us on/i })
    ).toBeInTheDocument();
  });

  it("contains email and phone links", () => {
    render(<Footer />);

    const emailLink = screen.getByRole("link", {
      name: /send email to littlelemon@gmail.com/i,
    });
    const phoneLink = screen.getByRole("link", {
      name: /call little lemon restaurant/i,
    });

    expect(emailLink).toHaveAttribute("href", "mailto:littlelemon@gmail.com");
    expect(phoneLink).toHaveAttribute("href", "tel:+17758637196");
  });

  it("renders social media links", () => {
    render(<Footer />);

    expect(
      screen.getByRole("link", { name: /visit little lemon facebook page/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /visit little lemon twitter profile/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /visit little lemon instagram page/i })
    ).toBeInTheDocument();
  });
});
