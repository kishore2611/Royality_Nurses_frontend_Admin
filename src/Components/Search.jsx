import React from "react";

const Search = () => {
  return (
    <>
      <div className="input-group rounded">
        <div className="form-outline border ">
          <input id="search-input" type="search" className="form-control" />
          <label className="form-label" htmlFor="form1">
            Search
          </label>
        </div>
        <button id="search-button" type="button" className="btn btn-primary">
          <i className="fas fa-search" />
        </button>
      </div>
    </>
  );
};

export default Search;
