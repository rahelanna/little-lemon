import HomeOrder from "./HomeOrder";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

// Mock child components
vi.mock("../components/home-order/OrderHero", () => ({
  default: () => <div data-testid="mock-order-hero" />,
}));
vi.mock("../components/home-order/OrderSteps", () => ({
  default: () => <div data-testid="mock-order-steps" />,
}));
vi.mock("../components/home-order/OrderPayment", () => ({
  default: () => <div data-testid="mock-order-payment" />,
}));
vi.mock("../components/home-order/OrderZones", () => ({
  default: () => <div data-testid="mock-order-zones" />,
}));
vi.mock("../components/home-order/OrderSustain", () => ({
  default: () => <div data-testid="mock-order-sustain" />,
}));
vi.mock("../components/home-order/OrderFAQ", () => ({
  default: () => <div data-testid="mock-order-faq" />,
}));

describe("HomeOrder component", () => {
  it("renders without crashing", () => {
    render(<HomeOrder />);
    expect(true).toBe(true);
  });

  it("renders main element with correct role and aria-label", () => {
    render(<HomeOrder />);
    const main = screen.getByRole("order-page", {
      name: /home delivery information/i,
    });
    expect(main).toBeInTheDocument();
  });

  it("renders all child components", () => {
    render(<HomeOrder />);
    expect(screen.getByTestId("mock-order-hero")).toBeInTheDocument();
    expect(screen.getByTestId("mock-order-steps")).toBeInTheDocument();
    expect(screen.getByTestId("mock-order-payment")).toBeInTheDocument();
    expect(screen.getByTestId("mock-order-zones")).toBeInTheDocument();
    expect(screen.getByTestId("mock-order-sustain")).toBeInTheDocument();
    expect(screen.getByTestId("mock-order-faq")).toBeInTheDocument();
  });
});
