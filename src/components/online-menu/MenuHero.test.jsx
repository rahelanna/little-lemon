import MenuHero from "./MenuHero.jsx";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("MenuHero component", () => {
  const setup = () => render(<MenuHero />);

  it("renders the section with correct region role and label", () => {
    setup();
    const section = screen.getByRole("region", { name: /our online menu/i });
    expect(section).toBeInTheDocument();
  });

  it("renders the title and subtitle correctly", () => {
    setup();
    const title = screen.getByRole("heading", {
      level: 1,
      name: /our online menu/i,
    });
    const subtitle = screen.getByText(
      /discover our full range of homemade dishes/i
    );

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(title).toHaveClass("menu-title");
    expect(subtitle).toHaveClass("menu-subtitle");
  });

  it("has proper container structure", () => {
    setup();
    const container = document.querySelector(".menu-container");
    expect(container).toBeInTheDocument();
    expect(container.querySelector(".menu-title")).not.toBeNull();
    expect(container.querySelector(".menu-subtitle")).not.toBeNull();
  });

  it("uses correct aria-labelledby reference", () => {
    setup();
    const section = screen.getByRole("region", { name: /our online menu/i });
    expect(section).toHaveAttribute("aria-labelledby", "menu-hero-title");
    const title = document.getElementById("menu-hero-title");
    expect(title).not.toBeNull();
  });
});
