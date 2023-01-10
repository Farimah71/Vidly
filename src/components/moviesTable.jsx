import React from "react";
import Like from "./common/Like";

const MoviesTable = (props) => {
  const { tbHeadings, movies, onLike, onDelete } = props;
  return (
    <table className="table table-dark table-striped table-hover m-0">
      <thead>
        <tr>
          {tbHeadings.map((tbHeading) => (
            <th key={tbHeading}>{tbHeading}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like
                liked={movie.liked}
                onLiked={() => onLike(movie)}
                movie={movie}
              />
            </td>
            <td>
              <button
                onClick={() => onDelete(movie)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
