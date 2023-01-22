import React, { Component } from "react";
import TableBody from "./common/tableBody";
import TableHeader from "./common/tableHeader";
import Like from "./common/Like";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "Like",
      content: (movie) => (
        <Like liked={movie.liked} onLiked={() => this.props.onLike(movie)} movie={movie} />
      ),
    },
    {
      key: "Delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <table className="table table-dark table-striped table-hover m-0">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />

        <TableBody data={movies} columns={this.columns} />
      </table>
    );
  }
}

export default MoviesTable;
