interface MovieInfoProps {
    name: string;
    director: string;
    year: number;
    isRecommended: boolean;
}

function MovieInfo(props: MovieInfoProps){
    return (
        <section className="m-5 ">
        <h2>Movie Info</h2>
        <div className="card p-3">
            <h3>{props.name}</h3>
            <p>This movie was directed by {props.director} in the year {props.year}</p>
            <p>This movie is {props.isRecommended ? "highly recommended" : "not recommened at all"}</p>
        </div>
        </section>
    )
}

export default MovieInfo;