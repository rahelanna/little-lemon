import SignupForm from "./SignupForm.jsx";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

describe("SignupForm component", () => {
  it("displays error message when error prop is passed", () => {
    render(
      <SignupForm
        signup={vi.fn()}
        setIsLoading={vi.fn()}
        success={false}
        setSuccess={vi.fn()}
        error="Passwords do not match"
        setError={vi.fn()}
      />
    );

    const errorMessage = screen.getByRole("alert");
    expect(errorMessage).toHaveTextContent("Passwords do not match");
  });

  it("displays success message when success prop is true", () => {
    render(
      <SignupForm
        signup={vi.fn()}
        setIsLoading={vi.fn()}
        success={true}
        setSuccess={vi.fn()}
        error=""
        setError={vi.fn()}
      />
    );

    const successMessage = screen.getByRole("status");
    expect(successMessage).toHaveTextContent(
      "Registration successful! Redirecting..."
    );
  });
});
