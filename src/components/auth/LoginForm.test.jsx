import LoginForm from "./LoginForm.jsx";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

describe("LoginForm component", () => {
  it("renders form elements correctly", () => {
    render(
      <LoginForm
        login={vi.fn()}
        setIsLoading={vi.fn()}
        error=""
        setError={vi.fn()}
      />
    );

    expect(screen.getByRole("heading", { name: /Login/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Login to your account/i })
    ).toBeInTheDocument();
  });

  it("displays an error message when error prop is passed", () => {
    render(
      <LoginForm
        login={vi.fn()}
        setIsLoading={vi.fn()}
        error="Invalid email or password"
        setError={vi.fn()}
      />
    );

    const errorMessage = screen.getByRole("alert");
    expect(errorMessage).toHaveTextContent("Invalid email or password");
  });
});
