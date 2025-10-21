import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { AuthProvider, AuthContext } from "./AuthContext";
import { useContext } from "react";

// Helper hook to access AuthContext in tests
const useAuth = () => useContext(AuthContext);

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("AuthContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("initializes with null user", () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });
    expect(result.current.user).toBeNull();
  });

  it("loads user from localStorage on mount when logged in", () => {
    const demoUser = {
      name: "John",
      email: "john@example.com",
      password: "123",
    };
    localStorage.setItem("demoUser", JSON.stringify(demoUser));
    localStorage.setItem("loggedIn", "true");

    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });
    expect(result.current.user).toEqual(demoUser);
  });

  it("login succeeds with matching credentials", () => {
    const demoUser = {
      name: "Jane",
      email: "jane@example.com",
      password: "pass",
    };
    localStorage.setItem("demoUser", JSON.stringify(demoUser));

    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });

    let loginSuccess;
    act(() => {
      loginSuccess = result.current.login("jane@example.com", "pass");
    });

    expect(loginSuccess).toBe(true);
    expect(result.current.user).toEqual(demoUser);
    expect(localStorage.getItem("loggedIn")).toBe("true");
  });

  it("login fails with wrong credentials", () => {
    const demoUser = {
      name: "Jane",
      email: "jane@example.com",
      password: "pass",
    };
    localStorage.setItem("demoUser", JSON.stringify(demoUser));

    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });

    let loginSuccess;
    act(() => {
      loginSuccess = result.current.login("jane@example.com", "wrongpass");
    });

    expect(loginSuccess).toBe(false);
    expect(result.current.user).toBeNull();
  });

  it("signup stores new user and sets logged in", () => {
    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });

    act(() => {
      result.current.signup("Mark", "mark@example.com", "abc123");
    });

    const storedUser = JSON.parse(localStorage.getItem("demoUser"));
    expect(storedUser).toEqual({
      name: "Mark",
      email: "mark@example.com",
      password: "abc123",
    });

    expect(result.current.user).toEqual(storedUser);
    expect(localStorage.getItem("loggedIn")).toBe("true");
  });

  it("logout clears user and removes loggedIn flag", () => {
    const demoUser = {
      name: "Jane",
      email: "jane@example.com",
      password: "pass",
    };
    localStorage.setItem("demoUser", JSON.stringify(demoUser));
    localStorage.setItem("loggedIn", "true");

    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });

    act(() => {
      result.current.logout();
    });

    expect(result.current.user).toBeNull();
    expect(localStorage.getItem("loggedIn")).toBeNull();
  });
});
