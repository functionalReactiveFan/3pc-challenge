import { useState } from "react";
import MovieList from "./components/MovieList";
import SearchArea from "./components/SearchArea";
import MovieInfo from "./components/MovieInfo";
import "./styles.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentMovie, setCurrentMovie] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=428e47f069133d75630882889a482070&query=${searchTerm}`)
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
