import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: (() => {
    // Safe access to localStorage (only in browser)
    if (typeof window !== "undefined") {
      return localStorage.getItem("preferred-theme") || "forest";
    }
    return "forest"; // fallback
  })(),
  setTheme: (theme) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-theme", theme);
      document.documentElement.setAttribute("data-theme", theme); // for DaisyUI
    }
    set({ theme });
  },
}));
