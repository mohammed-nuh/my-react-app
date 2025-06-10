import { useState } from "react";
import ThemeContext, { Theme } from "./contexts/ThemeContext";
import ThemeToggler from "./componenets/ThemeToggler";
import ThemeCard from "./componenets/ThemeCard";

function ThemeComponent() {
  let [theme, setTheme] = useState<Theme>("light");

  let toggleTheme = () => {
    setTheme((currentTheme) => currentTheme == "light" ? "dark" : "light");
  }

  let themeContext = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      <div className={
        theme == "dark" ? "min-vh-100 p-5 text-light bg-dark" : "min-vh-100 p-5 text-dark bg-light"
      }>
        <div className="container">
          <h1 className="mb-4">Theme Toggle using React</h1>
          <ThemeToggler />
          <ThemeCard />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default ThemeComponent;