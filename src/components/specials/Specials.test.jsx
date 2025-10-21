import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Specials from "./Specials";
import SpecialCard from "../special-card/SpecialCard";
import NavLink from "../common/NavLink";
import { specials } from "../../data/specials";

// Mock the imported components and data
vi.mock("../special-card/SpecialCard", () => ({
  default: ({ name, price, description }) => (
    <div data-testid="mock-special-card">
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  ),
}));

vi.mock("../common/NavLink", () => ({
  default: ({ href, title, className }) => (
    <a
      href={href}
      title={title}
      className={className}
      data-testid="mock-navlink"
    >
      {title}
    </a>
  ),
}));

vi.mock("../../data/specials", () => ({
  specials: [
    {
      id: 1,
      name: "Greek Salad",
      price: "$12.99",
      description: "Fresh salad with feta and olives.",
      image: "/images/greek-salad.jpg",
    },
    {
      id: 2,
      name: "Bruschetta",
      price: "$8.50",
      description: "Toasted bread with tomatoes and basil.",
      image: "/images/bruschetta.jpg",
    },
  ],
}));

describe("Specials component", () => {
  it("renders without crashing", () => {
    render(<Specials />);
    expect(true).toBe(true);
  });

  it("renders the section with correct role and labels", () => {
    render(<Specials />);

    const region = screen.getByRole("region", { name: /this week specials!/i });
    expect(region).toBeInTheDocument();
    expect(region).toHaveAttribute("aria-describedby", "specials-desc");
  });

  it("renders the title 'This week specials!'", () => {
    render(<Specials />);
    expect(
      screen.getByRole("heading", { name: /this week specials!/i })
    ).toBeInTheDocument();
  });

  it("renders the NavLink to /online-menu with title 'Online Menu'", () => {
    render(<Specials />);
    const link = screen.getByTestId("mock-navlink");
    expect(link).toHaveAttribute("href", "/online-menu");
    expect(link).toHaveAttribute("title", "Online Menu");
    expect(link).toHaveClass("online-menu-btn");
  });

  it("renders a list of SpecialCard components equal to the number of specials", () => {
    render(<Specials />);
    const cards = screen.getAllByTestId("mock-special-card");
    expect(cards).toHaveLength(specials.length);
  });

  it("renders each special's name and description", () => {
    render(<Specials />);
    specials.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });

  it("renders the specials grid with proper role", () => {
    render(<Specials />);
    const list = screen.getByRole("list", {
      name: /weekly special dishes list/i,
    });
    expect(list).toBeInTheDocument();
  });
});
