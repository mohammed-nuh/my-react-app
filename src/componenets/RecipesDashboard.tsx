import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

interface Recipe {
    id: number;
    name: string;
    cuisine: string;
};

let RecipesDashboard = () => {
    let [recipes, setRecipes] = useState<Recipe[]>([]);
    let [loading, setLoading] = useState<Boolean>(true);
    let [errorOccured, setErrorOccured] = useState<string | null>(null);

    let loadRecipes = async () => {
        try {
            let response = await fetch("https://6835b8aecd78db2058c2d6cc.mockapi.io/recipes");
            console.log(response);

            if (!response.ok) {
                throw new Error("Could not load data from API");
            }
            let data = await response.json();
            let recipesData: Recipe[] = data;
            setRecipes(recipesData);
            setLoading(false);
        } catch (error: any) {
            setErrorOccured(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadRecipes();
    }, [])

    if (loading) {
        return (
            <section className="text-center my-4">
                <span className="spinner-border spinner-border-sm text-light mx-1" role="status"></span>
                <span className="text-light mx-1">Loading Recipes</span>
            </section>
        )
    }

    if (errorOccured) {
        return (
            <section className="text-center">
                <h2 className="text-danger">{errorOccured}</h2>
            </section>
        )
    }

    async function deleteRecipe(id: number) {
        try {
            alert(`Do you want to print recipe with id '${id}'?`)
            await fetch(`https://6835b8aecd78db2058c2d6cc.mockapi.io/recipes/${id}`, { method: "DELETE" });            
            loadRecipes();
        } catch (error: any) {
            console.log(error.message);
        } 
    }

    return (
        <section className='mt-3 mb-5 py-2'>
            <h2>Recipes Dashboard</h2>
            <div className="container my-3">
                <Link to={`/add-recipe`} className="btn btn-sm btn-primary mb-3">Add Recipe</Link>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Cuisine</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipes.map((recipe) => (
                            <tr>
                                <td>{recipe.id}</td>
                                <td>{recipe.name}</td>
                                <td>{recipe.cuisine}</td>
                                <td>
                                    <Link to={`/edit-recipe/${recipe.id}`} className="btn btn-sm btn-warning me-2">
                                        Edit
                                    </Link>
                                    <button className="btn btn-sm btn-danger" onClick={() => deleteRecipe(recipe.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default RecipesDashboard;