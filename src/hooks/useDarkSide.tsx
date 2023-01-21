import { Theme_t } from "@/models/misc";
import { useState, useEffect } from "react";

export default function useDarkSide() {
  const [theme, setTheme] = useState<Theme_t>(
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? Theme_t.Dark
        : (localStorage.getItem("theme") as Theme_t) ?? Theme_t.Dark
      : Theme_t.Dark
  );
  const colorTheme: Theme_t =
    theme === Theme_t.Dark ? Theme_t.Light : Theme_t.Dark;

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return { colorTheme, setTheme };
}
