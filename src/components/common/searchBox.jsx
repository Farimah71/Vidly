import React from "react";

const Search = () => {
  return (
    <form className="navbar-form navbar-right search-box col-6" role="search">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search..." />
        <span className="input-group-btn">
          <button type="button" className="btn btn-warning search-btn">
            <i className="fa fa-search"></i>
          </button>
        </span>
      </div>
    </form>
  );
};

export default Search;
