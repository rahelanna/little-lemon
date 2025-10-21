import OrderHero from "./OrderHero.jsx";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("OrderHero component", () => {
  it("renders main titles and description", () => {
    render(<OrderHero />);

    expect(
      screen.getByRole("heading", { level: 1, name: /home delivery/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /fresh\. fast\. from our kitchen\./i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/order mediterranean comfort food to your door/i)
    ).toBeInTheDocument();
  });

  it("renders CTA link with correct label and href", () => {
    render(<OrderHero />);

    const link = screen.getByRole("link", {
      name: /go to booking page instead of ordering delivery/i,
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/booking");
  });

  it("renders courier image with alt text", () => {
    render(<OrderHero />);

    const image = screen.getByAltText(/courier delivering little lemon order/i);
    expect(image).toBeInTheDocument();
  });
});
