import LoginHero from "./LoginHero.jsx";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("LoginHero component", () => {
  it("renders the heading and paragraph correctly", () => {
    render(<LoginHero />);

    expect(
      screen.getByRole("heading", { name: /Welcome Back/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Login to continue your Little Lemon experience/i)
    ).toBeInTheDocument();
  });

  it("has correct accessibility roles and attributes", () => {
    render(<LoginHero />);

    const section = screen.getByRole("region");
    expect(section).toHaveAttribute("aria-labelledby", "login-hero-title");

    const heading = screen.getByRole("heading", { name: /Welcome Back/i });
    expect(heading).toHaveAttribute("id", "login-hero-title");
  });
});
