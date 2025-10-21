import SignupHero from "./SignupHero.jsx";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("SignupHero component", () => {
  it("renders heading and paragraph correctly", () => {
    render(<SignupHero />);

    expect(
      screen.getByRole("heading", { name: /Create Account/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Sign up to start your Little Lemon journey/i)
    ).toBeInTheDocument();
  });

  it("has correct accessibility roles and attributes", () => {
    render(<SignupHero />);

    const section = screen.getByRole("region");
    expect(section).toHaveAttribute("aria-labelledby", "signup-hero-title");

    const heading = screen.getByRole("heading", { name: /Create Account/i });
    expect(heading).toHaveAttribute("id", "signup-hero-title");
  });
});
