import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddRecipe() {
    let [name, setName] = useState<string>("");
    let [cuisine, setCuisine] = useState<string>("");
    let [error, setError] = useState<null | string>(null);
    let [success, setSuccess] = useState<null | string>(null);
    const navigate = useNavigate();

    let addRecipe = async () => {
        setError(null);
        setSuccess(null);

        if (!name.trim()) {
            setError("Name of the dish is required");
            return;
        }
        if (!cuisine.trim()) {
            setError("Cuisine of the dish is required");
            return;
        }

        let recipe = { name, cuisine };

        await fetch("https://6835b8aecd78db2058c2d6cc.mockapi.io/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipe)
        })

        setSuccess("Dish Added!");
        setName("");
        setCuisine("");

        setTimeout(function () {
            navigate("/recipes-dashboard");
        }, 2000);
    }


    return (
        <section className="container text-light mt-5">
            <h2 className="text-primary fw-bold">Add Recipe</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            <div className="form-group my-3">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    value={name}
                    className="form-control"
                    id="name"
                    placeholder="Type recipe name..."
                    onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group my-3">
                <label htmlFor="name">Cuisine</label>
                <input
                    type="text"
                    value={cuisine}
                    className="form-control"
                    id="name"
                    placeholder="Type cuisine..."
                    onChange={(e) => setCuisine(e.target.value)} />
            </div>
            <button className="btn btn-primary" onClick={() => addRecipe()}>Submit</button>
        </section>
    )
}

export default AddRecipe;