import React from "react";

const Movie = ({ poster_path, viewMovieInfo, id }) => {
  return (
    <div className="col s12 m6 l3">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
            <img
              src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'}
              alt="No pic available"
              style={{ width: "100%", height: 360 }}
            />
        </div>
        <div className="card-content">
          <a href="#" onClick={() => viewMovieInfo(id)}>Details</a>
        </div>
      </div>
    </div>
  );
};

export default Movie;
