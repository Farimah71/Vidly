import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import Filter from "./common/filter";
import MoviesTable from "./moviesTable";
import Pagination from "./common/Pagination";
import { Paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    tbHeadings: ["Genre", "Stock", "Rate", "Like", ""],
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount = () => {
    const genres = [{ name: "All Genres" }, ...getGenres()];

    this.setState({
      movies: getMovies(),
      genres,
    });
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSelectFilter = (item) => {
    this.setState({ selectedGenre: item, currentPage: 1 });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      genres,
      selectedGenre,
      movies: allMovies,
      tbHeadings,
    } = this.state;

    if (count === 0) return <p>There is no movies in the database!</p>;

    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const movies = Paginate(filteredMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="row justify-content-start">
          <div className="col-2">
            <br />
            <br />
            <Filter
              items={genres}
              selectedFilter={this.state.selectedGenre}
              onSelectFilter={this.handleSelectFilter}
            />
          </div>
          <div className="col-8">
            <p>Showing {filteredMovies.length} movies from the database:</p>
            <div className="card" style={{ overflow: "hidden" }}>
              <MoviesTable
                tbHeadings={tbHeadings}
                movies={movies}
                onLike={this.handleLike}
                onDelete={this.handleDelete}
              />
            </div>
            <br />
            <Pagination
              itemsCount={filteredMovies.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
