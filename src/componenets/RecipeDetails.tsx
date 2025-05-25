import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Recipe = {
    id: number;
    name: string;
    image: string;
    rating: number;
    cuisine: string;
    caloriesPerServing: number;
    ingredients: string[];
}

type ParamObject = {
    id: string;
};

function RecipeDetails() {
    let param = useParams<ParamObject>();
    let [recipe, setRecipe] = useState<Recipe | null>();
    let [loading, setLoading] = useState<Boolean>(true);
    let [errorOccured, setErrorOccured] = useState<string | null>(null);

    let loadRecipe = async () => {
        try {
            let response = await fetch(`https://dummyjson.com/recipes/${param.id}`);
            if (!response.ok) {
                throw new Error("Could not load the recipe");
            }
            let recipeData = await response.json();
            setRecipe(recipeData);
            setLoading(false);
        } catch (error: any) {
            setErrorOccured(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadRecipe();
    }, [param.id])

    if (loading) {
        return (
            <section className="text-center my-4">
                <span className="spinner-border spinner-border-sm text-light mx-1" role="status"></span>
                <span className="text-light mx-1">Loading Recipe</span>
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

    return (
        <div className="d-flex justify-content-center my-4">
            <div className="card text-white detailCardBg" style={{ maxWidth: "24rem" }}>
                <img src={recipe?.image} className="card-img-top" alt={recipe?.name} />
                <div className="card-body detailCardBg">
                    <h5 className="card-title text-center">{recipe?.name}</h5>
                    <ul className="list-group list-group-flush detailCardBg">
                        <li className="list-group-item detailCardBg text-white"><strong>Rating:</strong> {recipe?.rating} / 5</li>
                        <li className="list-group-item detailCardBg text-white"><strong>Cuisine:</strong> {recipe?.cuisine}</li>
                        <li className="list-group-item detailCardBg text-white"><strong>Calories/Serving:</strong> {recipe?.caloriesPerServing}</li>
                        <li className="list-group-item detailCardBg text-white"><strong>Ingredients</strong>
                        <ul>
                            {
                                recipe?.ingredients.map(ingredient => (
                                    <li>{ingredient}</li>
                                ))
                                }
                        </ul>
                        </li>
                </ul>
            </div>
        </div>
        </div >
    );
}

export default RecipeDetails;