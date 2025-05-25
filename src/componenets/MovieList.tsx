import "./ProductList.css"
import { MovieStructure } from './MovieStructure';
import MovieCard from "./MovieCard";

function MovieList() {
  let movieList: MovieStructure[] = [
    {
      title: "KGF: Chapter 1",
      poster: "https://m.media-amazon.com/images/M/MV5BM2M0YmIxNzItOWI4My00MmQzLWE0NGYtZTM3NjllNjIwZjc5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      rating: 8.2,
      overview: "A fierce rebel rises from poverty to conquer the gold mafia in Kolar.",
    },
    {
      title: "War",
      poster: "https://m.media-amazon.com/images/S/pv-target-images/5a6414a52fa4d1a9ebff7ba6ad24a5153f859cf2362548e9db6a13e4453cae67.jpg",
      rating: 6.5,
      overview: "An Indian soldier is assigned to eliminate his former mentor who has gone rogue.",
    },
    {
      title: "Liger",
      poster: "https://m.media-amazon.com/images/I/81bFyebxrYL._AC_UF1000,1000_QL80_.jpg",
      rating: 2.9,
      overview: "Liger, a fierce MMA fighter from Mumbai, rises from the streets with dreams of international glory",
    }
    ,
    {
      title: "PK",
      poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11290399_p_v8_ad.jpg",
      rating: 8.1,
      overview: "An alien questions religious dogma on Earth in this satirical journey.",
    },
  ];


  return (
    <section className='mt-3 mb-5 py-2'>
      <h2>Movies</h2>
      <div className="container">
        <div className="row g-4">
          {
            movieList.map((movieCard) => (
              <MovieCard title={movieCard.title} poster={movieCard.poster} rating={movieCard.rating} overview={movieCard.overview} />
            ))}
        </div>

      </div>
    </section>
  );
}

export default MovieList;