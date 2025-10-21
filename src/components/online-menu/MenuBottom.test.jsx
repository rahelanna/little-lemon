import MenuBottom from "./MenuBottom.jsx";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";

describe("MenuBottom component", () => {
  const setup = () =>
    render(
      <MemoryRouter>
        <MenuBottom />
      </MemoryRouter>
    );

  it("renders the section with correct region role and title", () => {
    setup();
    const section = screen.getByRole("region", { name: /freshness & care/i });
    expect(section).toBeInTheDocument();
  });

  it("renders navigation buttons for order and reservation", () => {
    setup();
    const orderLink = screen.getByRole("link", { name: /order delivery/i });
    const reserveLink = screen.getByRole("link", { name: /reserve a table/i });
    expect(orderLink).toBeInTheDocument();
    expect(reserveLink).toBeInTheDocument();
    expect(orderLink).toHaveClass("menu-btn");
    expect(reserveLink).toHaveClass("menu-btn", "secondary");
  });

  it("renders the complementary section with icon and text", () => {
    setup();
    const complementary = screen.getByRole("complementary", {
      name: /freshness & care/i,
    });
    expect(complementary).toBeInTheDocument();

    const icon = screen.getByAltText(/olive branch icon/i);
    expect(icon).toBeInTheDocument();

    expect(
      screen.getByText(/all dishes are prepared from scratch/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/cross-contamination may occur/i)
    ).toBeInTheDocument();
  });

  it("has proper aria attributes and structure", () => {
    setup();
    const navigation = screen.getByRole("navigation", {
      name: /menu actions/i,
    });
    expect(navigation).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /freshness & care/i })
    ).toBeInTheDocument();
  });
});
