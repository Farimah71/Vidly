import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const MoviesForm = () => {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <>
      <h1>Movies form {params.id}</h1>
      <button className="btn btn-primary" onClick={() => navigate("/movies")}>
        Save
      </button>
    </>
  );
};

export default MoviesForm;
