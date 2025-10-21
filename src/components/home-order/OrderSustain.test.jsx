import OrderSustain from "./OrderSustain.jsx";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("OrderSustain component", () => {
  it("renders section title and main text", () => {
    render(<OrderSustain />);

    expect(
      screen.getByRole("heading", { level: 3, name: /responsible packaging/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /we use recyclable packaging and paper-based cutlery on request/i
      )
    ).toBeInTheDocument();
  });

  it("renders all list items", () => {
    render(<OrderSustain />);

    const listItems = [
      /recyclable containers and sleeves/i,
      /optional cutlery by request/i,
      /thermal bags for hot items/i,
    ];

    listItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });

    expect(screen.getAllByRole("listitem").length).toBe(3);
  });

  it("renders image with proper alt text", () => {
    render(<OrderSustain />);
    expect(screen.getByAltText(/eco-friendly packaging/i)).toBeInTheDocument();
  });

  it("has proper region and list roles", () => {
    render(<OrderSustain />);
    expect(
      screen.getByRole("region", { name: /responsible packaging/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
