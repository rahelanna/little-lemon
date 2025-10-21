import Home from "./Home";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

// Mock child components to isolate Home
vi.mock("../components/hero/Hero", () => ({
  default: () => <div data-testid="mock-hero" />,
}));
vi.mock("../components/specials/Specials", () => ({
  default: () => <div data-testid="mock-specials" />,
}));
vi.mock("../components/about/About", () => ({
  default: () => <div data-testid="mock-about" />,
}));

describe("Home component", () => {
  it("renders without crashing", () => {
    render(<Home />);
    expect(true).toBe(true);
  });

  it("renders main element with correct role and aria-label", () => {
    render(<Home />);
    const main = screen.getByRole("main", { name: /homepage main content/i });
    expect(main).toBeInTheDocument();
  });

  it("renders Hero, Specials, and About components", () => {
    render(<Home />);
    expect(screen.getByTestId("mock-hero")).toBeInTheDocument();
    expect(screen.getByTestId("mock-specials")).toBeInTheDocument();
    expect(screen.getByTestId("mock-about")).toBeInTheDocument();
  });
});
