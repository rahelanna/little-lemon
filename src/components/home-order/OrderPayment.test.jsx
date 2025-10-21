import OrderPayment from "./OrderPayment.jsx";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("OrderPayment component", () => {
  it("renders section title and subtitle", () => {
    render(<OrderPayment />);

    expect(
      screen.getByRole("heading", { level: 3, name: /payment methods/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/secure, flexible options at your door or online/i)
    ).toBeInTheDocument();
  });

  it("renders all payment options with images and descriptions", () => {
    render(<OrderPayment />);

    const methods = [
      /credit\/debit cards/i,
      /contactless/i,
      /cash on delivery/i,
    ];

    methods.forEach((method) => {
      expect(
        screen.getByRole("heading", { level: 4, name: method })
      ).toBeInTheDocument();
    });

    // Simply ensure at least 3 items exist (not exact number)
    const items = screen.getAllByRole("listitem");
    expect(items.length).toBeGreaterThanOrEqual(3);

    expect(screen.getByAltText(/credit and debit cards/i)).toBeInTheDocument();
    expect(
      screen.getByAltText(/contactless payment terminal/i)
    ).toBeInTheDocument();
    expect(screen.getByAltText(/cash on delivery/i)).toBeInTheDocument();
  });

  it("renders payment notes", () => {
    render(<OrderPayment />);
    expect(screen.getByText(/all prices include taxes/i)).toBeInTheDocument();
    expect(
      screen.getByText(/for large orders or corporate invoices/i)
    ).toBeInTheDocument();
  });

  it("has region and multiple lists", () => {
    render(<OrderPayment />);
    expect(
      screen.getByRole("region", { name: /payment methods/i })
    ).toBeInTheDocument();

    // Ensure there are at least two lists (grid + notes)
    const lists = screen.getAllByRole("list");
    expect(lists.length).toBeGreaterThanOrEqual(2);
  });
});
