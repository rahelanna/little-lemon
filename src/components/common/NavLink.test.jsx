import NavLink from "./NavLink.jsx";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe("NavLink component", () => {
  it("renders an <a> tag when href starts with #", () => {
    render(
      <MemoryRouter>
        <NavLink href="#menu" title="Go to Menu" />
      </MemoryRouter>
    );

    const link = screen.getByRole("link", { name: /Go to Menu/i });
    expect(link).toHaveAttribute("href", "#menu");
  });

  it("renders a <Link> (react-router) when href does not start with #", () => {
    render(
      <MemoryRouter>
        <NavLink href="/about" title="About Us" />
      </MemoryRouter>
    );

    const link = screen.getByRole("link", { name: /About Us/i });
    expect(link).toHaveAttribute("href", "/about");
  });

  it("calls onClick handler when provided", () => {
    const mockClick = vi.fn();

    render(
      <MemoryRouter>
        <NavLink href="/contact" title="Contact" onClick={mockClick} />
      </MemoryRouter>
    );

    const link = screen.getByRole("link", { name: /Contact/i });
    fireEvent.click(link);
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
