import { renderHook } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { useDisableScroll } from "./useDisableScroll";

describe("useDisableScroll hook", () => {
  beforeEach(() => {
    // Reset overflow before each test
    document.body.style.overflow = "auto";
  });

  it("sets overflow to hidden when any state is true", () => {
    const { rerender } = renderHook(
      ({ states }) => useDisableScroll(...states),
      {
        initialProps: { states: [false, true] },
      }
    );

    expect(document.body.style.overflow).toBe("hidden");

    // rerender with all false
    rerender({ states: [false, false] });
    expect(document.body.style.overflow).toBe("auto");
  });

  it("keeps overflow auto when all states are false", () => {
    renderHook(() => useDisableScroll(false, false, false));
    expect(document.body.style.overflow).toBe("auto");
  });

  it("restores overflow to auto on cleanup", () => {
    const { unmount } = renderHook(() => useDisableScroll(true));
    expect(document.body.style.overflow).toBe("hidden");

    unmount();
    expect(document.body.style.overflow).toBe("auto");
  });

  it("updates overflow dynamically when dependencies change", () => {
    const { rerender } = renderHook(
      ({ states }) => useDisableScroll(...states),
      { initialProps: { states: [false] } }
    );

    expect(document.body.style.overflow).toBe("auto");

    rerender({ states: [true] });
    expect(document.body.style.overflow).toBe("hidden");

    rerender({ states: [false] });
    expect(document.body.style.overflow).toBe("auto");
  });
});
