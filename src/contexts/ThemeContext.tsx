import { createContext } from "react";

export type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
}

let ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => {}
});

export default ThemeContext;