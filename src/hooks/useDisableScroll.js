import { useEffect } from "react";

export const useDisableScroll = (...states) => {
  useEffect(() => {
    const shouldDisableScroll = states.some((state) => state);
    document.body.style.overflow = shouldDisableScroll ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [states]);
};
