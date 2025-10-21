import ReservationHero from "./ReservationHero.jsx";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("ReservationHero component", () => {
  it("renders the title and subtitle", () => {
    render(<ReservationHero />);

    expect(
      screen.getByRole("heading", { name: /make a reservation/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /please fill in the form below to make a reservation at the little lemon chicago restaurant/i
      )
    ).toBeInTheDocument();
  });

  it("renders without crashing", () => {
    render(<ReservationHero />);
    expect(true).toBe(true);
  });
});
