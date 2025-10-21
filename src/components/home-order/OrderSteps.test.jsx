import OrderSteps from "./OrderSteps.jsx";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { orderSteps } from "../../data/order-steps";

describe("OrderSteps component", () => {
  it("renders section title and subtitle", () => {
    render(<OrderSteps />);
    expect(
      screen.getByRole("heading", { level: 3, name: /how to order/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/three easy ways to get little lemon at home/i)
    ).toBeInTheDocument();
  });

  it("renders all steps from data", () => {
    render(<OrderSteps />);

    orderSteps.forEach((step) => {
      expect(
        screen.getByRole("heading", { level: 4, name: step.title })
      ).toBeInTheDocument();
      expect(screen.getByText(step.text)).toBeInTheDocument();
      expect(screen.getByAltText(step.alt)).toBeInTheDocument();
    });

    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(orderSteps.length);
  });

  it("has proper region and list roles", () => {
    render(<OrderSteps />);
    expect(
      screen.getByRole("region", { name: /how to order/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
