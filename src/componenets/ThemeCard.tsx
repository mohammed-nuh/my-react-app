import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";


function ThemeCard() {
    let { theme } = useContext(ThemeContext);

    return (
        <div className={theme == "light" ? "card text-dark bg-light" : "card text-light blue-bg"}>
            <div className="card-body">
                <h4 className="card-title">Card</h4>
                <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ratione voluptas provident eaque asperiores nobis? Quam atque eum perferendis sed, deleniti quibusdam labore quisquam ea magni officiis ipsam quas nobis.
                </p>
            </div>
        </div>
    );
}

export default ThemeCard;