import React from "react";

const SearchArea = ({ handleSubmit, handleChange }) => {
  return (
    <div className="container">
      <div className="row">
        <section className="col s4 offset-s4">
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <input type="text" placeholder="Please type the title" onChange={handleChange} />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SearchArea;
