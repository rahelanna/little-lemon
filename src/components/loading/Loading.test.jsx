import Loading from "./Loading.jsx";
import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";

describe("Loading component", () => {
  let portalRoot;

  beforeEach(() => {
    // Clean up any existing portal roots
    document.querySelectorAll("#portal").forEach((n) => n.remove());

    // Create fresh portal root
    portalRoot = document.createElement("div");
    portalRoot.setAttribute("id", "portal");
    document.body.appendChild(portalRoot);
  });

  afterEach(() => {
    cleanup();
    document.querySelectorAll("#portal").forEach((n) => n.remove());
  });

  it("renders loading overlay with proper role and aria labels", () => {
    render(<Loading />);
    const overlay = screen.getByRole("status", {
      name: /page loading indicator/i,
    });
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass("loading-overlay");
  });

  it("renders the loading spinner image correctly", () => {
    render(<Loading />);
    const img = screen.getByAltText(/loading animation of a spinning lemon/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveClass("loading-image");
  });

  it("renders loading text and dots", () => {
    render(<Loading />);
    expect(
      screen.getByRole("heading", { level: 1, name: /loading/i })
    ).toBeInTheDocument();

    const dots = document.querySelectorAll(".dot");
    expect(dots.length).toBe(3);
  });

  it("renders inside the portal element", () => {
    render(<Loading />);
    const overlay = document
      .getElementById("portal")
      .querySelector(".loading-overlay");
    expect(overlay).not.toBeNull();
  });
});
