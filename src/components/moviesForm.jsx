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
      rate: "",
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
    rate: Joi.number().required().min(0).max(10).label("Rate"),
  };

  componentDidMount() {
    const genres = [...getGenres()];
    this.setState({ genres });

    const movieId = this.props.params.id;
    //Displays an existing movie properties to edit:
    if (movieId) {
      const movie = getMovie(movieId);
      this.setState({ data: this.mapToViewModel(movie) });
    }
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      rate: movie.dailyRentalRate,
    };
  }

  doSubmit = () => {
    //call the server

    console.log("Saved");
  };

  render() {
    //get movie by id
    //if movie exists, fill inputs with
    //not exist, save new movie

    return (
      <>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit} className="col-6">
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number in Stock", "number")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Save")}
          {/* <button
          className="btn btn-primary"
          onClick={() => this.props.navigate("/movies")}
        >
          Save
        </button> */}
        </form>
      </>
    );
  }
}

export default WithRouter(MoviesForm);
