import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header.jsx";
import { AuthContext } from "../../context/AuthContext";

vi.mock("../common/NavLink", () => ({
  default: ({ title }) => <a href="#">{title}</a>,
}));
vi.mock("../../hooks/useDisableScroll", () => ({
  useDisableScroll: () => {},
}));
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children }) => <div>{children}</div>,
  },
  AnimatePresence: ({ children }) => <>{children}</>,
}));
vi.mock("@iconify/react", () => ({
  Icon: ({ icon }) => <span data-icon={icon}></span>,
}));

describe("Header component", () => {
  it("renders logo and navigation links", () => {
    render(
      <AuthContext.Provider value={{ user: null, logout: vi.fn() }}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
    expect(screen.getAllByRole("link").length).toBeGreaterThan(0);
  });

  it("shows avatar and logout button when user is logged in", () => {
    render(
      <AuthContext.Provider value={{ user: { name: "Test" }, logout: vi.fn() }}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const avatar = screen.getByAltText(/avatar/i);
    expect(avatar).toBeInTheDocument();
    fireEvent.click(avatar);
    expect(screen.getByText(/sign out/i)).toBeInTheDocument();
  });
});
