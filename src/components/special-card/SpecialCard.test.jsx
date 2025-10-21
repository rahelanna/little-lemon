import SpecialCard from "./SpecialCard";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

// mock the NavLink and Icon components
vi.mock("../common/NavLink", () => ({
  default: ({ children, ...props }) => (
    <a {...props} data-testid="mock-navlink">
      {children}
    </a>
  ),
}));

vi.mock("@iconify/react", () => ({
  Icon: ({ icon, width, height }) => (
    <svg
      data-testid="mock-icon"
      data-icon={icon}
      width={width}
      height={height}
    />
  ),
}));

describe("SpecialCard component", () => {
  const defaultProps = {
    name: "Greek Salad",
    price: "$12.99",
    description: "A refreshing salad with feta cheese and olives.",
    image: "/images/greek-salad.jpg",
  };

  it("renders without crashing", () => {
    render(<SpecialCard {...defaultProps} />);
    expect(true).toBe(true);
  });

  it("renders the card with correct title, price and description", () => {
    render(<SpecialCard {...defaultProps} />);

    // Title
    expect(
      screen.getByRole("heading", { name: defaultProps.name })
    ).toBeInTheDocument();

    // Price
    expect(screen.getByText(defaultProps.price)).toBeInTheDocument();

    // Description
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
  });

  it("renders the image with the correct src and alt", () => {
    render(<SpecialCard {...defaultProps} />);
    const img = screen.getByRole("img", { name: defaultProps.name });
    expect(img).toHaveAttribute("src", defaultProps.image);
    expect(img).toHaveAttribute("alt", defaultProps.name);
  });

  it("renders placeholder image when image prop is missing", () => {
    const { name, price, description } = defaultProps;
    render(<SpecialCard name={name} price={price} description={description} />);

    const img = screen.getByRole("img", { name });
    expect(img).toHaveAttribute("src", "/placeholder.svg");
  });

  it("includes a working NavLink with proper href and aria label", () => {
    render(<SpecialCard {...defaultProps} />);
    const link = screen.getByTestId("mock-navlink");
    expect(link).toHaveAttribute("href", "/home-order");
    expect(link).toHaveAttribute(
      "aria-label",
      `Order a delivery of ${defaultProps.name}`
    );
    expect(screen.getByText(/order a delivery/i)).toBeInTheDocument();
  });

  it("renders the motorcycle icon inside the NavLink", () => {
    render(<SpecialCard {...defaultProps} />);
    const icon = screen.getByTestId("mock-icon");
    expect(icon).toHaveAttribute("data-icon", "streamline:transfer-motorcycle");
  });
});
