import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MenuSection from "./MenuSection.jsx";

describe("MenuSection component", () => {
  const mockItems = [
    {
      name: "Greek Salad",
      description: "Fresh salad with feta and olives.",
      price: "$12.50",
      image: "/assets/greek-salad.webp",
    },
    {
      name: "Bruschetta",
      description: "Grilled bread with tomato and basil.",
      price: "$8.00",
      image: "/assets/bruschetta.webp",
    },
  ];

  const setup = () =>
    render(<MenuSection title="Starters" items={mockItems} />);

  it("renders the section with correct region role and label", () => {
    setup();
    const section = screen.getByRole("region", { name: /starters/i });
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute(
      "aria-labelledby",
      "Starters-section-title"
    );
  });

  it("renders the category title correctly", () => {
    setup();
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /starters/i,
    });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass("menu-category");
  });

  it("renders the correct number of list items", () => {
    setup();
    const list = screen.getByRole("list", {
      name: /starters menu items list/i,
    });
    expect(list).toBeInTheDocument();

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(mockItems.length);
  });

  it("renders MenuItem components with correct dish names and descriptions", () => {
    setup();
    expect(screen.getByText(/greek salad/i)).toBeInTheDocument();
    expect(screen.getByText(/fresh salad with feta/i)).toBeInTheDocument();
    expect(screen.getByText(/bruschetta/i)).toBeInTheDocument();
    expect(screen.getByText(/grilled bread with tomato/i)).toBeInTheDocument();
  });

  it("has the correct structure and classes", () => {
    setup();
    const container = document.querySelector(".menu-container");
    expect(container).toBeInTheDocument();

    const grid = container.querySelector(".menu-grid");
    expect(grid).not.toBeNull();
    expect(grid.getAttribute("role")).toBe("list");
  });
});
