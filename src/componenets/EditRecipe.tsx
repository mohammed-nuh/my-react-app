import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditRecipe() {
    let param = useParams();
    let [name, setName] = useState<string>("");
    let [cuisine, setCuisine] = useState<string>("");
    const navigate = useNavigate();

    async function fetchRecipe(){
        let response = await fetch(`https://6835b8aecd78db2058c2d6cc.mockapi.io/recipes/${param.id}`);
        let data = await response.json();
        setName(data.name);
        setCuisine(data.cuisine);
    }
    
    useEffect(() => {
        fetchRecipe();
    }, [param.id])

    let updateRecipe = async () => {
        let recipe = { name, cuisine };

        await fetch(`https://6835b8aecd78db2058c2d6cc.mockapi.io/recipes/${param.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(recipe)
        })

        navigate("/recipes-dashboard")
    }

    return (
        <section className="container text-light mt-5">
            <h2 className="text-primary fw-bold">Add Recipe</h2>
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
                    placeholder="Type cuisisne..."
                    onChange={(e) => setCuisine(e.target.value)} />
            </div>
            <button className="btn btn-primary" onClick={() => updateRecipe()}>Submit</button>
        </section>
    )
}

export default EditRecipe;