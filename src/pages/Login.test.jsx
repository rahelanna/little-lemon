import Login from "./Login";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { AuthContext } from "../context/AuthContext";

// Mock child components
vi.mock("../components/auth/LoginHero", () => ({
  default: () => <div data-testid="mock-login-hero" />,
}));

vi.mock("../components/auth/LoginForm", () => ({
  default: ({ login, setIsLoading, error, setError }) => (
    <div
      data-testid="mock-login-form"
      data-login={!!login}
      data-error={error}
      onClick={() => setIsLoading(true)}
    >
      Login Form
    </div>
  ),
}));

vi.mock("../components/loading/Loading", () => ({
  default: () => <div data-testid="mock-loading" />,
}));

describe("Login component", () => {
  const mockLogin = vi.fn();

  const renderWithContext = (ui) =>
    render(
      <AuthContext.Provider value={{ login: mockLogin }}>
        {ui}
      </AuthContext.Provider>
    );

  it("renders without crashing", () => {
    renderWithContext(<Login />);
    expect(true).toBe(true);
  });

  it("renders the main element with correct role and aria-label", () => {
    renderWithContext(<Login />);
    const main = screen.getByRole("login-page", { name: /login page/i });
    expect(main).toBeInTheDocument();
  });

  it("renders LoginHero and LoginForm by default", () => {
    renderWithContext(<Login />);
    expect(screen.getByTestId("mock-login-hero")).toBeInTheDocument();
    expect(screen.getByTestId("mock-login-form")).toBeInTheDocument();
  });

  it("passes login, setIsLoading, error, and setError props to LoginForm", () => {
    renderWithContext(<Login />);
    const form = screen.getByTestId("mock-login-form");
    expect(form.dataset.login).toBe("true");
    expect(form.dataset.error).toBe("");
  });

  it("renders Loading component when isLoading is true", async () => {
    renderWithContext(<Login />);
    // Simulate click that triggers setIsLoading(true)
    const form = screen.getByTestId("mock-login-form");
    form.click();

    // The Loading mock should now be rendered instead of the form
    expect(await screen.findByTestId("mock-loading")).toBeInTheDocument();
  });
});
