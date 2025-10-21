import BookingHero from "./BookingHero.jsx";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("BookingHero component", () => {
  it("renders the title and subtitle", () => {
    render(<BookingHero />);

    expect(
      screen.getByRole("heading", { name: /make a booking/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /please fill in the form below to make a booking at the little lemon chicago restaurant/i
      )
    ).toBeInTheDocument();
  });

  it("renders without crashing", () => {
    render(<BookingHero />);
    expect(true).toBe(true);
  });
});
