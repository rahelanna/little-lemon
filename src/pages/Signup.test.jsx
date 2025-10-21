import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { AuthContext } from "../context/AuthContext";
import Signup from "./Signup";

// Mock child components
vi.mock("../components/loading/Loading", () => ({
  default: () => <div data-testid="mock-loading" />,
}));

vi.mock("../components/auth/SignupHero", () => ({
  default: () => <div data-testid="mock-signup-hero" />,
}));

vi.mock("../components/auth/SignupForm", () => ({
  default: ({ signup, setIsLoading, success, setSuccess, error, setError }) => (
    <div
      data-testid="mock-signup-form"
      data-signup={!!signup}
      data-success={success}
      data-error={error}
      onClick={() => setIsLoading(true)}
    >
      Signup Form
    </div>
  ),
}));

describe("Signup component", () => {
  const mockSignup = vi.fn();

  const renderWithContext = (ui) =>
    render(
      <AuthContext.Provider value={{ signup: mockSignup }}>
        {ui}
      </AuthContext.Provider>
    );

  it("renders without crashing", () => {
    renderWithContext(<Signup />);
    expect(true).toBe(true);
  });

  it("renders main element with correct role and aria-label", () => {
    renderWithContext(<Signup />);
    const main = screen.getByRole("signup-page", { name: /signup page/i });
    expect(main).toBeInTheDocument();
  });

  it("renders SignupHero and SignupForm by default", () => {
    renderWithContext(<Signup />);
    expect(screen.getByTestId("mock-signup-hero")).toBeInTheDocument();
    expect(screen.getByTestId("mock-signup-form")).toBeInTheDocument();
  });

  it("passes signup, setIsLoading, success, setSuccess, error, and setError props to SignupForm", () => {
    renderWithContext(<Signup />);
    const form = screen.getByTestId("mock-signup-form");
    expect(form.dataset.signup).toBe("true");
    expect(form.dataset.success).toBe("false");
    expect(form.dataset.error).toBe("");
  });

  it("renders Loading component when isLoading is true", async () => {
    renderWithContext(<Signup />);
    const form = screen.getByTestId("mock-signup-form");
    // simulate a click that triggers setIsLoading(true)
    form.click();
    expect(await screen.findByTestId("mock-loading")).toBeInTheDocument();
  });
});
