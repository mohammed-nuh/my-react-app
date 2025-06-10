import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";


function ThemeToggler(){
    let { theme, toggleTheme } = useContext(ThemeContext);

    return(
        <div className="mb-3">
            <button onClick={toggleTheme} className={theme == "light"? "btn btn-dark": "btn btn-light"}>
                {theme == "light"? "🌙  Dark" : "☀️  Light "} Mode &nbsp;
            </button>
        </div>
    );
}

export default ThemeToggler;