import MenuItem from "./MenuItem.jsx";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("MenuItem component", () => {
  const mockProps = {
    name: "Greek Salad",
    description: "Fresh salad with feta, olives, and olive oil dressing.",
    price: "$12.50",
    image: "/assets/greek-salad.webp",
  };

  const setup = (props = mockProps) => render(<MenuItem {...props} />);

  it("renders the article with proper group role and aria references", () => {
    setup();
    const article = screen.getByRole("group");
    expect(article).toBeInTheDocument();
    expect(article).toHaveAttribute("aria-labelledby", "Greek Salad-title");
    expect(article).toHaveAttribute("aria-describedby", "Greek Salad-desc");
  });

  it("renders dish name, description, and price", () => {
    setup();
    expect(
      screen.getByRole("heading", { level: 3, name: /greek salad/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/fresh salad with feta/i)).toBeInTheDocument();
    expect(screen.getByText(/\$12\.50/)).toBeInTheDocument();
  });

  it("renders image with correct alt and aria label when provided", () => {
    setup();
    const img = screen.getByAltText(/greek salad/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/assets/greek-salad.webp");

    const wrapper = screen.getByRole("img", {
      name: /greek salad dish image/i,
    });
    expect(wrapper).toBeInTheDocument();
  });

  it("does not render image wrapper if image prop is missing", () => {
    setup({ ...mockProps, image: null });
    expect(screen.queryByRole("img", { name: /dish image/i })).toBeNull();
  });

  it("has correct structure and class names", () => {
    setup();
    const container = document.querySelector(".menu-item");
    expect(container).toBeInTheDocument();
    expect(container.querySelector(".menu-info")).not.toBeNull();
    expect(container.querySelector(".dish-name")).not.toBeNull();
    expect(container.querySelector(".dish-desc")).not.toBeNull();
    expect(container.querySelector(".dish-price")).not.toBeNull();
  });
});
