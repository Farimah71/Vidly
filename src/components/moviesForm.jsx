import React from "react";
import WithRouter from "../utils/withRouter";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";
import { genres } from './../services/fakeGenreService';

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

  componentDidMount(){
    const genres = [...getGenres()];
    this.setState({genres});
    console.log(...this.state.genres);
  }

  doSubmit = () => {
    //call the server
    console.log("Saved");
  };

  render() {
    return (
      <>
        <h1>Movie Form </h1>
        <form onSubmit={this.handleSubmit} className="col-3"></form>
        {this.renderInput("title", "Title")}
        {this.renderSelect("genre", "Genre", [...this.state.genres])}
        {this.renderInput("numberInStock", "Number in Stock", "number")}
        {this.renderInput("rate", "Rate")}
        {this.renderButton("Save")}
        {/* <button
          className="btn btn-primary"
          onClick={() => this.props.navigate("/movies")}
        >
          Save
        </button> */}
      </>
    );
  }
}

export default WithRouter(MoviesForm);
