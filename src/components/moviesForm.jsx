import React from "react";
import WithRouter from "../utils/withRouter";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "./../services/fakeMovieService";

class MoviesForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    dailyRentalRate: Joi.number().required().min(0).max(10).label("Rate"),
  };

  componentDidMount() {
    //Gets genres from the server:
    const genres = [...getGenres()];
    this.setState({ genres });

    //Gets movie by ID from the server:
    const movieId = this.props.params.id;
    if (!movieId) return;

    //Invalid movie ID:
    const movie = getMovie(movieId);
    if (!movie)
      return setTimeout(() =>
        this.props.navigate("/not-found", { replace: true })
      );

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = () => {
    //call the server
    const movie = this.state.data;
    saveMovie(movie);
    this.props.navigate("/movies");
  };

  render() {
    return (
      <>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit} className="col-6">
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number in Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </>
    );
  }
}

export default WithRouter(MoviesForm);
