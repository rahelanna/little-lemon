import Booking from "./Booking";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

// Mock child components
vi.mock("../components/booking/BookingHero", () => ({
  default: () => <div data-testid="mock-booking-hero" />,
}));

vi.mock("../components/booking/BookingForm", () => ({
  default: () => <div data-testid="mock-booking-form" />,
}));

describe("Booking component", () => {
  it("renders without crashing", () => {
    render(<Booking />);
    expect(true).toBe(true);
  });

  it("renders main element with correct role and aria-label", () => {
    render(<Booking />);
    const main = screen.getByRole("booking-page", {
      name: /booking main content/i,
    });
    expect(main).toBeInTheDocument();
  });

  it("renders BookingHero and BookingForm components", () => {
    render(<Booking />);
    expect(screen.getByTestId("mock-booking-hero")).toBeInTheDocument();
    expect(screen.getByTestId("mock-booking-form")).toBeInTheDocument();
  });
});
