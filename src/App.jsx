import { useState } from "react";
import MovieList from "./components/MovieList";
import SearchArea from "./components/SearchArea";
import MovieInfo from "./components/MovieInfo";
import "./styles.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentMovie, setCurrentMovie] = useState(null);

  const apiKey = 'please type the real api key from the description of the challenge ending on 2070';

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`)
      .then(res => res.json())
      .then(({ results }) => setMovies(results && results.sort((movieA, movieB) => movieB.popularity - movieA.popularity)));
  };

  const search = e => setSearchTerm(e.target.value);

  const viewMovieInfo = id => setCurrentMovie(movies.find(movie => movie.id === id));

  const closeMovieInfo = () => setCurrentMovie(null);

  return (
    <div className="App">
      {!currentMovie ? (
        <div>
          <SearchArea handleSubmit={handleSubmit} handleChange={search} />
          <nav className="green darken-3">
            <span className="brand-logo center">Top 20 sorted movies</span>
          </nav>
          <MovieList movies={movies} viewMovieInfo={viewMovieInfo} />
        </div>
      ) : (
        <MovieInfo closeMovieInfo={closeMovieInfo} {...currentMovie} />
      )}
    </div>
  );
}
