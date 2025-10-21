import Hero from "./Hero.jsx";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";

describe("Hero component", () => {
  it("renders title, subtitle, and description", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { level: 1, name: /little lemon/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { level: 2, name: /chicago/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/we are a family owned mediterranean restaurant/i)
    ).toBeInTheDocument();
  });

  it("renders reserve link with correct label", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const reserveLink = screen.getByRole("link", {
      name: /reserve a table at little lemon restaurant/i,
    });
    expect(reserveLink).toBeInTheDocument();
    expect(reserveLink).toHaveAttribute("href", "/reservation");
  });

  it("renders hero image with alt text", () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    const image = screen.getByAltText(/little lemon staff/i);
    expect(image).toBeInTheDocument();
  });
});
