import Reservation from "./Reservation";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

// Mock child components
vi.mock("../components/reservation/ReservationHero", () => ({
  default: () => <div data-testid="mock-reservation-hero" />,
}));

vi.mock("../components/reservation/ReservationForm", () => ({
  default: () => <div data-testid="mock-reservation-form" />,
}));

describe("Reservation component", () => {
  it("renders without crashing", () => {
    render(<Reservation />);
    expect(true).toBe(true);
  });

  it("renders main element with correct role and aria-label", () => {
    render(<Reservation />);
    const main = screen.getByRole("reservation-page", {
      name: /reservation main content/i,
    });
    expect(main).toBeInTheDocument();
  });

  it("renders ReservationHero and ReservationForm components", () => {
    render(<Reservation />);
    expect(screen.getByTestId("mock-reservation-hero")).toBeInTheDocument();
    expect(screen.getByTestId("mock-reservation-form")).toBeInTheDocument();
  });
});
