import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Recipe {
    id: number;
    name: string;
    image: string;
    rating: number;
};

const RECORDS_PER_PAGE = 8;

let RecipeListPagination2 = () => {
    let [paginatedRecipes, setPaginatedRecipes] = useState<Recipe[]>([]);
    let [currentPage, setCurrentPage] = useState<number>(1);
    let [totalPages, setTotalPages] = useState<number>(0);

    let [loading, setLoading] = useState<Boolean>(true);
    let [errorOccured, setErrorOccured] = useState<string | null>(null);

    let loadPaginatedRecipes = async () => {
        try {
            let response = await fetch(`https://dummyjson.com/recipes?limit=${RECORDS_PER_PAGE}&skip=${startIndex}`);
            if (!response.ok) {
                throw new Error("Could not load data from API");
            }
            let data = await response.json();
            let recipesData: Recipe[] = data.recipes;

            let total = data.total;
            setTotalPages(Math.ceil(total / RECORDS_PER_PAGE))

            setPaginatedRecipes(recipesData);
            setLoading(false);
        } catch (error: any) {
            setErrorOccured(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadPaginatedRecipes();
    }, [currentPage])

    let startIndex = (currentPage - 1) * RECORDS_PER_PAGE;


    let pageNos = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNos.push(i);
    }

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

    return (
        <section className='mt-3 mb-5 py-2'>
            <h2>Recipes</h2>
            <div className="container my-3">
                <div className="row g-4">
                    {
                        paginatedRecipes.map((recipe) => (
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="card productCard h-100">
                                    <img src={recipe.image} width="200px" className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h4 className="card-title movieCard-title my-2"><strong>{recipe.name}</strong></h4>
                                        <p className="card-text productCard-text mt-3">Rating: {recipe.rating > 4.5 ? <span className="text-green">{recipe.rating}</span>
                                            : <span className="text-yellow">{recipe.rating}</span>}</p>
                                    </div>
                                    <div className="card-footer bg-primary text-center">
                                        <Link to={`/recipes/${recipe.id}`} className="text-light text-decoration-none">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

            </div>

            <nav className="pagination paginationBg mt-5">
                <li className="page-item"><button className={currentPage == 1 ? "page-link disabled" : "page-link"} onClick={() => currentPage > 1 ? setCurrentPage(currentPage - 1): null}>Previous</button></li>
                {pageNos.map(pageNo => (
                    <li className={currentPage == pageNo ? 'page-item active' : 'page-item'}>
                        <button className='page-link' onClick={() => {
                            setCurrentPage(pageNo);
                            window.scrollTo({ top: 0 });
                        }}>{pageNo} </button>
                    </li>
                ))}
                <li className="page-item"><button className={currentPage == totalPages ? "page-link disabled" : "page-link"} onClick={() => currentPage < totalPages ? setCurrentPage(currentPage + 1): null}>Next</button></li>
            </nav>
        </section>
    );
}

export default RecipeListPagination2;