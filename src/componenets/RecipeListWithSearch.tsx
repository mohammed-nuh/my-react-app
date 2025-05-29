import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Recipe {
    id: number;
    name: string;
    image: string;
    rating: number;
};

let RecipeListWithSearch = () => {
    let [recipes, setRecipes] = useState<Recipe[]>([]);
    let [loading, setLoading] = useState<Boolean>(true);
    let [errorOccured, setErrorOccured] = useState<string | null>(null);
    let [noRecipesError, setNoRecipesError] = useState<string | null>(null);

    let loadRecipes = async () => {
        try {
            let response = await fetch("https://dummyjson.com/recipes");
            if (!response.ok) {
                throw new Error("Could not load data from API");
            }
            let data = await response.json();
            let recipesData: Recipe[] = data.recipes;
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

    async function searchRecipes() {
        let inputText = (document.getElementById("searchInput") as HTMLInputElement)?.value.toLowerCase();
        console.log(inputText);

        if (inputText) {
            try {
                let searchResponse = await fetch(`https://dummyjson.com/recipes/search?q=${inputText}`);
                let searchedRecipesData = await searchResponse.json();
                let searchedRecipes = searchedRecipesData.recipes;
                if (searchedRecipes.length == 0) {
                    throw new Error(`No recipes that contains "${inputText}"!`);
                }
                setRecipes(searchedRecipes);
            } catch (error: any) {
                setNoRecipesError(error.message);
                setRecipes([]);
            }
        } else {
            setNoRecipesError(null);
            loadRecipes();
        }
    }

    if (loading) {
        return (
            <section className="text-center my-4">
                <span className="spinner-border spinner-border-sm text-light mx-1" role="status"></span>
                <span className="text-light mx-1">Loading Page</span>
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

    let content;

    if (noRecipesError) {
        content = (
            <section className="text-center">
                <h2 className="text-danger">{noRecipesError}</h2>
            </section>
        );
    } else {
        content = (
            <>
                <h2>Recipes</h2>
                <div className="container my-3">
                    <div className="row g-4">
                        {recipes.map((recipe) => (
                            <div key={recipe.id} className="col-12 col-sm-6 col-lg-3">
                                <div className="card productCard h-100">
                                    <img src={recipe.image} width="200px" className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h4 className="card-title movieCard-title my-2"><strong>{recipe.name}</strong></h4>
                                        <p className="card-text productCard-text mt-3">
                                            Rating: {recipe.rating > 4.5
                                                ? <span className="text-green">{recipe.rating}</span>
                                                : <span className="text-yellow">{recipe.rating}</span>
                                            }
                                        </p>
                                    </div>
                                    <div className="card-footer bg-primary text-center">
                                        <Link to={`/recipes/${recipe.id}`} className="text-light text-decoration-none">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }

    return (
        <section className='mt-3 mb-5 py-2'>
            <div className="search-container my-5">
                <form
                    role="search"
                    onSubmit={(e) => {
                        e.preventDefault();
                        searchRecipes();
                    }}
                >
                    <input
                        id="searchInput"
                        type="text"
                        className="search-input"
                        placeholder="Search..."
                        aria-label="Search"
                    />
                    <button type="submit" className="search-button" aria-label="Submit search">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
            {content}
        </section>
    );
}

export default RecipeListWithSearch;