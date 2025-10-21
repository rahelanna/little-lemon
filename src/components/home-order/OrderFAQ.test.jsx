import OrderFAQ from "./OrderFAQ.jsx";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("OrderFAQ component", () => {
  it("renders section title and subtitle", () => {
    render(<OrderFAQ />);
    expect(
      screen.getByRole("heading", { level: 3, name: /frequently asked/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/helpful details before you order/i)
    ).toBeInTheDocument();
  });

  it("renders all FAQ questions and answers", () => {
    render(<OrderFAQ />);
    const questions = [
      /can i schedule an order/i,
      /how are allergies handled/i,
      /do you deliver drinks and desserts/i,
      /what if something is missing/i,
    ];

    questions.forEach((q) => {
      expect(screen.getByText(q)).toBeInTheDocument();
    });

    const answers = screen.getAllByRole("listitem");
    expect(answers.length).toBe(4);
  });

  it("has proper region and list roles", () => {
    render(<OrderFAQ />);
    expect(
      screen.getByRole("region", { name: /frequently asked/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
