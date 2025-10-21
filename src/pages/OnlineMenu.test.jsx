import OnlineMenu from "./OnlineMenu";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

// mock child components
vi.mock("../components/online-menu/MenuHero", () => ({
  default: () => <div data-testid="mock-menu-hero" />,
}));
vi.mock("../components/online-menu/MenuSection", () => ({
  default: ({ title, items, "aria-label": ariaLabel }) => (
    <section
      data-testid="mock-menu-section"
      data-title={title}
      aria-label={ariaLabel}
    >
      {title} ({items.length} items)
    </section>
  ),
}));
vi.mock("../components/online-menu/MenuBottom", () => ({
  default: () => <div data-testid="mock-menu-bottom" />,
}));

vi.mock("../data/online-menu", () => ({
  soups: [{ id: 1, name: "Tomato Soup" }],
  mains: [
    { id: 2, name: "Steak" },
    { id: 3, name: "Pasta" },
  ],
  desserts: [{ id: 4, name: "Chocolate Cake" }],
}));

describe("OnlineMenu component", () => {
  it("renders without crashing", () => {
    render(<OnlineMenu />);
    expect(true).toBe(true);
  });

  it("renders main element with correct role, class, and aria-label", () => {
    render(<OnlineMenu />);
    const main = screen.getByRole("main", { name: /online menu page/i });
    expect(main).toBeInTheDocument();
    expect(main).toHaveClass("menu-page");
  });

  it("renders MenuHero and MenuBottom components", () => {
    render(<OnlineMenu />);
    expect(screen.getByTestId("mock-menu-hero")).toBeInTheDocument();
    expect(screen.getByTestId("mock-menu-bottom")).toBeInTheDocument();
  });

  it("renders three MenuSection components for soups, mains, and desserts", () => {
    render(<OnlineMenu />);
    const sections = screen.getAllByTestId("mock-menu-section");
    expect(sections).toHaveLength(3);

    expect(screen.getByText(/soups/i)).toBeInTheDocument();
    expect(screen.getByText(/main dishes/i)).toBeInTheDocument();
    expect(screen.getByText(/desserts/i)).toBeInTheDocument();
  });

  it("passes correct props (title and items) to each MenuSection", () => {
    render(<OnlineMenu />);
    const sections = screen.getAllByTestId("mock-menu-section");

    expect(sections[0]).toHaveAttribute("data-title", "Soups");
    expect(sections[0].textContent).toMatch(/1 items/);

    expect(sections[1]).toHaveAttribute("data-title", "Main Dishes");
    expect(sections[1].textContent).toMatch(/2 items/);

    expect(sections[2]).toHaveAttribute("data-title", "Desserts");
    expect(sections[2].textContent).toMatch(/1 items/);
  });
});
