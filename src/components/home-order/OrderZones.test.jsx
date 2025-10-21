import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import OrderZones from "./OrderZones.jsx";

describe("OrderZones component", () => {
  it("renders section title and subtitle", () => {
    render(<OrderZones />);

    expect(
      screen.getByRole("heading", { level: 3, name: /delivery zones & fees/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/transparent pricing based on distance/i)
    ).toBeInTheDocument();
  });

  it("renders all zone cards with details", () => {
    render(<OrderZones />);

    const zones = [
      { title: /zone a - nearby/i, fee: /\$2\.50 fee/i },
      { title: /zone b - medium/i, fee: /\$4\.00 fee/i },
      { title: /zone c - extended/i, fee: /\$6\.00 fee/i },
    ];

    zones.forEach(({ title, fee }) => {
      expect(
        screen.getByRole("heading", { level: 4, name: title })
      ).toBeInTheDocument();
      expect(screen.getByText(fee)).toBeInTheDocument();
    });

    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(3);
  });

  it("renders delivery note text", () => {
    render(<OrderZones />);
    expect(
      screen.getByText(/times are estimates and may shift due to traffic/i)
    ).toBeInTheDocument();
  });

  it("has proper region and list roles", () => {
    render(<OrderZones />);
    expect(
      screen.getByRole("region", { name: /delivery zones & fees/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
