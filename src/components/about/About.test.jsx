import About from "./About.jsx";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("About component", () => {
  it("renders the main title and subtitle", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { level: 2, name: "Little Lemon" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Chicago" })
    ).toBeInTheDocument();
  });

  it("displays opening hours correctly", () => {
    render(<About />);
    expect(screen.getByText("Opening hours:")).toBeInTheDocument();
    expect(screen.getByText("Weekdays: 9.30am - 9.30pm")).toBeInTheDocument();
    expect(screen.getByText("Weekends: 9am - 8.30pm")).toBeInTheDocument();
  });

  it("renders the about description paragraph", () => {
    render(<About />);
    const description = screen.getByText(
      /Our menu is inspired by the flavors of the Mediterranean/i
    );
    expect(description).toBeInTheDocument();
  });

  it("renders both staff images with correct alt texts", () => {
    render(<About />);
    const topImage = screen.getByAltText("Chef cooking");
    const bottomImage = screen.getByAltText(
      "Restaurant staff preparing dishes"
    );

    expect(topImage).toBeInTheDocument();
    expect(bottomImage).toBeInTheDocument();
  });

  it("has proper accessibility roles and labels", () => {
    render(<About />);
    const region = screen.getByRole("region", { name: /Little Lemon/i });
    expect(region).toBeInTheDocument();

    const staffGroup = screen.getByRole("group", {
      name: /Restaurant staff and chefs/i,
    });
    expect(staffGroup).toBeInTheDocument();
  });
});
