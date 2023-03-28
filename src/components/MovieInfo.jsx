import React from "react";
const dayjs = require('dayjs');
const MovieInfo = ({ closeMovieInfo, poster_path, title, release_date, overview, popularity }) => {
  return (
    <div className="container">
      <div
        className="row"
        onClick={closeMovieInfo}
        style={{ curser: "pointer", paddingTop: 50 }}
      >
        <i className="fas fa-arrow-left"></i>
        <span style={{ marginLeft: 10 }}>Back</span>
      </div>
      <div className="row">
        <div className="col s12 m4">
        <img
          src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'}
          alt="No pic available"
          style={{ width: "100%", height: 360 }}
        />
        </div>
        <div className="col s12 m8">
          <div className="info-container left-align">
            <p>{title}</p>
            <p>Popularity: {popularity}</p>
            <p>{release_date && dayjs(release_date).format('DD.MM.YYYY')}</p>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
