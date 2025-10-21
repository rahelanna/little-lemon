import { describe, it, expect, vi } from "vitest";

// mock dependencies
vi.mock("react-dom/client", () => ({
  createRoot: vi.fn(() => ({
    render: vi.fn(),
  })),
}));
vi.mock("./App.jsx", () => ({
  default: () => <div data-testid="mock-app" />,
}));
vi.mock("react-router-dom", () => ({
  BrowserRouter: ({ children }) => (
    <div data-testid="mock-router">{children}</div>
  ),
}));
vi.mock("./context/AuthContext.jsx", () => ({
  AuthProvider: ({ children }) => <div data-testid="mock-auth">{children}</div>,
}));

// now import the entry file after mocks
import "./main.jsx";
import { createRoot } from "react-dom/client";

describe("main.jsx", () => {
  it("calls createRoot and renders the app tree", () => {
    expect(createRoot).toHaveBeenCalledTimes(1);

    // get the argument passed to createRoot()
    const arg = createRoot.mock.calls[0][0];
    expect(arg).toBe(document.getElementById("root"));

    // verify render() was called on the returned root
    const rootInstance = createRoot.mock.results[0].value;
    expect(rootInstance.render).toHaveBeenCalledTimes(1);
  });
});
