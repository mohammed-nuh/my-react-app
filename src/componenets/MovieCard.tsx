import './MovieCard.css';

interface MovieInfoProps {
    title: string;
    poster: string;
    rating: number;
    overview: string;
}

function MovieInfo(props: MovieInfoProps) {
    return (
            <div className="col-12 col-sm-6 col-lg-3">
                <div className="card productCard h-100">
                    <img src={props.poster} width="200px" height="400px" className="card-img-top" alt="" />
                    <div className="card-body">
                        <h4 className="card-title movieCard-title my-2"><strong>{props.title}</strong></h4>
                        <p className="card-text productCard-text mt-3">Rating: {props.rating >= 8 ? <strong className="text-green">{props.rating}</strong> : props.rating >= 6 ? <strong className="text-yellow">{props.rating}</strong> : <strong className="text-red">{props.rating}</strong>}</p>
                        <i className="card-text productCard-text">{props.overview}</i>
                    </div>
                </div>
            </div>
    )
}

export default MovieInfo;