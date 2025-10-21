import App from "./App";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";

// Mock layout components
vi.mock("./components/header/Header", () => ({
  default: () => <header data-testid="mock-header">Header</header>,
}));
vi.mock("./components/footer/Footer", () => ({
  default: () => <footer data-testid="mock-footer">Footer</footer>,
}));

// Mock page components
vi.mock("./pages/Home", () => ({
  default: () => <div data-testid="mock-home">Home Page</div>,
}));
vi.mock("./pages/Booking", () => ({
  default: () => <div data-testid="mock-booking">Booking Page</div>,
}));
vi.mock("./pages/Login", () => ({
  default: () => <div data-testid="mock-login">Login Page</div>,
}));
vi.mock("./pages/Signup", () => ({
  default: () => <div data-testid="mock-signup">Signup Page</div>,
}));
vi.mock("./pages/HomeOrder", () => ({
  default: () => <div data-testid="mock-homeorder">Home Order Page</div>,
}));
vi.mock("./pages/OnlineMenu", () => ({
  default: () => <div data-testid="mock-onlinemenu">Online Menu Page</div>,
}));

describe("App component", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(true).toBe(true);
  });

  it("renders Header and Footer", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("mock-header")).toBeInTheDocument();
    expect(screen.getByTestId("mock-footer")).toBeInTheDocument();
  });

  it("renders Home page on root path", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("mock-home")).toBeInTheDocument();
  });

  it("renders Booking page on /booking path", () => {
    render(
      <MemoryRouter initialEntries={["/booking"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("mock-booking")).toBeInTheDocument();
  });

  it("renders Login page on /login path", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("mock-login")).toBeInTheDocument();
  });

  it("renders Signup page on /signup path", () => {
    render(
      <MemoryRouter initialEntries={["/signup"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("mock-signup")).toBeInTheDocument();
  });

  it("renders HomeOrder page on /home-order path", () => {
    render(
      <MemoryRouter initialEntries={["/home-order"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("mock-homeorder")).toBeInTheDocument();
  });

  it("renders OnlineMenu page on /online-menu path", () => {
    render(
      <MemoryRouter initialEntries={["/online-menu"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("mock-onlinemenu")).toBeInTheDocument();
  });
});
